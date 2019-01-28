import dayjs from 'dayjs';
import React, { Fragment, useContext } from 'react';
import { Flex } from 'rebass';
import Card from '../Card';
import CardHeading from '../CardHeading';
import CardIcon from '../CardIcon';
import CardText from '../CardText';
import Divider from '../Divider';
import Icon from '../Icon';
import Link from '../Link';
import Section from '../Section';
import { ThemeContext } from '../Theme';
import { Talk } from '../../data/talks';
import File from '../../icons/file-text.svg';
import Pin from '../../icons/pin.svg';
import Video from '../../icons/video.svg';
import { css } from '../../lib/styled-components';

type TalksProps = {
  talks: Talk[];
};

const OSS: React.FC<TalksProps> = ({ talks }) => {
  const { darkMode } = useContext(ThemeContext);
  // Unique years
  const years = [...new Set(talks.map(({ date }) => dayjs(date).year()))];

  return (
    <Section title="Talks">
      {years.map((year, index) => {
        const talksInYear = talks.filter(
          ({ date }) => dayjs(date).year() === year,
        );

        return (
          <Fragment key={year}>
            <Divider
              css={css`
                grid-column: 1 / span 2;
              `}
              mb={-1}
              mt={index === 0 ? 0 : 2}
            >
              {year}
            </Divider>
            {talksInYear.map(
              ({
                date,
                event,
                eventUrl,
                location: { city, country },
                slidesUrl,
                title,
                venue,
                videoUrl,
              }) => (
                <Card key={dayjs(date).unix()}>
                  <CardHeading>
                    <Link
                      color="currentColor"
                      href={videoUrl || slidesUrl || eventUrl}
                      target="_blank"
                    >
                      {title}
                    </Link>
                  </CardHeading>
                  <Flex>
                    <CardText>
                      <Link
                        color={darkMode ? 'gray50' : 'darkGray'}
                        href={eventUrl}
                        target="_blank"
                      >
                        {event}
                      </Link>
                    </CardText>

                    <CardIcon
                      icon={Pin}
                      link={`https://google.com/maps/search/${encodeURIComponent(
                        `${venue}, ${city}, ${country}`,
                      )}`}
                    />
                  </Flex>
                  <Flex
                    alignItems="center"
                    justifyContent="space-between"
                    mt="auto"
                    pt={3}
                  >
                    <CardText color={darkMode ? 'gray25' : 'gray'}>
                      {dayjs(date).format('MMM DD')}
                      {' • '}
                      {city}, {country}
                    </CardText>
                    <Flex>
                      {slidesUrl && <CardIcon icon={File} link={slidesUrl} />}
                      {videoUrl && <CardIcon icon={Video} link={videoUrl} />}
                    </Flex>
                  </Flex>
                </Card>
              ),
            )}
          </Fragment>
        );
      })}
    </Section>
  );
};

export default OSS;
