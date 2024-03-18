import useProducts from '../../hooks/useProducts.component';
import { Product } from '../../types';
import Card from '../card/card.component';

export default function ResultsList() {
  const products: Product[] = useProducts();

  return products
    .sort(
      (a: Product, b: Product) =>
        a.booking.priceInPounds - b.booking.priceInPounds
    )
    .map((product: Product, i) => {
      return (
        <Card
          key={`hotel-${i}`}
          hotel={product.hotel}
          booking={product.booking}
        />
      );
    });
}
