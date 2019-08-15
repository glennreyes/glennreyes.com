import { graphql, useStaticQuery } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import styled from 'styled-components';
import Card from '../card';
import Cards from '../cards';
import CardBody from '../card-body';
import CardLink from '../card-link';
import CardTitle from '../card-title';
import { TalksQuery } from '../../types/generated/graphql';

const LineHeading = styled.h3`
  align-items: baseline;
  color: ${p => p.theme.colors.textSecondary};
  display: flex;
  font-size: ${p => p.theme.fontSizes[0]}px;
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: ${p => p.theme.lineHeights.heading};
  margin: ${p => p.theme.space[4]}px 0 0;
  text-transform: uppercase;
  white-space: nowrap;

  &::after {
    background: ${p => p.theme.colors.border};
    content: '';
    display: block;
    height: 4px;
    margin-left: ${p => p.theme.space[1]}px;
    width: 100%;
  }
`;

const Events = styled.ul`
  list-style: none;
  margin: ${p => p.theme.space[2]}px 0 0;
  padding: 0;
`;

const Event = styled.li`
  color: ${p => p.theme.colors.textSecondary};
  font-size: ${p => p.theme.fontSizes[1]}px;
`;

const Talks = () => {
  const data: TalksQuery = useStaticQuery(
    graphql`
      query Talks {
        talks: allTalk(sort: { fields: createdAt, order: DESC }) {
          nodes {
            body
            events {
              date(formatString: "YYYY-MM-DD")
              dateFormatted: date(formatString: "MM/DD/YY")
              id
              location {
                city
                country
              }
              startDate(formatString: "YYYY-MM-DD")
              startDateFormatted: startDate(formatString: "MM/DD/YY")
              title
            }
            id
            slug
            title
          }
        }
      }
    `,
  );

  const talks = (data.talks && data.talks.nodes) || [];

  return (
    <Cards>
      {talks.map(
        ({ body, events, id, slug, title }) =>
          slug &&
          title && (
            <Card as="article" key={id}>
              {title && (
                <CardTitle>
                  <CardLink to={slug}>{title}</CardLink>
                </CardTitle>
              )}
              {body && (
                <CardBody as="div">
                  <MDXRenderer>{body}</MDXRenderer>
                </CardBody>
              )}
              <LineHeading>Events</LineHeading>
              <Events>
                {Array.isArray(events) &&
                  events.map(event => (
                    <Event key={event.id}>
                      {(event.date || event.startDate) &&
                        (event.dateFormatted || event.startDateFormatted) && (
                          <time dateTime={event.date || event.startDate}>
                            {event.dateFormatted || event.startDateFormatted}
                          </time>
                        )}
                      {event.title && (
                        <>
                          {' · '}
                          <strong>{event.title}</strong>
                        </>
                      )}
                      {event.location &&
                        event.location.city &&
                        event.location.country &&
                        ` · ${event.location.city}, ${event.location.country}`}
                    </Event>
                  ))}
              </Events>
            </Card>
          ),
      )}
    </Cards>
  );
};

export default Talks;
