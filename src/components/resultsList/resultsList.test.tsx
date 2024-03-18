import { render, screen, within } from '@testing-library/react';
import ResultsList from './resultsList.component';
import useProducts from '../../hooks/useProducts.component';
import { Product } from '../../types';

it('should render accessible product cards', () => {
  render(<ResultsList />);
  const products = screen.getAllByRole('article');
  expect(products.length).toBeGreaterThan(0);
});

it('should by default sort the products by price', () => {
  render(<ResultsList />);

  const sortedProducts = [...useProducts()].sort(
    (a: Product, b: Product) =>
      a.booking.priceInPounds - b.booking.priceInPounds
  );

  const renderedProducts = screen.getAllByRole('article');

  // iterate through each rendered product
  // assert that the text matches the sorted test products
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
