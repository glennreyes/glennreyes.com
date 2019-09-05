import axios from 'axios';
import util from 'util';
import { parseString } from 'xml2js';
import { camelCase, mapKeys, snakeCase } from 'lodash/fp';
import mapKeysDeep from 'map-keys-deep/fp';

const snakeCaseKeys = obj => mapKeys(snakeCase, obj);

const parseXml = ({ data }) =>
  util
    .promisify(parseString)(data, {
      async: true,
      explicitArray: false,
      explicitRoot: false,
      ignoreAttrs: true,
      normalize: true,
      trim: true,
    })
    .then(mapKeysDeep(camelCase));

export const fetchBooks = async ({ first = 200 } = {}) => {
  const goodreadsKey = process.env.GOODREADS_KEY || '';
  const goodreadsUserId = process.env.GOODREADS_USER_ID || '';

  try {
    const { data: reviewsData } = await axios({
      params: snakeCaseKeys({
        id: goodreadsUserId,
        key: goodreadsKey,
        perPage: first,
        sort: 'date_read',
        v: 2,
      }),
      url: 'https://www.goodreads.com/review/list',
    });

    const {
      reviews: { review: reviews },
    } = await parseXml({
      data: reviewsData,
    });

    return reviews.map(review => ({
      author: review.book.authors.author.name,
      averageRating: review.book.averageRating,
      id: review.book.id,
      // Get a higher quality image. In this case an image with a maximum of
      // 640px height.
      imageUrl: review.book.imageUrl.replace(
        /^(.*_)S(Y|X).*(_.*)$/,
        '$1SY640$3',
      ),
      link: review.book.link,
      readAt: review.readAt,
      startedAt: review.startedAt,
      title: review.book.title,
    }));
  } catch (error) {
    console.error(error);
    throw error;
  }
};
