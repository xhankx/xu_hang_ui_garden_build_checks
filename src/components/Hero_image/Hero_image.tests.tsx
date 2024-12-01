import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import HeroImage from './Hero_image';

describe('Tests for HeroImage component', () => {
  test('HeroImage should display title', () => {
    const { getByText } = render(<HeroImage title="Hero Title" imageUrl="https://via.placeholder.com/1200x600" />);
    expect(getByText('Hero Title')).toBeVisible();
  });

  test('HeroImage should display correct background image', () => {
    const { getByText } = render(<HeroImage title="Hero Title" imageUrl="https://via.placeholder.com/1200x600" />);
    const heroElement = getByText('Hero Title').closest('div');
    expect(heroElement).toHaveStyle(`background-image: url(https://via.placeholder.com/1200x600)`);
  });

  test('HeroImage should have correct height', () => {
    const { getByText } = render(<HeroImage title="Hero Title" imageUrl="https://via.placeholder.com/1200x600" height="500px" />);
    const heroElement = getByText('Hero Title').closest('div');
    expect(heroElement).toHaveStyle('height: 500px');
  });
});
