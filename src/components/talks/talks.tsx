import { graphql, useStaticQuery } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import styled from 'styled-components';
import CardBody from '../card-body';
import CardLink from '../card-link';
import CardTitle from '../card-title';
import { TalksQuery } from '../../types/generated/graphql';

const Talk = styled.article`
  margin: ${p => p.theme.space[5]}px 0;
`;

const Talks = () => {
  const data: TalksQuery = useStaticQuery(
    graphql`
      query Talks {
        talks: allTalk(sort: { fields: createdAt, order: DESC }) {
          nodes {
            body
            id
            title
          }
        }
      }
    `,
  );

  const talks = (data.talks && data.talks.nodes) || [];

  return talks.map(({ body, id, title }) => (
    <Talk key={id}>
      <CardLink to="/">
        {title && <CardTitle>{title}</CardTitle>}
        {body && (
          <CardBody>
            <MDXRenderer>{body}</MDXRenderer>
          </CardBody>
        )}
      </CardLink>
    </Talk>
  ));
};

export default Talks;
