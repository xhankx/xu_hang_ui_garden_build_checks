import { Meta, StoryFn } from '@storybook/react';
import Button from './Button';
declare const meta: Meta<typeof Button>;
export default meta;
type Story = StoryFn<typeof Button>;
export declare const Default: Story;
export declare const Disabled: Story;
export declare const Small: Story;
export declare const Medium: Story;
export declare const Large: Story;