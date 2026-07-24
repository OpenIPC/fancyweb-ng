import { Meta, StoryObj } from '@storybook/preact';
import OpenWallGallery from './open-wall-gallery';

const meta: Meta<typeof OpenWallGallery> = {
  component: OpenWallGallery,
  title: 'Design System/Widgets/Open Wall Gallery',
}

export default meta;

type Story = StoryObj<typeof OpenWallGallery>;

const toStrs = (a: number[]) => a.map(e => e.toString());

export const OpenWallGalleryStory: Story = {
  args: {
    camIDs: toStrs([0, 1, 2, 3, 4, 5, 6, 7, 9, 10, 11]),
  },
}
