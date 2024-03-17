export default function SortOptions() {
  return (
    <>
      <h1>Sort</h1>
      <input type="radio" id="alphabetical" value="alphabetical" name="sort" />
      <label htmlFor="alphabetical">
        Sort <strong>alphabetically</strong>
      </label>
      <input type="radio" id="price" value="price" name="sort" />
      <label htmlFor="price">
        Sort by <strong>price</strong>
      </label>
      <input type="radio" id="star-rating" value="star-rating" name="sort" />
      <label htmlFor="star-rating">
        Sort by <strong>star rating</strong>
      </label>
    </>
  );
}
