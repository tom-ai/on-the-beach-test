import { SortOption } from '../../types';

type SortOptionsProps = {
  sortOption: SortOption;
  handleSortOptionChange: (a: SortOption) => void;
};

export default function SortOptions({
  sortOption = 'price', // why this if it's inital state is 'price'
  handleSortOptionChange,
}: SortOptionsProps) {
  // needs to return a sort state

  const sortOptions: SortOption[] = ['alphabetical', 'price', 'star-rating'];

  sortOptions.map(() => {
    return (
      <>
        <input
          onChange={(e) => {
            const value = e.target.value;
            if (
              value === 'alphabetical' ||
              value === 'price' ||
              value === 'star-rating'
            ) {
              handleSortOptionChange(value as SortOption);
            }
          }}
          type="radio"
          id={sortOption}
          value={sortOption}
          name="sort"
        />
        <label htmlFor={sortOption}>
          {sortOption === 'alphabetical' &&
            `Sort ${(<strong>alphabetically</strong>)}`}
          {sortOption === 'price' && `Sort by ${(<strong>price</strong>)}`}
          {sortOption === 'star-rating' &&
            `Sort by ${(<strong>star rating</strong>)}`}
        </label>
      </>
    );
  });
}
