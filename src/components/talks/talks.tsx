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
  font-size: ${p => p.theme.fontSizes[1]}px;
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: ${p => p.theme.lineHeights.heading};
  text-transform: uppercase;

  &::after {
    background: ${p => p.theme.colors.border};
    content: '';
    display: block;
    height: 4px;
    margin-left: ${p => p.theme.space[1]}px;
    width: 100%;
  }
`;

const Talks = () => {
  const data: TalksQuery = useStaticQuery(
    graphql`
      query Talks {
        talks: allTalk(sort: { fields: createdAt, order: DESC }) {
          nodes {
            body
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
        ({ body, id, slug, title }) =>
          slug &&
          title && (
            <Card as="article" key={id}>
              {title && (
                <CardTitle>
                  <CardLink to={slug}>{title}</CardLink>
                </CardTitle>
              )}
              {body && (
                <CardBody>
                  <MDXRenderer>{body}</MDXRenderer>
                </CardBody>
              )}
              <LineHeading>Events</LineHeading>
            </Card>
          ),
      )}
    </Cards>
  );
};

export default Talks;
