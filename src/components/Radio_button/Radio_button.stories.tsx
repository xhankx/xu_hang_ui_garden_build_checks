import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import RadioButton from './Radio_button';
import { type RadioButtonProps } from './Radio_button.types';

const meta: Meta<typeof RadioButton> = {
  component: RadioButton,
  title: 'Marbella/Radio Button',
  argTypes: {},
};
export default meta;

type Story = StoryFn<typeof RadioButton>;

export const Default: Story = (args) => <RadioButton {...args} />;
Default.args = {
  label: 'Default Radio',
  name: 'group1',
  value: 'default',
  checked: false,
  color: '#007bff',
};

export const Checked: Story = (args) => <RadioButton {...args} />;
Checked.args = {
  label: 'Checked Radio',
  name: 'group1',
  value: 'checked',
  checked: true,
  color: '#28a745',
};

export const CustomColor: Story = (args) => <RadioButton {...args} />;
CustomColor.args = {
  label: 'Custom Color Radio',
  name: 'group2',
  value: 'custom',
  checked: false,
  color: '#ff6347',
};
