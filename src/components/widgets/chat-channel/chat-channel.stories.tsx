import { Meta, StoryObj } from '@storybook/preact';
import ChatChannel from './Chat-channel';

const meta: Meta = {
  component: ChatChannel,
  title: 'Design System/Widgets/Chat Channel',
} satisfies typeof ChatChannel;

export default meta;

type Story = StoryObj<typeof ChatChannel>;

export const ChatChannelStory: Story = {
  args: {
    header: 'OpenIPC Users(EN)',
    link: 'https://t.me/OpenIPC',
    text: 'International channel about OpenIPC',
  },
};
