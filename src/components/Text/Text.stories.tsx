import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Text from './Text';
import { type TextProps } from './Text.types';

const meta: Meta<typeof Text> = {
  component: Text,
  title: 'Marbella/Text',
  argTypes: {},
};
export default meta;

type Story = StoryFn<typeof Text>;

export const Default: Story = (args) => <Text {...args}>This is a default text component.</Text>;
Default.args = {
  color: '#333',
};

export const BoldText: Story = (args) => <Text {...args}>This is a bold text.</Text>;
BoldText.args = {
  fontWeight: 'bold',
  color: '#000',
};

export const CustomSizeText: Story = (args) => <Text {...args}>This is a custom size text.</Text>;
CustomSizeText.args = {
  fontSize: '1.5rem',
  color: '#007bff',
};
