import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

test('checks if name is on the page', () => {
  render(<App />);
  const nameElement = screen.getByText('Yizhuo Hu');
  expect(nameElement).toBeInTheDocument();
});