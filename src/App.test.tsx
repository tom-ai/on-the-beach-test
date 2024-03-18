import { fireEvent, render, screen, within } from '@testing-library/react';
import App from './App';
import useProducts from './hooks/useProducts.component';
import { Product } from './types';

describe('App tests', () => {
  describe('When clicking sort alphabetically', () => {
    it('results should be sorted alphabetically ascending', () => {
      render(<App />);

      const sortedProducts = [...useProducts()].sort((a: Product, b: Product) =>
        a.hotel.hotelName.localeCompare(b.hotel.hotelName)
      );

      const alphabeticalOption = screen.getByLabelText('Sort alphabetically');

      fireEvent.click(alphabeticalOption);

      const renderedProducts = screen.getAllByRole('article');

      renderedProducts.forEach((productItem, index) => {
        const hotelName = sortedProducts[index].hotel.hotelName;
        const renderedHotelName = within(productItem).getByRole('heading', {
          level: 2,
        }).textContent;

        expect(renderedHotelName).toBe(hotelName);
      });
    });
  });

  describe('When clicking sort by price', () => {
    it('results should be sorted by price ascending', () => {
      render(<App />);

      const sortedProducts = [...useProducts()].sort(
        (a: Product, b: Product) =>
          a.booking.priceInPounds - b.booking.priceInPounds
      );

      const priceOption = screen.getByLabelText('Sort by price');

      fireEvent.click(priceOption);

      const renderedProducts = screen.getAllByRole('article');

      renderedProducts.forEach((productItem, index) => {
        const product = sortedProducts[index];
        const price = new Intl.NumberFormat('en-gb', {
          style: 'currency',
          currency: 'GBP',
        }).format(product.booking.priceInPounds);

        const renderedPrice = within(productItem)
          .getByRole('button', {
            name: /book/i,
          })
          .querySelector('strong')?.textContent;

        expect(renderedPrice).toBe(price);
      });
    });
  });

  describe('When sorting by star rating', () => {
    it('results should be sorted by star rating descending', () => {
      render(<App />);

      const sortedProducts = [...useProducts()].sort(
        (a: Product, b: Product) => a.hotel.starRating + b.hotel.starRating
      );

      const starRatingOption = screen.getByLabelText(/star rating/i);

      fireEvent.click(starRatingOption);

      const renderedProducts = screen.getAllByRole('article');

      renderedProducts.forEach((productItem, index) => {
        const starRating = sortedProducts[index].hotel.starRating;
        const renderedStarRating =
          within(productItem).getAllByTestId('star-rating');

        expect(renderedStarRating.length).toBe(starRating);
      });
    });
  });
});
