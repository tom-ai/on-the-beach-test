import { render, screen } from '@testing-library/react';
import Card from './card.component';
import { Hotel } from '../../types/hotel';
import { Booking } from '../../types/booking';

describe('Hotel information is displayed', () => {
  const testHotel: Hotel = {
    hotelName: 'Hotel Testing',
    hotelLocation: 'Costa del Test',
    starRating: 2,
    overview:
      'Welcome to the luxurious Azure Oasis Hotel, where dreams meet reality. Nestled amidst the rolling hills of nowhere, our hotel offers unparalleled tranquility and serenity. Enjoy our non-existent spa treatments and indulge in our imaginary gourmet cuisine, all while basking in the warmth of our nonexistent sunsets.',
  };

  it('should render an h2 for the hotel name', () => {
    render(<Card />);

    const hotelName = screen.getByRole('heading', {
      level: 2,
      name: testHotel.hotelName,
    });

    expect(hotelName).toBeVisible();
  });

  it('should render a paragraph below for the hotel location', () => {
    render(<Card />);

    const hotelName = screen.getByRole('heading', {
      level: 2,
      name: testHotel.hotelLocation,
    });

    const hotelLocation = hotelName.nextSibling;

    expect(hotelLocation).toHaveTextContent(/hotel location/i);
  });
});
