import React from 'react';
import { render, screen } from '@testing-library/react';
import MyComponent from '../path/to/MyComponent';

describe('MyComponent', () => {
  it('renders the component', () => {
    render(<MyComponent />);
    expect(screen.getByTestId('my-component')).toBeInTheDocument();
  });

  it('displays the correct title', () => {
    render(<MyComponent />);
    expect(screen.getByText('My Component')).toBeInTheDocument();
  });

  it('displays the correct message', () => {
    render(<MyComponent />);
    expect(screen.getByText('Hello, World!')).toBeInTheDocument();
  });

  it('applies the correct styles', () => {
    render(<MyComponent />);
    expect(screen.getByTestId('my-component')).toHaveStyle('color: red');
  });

  it('calls the onClick function when the button is clicked', () => {
    const mockOnClick = jest.fn();
    render(<MyComponent onClick={mockOnClick} />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(mockOnClick).toHaveBeenCalled();
  });
});
