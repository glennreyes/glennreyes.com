import dayjs from 'dayjs';
import { orderBy } from 'lodash';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: ${p => p.theme.space[4]}px 0 0;
`;

const LineHeading = styled.h3`
  align-items: baseline;
  color: ${p => p.theme.colors.textSecondary};
  display: flex;
  font-size: ${p => p.theme.fontSizes[0]}px;
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: ${p => p.theme.lineHeights.heading};
  margin: ${p => p.theme.space[3]}px 0 0;
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

const List = styled.ul`
  list-style: none;
  margin: ${p => p.theme.space[1]}px 0 0;
  padding: 0;
`;

const Event = styled.li`
  color: ${p => p.theme.colors.textSecondary};
  display: flex;
  font-size: ${p => p.theme.fontSizes[1]}px;
  line-height: ${p => p.theme.lineHeights.body};
`;

const Time = styled.time`
  display: inline-block;
  flex: 0 0 auto;
  width: 80px;
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

const CardEvents = ({ events }: EventsProps) => {
  const upcomingEvents = Array.isArray(events)
    ? orderBy(
        events.filter(event =>
          dayjs(event.date || event.startDate).isAfter(dayjs()),
        ),
        [({ date, startDate }) => dayjs(date).unix() || dayjs(startDate)],
      )
    : [];
  const pastEvents = Array.isArray(events)
    ? orderBy(
        events.filter(event =>
          dayjs(event.date || event.startDate).isBefore(dayjs()),
        ),
        [
          ({ date, startDate }) =>
            dayjs(date).unix() || dayjs(startDate).unix(),
        ],
        ['desc'],
      )
    : [];

  return (
    <Wrapper>
      {upcomingEvents.length > 0 && (
        <>
          <LineHeading>Upcoming Events</LineHeading>
          <List>
            {upcomingEvents.map(event => (
              <Event key={event.id}>
                {(event.date || event.startDate) &&
                  (event.dateFormatted || event.startDateFormatted) && (
                    <Time dateTime={event.date || event.startDate}>
                      {event.dateFormatted || event.startDateFormatted}
                    </Time>
                  )}
                {(event.title || event.location) && (
                  <span>
                    {event.title && <strong>{event.title}</strong>}
                    {event.location &&
                      event.location.city &&
                      event.location.country &&
                      ` · ${event.location.city}, ${event.location.country}`}
                  </span>
                )}
              </Event>
            ))}
          </List>
        </>
      )}
      {pastEvents.length > 0 && (
        <>
          <LineHeading>Past Events</LineHeading>
          <List>
            {pastEvents.map(event => (
              <Event key={event.id}>
                {(event.date || event.startDate) &&
                  (event.dateFormatted || event.startDateFormatted) && (
                    <Time dateTime={event.date || event.startDate}>
                      {event.dateFormatted || event.startDateFormatted}
                    </Time>
                  )}
                {(event.title || event.location) && (
                  <span>
                    {event.title && <strong>{event.title}</strong>}
                    {event.location &&
                      event.location.city &&
                      event.location.country &&
                      ` · ${event.location.city}, ${event.location.country}`}
                  </span>
                )}
              </Event>
            ))}
          </List>
        </>
      )}
    </Wrapper>
  );
};

export default CardEvents;
