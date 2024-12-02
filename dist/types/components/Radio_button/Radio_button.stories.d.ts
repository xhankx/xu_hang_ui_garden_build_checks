import { Meta, StoryFn } from '@storybook/react';
import RadioButton from './Radio_button';
declare const meta: Meta<typeof RadioButton>;
export default meta;
type Story = StoryFn<typeof RadioButton>;
export declare const Default: Story;
export declare const Checked: Story;
export declare const CustomColor: Story;
