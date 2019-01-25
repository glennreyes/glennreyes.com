import React, { useContext } from 'react';
import { Flex } from 'rebass';
import Card from '../Card';
import Heading from '../Heading';
import Icon from '../Icon';
import Link from '../Link';
import Section from '../Section';
import Text from '../Text';
import { ThemeContext } from '../Theme';
import Star from '../../icons/star.svg';

interface OSSProps {
  repos: Repository[];
}

const OSS: React.FC<OSSProps> = ({ repos }) => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <Section title="OSS">
      {repos.map(({ description, id, name, stars, url }) => (
        <Link href={url} key={id} target="_blank">
          <Card>
            <Flex alignItems="center" justifyContent="space-between">
              <Heading
                color={darkMode ? 'lightGray' : 'blue'}
                as="h3"
                fontSize={1}
              >
                {name}
              </Heading>
              <Text fontWeight="bold" ml="auto">
                {stars}
              </Text>
              <Icon as={Star} color="yellow" ml={1} />
            </Flex>
            <Text mt={2}>{description}</Text>
          </Card>
        </Link>
      ))}
    </Section>
  );
};

export default OSS;
