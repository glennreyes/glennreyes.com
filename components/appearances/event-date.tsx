import { isSameDay } from 'date-fns';
import { DateDisplay } from '../ui/elements/date-display';

interface EventDateProps {
  endDate: Date;
  startDate: Date;
}

export function EventDate({ endDate, startDate }: EventDateProps) {
  const isOneDay = isSameDay(startDate, endDate);

  return (
    <>
      <DateDisplay
        format={isOneDay ? 'MMMM dd, yyyy' : undefined}
        value={startDate}
      />
      {!isOneDay && (
        <>
          {' '}
          - <DateDisplay format="MMMM dd, yyyy" value={endDate} />
        </>
      )}
    </>
  );
}
