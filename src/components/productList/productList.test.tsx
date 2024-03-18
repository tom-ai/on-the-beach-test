import { render, screen, within } from '@testing-library/react';
import ProductList from './productList.component';
import useProducts from '../../hooks/useProducts.component';
import { Product } from '../../types';

describe('ProductList', () => {
  const testProducts = [...useProducts()];

  it('should sort the products by price by default', () => {
    render(<ProductList products={testProducts} />);

    const sortedProducts = [...useProducts()].sort(
      (a: Product, b: Product) =>
        a.booking.priceInPounds - b.booking.priceInPounds
    );

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

  it('should render accessible product cards', () => {
    render(<ProductList products={testProducts} />);

    const products = screen.getAllByRole('article');

    expect(products.length).toBeGreaterThan(0);
  });
});
