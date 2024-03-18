import ResultsList from './components/resultsList/resultsList.component';
import SortOptions from './components/sortOptions/sortOptions.component';
import { useState } from 'react';
import { Product, SortOption } from './types';
import useProducts from './hooks/useProducts.component';

function App() {
  const [sortOption, setSortOption] = useState<SortOption>('price');

  const handleSortOptionChange = (newSortOption: SortOption) => {
    setSortOption(newSortOption);
  };

  const sortOptions: SortOption[] = ['alphabetical', 'price', 'star-rating'];

  const products: Product[] = useProducts();

  return (
    <>
      <SortOptions
        sortOption={sortOption}
        sortOptions={sortOptions}
        // sortOption={sortOption}
        handleSortOptionChange={handleSortOptionChange}
      />
      <ResultsList sortOption={sortOption} products={products} />
    </>
  );
}

export default App;
