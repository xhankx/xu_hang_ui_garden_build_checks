import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Label from './Label';

describe('Tests for Label component', () => {
  test('Label should display the text', () => {
    const { getByText } = render(<Label text="Test Label" />);
    expect(getByText('Test Label')).toBeVisible();
  });

  test('Label should have correct color', () => {
    const { getByText } = render(<Label text="Colored Label" color="#ff6347" />);
    const labelElement = getByText('Colored Label');
    expect(labelElement).toHaveStyle('color: #ff6347');
  });

  test('Label should have correct font size', () => {
    const { getByText } = render(<Label text="Large Label" fontSize="2rem" />);
    const labelElement = getByText('Large Label');
    expect(labelElement).toHaveStyle('font-size: 2rem');
  });
});
