import type { Meta, StoryObj } from '@storybook/preact';
import HeaderBurgerButton from './header-burger-button';

const meta: Meta<typeof HeaderBurgerButton> = {
  component: HeaderBurgerButton,
  title: 'Design System/Widgets/Header Button',
  decorators: [
    (Story) => <div style="background-color: #4c60d8; width: 100%; height: 88px; display: flex; justify-content: flex-end; align-items: center; padding: 8px;"><Story /></div>,
  ],
}

export default meta;

type Story = StoryObj<typeof HeaderBurgerButton>;

export const HeaderBurgerButtonStory: Story = {};
