import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import HeroImage from './Hero_image';
import { type HeroImageProps } from './Hero_image.types';

const meta: Meta<typeof HeroImage> = {
  component: HeroImage,
  title: 'Marbella/Hero Image',
  argTypes: {},
};
export default meta;

type Story = StoryFn<typeof HeroImage>;

export const Default: Story = (args) => <HeroImage {...args} />;
Default.args = {
  title: 'Welcome to Marbella!',
  imageUrl: 'https://via.placeholder.com/1200x600',
  height: '400px',
};

export const TallHero: Story = (args) => <HeroImage {...args} />;
TallHero.args = {
  title: 'Explore the Heights',
  imageUrl: 'https://via.placeholder.com/1200x800',
  height: '600px',
};
