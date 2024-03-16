import { render, screen } from '@testing-library/react';
import Card from './card.component';
import { Booking, Hotel } from '../../types';

describe('Hotel information is displayed', () => {
  const testHotel: Hotel = {
    hotelName: 'Hotel Testing',
    hotelLocation: 'Costa del Test',
    starRating: 2,
    overview:
      'Welcome to the luxurious Azure Oasis Hotel, where dreams meet reality. Nestled amidst the rolling hills of nowhere, our hotel offers unparalleled tranquility and serenity. Enjoy our non-existent spa treatments and indulge in our imaginary gourmet cuisine, all while basking in the warmth of our nonexistent sunsets.',
  };

  const testBooking: Booking = {
    numAdults: 2,
    numChildren: 2,
    numInfants: 1,
    date: new Date(2019, 6, 3),
    durationInDays: 7,
    departingFrom: 'Test Station',
    priceInPence: 250099,
  };
  beforeEach(() => {
    render(<Card hotel={testHotel} booking={testBooking} />);
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

  it('should render the overview', () => {
    const overview = screen.getByText(testHotel.overview);

    expect(overview).toBeVisible();
  });
});

describe('Booking information', () => {
  beforeEach(() => {
    const testHotel: Hotel = {
      hotelName: 'Hotel Testing',
      hotelLocation: 'Costa del Test',
      starRating: 2,
      overview:
        'Welcome to the luxurious Azure Oasis Hotel, where dreams meet reality. Nestled amidst the rolling hills of nowhere, our hotel offers unparalleled tranquility and serenity. Enjoy our non-existent spa treatments and indulge in our imaginary gourmet cuisine, all while basking in the warmth of our nonexistent sunsets.',
    };

    const testBooking: Booking = {
      numAdults: 2,
      numChildren: 1,
      numInfants: 1,
      date: new Date(2019, 6, 3),
      durationInDays: 7,
      departingFrom: 'Test Station',
      priceInPence: 250099,
    };

    render(<Card hotel={testHotel} booking={testBooking} />);
  });

  it('should display number of adults', () => {
    const numOfAdults = screen.getByText((content) => content.startsWith('2'));

    expect(numOfAdults).toBeVisible();
    expect(screen.getByText(/adults/i));
  });

  it('should display number of children', () => {
    const numOfChildren = screen.getByText((content) =>
      content.startsWith('1')
    );

    expect(numOfChildren).toBeVisible();
    expect(screen.getByText(/children/i));
  });
});
