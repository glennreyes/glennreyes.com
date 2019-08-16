import { graphql, useStaticQuery } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import Card from '../card';
import Cards from '../cards';
import CardBody from '../card-body';
import CardLink from '../card-link';
import CardTitle from '../card-title';
import Events from '../events';
import { TalksQuery } from '../../types/generated/graphql';

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
              <Events events={events} />
            </Card>
          ),
      )}
    </Cards>
  );
};

export default Talks;
