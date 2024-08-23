import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header', () => {
  render(<App />);
  const headerElement = screen.getByText(/MGH Patient Gateway/i);
  expect(headerElement).toBeInTheDocument();
});
