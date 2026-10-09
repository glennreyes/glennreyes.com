import { getRunningActivities } from '@/lib/activity-store';

export async function ActivitySummary() {
  const activities = await getRunningActivities();
  if (activities.length === 0) {
    return null;
  }
  return (
    <section className="grid gap-6" aria-labelledby="recent-runs">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h2 className="font-medium" id="recent-runs">
          Recently, on foot.
        </h2>
        <p className="text-muted-foreground">Running journal</p>
      </div>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {activities.map((activity) => (
          <li className="grid gap-6 rounded-md border p-6" key={activity.id}>
            <time dateTime={activity.day}>
              {new Date(activity.day + 'T12:00:00Z').toLocaleDateString(
                'en-GB',
                { day: 'numeric', month: 'long', timeZone: 'UTC' },
              )}
            </time>
            <p>
              {activity.distanceKm.toLocaleString('en-GB', {
                maximumFractionDigits: 1,
              })}{' '}
              km{' '}
              <span className="text-muted-foreground">
                {' '}
                / {Math.round(activity.durationSeconds / 60)} min
              </span>
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
