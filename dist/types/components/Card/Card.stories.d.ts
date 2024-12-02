import { Meta, StoryFn } from '@storybook/react';
import Card from './Card';
declare const meta: Meta<typeof Card>;
export default meta;
type Story = StoryFn<typeof Card>;
export declare const Default: Story;
export declare const WithoutImage: Story;
export declare const Small: Story;
export declare const Large: Story;
