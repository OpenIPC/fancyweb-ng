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

const getServeConf = (root?: string) => {
  return {
    ...(root && { root }),
    server: serverOpts,
    plugins: [preact(), svgr(svgrOpts)],
  }
}

const getBuildConf = (root: string, outDir: string, publicDir?: string) => {
  return {
    root,
    ...(publicDir && { publicDir }),
    build: {
      outDir,
      emptyOutDir: true,
    },
    base: '/fancyweb-ng/',
    plugins: [preact(), svgr(svgrOpts)],
  }
}

export default defineConfig((args: { command: string, mode: string }) => {
  const { command, mode } = args;
  console.log(command, mode);
  const config = {
    serve: {
      main: () => getServeConf('./src/sites/main'),
      camera: () => getServeConf('./src/sites/camera'),
      fpv: () => getServeConf('./src/sites/fpv'),
      test: () => getServeConf('./src/utils'),
      development: () => getServeConf(),
    },
    build: {
      main: () => getBuildConf('./src/sites/main', '../../../dist/main', './public'),
      camera: () => getBuildConf('./src/sites/camera', '../../../dist/camera'),
      fpv: () => getBuildConf('./src/sites/fpv', '../../../dist/fpv'),
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
