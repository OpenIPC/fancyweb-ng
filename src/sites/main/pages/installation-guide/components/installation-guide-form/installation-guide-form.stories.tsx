import { Meta, StoryObj } from '@storybook/preact';
import InstallationGuideForm from './Installation-guide-form';

const meta: Meta<typeof InstallationGuideForm> = {
  component: InstallationGuideForm,
  title: 'Design System/Widgets/Installation Guide Form',
}

export default meta;

type Story = StoryObj<typeof InstallationGuideForm>;

export const InstallationGuideFormStory: Story = {};
