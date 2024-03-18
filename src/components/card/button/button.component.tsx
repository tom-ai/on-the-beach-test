import { Booking } from '../../../types';

type ButtonProps = {
  booking: Booking;
};

export default function Button({ booking }: ButtonProps) {
  return (
    <button>
      Book now{' '}
      <strong>
        {new Intl.NumberFormat('en-gb', {
          style: 'currency',
          currency: 'GBP',
        }).format(booking.priceInPounds)}
      </strong>
    </button>
  );
}
