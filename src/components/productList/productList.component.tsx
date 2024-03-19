import { Product, SortOption } from '../../types';
import ProductCard from '../productCard/productCard.component';

type ProductListProps = {
  sortOption?: SortOption;
  products: Product[];
};

export default function ProductList({
  sortOption = 'price',
  products,
}: ProductListProps) {
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
    <ol className="flex flex-col gap-6 col-span-2">
      {sortProducts(products, sortOption).map((product: Product, i) => (
        <li key={`hotel-${i}`}>
          <ProductCard hotel={product.hotel} booking={product.booking} />
        </li>
      ))}
    </ol>
  );
}
