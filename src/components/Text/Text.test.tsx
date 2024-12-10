import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Text from './Text';

describe('Test for the Text Component', () => {
  test('renders the text correctly and is visible', () => {
    const { getByText } = render(
      <Text text="Test Text" backgroundColor="#ffffff" disabled={false} />,
    );
    const textElement = getByText('Test Text');
    expect(textElement).toBeVisible();
  });

  test('changes background color when disabled', () => {
    const { getByText } = render(
      <Text text="Test Text" backgroundColor="#ffffff" disabled={true} />,
    );
    const textElement = getByText('Test Text');
    expect(textElement).toHaveStyle('background-color: #cccccc');
  });
});
