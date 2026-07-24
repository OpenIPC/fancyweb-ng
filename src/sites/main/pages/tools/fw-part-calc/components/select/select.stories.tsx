import type { Meta, StoryObj } from '@storybook/preact';
import Select from './Select';

const meta = {
  component: Select,
  title: 'Design System/UI/Partition Calc Select',
  argTypes: {
    state: {
      options: ['default', 'valid', 'error', 'disabled'],
      control: 'select',
    },
    errorText: {
      options: ['', 'Only number allowed', 'Must not be empty'],
      control: 'select',
    },
    value: {
      options: ['', 'hi_sfc', 'hinand', 'jz_sfc'],
      control: 'select',
    },
    required: {
      options: [false, true],
      control: 'inline-radio',
    },
  },
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof Select>;

export const PartialSelectStory: Story = {
  args: {
    label: 'MTD Device Name',
    options: [
      {
        option: '',
        text: '',
      },
      { option: 'hi_sfc',
        text: 'hi_sfc', 
      },
      {
        option: 'hinand',
        text: 'hinand',
      },
      {
        option: 'jz_sfc',
        text: 'jz_sfc',
      },
      {
        option: 'nor-flash',
        text: 'nor-flash',
      },
      {
        option: 'NOR_FLASH',
        text: 'NOR_FLASH',
      }, 
      {
        option: 'sfc',
        text: 'sfc',
      },
      {
        option: 'spi0.0',
        text: 'spi0.0',
      },
      {
        option: 'spi_flash',
        text: 'spi_flash',
      },
      {
        option: 'xm_sfc',
        text: 'xm_sfc',
      },
    ],
    value: "jz_sfc",
    required: false,
  },
}
