import { Booking } from '../../../types';
import ordinal from 'ordinal';

type BookingInformationProps = {
  booking: Booking;
};

export default function BookingInformation({
  booking,
}: BookingInformationProps) {
  return (
    <div>
      <p id="adults">
        <strong aria-labelledby="adults">{booking.numAdults}</strong> Adult
        {booking.numAdults > 1 && 's'}
      </p>
      {booking.numChildren > 0 && (
        <p id="children">
          <strong aria-labelledby="children">{booking.numChildren}</strong>{' '}
          Child
          {booking.numChildren > 1 && 'ren'}
        </p>
      )}
      {booking.numInfants > 0 && (
        <p id="infants">
          <strong aria-labelledby="infants">{booking.numInfants}</strong> Infant
          {booking.numInfants > 1 && 's'}
        </p>
      )}
      <p>
        <time
          data-testid="formatted-date"
          dateTime={booking.date.toISOString()}
        >
          <strong>
            {ordinal(booking.date.getDay())}{' '}
            {booking.date.toLocaleDateString('en-gb', {
              year: 'numeric',
              month: 'long',
            })}
          </strong>
        </time>{' '}
        for{' '}
        <time data-testid="formatted-duration">
          <strong>
            {booking.durationInDays} day{booking.durationInDays > 1 && 's'}
          </strong>
        </time>
      </p>
      <p id="departing-from">
        departing from{' '}
        <strong aria-labelledby="departing-from">
          {booking.departingFrom}
        </strong>
      </p>
    </div>
  );
}
