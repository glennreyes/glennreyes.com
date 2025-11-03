import { getAllEvents, mapEventsToFeed } from '@/lib/events';
import { composePlaceByLocation } from '@/lib/place';
import { getTimestamp } from '@/lib/time';

import { Divider } from '../ui/elements/divider';
import { Button } from '../ui/forms/button';
import { Card } from '../ui/layout/card';
import { List } from '../ui/layout/list';
import { H4 } from '../ui/typography/h4';

export const Appearances = async () => {
  const allEvents = await getAllEvents();
  const events = mapEventsToFeed(allEvents);
  const now = await getTimestamp();
  // Filter and sort upcoming events (future dates, ascending)
  const upcomingEvents = events
    .filter((event) => new Date(event.startDate).getTime() > now)
    .sort(
      (first, second) =>
        new Date(first.startDate).getTime() -
        new Date(second.startDate).getTime(),
    );
  // Filter and sort past events (past dates, descending - most recent first)
  const pastEvents = events
    .filter((event) => new Date(event.startDate).getTime() <= now)
    .sort(
      (first, second) =>
        new Date(second.startDate).getTime() -
        new Date(first.startDate).getTime(),
    );
  // Get the 5 closest upcoming events
  const topUpcomingEvents = upcomingEvents.slice(0, 5);
  // Determine the number of past events to include
  const numberOfPastEvents = 5 - topUpcomingEvents.length;
  // Get the closest past events if needed
  const topPastEvents = pastEvents.slice(0, numberOfPastEvents);

  return (
    <section className="grid gap-6">
      <H4 asChild>
        <h2>Appearances</h2>
      </H4>
      <Card>
        <div className="grid gap-8">
          <div className="grid gap-6">
            {topUpcomingEvents.length > 0 ? (
              <>
                <Card.Body title="Upcoming">
                  <List asChild>
                    <ol>
                      {topUpcomingEvents.map((event) => (
                        <List.Item key={event.slug}>
                          <Card.Item
                            date={event.startDate}
                            description={composePlaceByLocation(event.location)}
                            link={`/appearances/${event.slug}`}
                            title={event.name}
                          />
                        </List.Item>
                      ))}
                    </ol>
                  </List>
                </Card.Body>
                <Divider />
              </>
            ) : null}
            <Card.Body
              title={topUpcomingEvents.length > 0 ? 'Past' : undefined}
            >
              <List asChild>
                <ol>
                  {topPastEvents.map((event) => (
                    <List.Item key={event.slug}>
                      <Card.Item
                        date={event.startDate}
                        description={composePlaceByLocation(event.location)}
                        link={`/appearances/${event.slug}`}
                        title={event.name}
                      />
                    </List.Item>
                  ))}
                </ol>
              </List>
            </Card.Body>
          </div>
          <Button appearance="secondary" as="link" href="/appearances">
            All Appearances
          </Button>
        </div>
      </Card>
    </section>
  );
};
