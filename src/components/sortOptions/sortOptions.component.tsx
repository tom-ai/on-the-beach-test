import { SortOption } from '../../types';

type SortOptionsProps = {
  sortOption: SortOption;
  sortOptions: SortOption[];
  handleSortOptionChange: (a: SortOption) => void;
};

export default function SortOptions({
  sortOption,
  sortOptions,
  handleSortOptionChange,
}: SortOptionsProps) {
  return (
    <ul className="">
      {sortOptions.map((option: SortOption) => (
        <li key={option}>
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
          <label
            htmlFor={option}
            className={`p-4 ${
              option === sortOption
                ? 'bg-blue-900  text-white'
                : 'bg-white text-blue-900'
            } block`}
          >
            {option === 'alphabetical' && (
              <span>
                sort <strong> alphabetically</strong>
              </span>
            )}
            {option === 'price' && (
              <span>
                sort by <strong>price</strong>
              </span>
            )}
            {option === 'star-rating' && (
              <span>
                sort by <strong>star rating</strong>
              </span>
            )}
          </label>
        </li>
      ))}
    </ul>
  );
}
