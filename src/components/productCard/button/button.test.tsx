import { render, screen } from '@testing-library/react';
import { Hotel, Booking } from '../../../types';
import ProductCard from '../productCard.component';

describe('Price details', () => {
  const testHotel: Hotel = {
    hotelName: 'Hotel Testing',
    hotelLocation: 'Costa del Test',
    starRating: 2,
    overview:
      'Welcome to the luxurious Azure Oasis Hotel, where dreams meet reality. Nestled amidst the rolling hills of nowhere, our hotel offers unparalleled tranquility and serenity. Enjoy our non-existent spa treatments and indulge in our imaginary gourmet cuisine, all while basking in the warmth of our nonexistent sunsets.',
    imageAltText: 'Costa del Test hotel',
  };

  const testBooking: Booking = {
    numAdults: 2,
    numChildren: 0,
    numInfants: 0,
    date: new Date(2019, 6, 3),
    durationInDays: 2,
    departingFrom: 'Test Station',
    priceInPounds: 2499.99,
  };

  beforeEach(() => {
    render(<ProductCard hotel={testHotel} booking={testBooking} />);
  });
  it('should render a Book now button', () => {
    const button = screen.getByRole('button', { name: /Book now/i });
    expect(button).toBeVisible();
  });

  it('should render a formatted price below book now', () => {
    const button = screen.getByRole('button', { name: /Book now/ });
    expect(button.querySelector('strong')).toHaveTextContent('£2,499.99');
  });
});
