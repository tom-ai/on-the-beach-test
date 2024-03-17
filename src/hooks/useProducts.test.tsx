import useProducts from './useProducts.component';
import { Product } from '../types';

describe('useProducts hook', () => {
  it('should return a list of product data', () => {
    const products: Product[] = useProducts();
    expect(products.length).toBeGreaterThan(0);

    products.forEach((product) => {
      expect(product).toHaveProperty('hotel');
      expect(product).toHaveProperty('booking');
    });
  });
});
