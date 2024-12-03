import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import svgr from 'vite-plugin-svgr';

const svgrOpts = {
  include: '**/*.svg?react',
  exclude: '',
}

const serverOpts = {
  host: '0.0.0.0',
  port: 5173,
}
export default defineConfig((args) => {
  const { command, mode } = args;
  console.log(command, mode);
  const config = {
    serve: {
      main: () => {
        return {
          root: "./src/sites/main",
          server: serverOpts,
          plugins: [preact(), svgr(svgrOpts)],
        }
      },
      camera: () => {
        return {
          root: "./src/sites/camera",
          server: serverOpts,
          plugins: [preact(), svgr(svgrOpts)],
        }
      },
      test: () => {
        return {
          root: "./src/utils",
          server: serverOpts,
        }
      },
      fpv: () => {
        return {
          root: "./src/sites/fpv",
          server: serverOpts,
          plugins: [preact(), svgr(svgrOpts)],
        }
      },
      development: () => {
        return {
          server: serverOpts,
          plugins: [preact(), svgr(svgrOpts)],
        }
      },
    },
    build: {
      main: () => {
        return {
          root: "./src/sites/main",
          publicDir: "./public",
          build: {
            outDir: '../../../dist/main',
            emptyOutDir: true,
          },
          plugins: [preact(), svgr(svgrOpts)],
        }
      },
      camera: () => {
        return {
          root: "./src/sites/camera",
          build: {
            outDir: '../../../dist/camera',
            emptyOutDir: true,
          },
          plugins: [preact(), svgr(svgrOpts)],
        }
      },
      fpv: () => {
        return {
          root: "./src/sites/fpv",
          build: {
            outDir: '../../../dist/fpv',
            emptyOutDir: true,
          },
          plugins: [preact(), svgr(svgrOpts)],
        }
      },
      production: () => {
        return {
          plugins: [preact(), svgr(svgrOpts)],
        }
      },
    },
  };
  if (
    command === 'serve' &&
    (mode === 'main' || mode === 'camera' || mode === 'fpv' || mode === 'development' || mode === 'test')
  ) return config[command][mode]();
  if (
    command === 'build' &&
    (mode === 'main' || mode === 'camera' || mode === 'fpv' || mode === 'production')
  ) return config[command][mode]();
  throw new Error('Unknown config modifiers');
});
