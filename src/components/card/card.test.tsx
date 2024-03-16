import { render, screen } from '@testing-library/react';
import Card from './card.component';
import { Hotel } from '../../types';

describe('Hotel information is displayed', () => {
  const testHotel: Hotel = {
    hotelName: 'Hotel Testing',
    hotelLocation: 'Costa del Test',
    starRating: 2,
    overview:
      'Welcome to the luxurious Azure Oasis Hotel, where dreams meet reality. Nestled amidst the rolling hills of nowhere, our hotel offers unparalleled tranquility and serenity. Enjoy our non-existent spa treatments and indulge in our imaginary gourmet cuisine, all while basking in the warmth of our nonexistent sunsets.',
  };

  beforeEach(() => {
    render(<Card hotel={testHotel} />);
  });

  it('should render an h2 for the hotel name', () => {
    const hotelName = screen.getByRole('heading', {
      level: 2,
      name: testHotel.hotelName,
    });

    expect(hotelName).toBeVisible();
  });

  it('should render the hotel location next to the name', () => {
    const hotelName = screen.getByRole('heading', {
      level: 2,
      name: testHotel.hotelName,
    });

    const hotelLocation = hotelName.nextSibling;

    expect(hotelLocation).toHaveTextContent(testHotel.hotelLocation);
  });

  it('should render a number of star icons corresponding to the rating', () => {
    const stars = screen.getAllByTestId('star-rating');

    expect(stars).toHaveLength(2);
  });

  it('should render an h3 overview heading', () => {
    const overviewHeading = screen.getByRole('heading', {
      level: 3,
      name: /overview/i,
    });

    expect(overviewHeading).toBeVisible();
  });
});
