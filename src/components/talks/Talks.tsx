import dayjs from 'dayjs';
import React, { Fragment, useContext } from 'react';
import { Query } from 'react-apollo';
import { Flex } from 'rebass';
import Card from '../Card';
import CardHeading from '../CardHeading';
import CardIcon from '../CardIcon';
import CardText from '../CardText';
import Divider from '../Divider';
import Icon from '../Icon';
import Link from '../Link';
import Section from '../Section';
import Text from '../Text';
import { ThemeContext } from '../Theme';
import getTalks from '../../graphql/getTalks.graphql';
import { ReactComponent as ChevronLeft } from '../../icons/chevron-left.svg';
import { ReactComponent as File } from '../../icons/file-text.svg';
import { ReactComponent as Pin } from '../../icons/pin.svg';
import { ReactComponent as Flash } from '../../icons/flash.svg';
import { ReactComponent as Video } from '../../icons/video.svg';
import { css } from '../../lib/styled-components';
import { GetTalksQuery } from '../../typings/__generated__/graphql';

const OSS: React.FC = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <Query<GetTalksQuery> query={getTalks}>
      {({ data, loading }) => {
        if (loading || !data) return null;
        // Unique years
        const years = [
          ...new Set(data.talks.map(({ date }) => dayjs(date).year())),
        ];

        return (
          <>
            <Section>
              {years.map((year, index) => {
                const talksInYear = data.talks.filter(
                  ({ date }) => dayjs(date).year() === year,
                );

                return (
                  <Fragment key={year}>
                    <Divider
                      css={css`
                        grid-column: span 2;
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
                        isLightningTalk,
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
                              css={css`
                                align-items: center;
                                display: flex;
                                text-decoration: none;
                              `}
                              href={videoUrl || slidesUrl || eventUrl}
                              target="_blank"
                            >
                              {isLightningTalk && (
                                <Icon
                                  as={Flash}
                                  color={darkMode ? 'yellow50' : 'yellow'}
                                  mr={1}
                                />
                              )}
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
                              {slidesUrl && (
                                <CardIcon icon={File} link={slidesUrl} />
                              )}
                              {videoUrl && (
                                <CardIcon icon={Video} link={videoUrl} />
                              )}
                            </Flex>
                          </Flex>
                        </Card>
                      ),
                    )}
                  </Fragment>
                );
              })}
            </Section>
            <Text
              css={css`
                display: flex;
                justify-content: flex-end;
              `}
              mt={5}
            >
              <Link
                color={darkMode ? 'gray50' : 'darkGray'}
                css={css<{ darkMode?: boolean }>`
                  align-items: center;
                `}
                darkMode={darkMode}
                href="/"
              >
                <Icon as={ChevronLeft} color="currentColor" />
                Back to home
              </Link>
            </Text>
          </>
        );
      }}
    </Query>
  );
};

export default OSS;
