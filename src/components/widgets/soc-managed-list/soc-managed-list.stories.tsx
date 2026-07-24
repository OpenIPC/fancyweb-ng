import { socs as fullList } from '../../../sites/main/pages/supported-hardware/constants';
import { Meta, StoryObj } from '@storybook/preact';
import SoCManagedList from './soc-managed-list';

const meta: Meta<typeof SoCManagedList> = {
  component: SoCManagedList,
  title: 'Design System/Widgets/SoC Managed List',
}

export default meta;

type Story = StoryObj<typeof SoCManagedList>;

export const SoCManagedListStory: Story = {
  args: {
    fullList,
  },
};
