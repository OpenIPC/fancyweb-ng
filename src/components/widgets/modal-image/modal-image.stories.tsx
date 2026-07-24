import { Meta, StoryObj } from '@storybook/preact';
import ModalImage from './Modal-image';
import pic from '../../../assets/pics/web-interface/1.jpg';

const meta = {
  component: ModalImage,
  title: 'Design System/Widgets/Modal Image',
} satisfies Meta<typeof ModalImage>;

export default meta;

type Story = StoryObj<typeof ModalImage>;

export const ModalImageStory = {
  args: {
    href: pic,
    alt: 'Default picture alternative text',
  },
} satisfies Story;
