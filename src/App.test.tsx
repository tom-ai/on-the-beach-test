import { render } from '@testing-library/react';
import App from './App';

it('initial', () => {
  render(<App />);

  expect(true).toBeTruthy();
});
