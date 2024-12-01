import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import RadioButton from './Radio_button';

describe('Tests for RadioButton component', () => {
  test('Radio button should display the label', () => {
    const { getByLabelText } = render(
      <RadioButton label="Test Radio" name="group1" value="test" />
    );
    expect(getByLabelText('Test Radio')).toBeVisible();
  });

  test('Radio button should be checked when `checked` prop is true', () => {
    const { getByLabelText } = render(
      <RadioButton label="Checked Radio" name="group1" value="checked" checked />
    );
    const radioElement = getByLabelText('Checked Radio');
    expect(radioElement).toBeChecked();
  });

  test('Radio button should call `onChange` when clicked', () => {
    const handleChange = jest.fn();
    const { getByLabelText } = render(
      <RadioButton
        label="Clickable Radio"
        name="group1"
        value="clickable"
        onChange={handleChange}
      />
    );
    const radioElement = getByLabelText('Clickable Radio');
    fireEvent.click(radioElement);
    expect(handleChange).toHaveBeenCalled();
  });
});
