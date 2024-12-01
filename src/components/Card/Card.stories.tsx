import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Card from './Card';
import { type CardProps } from './Card.types';

const meta: Meta<typeof Card> = {
  component: Card,
  title: 'Marbella/Card',
  argTypes: {},
};
export default meta;

type Story = StoryFn<typeof Card>;

export const Default: Story = (args) => <Card {...args} />;
Default.args = {
  title: 'Sample Card',
  content: 'This is a sample card content to demonstrate the Card component.',
  imageUrl: 'https://via.placeholder.com/400x200',
  backgroundColor: '#ffffff',
  size: 'medium',
};

export const WithoutImage: Story = (args) => <Card {...args} />;
WithoutImage.args = {
  title: 'No Image Card',
  content: 'This card does not have an image.',
  backgroundColor: '#f0f0f0',
  size: 'medium',
};

export const Small: Story = (args) => <Card {...args} />;
Small.args = {
  title: 'Small Card',
  content: 'This is a small card.',
  backgroundColor: '#ffcccb',
  size: 'small',
};

export const Large: Story = (args) => <Card {...args} />;
Large.args = {
  title: 'Large Card',
  content: 'This is a large card with a lot more content to show.',
  imageUrl: 'https://via.placeholder.com/600x300',
  backgroundColor: '#add8e6',
  size: 'large',
};
