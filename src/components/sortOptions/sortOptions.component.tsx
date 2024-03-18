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
    <ul className="">
      {sortOptions.map((option: SortOption) => (
        <li className="p-3 bg-blue-900 text-white">
          <input
            className="hidden"
            onChange={(e) => {
              handleSortOptionChange(e.target.value as SortOption);
            }}
            type="radio"
            id={option}
            value={option}
            name="sort"
            defaultChecked={option === 'price'}
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
