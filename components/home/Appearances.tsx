import { getTime } from 'date-fns';
import { Divider } from '../ui/elements/Divider';
import { Button } from '../ui/forms/Button';
import { Card } from '../ui/layout/Card';
import { List } from '../ui/layout/List';
import { H4 } from '../ui/typography/H4';
import { composePlaceByLocation } from '@/lib/place';
import { getAllEvents } from '@/lib/events';

export async function Appearances() {
  const allEvents = await getAllEvents();
  const today = new Date();
  const todayInMilliseconds = getTime(today);
  // Calculate the difference between each date and today's date
  const dateDistances = allEvents.map((appearance) => Math.abs(getTime(appearance.startDate) - todayInMilliseconds));
  // Sort the events by their date distance to today's date and get the 5 closest ones
  const events = allEvents
    .slice()
    .sort((a, b) => {
      const aDistance = dateDistances[allEvents.indexOf(a)];
      const bDistance = dateDistances[allEvents.indexOf(b)];

      if (aDistance === undefined || bDistance === undefined) {
        return 0;
      }

      return aDistance - bDistance;
    })
    .slice(0, 5);
  const upcoming = events.filter((event) => event.startDate > today);
  const past = events.filter((event) => event.startDate <= today);

  return (
    <section className="grid gap-6">
      <H4 as="h2">Appearances</H4>
      <Card>
        <div className="grid gap-8">
          <div className="grid gap-6">
            <Card.Body title="Upcoming">
              <List as="ol">
                {upcoming.map((event) => (
                  <List.Item key={event.slug}>
                    <Card.Item
                      date={event.startDate}
                      description={composePlaceByLocation(event.location)}
                      link={`/appearances/${event.slug}`}
                      title={event.name}
                    />
                  </List.Item>
                ))}
              </List>
            </Card.Body>
            <Divider />
            <Card.Body title="Past">
              <List as="ol">
                {past.map((event) => (
                  <List.Item key={event.slug}>
                    <Card.Item
                      date={event.startDate}
                      description={composePlaceByLocation(event.location)}
                      link={`/appearances/${event.slug}`}
                      title={event.name}
                    />
                  </List.Item>
                ))}
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
