import dayjs from 'dayjs';
import React, { Fragment, useContext } from 'react';
import { Query } from 'react-apollo';
import { Flex } from 'rebass';
import Card from '../Card';
import CardHeading from '../CardHeading';
import CardText from '../CardText';
import Divider from '../Divider';
import Link from '../Link';
import Section from '../Section';
import { ThemeContext } from '../Theme';
import { getWorkshops } from '../../graphql';
import { css } from '../../lib/styled-components';
import { GetWorkshopsQuery } from '../../typings/__generated__/graphql';

const Workshops: React.FC = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <Section title="Workshops">
      <Query<GetWorkshopsQuery> query={getWorkshops}>
        {({ data, loading }) => {
          if (loading || !data) return null;
          // Unique years
          const years = [
            ...new Set(data.workshops.map(({ date }) => dayjs(date).year())),
          ];

          return years.map((year, index) => {
            const workshopsInYear = data.workshops.filter(
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
                {workshopsInYear.map(
                  ({
                    date,
                    event,
                    eventUrl,
                    location: { city, country },
                    title,
                  }) => (
                    <Link
                      css={css`
                        grid-column: span 2;
                      `}
                      href={eventUrl}
                      key={dayjs(date).unix()}
                      target="_blank"
                    >
                      <Card>
                        <CardHeading truncate>{title}</CardHeading>
                        <CardText>{event}</CardText>

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
                        </Flex>
                      </Card>
                    </Link>
                  ),
                )}
              </Fragment>
            );
          });
        }}
      </Query>
    </Section>
  );
};

export default Workshops;
