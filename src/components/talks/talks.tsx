import { graphql, useStaticQuery } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import styled from 'styled-components';
import Cards from '../cards';
import CardBody from '../card-body';
import CardLink from '../card-link';
import CardTitle from '../card-title';
import { TalksQuery } from '../../types/generated/graphql';

const Talk = styled.article`
  display: flex;
  margin: ${p => p.theme.space[2]}px 0;
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
          slug && (
            <Talk key={id}>
              <CardLink to={slug}>
                {title && <CardTitle>{title}</CardTitle>}
                {body && (
                  <CardBody>
                    <MDXRenderer>{body}</MDXRenderer>
                  </CardBody>
                )}
              </CardLink>
            </Talk>
          ),
      )}
    </Cards>
  );
};

export default Talks;
