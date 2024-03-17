import { Hotel, Booking } from '../../types';
import ordinal from 'ordinal';

type CardProps = {
  hotel: Hotel;
  booking: Booking;
};

export default function Card({ hotel, booking }: CardProps) {
  return (
    <>
      <h2>{hotel.hotelName}</h2>
      <p>{hotel.hotelLocation}</p>
      <ul>
        {[...Array(hotel.starRating)].map((_star, i) => (
          <li key={i}>
            <svg
              data-testid="star-rating"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
            </svg>
          </li>
        ))}
      </ul>
      <p id="adults">
        <strong aria-labelledby="adults">{booking.numAdults}</strong>Adult
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

      <time data-testid="formatted-date" dateTime={booking.date.toISOString()}>
        {ordinal(booking.date.getDay())}{' '}
        {booking.date.toLocaleDateString('en-gb', {
          year: 'numeric',
          month: 'long',
        })}
      </time>
      <time data-testid="formatted-duration">
        {booking.durationInDays} day{booking.durationInDays > 1 && 's'}
      </time>

      <p>days</p>
      <h3>Overview</h3>
      <p>{hotel.overview}</p>
    </>
  );
}
