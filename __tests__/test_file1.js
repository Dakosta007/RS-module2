import React from 'react';
import { render } from '@testing-library/react';
import MyComponent from '../MyComponent';

test('renders my component without crashing', () => {
  const { getByText } = render(<MyComponent />);
  const linkElement = getByText(/My Component/i);
  expect(linkElement).toBeInTheDocument();
});
