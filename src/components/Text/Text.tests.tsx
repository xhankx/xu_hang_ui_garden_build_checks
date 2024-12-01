import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Text from './Text';

describe('Tests for Text component', () => {
  test('Text should display children content', () => {
    const { getByText } = render(<Text>Test Text</Text>);
    expect(getByText('Test Text')).toBeVisible();
  });

  test('Text should have correct color', () => {
    const { getByText } = render(<Text color="#ff6347">Colored Text</Text>);
    const textElement = getByText('Colored Text');
    expect(textElement).toHaveStyle('color: #ff6347');
  });

  test('Text should have correct font size', () => {
    const { getByText } = render(<Text fontSize="2rem">Large Text</Text>);
    const textElement = getByText('Large Text');
    expect(textElement).toHaveStyle('font-size: 2rem');
  });
});
