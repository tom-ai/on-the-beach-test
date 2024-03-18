import { Booking } from '../../../types';

type ButtonProps = {
  booking: Booking;
};

export default function Button({ booking }: ButtonProps) {
  return (
    <button className="bg-yellow-400 py-3 px-8 text-blue-900 flex flex-col items-center min-w-64">
      <span className="text-xs font-bold">Book now</span>
      <strong className="text-xl">
        {new Intl.NumberFormat('en-gb', {
          style: 'currency',
          currency: 'GBP',
        }).format(booking.priceInPounds)}
      </strong>
    </button>
  );
}
