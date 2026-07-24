import { Meta, StoryObj } from '@storybook/preact';
import HeaderMenuList from './Header-menu-list';
import { headerMenuConstants } from '../../../sites/main/constants';

const meta: Meta<typeof HeaderMenuList> = {
  component: HeaderMenuList,
  title: 'Design System/Widgets/Header Menu List',
  decorators: [
    (Story) => (
      <div className="bg-brand-blue">
        <Story />
      </div>
    ),
  ],
}

export default meta;

type Story = StoryObj<typeof HeaderMenuList>;

export const HeaderMenuListStory: Story = {
  args: {
    list: headerMenuConstants,
  }
};
