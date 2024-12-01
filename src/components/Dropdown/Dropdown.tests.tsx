import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Dropdown from './Dropdown';

describe('Tests for Dropdown component', () => {
  test('Dropdown should display all options', () => {
    const options = [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ];
    const { getByText } = render(<Dropdown options={options} />);
    expect(getByText('Option 1')).toBeVisible();
    expect(getByText('Option 2')).toBeVisible();
    expect(getByText('Option 3')).toBeVisible();
  });

  test('Dropdown should be disabled when `disabled` prop is true', () => {
    const options = [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
    ];
    const { getByRole } = render(<Dropdown options={options} disabled />);
    const selectElement = getByRole('combobox');
    expect(selectElement).toBeDisabled();
  });

  test('Dropdown should call `onChange` when an option is selected', () => {
    const options = [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
    ];
    const handleChange = jest.fn();
    const { getByRole } = render(<Dropdown options={options} onChange={handleChange} />);
    const selectElement = getByRole('combobox');
    fireEvent.change(selectElement, { target: { value: 'option2' } });
    expect(handleChange).toHaveBeenCalled();
  });
});
