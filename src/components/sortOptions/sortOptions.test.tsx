import { render, screen } from '@testing-library/react';
import SortOptions from './sortOptions.component';
import { SortOption } from '../../types';

describe('Sort Options', () => {
  beforeEach(() => {
    const sortOptions: SortOption[] = ['alphabetical', 'price', 'star-rating'];

    render(
      <SortOptions
        sortOption={sortOptions[0]}
        sortOptions={sortOptions}
        handleSortOptionChange={vitest.fn()}
      />
    );
  });

  it('should render an option for sorting alphabetically', () => {
    const alphabeticalOption = screen.getByLabelText(/sort alphabetically/i);
    expect(alphabeticalOption).toBeVisible();
  });

  it('should render an option for sorting by price', () => {
    const priceOption = screen.getByLabelText(/sort by price/i);
    expect(priceOption).toBeVisible();
  });

  it('should render an option for sorting by star rating', () => {
    const priceOption = screen.getByLabelText(/sort by star rating/i);
    expect(priceOption).toBeVisible();
  });
});
