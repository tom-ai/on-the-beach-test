import { Product, SortOption } from '../../types';
import Card from '../card/card.component';

type ResultsListProps = {
  sortOption?: SortOption;
  products: Product[];
};

export default function ResultsList({
  sortOption = 'price',
  products,
}: ResultsListProps) {
  function sortProducts(
    products: Product[],
    sortOption: SortOption
  ): Product[] {
    if (sortOption === 'alphabetical') {
      return products.sort((a: Product, b: Product) =>
        a.hotel.hotelName.localeCompare(b.hotel.hotelName)
      );
    } else if (sortOption === 'price') {
      return products.sort(
        (a: Product, b: Product) =>
          a.booking.priceInPounds - b.booking.priceInPounds
      );
    } else sortOption === 'star-rating';
    return products.sort(
      (a: Product, b: Product) => a.hotel.starRating + b.hotel.starRating
    );
  }

  return (
    <section className="flex flex-col gap-6">
      {sortProducts(products, sortOption).map((product: Product, i) => (
        <Card
          key={`hotel-${i}`}
          hotel={product.hotel}
          booking={product.booking}
        />
      ))}
    </section>
  );
}
