import useProducts from '../../hooks/useProducts.component';
import { Product, SortOption } from '../../types';
import Card from '../card/card.component';

type ResultsListProps = {
  sortOption: SortOption;
};

export default function ResultsList({
  sortOption = 'price',
}: ResultsListProps) {
  const products: Product[] = useProducts();

  const sortedProducts =
    sortOption === 'price'
      ? products.sort(
          (a: Product, b: Product) =>
            a.booking.priceInPounds - b.booking.priceInPounds
        )
      : products.sort((a: Product, b: Product) =>
          a.hotel.hotelName.localeCompare(b.hotel.hotelName)
        );

  return sortedProducts.map((product: Product, i) => {
    return (
      <Card
        key={`hotel-${i}`}
        hotel={product.hotel}
        booking={product.booking}
      />
    );
  });
}
