import { render, screen } from '@testing-library/react';
import { Hotel, Booking } from '../../../types';
import Card from '../card.component';

describe('Booking information', () => {
  describe('Guest details', () => {
    const testHotel: Hotel = {
      hotelName: 'Hotel Testing',
      hotelLocation: 'Costa del Test',
      starRating: 2,
      overview:
        'Welcome to the luxurious Azure Oasis Hotel, where dreams meet reality. Nestled amidst the rolling hills of nowhere, our hotel offers unparalleled tranquility and serenity. Enjoy our non-existent spa treatments and indulge in our imaginary gourmet cuisine, all while basking in the warmth of our nonexistent sunsets.',
      imageAltText: 'Costa del Test hotel',
    };

    const booking: Booking = {
      numAdults: 2,
      numChildren: 2,
      numInfants: 2,
      date: new Date(2019, 6, 3),
      durationInDays: 7,
      departingFrom: 'Test Station',
      priceInPounds: 2499.99,
    };

    // Help from: https://medium.com/p/60ea41843961
    it('should display single adult', () => {
      const bookingWithSingleAdult: Booking = {
        ...booking,
        numAdults: 1,
      };
      render(<Card hotel={testHotel} booking={bookingWithSingleAdult} />);

      expect(screen.getByLabelText(/Adult/)).toHaveTextContent('1');
    });

    it('should display multiple adults', () => {
      const bookingWithMultipleAdults: Booking = {
        ...booking,
        numAdults: 4,
      };

      render(<Card hotel={testHotel} booking={bookingWithMultipleAdults} />);

      expect(screen.getByLabelText(/Adults/)).toHaveTextContent('4');
    });

    it('should display single child', () => {
      const bookingWithSingleChild: Booking = {
        ...booking,
        numChildren: 1,
      };

      render(<Card hotel={testHotel} booking={bookingWithSingleChild} />);

      expect(screen.getByLabelText(/Child/)).toHaveTextContent('1');
    });

    it('should display multiple children', () => {
      const bookingWithMultipleChildren: Booking = {
        ...booking,
        numChildren: 3,
      };

      render(<Card hotel={testHotel} booking={bookingWithMultipleChildren} />);

      expect(screen.getByLabelText(/Children/)).toHaveTextContent('3');
    });

    it('should display single infant', () => {
      const bookingWithSingleInfant: Booking = {
        ...booking,
        numInfants: 1,
      };

      render(<Card hotel={testHotel} booking={bookingWithSingleInfant} />);

      expect(screen.getByLabelText(/Infant/)).toHaveTextContent('1');
    });

    it('should display multiple infants', () => {
      const bookingWithMultipleInfants: Booking = {
        ...booking,
        numInfants: 3,
      };

      render(<Card hotel={testHotel} booking={bookingWithMultipleInfants} />);

      expect(screen.getByLabelText(/Infants/)).toHaveTextContent('3');
    });

    it('should not display zero children', () => {
      const bookingWithZeroChildren: Booking = {
        ...booking,
        numChildren: 0,
      };

      render(<Card hotel={testHotel} booking={bookingWithZeroChildren} />);

      expect(screen.queryByLabelText(/Child/)).not.toBeInTheDocument();
      expect(screen.queryByLabelText(/Children/)).not.toBeInTheDocument();
    });

    it('should not display zero infants', () => {
      const bookingWithZeroInfants: Booking = {
        ...booking,
        numInfants: 0,
      };

      render(<Card hotel={testHotel} booking={bookingWithZeroInfants} />);

      expect(screen.queryByLabelText(/Infant/)).not.toBeInTheDocument();
      expect(screen.queryByLabelText(/Infants/)).not.toBeInTheDocument();
    });
  });
  describe('Duration details', () => {
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

    it('should display a date formatted with ordinals', () => {
      render(<Card hotel={testHotel} booking={testBooking} />);

      expect(screen.getByTestId('formatted-date')).toHaveTextContent(
        '3rd July 2019'
      );
    });

    it('should display multiple day duration', () => {
      render(<Card hotel={testHotel} booking={testBooking} />);

      expect(screen.getByTestId('formatted-duration').textContent).toBe(
        '2 days'
      );
    });

    it('should display single day duration', () => {
      const bookingWithSingleDayDuration: Booking = {
        ...testBooking,
        durationInDays: 1,
      };

      render(<Card hotel={testHotel} booking={bookingWithSingleDayDuration} />);

      expect(screen.getByTestId('formatted-duration').textContent).toBe(
        '1 day'
      );
    });
  });
  describe('Departing details', () => {
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

    it('should display departing from location', () => {
      render(<Card hotel={testHotel} booking={testBooking} />);

      expect(screen.getByLabelText(/departing from/)).toHaveTextContent(
        'Test Station'
      );
    });
  });

  
});
