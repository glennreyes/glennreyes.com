import axios from 'axios';
import util from 'util';
import { parseString } from 'xml2js';

const goodreadsKey = process.env.GOODREADS_KEY;
const goodreadsUserId = process.env.GOODREADS_USER_ID;

const fetchBooks = async ({ first = 10 } = {}) => {
  if (!goodreadsKey) return [];

  try {
    const [reviewResults, userResults] = await Promise.all([
      axios({
        method: 'get',
        url: `https://www.goodreads.com/review/list/${goodreadsUserId}.xml`,
        params: {
          key: goodreadsKey,
          per_page: first,
          sort: 'date_read',
          v: 2,
        },
      }),
      axios({
        method: 'get',
        url: `https://www.goodreads.com/user/show`,
        params: {
          format: 'xml',
          id: goodreadsUserId,
          key: goodreadsKey,
        },
      }),
    ]);

    if (reviewResults.data && userResults.data) {
      const { isArray } = Array;
      const getData: (
        xml: string,
        ...args: any
      ) => Promise<any> = util.promisify(parseString);
      const reviewsJson = await getData(reviewResults.data);
      const userJson = await getData(userResults.data);

      if (
        reviewsJson &&
        reviewsJson.GoodreadsResponse &&
        isArray(reviewsJson.GoodreadsResponse.reviews) &&
        isArray(reviewsJson.GoodreadsResponse.reviews[0].review) &&
        userJson &&
        userJson.GoodreadsResponse &&
        isArray(userJson.GoodreadsResponse.user)
      ) {
        const user = userJson.GoodreadsResponse.user[0];
        const books = reviewsJson.GoodreadsResponse.reviews[0].review.map(
          (review: any) => ({
            id: review.id[0],
            imageUrl: review.book[0].image_url[0].replace(
              /(.+\/[0-9]+)(m)(.+)/,
              '$1l$3',
            ),
            link: review.book[0].link[0],
            progress:
              user.user_statuses[0].user_status[0].book[0].id[0]._ ===
              review.book[0].id[0]._
                ? Number(user.user_statuses[0].user_status[0].percent[0]._) /
                  100
                : null,
            rating: Number(review.rating[0]),
            shelf: review.shelves[0].shelf[0].$.name,
            title: review.book[0].title[0],
            review,
            user,
          }),
        );

        return books;
      }

      return [];
    }
  } catch (error) {
    console.error(error);
  }

  return [];
};

export default fetchBooks;
