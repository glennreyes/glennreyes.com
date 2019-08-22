import dayjs from 'dayjs';
import { orderBy } from 'lodash';
import React from 'react';
import Event from '../components/event';
import { H2 } from '../components/mdx/headings';

type EventsProps = {
  events: Event[];
};

const Events = ({ events }: EventsProps) => {
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
    <>
      {upcomingEvents.length > 0 && (
        <>
          <H2>Upcoming Events</H2>
          {upcomingEvents.map(event => (
            <Event event={event} key={event.id} />
          ))}
        </>
      )}
      {pastEvents.length > 0 && (
        <>
          <H2>Past Events</H2>
          {pastEvents.map(event => (
            <Event event={event} key={event.id} />
          ))}
        </>
      )}
    </>
  );
};

export default Events;
