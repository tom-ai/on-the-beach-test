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
              <div className="flex justify-between items-center">
                <span>
                  sort <strong> alphabetically</strong>
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  width="16px"
                  height="16px"
                  className={`inline-block  ${
                    option === sortOption ? 'fill-white' : 'fill-gray-400'
                  }`}
                >
                  <path d="M183.6 469.6C177.5 476.2 169 480 160 480s-17.5-3.8-23.6-10.4l-88-96c-11.9-13-11.1-33.3 2-45.2s33.3-11.1 45.2 2L128 365.7V64c0-17.7 14.3-32 32-32s32 14.3 32 32V365.7l32.4-35.4c11.9-13 32.2-13.9 45.2-2s13.9 32.2 2 45.2l-88 96zM320 320c0-17.7 14.3-32 32-32H480c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9L429.3 416H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H352c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9L402.7 352H352c-17.7 0-32-14.3-32-32zM416 32c12.1 0 23.2 6.8 28.6 17.7l64 128 16 32c7.9 15.8 1.5 35-14.3 42.9s-35 1.5-42.9-14.3L460.2 224H371.8l-7.2 14.3c-7.9 15.8-27.1 22.2-42.9 14.3s-22.2-27.1-14.3-42.9l16-32 64-128C392.8 38.8 403.9 32 416 32zM395.8 176h40.4L416 135.6 395.8 176z" />
                </svg>
              </div>
            )}
            {option === 'price' && (
              <div className="flex justify-between items-center">
                <span>
                  sort by <strong>price</strong>
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  width="16px"
                  height="16px"
                  className={`inline-block  ${
                    option === sortOption ? 'fill-white' : 'fill-gray-400'
                  }`}
                >
                  <path d="M112 160.4c0-35.5 28.8-64.4 64.4-64.4c6.9 0 13.8 1.1 20.4 3.3l81.2 27.1c16.8 5.6 34.9-3.5 40.5-20.2s-3.5-34.9-20.2-40.5L217 38.6c-13.1-4.4-26.8-6.6-40.6-6.6C105.5 32 48 89.5 48 160.4V224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H48v44.5c0 17.4-4.7 34.5-13.7 49.4L4.6 431.5c-5.9 9.9-6.1 22.2-.4 32.2S20.5 480 32 480H288c17.7 0 32-14.3 32-32s-14.3-32-32-32H88.5l.7-1.1C104.1 390 112 361.5 112 332.5V288H224c17.7 0 32-14.3 32-32s-14.3-32-32-32H112V160.4z" />
                </svg>
              </div>
            )}
            {option === 'star-rating' && (
              <div className="flex justify-between items-center">
                <span>
                  sort by <strong>star rating</strong>
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  width="16px"
                  height="16px"
                  className={`inline-block  ${
                    option === sortOption ? 'fill-white' : 'fill-gray-400'
                  }`}
                >
                  <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                </svg>
              </div>
            )}
          </label>
        </li>
      ))}
    </ul>
  );
}
