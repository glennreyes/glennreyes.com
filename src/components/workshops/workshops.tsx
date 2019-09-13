import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Card from '../card';
import Cards from '../cards';
import CardBody from '../card-body';
import CardEvents from '../card-events';
import CardLink from '../card-link';
import CardTitle from '../card-title';
import Paragraph from '../mdx/paragraph';
import { WorkshopsQuery } from '../../types/generated/graphql';

const Workshops = () => {
  const data: WorkshopsQuery = useStaticQuery(
    graphql`
      query Workshops {
        workshops: allWorkshop(sort: { fields: createdAt, order: DESC }) {
          nodes {
            body
            description
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

  return (
    <Cards>
      {data.workshops.nodes.map(
        ({ description, events, id, slug, title }) =>
          slug &&
          title && (
            <Card as="article" key={id}>
              {title && (
                <CardTitle>
                  <CardLink to={slug}>{title}</CardLink>
                </CardTitle>
              )}
              {description && (
                <CardBody as="div">
                  <Paragraph>{description}</Paragraph>
                </CardBody>
              )}
              <CardEvents events={events} />
            </Card>
          ),
      )}
    </Cards>
  );
};

export default Workshops;
