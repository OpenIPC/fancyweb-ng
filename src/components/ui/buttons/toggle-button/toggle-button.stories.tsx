import type { Meta, StoryObj } from '@storybook/preact';
import ToggleButton from './Toggle-button';
import icons from '../../../../assets/icons/ui';

const { Play, Pause } = icons;

const meta = {
  component: ToggleButton,
  title: 'Design System/UI/Toggle Button',
  argTypes: {
    size: {
      options: ['xs', 's', 'm', 'l'],
      control: { type: 'inline-radio' },
    },
    Icon: {
      options: ['Play', 'Pause'],
      mapping: {
        'Play': Play,
        'Pause': Pause,
      },
      control: { type: 'inline-radio' },
    },
    type: {
      options: ['button', 'submit', 'reset'],
      control: { type: 'inline-radio' },
    },
  },
} satisfies Meta<typeof ToggleButton>;

export default meta;

type Story = StoryObj<typeof ToggleButton>;

export const ToggleButtonStory: Story = {
  args: {
    size: 'xs',
    checked: false,
    disabled: false,
    type: 'button',
    Icon: Play,
    changeHandler: (state: boolean) => console.log('Toggle button state: ', state),
  },
};
