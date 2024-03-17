import { render, screen, fireEvent } from '@testing-library/react';
import Card from './card.component';
import { Booking, Hotel } from '../../types';

describe('Hotel information', () => {
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
    priceInPounds: 2499.99,
  };

  beforeEach(() => {
    render(<Card hotel={testHotel} booking={testBooking} />);
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

    //image
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

describe('Booking information', () => {
  describe('Guest details', () => {
    const testHotel: Hotel = {
      hotelName: 'Hotel Testing',
      hotelLocation: 'Costa del Test',
      starRating: 2,
      overview:
        'Welcome to the luxurious Azure Oasis Hotel, where dreams meet reality. Nestled amidst the rolling hills of nowhere, our hotel offers unparalleled tranquility and serenity. Enjoy our non-existent spa treatments and indulge in our imaginary gourmet cuisine, all while basking in the warmth of our nonexistent sunsets.',
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

  describe('Price details', () => {
    const testHotel: Hotel = {
      hotelName: 'Hotel Testing',
      hotelLocation: 'Costa del Test',
      starRating: 2,
      overview:
        'Welcome to the luxurious Azure Oasis Hotel, where dreams meet reality. Nestled amidst the rolling hills of nowhere, our hotel offers unparalleled tranquility and serenity. Enjoy our non-existent spa treatments and indulge in our imaginary gourmet cuisine, all while basking in the warmth of our nonexistent sunsets.',
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
      render(<Card hotel={testHotel} booking={testBooking} />);
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
});
