import { Meta, StoryFn } from '@storybook/react';
import Label from './Label';
declare const meta: Meta<typeof Label>;
export default meta;
type Story = StoryFn<typeof Label>;
export declare const Default: Story;
export declare const BoldLabel: Story;
export declare const CustomSizeLabel: Story;
