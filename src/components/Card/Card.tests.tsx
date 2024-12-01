import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from './Card';

describe('Tests for Card component', () => {
  test('Card should display title and content', () => {
    const { getByText } = render(<Card title="Test Title" content="Test Content" />);
    expect(getByText('Test Title')).toBeVisible();
    expect(getByText('Test Content')).toBeVisible();
  });

  test('Card should display image when imageUrl is provided', () => {
    const { getByAltText } = render(<Card title="Test Title" content="Test Content" imageUrl="https://via.placeholder.com/400x200" />);
    const imageElement = getByAltText('Test Title');
    expect(imageElement).toBeVisible();
    expect(imageElement).toHaveAttribute('src', 'https://via.placeholder.com/400x200');
  });

  test('Card should not display image when imageUrl is not provided', () => {
    const { queryByAltText } = render(<Card title="Test Title" content="Test Content" />);
    expect(queryByAltText('Test Title')).toBeNull();
  });

  test('Card should have correct background color', () => {
    const { getByText } = render(<Card title="Test Title" content="Test Content" backgroundColor="#add8e6" />);
    const cardElement = getByText('Test Title').closest('div');
    expect(cardElement).toHaveStyle('background-color: #add8e6');
  });
});
