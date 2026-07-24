import { Meta, StoryObj } from '@storybook/preact';
import Wallets from './wallets';

const meta: Meta<typeof Wallets> = {
  component: Wallets,
  title: 'Design System/Widgets/Wallets',
}

export default meta;

type Story = StoryObj<typeof Wallets>;

export const WalletsStory: Story = {};
