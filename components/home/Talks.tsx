import dayjs from 'dayjs';
import React from 'react';
import Card from '../Card';
import CardHeading from '../CardHeading';
import CardText from '../CardText';
import Divider from '../Divider';
import Section from '../Section';
import { Talk } from '../../data/talks';
import { css } from '../../lib/styled-components';

type TalksProps = {
  talks: Talk[];
};

const OSS: React.FC<TalksProps> = ({ talks }) => {
  // Unique years
  const years = [...new Set(talks.map(({ date }) => dayjs(date).year()))];

  return (
    <Section title="Talks">
      {years.map(year => {
        const talksInYear = talks.filter(
          ({ date }) => dayjs(date).year() === year,
        );

        return (
          <>
            <Divider
              css={css`
                grid-column: 1 / span 2;
              `}
              mb={-1}
              mt={2}
            >
              {year}
            </Divider>
            {talksInYear.map(talk => (
              <Card>
                <CardHeading>{talk.title}</CardHeading>
                <CardText>{talk.organizer}</CardText>
              </Card>
            ))}
          </>
        );
      })}
    </Section>
  );
};

export default OSS;
