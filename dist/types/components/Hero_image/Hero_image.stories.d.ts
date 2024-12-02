import { Meta, StoryFn } from '@storybook/react';
import HeroImage from './Hero_image';
declare const meta: Meta<typeof HeroImage>;
export default meta;
type Story = StoryFn<typeof HeroImage>;
export declare const Default: Story;
export declare const TallHero: Story;
