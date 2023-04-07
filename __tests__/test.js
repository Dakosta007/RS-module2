
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MyComponent from '../MyComponent';

describe('MyComponent', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<MyComponent />);
    expect(getByTestId('my-component')).toBeInTheDocument();
  });

  it('contains the correct text', () => {
    const { getByText } = render(<MyComponent />);
    expect(getByText('Hello, World!')).toBeInTheDocument();
  });

  it('displays an error message when there is an error', () => {
    const { getByTestId, getByText } = render(<MyComponent hasError={true} />);
    expect(getByTestId('error-message')).toBeInTheDocument();
    expect(getByText('Something went wrong. Please try again.')).toBeInTheDocument();
  });

  it('calls the correct function when a button is clicked', () => {
    const mockOnClick = jest.fn();
    const { getByTestId } = render(<MyComponent onClick={mockOnClick} />);
    fireEvent.click(getByTestId('my-button'));
    expect(mockOnClick).toHaveBeenCalled();
  });

  it('updates the state correctly when a form is submitted', () => {
    const { getByTestId } = render(<MyComponent />);
    const input = getByTestId('my-input');
    const submitButton = getByTestId('my-submit-button');

    fireEvent.change(input, { target: { value: 'New Value' } });
    fireEvent.click(submitButton);

    expect(getByTestId('my-input')).toHaveValue('New Value');
  });
});
