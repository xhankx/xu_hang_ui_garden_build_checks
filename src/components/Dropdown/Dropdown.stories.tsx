import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Dropdown from './Dropdown';
import { type DropdownProps } from './Dropdown.types';

const meta: Meta<typeof Dropdown> = {
  component: Dropdown,
  title: 'Marbella/Dropdown',
  argTypes: {},
};
export default meta;

type Story = StoryFn<typeof Dropdown>;

export const Default: Story = (args) => <Dropdown {...args} />;
Default.args = {
  options: [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ],
  disabled: false,
  backgroundColor: '#ffffff',
};

export const Disabled: Story = (args) => <Dropdown {...args} />;
Disabled.args = {
  options: [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ],
  disabled: true,
};

export const CustomBackground: Story = (args) => <Dropdown {...args} />;
CustomBackground.args = {
  options: [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ],
  backgroundColor: '#ffcccb',
};
