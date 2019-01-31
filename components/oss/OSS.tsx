import React, { useContext } from 'react';
import { Flex } from 'rebass';
import Card from '../Card';
import CardHeading from '../CardHeading';
import CardText from '../CardText';
import Icon from '../Icon';
import Link from '../Link';
import Section from '../Section';
import { ThemeContext } from '../Theme';
import Star from '../../icons/star.svg';

type OSSProps = {
  repos: Repository[];
};

const OSS: React.FC<OSSProps> = ({ repos }) => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <Section>
      {repos.map(({ description, id, name, stars, url }) => (
        <Link href={url} key={id} target="_blank">
          <Card>
            <Flex alignItems="center" justifyContent="space-between">
              <CardHeading truncate>{name}</CardHeading>
              <CardText lineHeight={2} ml="auto">
                {stars}
              </CardText>
              <Icon as={Star} color={darkMode ? 'yellow50' : 'yellow'} ml={1} />
            </Flex>
            <CardText mt={2}>{description}</CardText>
          </Card>
        </Link>
      ))}
    </Section>
  );
};

export default OSS;
