import { SortOption } from '../../types';

type SortOptionsProps = {
  sortOptions: SortOption[];
  sortOption: SortOption;
  handleSortOptionChange: (a: SortOption) => void;
};

export default function SortOptions({
  sortOptions,
  handleSortOptionChange,
}: SortOptionsProps) {
  return (
    <ul>
      {sortOptions.map((option: SortOption) => (
        <li>
          <input
            onChange={(e) => {
              handleSortOptionChange(e.target.value as SortOption);
            }}
            type="radio"
            id={option}
            value={option}
            name="sort"
          />
          <label htmlFor={option}>
            {option === 'alphabetical' && 'Sort alphabetically'}
            {option === 'price' && `Sort by price`}
            {option === 'star-rating' && `Sort by star rating`}
          </label>
        </li>
      ))}
    </ul>
  );
}
