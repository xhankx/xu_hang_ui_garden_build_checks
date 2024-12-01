import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Label from './Label';
import { type LabelProps } from './Label.types';

const meta: Meta<typeof Label> = {
  component: Label,
  title: 'Marbella/Label',
  argTypes: {},
};
export default meta;

type Story = StoryFn<typeof Label>;

export const Default: Story = (args) => <Label {...args} />;
Default.args = {
  text: 'Default Label',
  color: '#333',
};

export const BoldLabel: Story = (args) => <Label {...args} />;
BoldLabel.args = {
  text: 'Bold Label',
  fontWeight: 'bold',
  color: '#000',
};

export const CustomSizeLabel: Story = (args) => <Label {...args} />;
CustomSizeLabel.args = {
  text: 'Custom Size Label',
  fontSize: '1.5rem',
  color: '#007bff',
};
