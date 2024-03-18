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

  return (
    <>
      <h1>Sort</h1>
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
        id="alphabetical"
        value="alphabetical"
        name="sort"
      />
      <label htmlFor="alphabetical">
        Sort <strong>alphabetically</strong>
      </label>
      <input type="radio" id={sortOption} value={sortOption} name="sort" />
      <label htmlFor={sortOption}>
        Sort by <strong>price</strong>
      </label>
      <input type="radio" id="star-rating" value="star-rating" name="sort" />
      <label htmlFor="star-rating">
        Sort by <strong>star rating</strong>
      </label>
    </>
  );
}
