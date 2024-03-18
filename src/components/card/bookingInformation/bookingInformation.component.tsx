import { Booking } from '../../../types';
import ordinal from 'ordinal';

type BookingInformationProps = {
  booking: Booking;
};

export default function BookingInformation({
  booking,
}: BookingInformationProps) {
  return (
    <div className="my-4 text-xs text-gray-700">
      <p className="mb-1">
        <span id="adults">
          <strong aria-labelledby="adults">{booking.numAdults}</strong> Adult
          {booking.numAdults > 1 && 's'}
        </span>

        {booking.numChildren > 0 && (
          <span id="children">
            {', '}
            <strong aria-labelledby="children">
              {booking.numChildren}
            </strong>{' '}
            Child
            {booking.numChildren > 1 && 'ren'}
          </span>
        )}

        {booking.numInfants > 0 && (
          <span id="infants">
            {' '}
            & <strong aria-labelledby="infants">
              {booking.numInfants}
            </strong>{' '}
            Infant
            {booking.numInfants > 1 && 's'}
          </span>
        )}
      </p>
      <p className="mb-1">
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
