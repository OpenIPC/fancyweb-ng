import type {StorybookConfig} from '@storybook/preact-vite';

const config: StorybookConfig = {
  stories: [
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [],
  framework: '@storybook/preact-vite',
};
export default config;
