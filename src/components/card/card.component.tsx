import { Hotel } from '../../types/hotel';

type CardProps = {
  hotel: Hotel;
};

export default function Card({ hotel }: CardProps) {
  return (
    <>
      <h2>{hotel.hotelName}</h2>
      <p>{hotel.hotelLocation}</p>
    </>
  );
}
