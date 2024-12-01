import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Img from './Img';
import { type ImgProps } from './Img.types';

const meta: Meta<typeof Img> = {
  component: Img,
  title: 'Marbella/Img',
  argTypes: {},
};
export default meta;

type Story = StoryFn<typeof Img>;

export const Default: Story = (args) => <Img {...args} />;
Default.args = {
  src: 'https://via.placeholder.com/400x300',
  alt: 'Placeholder Image',
  width: '400px',
  height: '300px',
};

export const RoundedImage: Story = (args) => <Img {...args} />;
RoundedImage.args = {
  src: 'https://via.placeholder.com/400x300',
  alt: 'Rounded Placeholder Image',
  width: '400px',
  height: '300px',
  borderRadius: '20px',
};

export const CustomFit: Story = (args) => <Img {...args} />;
CustomFit.args = {
  src: 'https://via.placeholder.com/400x300',
  alt: 'Custom Fit Image',
  width: '400px',
  height: '200px',
  objectFit: 'contain',
};
