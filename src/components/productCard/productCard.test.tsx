import { render, screen, fireEvent } from '@testing-library/react';
import ProductCard from './productCard.component';
import { Booking, Hotel } from '../../types';

describe('Hotel information', () => {
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
    numChildren: 2,
    numInfants: 1,
    date: new Date(2019, 6, 3),
    durationInDays: 7,
    departingFrom: 'Test Station',
    priceInPounds: 2499.99,
  };

  beforeEach(() => {
    render(<ProductCard hotel={testHotel} booking={testBooking} />);
  });

  describe('Hotel details', () => {
    it('should display hotel name with H2', () => {
      const hotelName = screen.getByRole('heading', {
        level: 2,
        name: testHotel.hotelName,
      });

      expect(hotelName).toBeVisible();
    });

    it('should display hotel location next to the name', () => {
      const hotelName = screen.getByRole('heading', {
        level: 2,
        name: testHotel.hotelName,
      });

      const hotelLocation = hotelName.nextSibling;

      expect(hotelLocation).toHaveTextContent(testHotel.hotelLocation);
    });

    it('should display a number of star icons corresponding to the rating', () => {
      const stars = screen.getAllByTestId('star-rating');

      expect(stars).toHaveLength(2);
    });

    it('should display and image and alt text', () => {
      expect(screen.getByAltText(testHotel.imageAltText));
    });
  });

  describe('Overview details', () => {
    it('should by default hide the overview information', () => {
      const overviewHeading = screen.queryByRole('heading', {
        name: /overview/i,
      });
      expect(overviewHeading).not.toBeInTheDocument();
    });

    it('should by default display a read more button', () => {
      const overviewDisplayButton = screen.getByRole('button', {
        name: /read more/i,
      });

      expect(overviewDisplayButton).toBeVisible();
    });

    describe('When toggling', () => {
      it('should show and hide the overview information', () => {
        const readMoreButton = screen.getByRole('button', {
          name: /read more/i,
        });

        fireEvent.click(readMoreButton);
        const overviewHeading = screen.getByRole('heading', {
          level: 3,
          name: /overview/i,
        });

        expect(overviewHeading).toBeVisible();
        expect(screen.getByText(testHotel.overview)).toBeVisible();

        const readLessButton = screen.getByRole('button', {
          name: /read less/i,
        });

        fireEvent.click(readLessButton);

        expect(
          screen.queryByRole('heading', { level: 3, name: /overview/i })
        ).not.toBeInTheDocument();

        expect(screen.getByText(testHotel.overview)).not.toBeVisible();
      });
    });
  });
});
