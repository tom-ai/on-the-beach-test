import { fireEvent, render, screen, within } from '@testing-library/react';
import App from './App';
import useProducts from './hooks/useProducts.component';
import { Product } from './types';

it('initial', () => {
  render(<App />);

  expect(true).toBeTruthy();
});

describe('App tests', () => {
  describe('When sorting alphabetically', () => {
    it('should sort results alphabetically ', () => {
      render(<App />);

      const sortedProducts = [...useProducts()].sort((a: Product, b: Product) =>
        a.hotel.hotelName.localeCompare(b.hotel.hotelName)
      );

      const renderedProducts = screen.getAllByRole('article');

      //assert that the data is not sorted alphaetcially before clicking
      renderedProducts.forEach((productItem, index) => {
        const hotelName = sortedProducts[index].hotel.hotelName;
        const renderedHotelName = within(productItem).getByRole('heading', {
          level: 2,
        }).textContent;

        expect(renderedHotelName).not.toBe(hotelName);
      });

      const alphabeticalOption = screen.getByLabelText('Sort alphabetically');

      fireEvent.click(alphabeticalOption);

      const renderedProductsAfter = screen.getAllByRole('article');

      //assert that the data is sorted alphaetcially after clicking
      renderedProductsAfter.forEach((productItem, index) => {
        const hotelName = sortedProducts[index].hotel.hotelName;
        const renderedHotelName = within(productItem).getByRole('heading', {
          level: 2,
        }).textContent;

        expect(renderedHotelName).toBe(hotelName);
      });
    });

    // option is highlighted
  });
});
