import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app without crashing', () => {
  render(<App />);
  // Check for a key element in the app, like the main heading
  const headingElement = screen.getByText(/Natural Fibre Rugs & Carpets/i);
  expect(headingElement).toBeInTheDocument();
});
