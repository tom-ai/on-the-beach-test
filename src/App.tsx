import ResultsList from './components/resultsList/resultsList.component';
import SortOptions from './components/sortOptions/sortOptions.component';
import { useState } from 'react';
import { SortOption } from './types';

function App() {
  const [sortOption, setSortOption] = useState<SortOption>('price');

  const handleSortOptionChange = (newSortOption: SortOption) => {
    setSortOption(newSortOption);
  };

  return (
    <>
      <SortOptions
        sortOption={sortOption}
        handleSortOptionChange={handleSortOptionChange}
      />
      <ResultsList sortOption={sortOption} />
    </>
  );
}

export default App;
