import { render, screen } from '@testing-library/react';
import Card from './Card.component';

it('should render an h2 for hotel name', () => {
  render(<Card />);

  const hotelName = screen.getByRole('heading', {
    level: 2,
    name: /hotel name/i,
  });

  expect(hotelName).toBeVisible();
});

it('should render a paragraph below for the hotel location', () => {
  render(<Card />);

  const hotelName = screen.getByRole('heading', {
    level: 2,
    name: /hotel name/i,
  });

  const hotelLocation = hotelName.nextSibling;

  expect(hotelLocation).toHaveTextContent(/hotel location/i);
});
