import { Meta, StoryFn } from '@storybook/react';
import Text from './Text';
declare const meta: Meta<typeof Text>;
export default meta;
type Story = StoryFn<typeof Text>;
export declare const Default: Story;
export declare const BoldText: Story;
export declare const CustomSizeText: Story;
