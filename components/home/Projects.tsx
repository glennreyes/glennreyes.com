import React from 'react';
import Card from '../Card';
import CardHeading from '../CardHeading';
import CardText from '../CardText';
import Link from '../Link';
import Section from '../Section';
import { Project } from '../../data/projects';

interface ProjectsProps {
  projects: Project[];
}

const OSS: React.FC<ProjectsProps> = ({ projects }) => (
  <Section title="Projects">
    {projects.map(({ description, imageUrl, title, url }) => {
      const name = title || url.replace('https://', '');
      return (
        <Link href={url} key={url} target="_blank">
          <Card image={{ src: imageUrl, alt: name }}>
            <CardHeading>{name}</CardHeading>
            <CardText mt={2}>{description}</CardText>
          </Card>
        </Link>
      );
    })}
  </Section>
);

export default OSS;
