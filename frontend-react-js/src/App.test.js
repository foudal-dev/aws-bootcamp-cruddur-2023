import { render, screen } from '@***REMOVED***ing-library/react';
import App from './App';

***REMOVED***('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
