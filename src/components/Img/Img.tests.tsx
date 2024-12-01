import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Img from './Img';

describe('Tests for Img component', () => {
  test('Img should display the image with correct src and alt', () => {
    const { getByAltText } = render(<Img src="https://via.placeholder.com/400x300" alt="Test Image" />);
    const imageElement = getByAltText('Test Image');
    expect(imageElement).toBeVisible();
    expect(imageElement).toHaveAttribute('src', 'https://via.placeholder.com/400x300');
  });

  test('Img should have correct width and height', () => {
    const { getByAltText } = render(<Img src="https://via.placeholder.com/400x300" alt="Test Image" width="400px" height="300px" />);
    const imageElement = getByAltText('Test Image');
    expect(imageElement).toHaveStyle('width: 400px');
    expect(imageElement).toHaveStyle('height: 300px');
  });

  test('Img should apply border radius when provided', () => {
    const { getByAltText } = render(<Img src="https://via.placeholder.com/400x300" alt="Test Image" borderRadius="20px" />);
    const imageElement = getByAltText('Test Image');
    expect(imageElement).toHaveStyle('border-radius: 20px');
  });
});
