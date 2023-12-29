import { getTime } from 'date-fns';
import { Divider } from '../ui/elements/divider2';
import { Button } from '../ui/forms/button2';
import { Card } from '../ui/layout/card2';
import { List } from '../ui/layout/list2';
import { H4 } from '../ui/typography/h42';
import { composePlaceByLocation } from '@/lib/place';
import { getAllEvents } from '@/lib/events';

export async function Appearances() {
  const allEvents = await getAllEvents();
  const today = new Date();
  const todayInMilliseconds = getTime(today);
  // Calculate the difference between each date and today's date
  const dateDistances = allEvents.map((event) =>
    Math.abs(new Date(event.startDate).getTime() - todayInMilliseconds),
  );
  // Sort the events by their date distance to today's date
  const sortedEvents = [...allEvents].sort((a, b) => {
    const aDistance = dateDistances[allEvents.indexOf(a)];
    const bDistance = dateDistances[allEvents.indexOf(b)];

    if (aDistance === undefined || bDistance === undefined) {
      return 0;
    }

    return aDistance - bDistance;
  });
  // Filter upcoming and past events separately
  const upcomingEventsSorted = sortedEvents.filter(
    (event) => new Date(event.startDate) > today,
  );
  const pastEventsSorted = sortedEvents.filter(
    (event) => new Date(event.startDate) <= today,
  );
  // Get the 5 closest upcoming events
  const topUpcomingEvents = upcomingEventsSorted.slice(0, 5);
  // Determine the number of past events to include
  const numberOfPastEvents = 5 - topUpcomingEvents.length;
  // Get the closest past events if needed
  const topPastEvents = pastEventsSorted.slice(0, numberOfPastEvents);

  return (
    <section className="grid gap-6">
      <H4 asChild>
        <h2>Appearances</h2>
      </H4>
      <Card>
        <div className="grid gap-8">
          <div className="grid gap-6">
            {topUpcomingEvents.length > 0 && (
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
            )}
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
}
