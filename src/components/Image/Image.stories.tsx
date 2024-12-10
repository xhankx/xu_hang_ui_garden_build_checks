import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Image from './Image';

const meta: Meta<typeof Image> = {
  component: Image,
  title: 'Marbella/Image',
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Image>;

export const Default: Story = (args) => (
  <Image data-testId="InputField-id" {...args} />
);
Default.args = {
  imageUrl:
    'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg',
  altText: 'Example Image',
  disabled: false,
  backgroundColor: '#55bd90',
  headerText: 'Default Image',
};

export const Disabled: Story = (args) => (
  <Image data-testId="InputField-id" {...args} />
);
Disabled.args = {
  imageUrl:
    'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg',
  altText: 'Example Image',
  headerText: 'Default Image',
  disabled: true,
};
