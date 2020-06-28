import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('AppContext name is visible', async () => {
  const { findByText } = render(<App />);
  const linkElement = await findByText(/reactGiphy/i);
  expect(linkElement).toBeInTheDocument();
});
