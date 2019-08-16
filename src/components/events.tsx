import dayjs from 'dayjs';
import React from 'react';
import styled from 'styled-components';

const LineHeading = styled.h3`
  align-items: baseline;
  color: ${p => p.theme.colors.textSecondary};
  display: flex;
  font-size: ${p => p.theme.fontSizes[0]}px;
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: ${p => p.theme.lineHeights.heading};
  margin: ${p => p.theme.space[4]}px 0 0;
  text-transform: uppercase;
  white-space: nowrap;

  &::after {
    background: ${p => p.theme.colors.border};
    content: '';
    display: block;
    height: 4px;
    margin-left: ${p => p.theme.space[1]}px;
    width: 100%;
  }
`;

const Wrapper = styled.ul`
  list-style: none;
  margin: ${p => p.theme.space[2]}px 0 0;
  padding: 0;
`;

const Event = styled.li`
  color: ${p => p.theme.colors.textSecondary};
  font-size: ${p => p.theme.fontSizes[1]}px;
  line-height: ${p => p.theme.lineHeights.body};
`;

type EventsProps = {
  events?: {
    date?: string;
    dateFormatted?: string;
    id: string;
    location?: {
      city?: string;
      country: string;
    };
    startDate?: string;
    startDateFormatted?: string;
    title?: string;
  }[];
};

const Events = ({ events }: EventsProps) => {
  const upcomingEvents = Array.isArray(events)
    ? events.filter(event =>
        dayjs(event.date || event.startDate).isAfter(dayjs()),
      )
    : [];
  const pastEvents = Array.isArray(events)
    ? events.filter(event =>
        dayjs(event.date || event.startDate).isBefore(dayjs()),
      )
    : [];

  return (
    <>
      {upcomingEvents.length > 0 && (
        <>
          <LineHeading>Upcoming Events</LineHeading>
          <Wrapper>
            {upcomingEvents.map(event => (
              <Event key={event.id}>
                {(event.date || event.startDate) &&
                  (event.dateFormatted || event.startDateFormatted) && (
                    <time dateTime={event.date || event.startDate}>
                      {event.dateFormatted || event.startDateFormatted}
                    </time>
                  )}
                {event.title && (
                  <>
                    {' · '}
                    <strong>{event.title}</strong>
                  </>
                )}
                {event.location &&
                  event.location.city &&
                  event.location.country &&
                  ` · ${event.location.city}, ${event.location.country}`}
              </Event>
            ))}
          </Wrapper>
        </>
      )}
      {pastEvents.length > 0 && (
        <>
          <LineHeading>Past Events</LineHeading>
          <Wrapper>
            {pastEvents.map(event => (
              <Event key={event.id}>
                {(event.date || event.startDate) &&
                  (event.dateFormatted || event.startDateFormatted) && (
                    <time dateTime={event.date || event.startDate}>
                      {event.dateFormatted || event.startDateFormatted}
                    </time>
                  )}
                {event.title && (
                  <>
                    {' · '}
                    <strong>{event.title}</strong>
                  </>
                )}
                {event.location &&
                  event.location.city &&
                  event.location.country &&
                  ` · ${event.location.city}, ${event.location.country}`}
              </Event>
            ))}
          </Wrapper>
        </>
      )}
    </>
  );
};

export default Events;
