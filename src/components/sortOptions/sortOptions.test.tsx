import { render, screen } from '@testing-library/react';
import SortOptions from './sortOptions.component';

describe('Sort Options', () => {
  beforeEach(() => {
    render(<SortOptions />);
  });
  it('should render an option for sorting alphabetically', () => {
    const alphabeticalOption = screen.getByLabelText('Sort alphabetically');
    expect(alphabeticalOption).toBeVisible();
  });

  it('should render an option for sorting by price', () => {
    const priceOption = screen.getByLabelText('Sort by price');
    expect(priceOption).toBeVisible();
  });

  it('should render an option for sorting by star rating', () => {
    const priceOption = screen.getByLabelText('Sort by star rating');
    expect(priceOption).toBeVisible();
  });
});
