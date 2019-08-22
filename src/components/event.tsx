import dayjs from 'dayjs';
import React from 'react';
import styled from 'styled-components';
import Link from '../components/link';
import { ReactComponent as CalendarSvg } from '../icons/calendar.svg';
import { ReactComponent as Film } from '../icons/film.svg';
import { ReactComponent as FlashSvg } from '../icons/flash.svg';
import { ReactComponent as GlobeSvg } from '../icons/globe.svg';
import { ReactComponent as PinSvg } from '../icons/pin.svg';
import { ReactComponent as Play } from '../icons/play.svg';
import { Maybe } from '../types/generated/graphql';
import { shortenUrl } from '../utils';

const Card = styled.div`
  background: ${p => p.theme.colors.invertedCardBg};
  border-radius: ${p => p.theme.radii[2]}px;
  margin: ${p => p.theme.space[2]}px 0;
  overflow: hidden;
  padding: ${p => p.theme.space[2]}px;

  ${p => p.theme.media.tablet`
    padding: ${p.theme.space[3]}px;
  `}
`;

const Title = styled.h3`
  font-size: ${p => p.theme.fontSizes[4]}px;
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: ${p => p.theme.lineHeights.heading};
  margin: 0;
`;

const EventLink = styled(Link)`
  align-items: center;
  color: ${p => p.theme.colors.invertedText};
  display: inline-flex;
`;

const TextBlock = styled.p`
  align-items: center;
  color: ${p => p.theme.colors.invertedTextSecondary};
  display: flex;
  font-size: ${p => p.theme.fontSizes[1]}px;
  line-height: ${p => p.theme.lineHeights.body};
  margin: 0;
`;

const Footer = styled.div`
  align-items: flex-end;
  display: flex;
  justify-content: space-between;
  overflow: auto;
  margin-top: ${p => p.theme.space[4]}px;
`;

const Date = styled.p`
  align-items: center;
  color: ${p => p.theme.colors.invertedTextSecondary};
  display: inline-flex;
  flex: 0 1 auto;
  font-size: ${p => p.theme.fontSizes[1]}px;
  line-height: ${p => p.theme.lineHeights.body};
  margin: 0 auto 0 0;
`;

const IconWithTextLink = styled(Link)`
  align-items: center;
  color: ${p => p.theme.colors.invertedTextSecondary};
  display: flex;
  width: 100%;

  &:hover {
    color: ${p => p.theme.colors.invertedText};
  }
`;

const Globe = styled(GlobeSvg)`
  flex: 0 0 auto;
  margin-right: ${p => p.theme.space[0]}px;
`;

const Pin = styled(PinSvg)`
  flex: 0 0 auto;
  margin-right: ${p => p.theme.space[0]}px;
`;

const Calendar = styled(CalendarSvg)`
  flex: 0 0 auto;
  margin-right: ${p => p.theme.space[0]}px;
`;

const Flash = styled(FlashSvg)`
  color: ${p => p.theme.colors.invertedTextSecondary};
  margin-left: ${p => p.theme.space[0]}px;
`;

const Media = styled.div`
  display: grid;
  flex: 0 0 auto;
  gap: ${p => p.theme.space[2]}px;
  grid-template-columns: repeat(2, ${p => p.theme.space[5]}px);
  justify-content: end;
  margin-left: ${p => p.theme.space[1]}px;
`;

const IconLink = styled(Link)`
  align-items: center;
  background: ${p => p.theme.colors.bg};
  border-radius: 50%;
  color: ${p => p.theme.colors.invertedCardBg};
  display: flex;
  height: ${p => p.theme.space[5]}px;
  justify-content: center;
  width: ${p => p.theme.space[5]}px;

  &:hover {
    color: ${p => p.theme.colors.textSecondary};
  }
`;

const IconWrapper = styled.div`
  align-items: center;
  background: ${p => p.theme.colors.bg};
  border-radius: 50%;
  color: ${p => p.theme.colors.invertedCardBg};
  display: flex;
  height: ${p => p.theme.space[5]}px;
  justify-content: center;
  opacity: 0.1;
  width: ${p => p.theme.space[5]}px;
`;

const Text = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

type Event = {
  date: string;
  dateFormatted?: Maybe<string>;
  endDate: string;
  endDateFormatted: string;
  id: string;
  isLightning?: Maybe<boolean>;
  location: {
    address?: Maybe<string>;
    city: string;
    country: string;
    name?: Maybe<string>;
    zip?: Maybe<string>;
  };
  slidesUrl?: Maybe<string>;
  startDate: string;
  startDateFormatted: string;
  title: string;
  url?: Maybe<string>;
  videoUrl?: Maybe<string>;
};

type EventProps = {
  event: Event;
};

const Event = ({ event: { location, ...event } }: EventProps) => {
  const startDate = dayjs(event.startDate);
  const endDate = dayjs(event.endDate);
  const date = startDate.isSame(endDate, 'day') ? (
    <time dateTime={event.date}>{event.dateFormatted}</time>
  ) : (
    <>
      <time dateTime={event.startDate}>{event.startDateFormatted}</time>
      {Math.abs(startDate.diff(endDate, 'day')) === 1 ? '/' : '-'}
      <time dateTime={event.endDate}>{event.endDateFormatted}</time>
    </>
  );

  const query = [
    location.name,
    location.address,
    location.zip,
    location.city,
    location.country,
  ]
    .filter(Boolean)
    .join(', ');

  return (
    <Card key={event.id}>
      {event.url ? (
        <Title>
          <EventLink target="_blank" to={event.url}>
            {event.title} {event.isLightning && <Flash />}
          </EventLink>
        </Title>
      ) : (
        <Title>{event.title}</Title>
      )}
      <TextBlock>
        {location.name || location.address ? (
          <IconWithTextLink
            target="_blank"
            title="Venue location on Google Maps"
            to={`https://maps.google.com?q=${encodeURI(query)}`}
          >
            <Pin />
            <Text>
              {location.city}, {location.country}
            </Text>
          </IconWithTextLink>
        ) : (
          <>
            {location.city}, {location.country}
          </>
        )}
      </TextBlock>
      {event.url && (
        <TextBlock>
          <IconWithTextLink target="_blank" title={event.title} to={event.url}>
            <Globe />
            <Text>{shortenUrl(event.url)}</Text>
          </IconWithTextLink>
        </TextBlock>
      )}
      <Footer>
        <Date>
          <Calendar />
          <Text>{date}</Text>
        </Date>
        {dayjs(event.date || event.startDate).isBefore(dayjs()) && (
          <Media>
            {event.slidesUrl ? (
              <IconLink target="_blank" title="Slides" to={event.slidesUrl}>
                <Film />
              </IconLink>
            ) : (
              <IconWrapper>
                <Film />
              </IconWrapper>
            )}
            {event.videoUrl ? (
              <IconLink target="_blank" title="Video" to={event.videoUrl}>
                <Play />
              </IconLink>
            ) : (
              <IconWrapper>
                <Play />
              </IconWrapper>
            )}
          </Media>
        )}
      </Footer>
    </Card>
  );
};

export default Event;
