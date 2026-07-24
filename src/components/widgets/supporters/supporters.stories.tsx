import { Meta, StoryObj } from '@storybook/preact';
import Supporters from './supporters';

const meta: Meta<typeof Supporters> = {
  component: Supporters,
  title: 'Design System/Widgets/Supporters',
}

export default meta;

type Story = StoryObj<typeof Supporters>;

export const SupportersStory = {};
