import React from 'react';
import { Query } from 'react-apollo';
import Card from '../Card';
import CardHeading from '../CardHeading';
import CardText from '../CardText';
import Link from '../Link';
import Section from '../Section';
import getProjects from '../../graphql/getProjects.graphql';
import { GetProjectsQuery } from '../../typings/__generated__/graphql';

const Projects: React.FC = () => (
  <Section title="Projects">
    <Query<GetProjectsQuery> query={getProjects}>
      {({ data, loading }) => {
        if (loading || !data) return null;

        return data.projects.map(({ description, imageUrl, title, url }) => {
          const name = title || url.replace('https://', '');
          return (
            <Link href={url} key={url} target="_blank">
              <Card image={{ src: imageUrl, alt: name }}>
                <CardHeading>{name}</CardHeading>
                <CardText mt={2}>{description}</CardText>
              </Card>
            </Link>
          );
        });
      }}
    </Query>
  </Section>
);

export default Projects;
