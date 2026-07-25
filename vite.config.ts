import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import svgr from 'vite-plugin-svgr';
import tailwindcss from '@tailwindcss/vite';
import { UserConfig, ConfigEnv } from 'vite';

type Modes = 'main' | 'camera' | 'fpv' | 'test';
type Config = {
  serve: Record<Modes, () => UserConfig>,
  build: Record<Exclude<Modes, 'test'>, () => UserConfig>,
}

const svgrOpts = {
  include: '**/*.svg?react',
  exclude: '',
};

const serverOpts = {
  host: '0.0.0.0',
  port: 5173,
};

const getServeConf = (root: string) => {
  console.log('Serve config. root:', root);
  return {
    ...root && { root },
    server: serverOpts,
    plugins: [preact(), tailwindcss(), svgr(svgrOpts)],
  };
};

const getBuildConf = ( root: string, outDir: string, publicDir?: string) => {
  return {
    root,
    ...publicDir && {publicDir},
    build: {
      outDir,
      emptyOutDir: true,
    },
    base: '/fancyweb-ng/',
    plugins: [preact(), svgr(svgrOpts), tailwindcss()],
  };
};

export default defineConfig((args: ConfigEnv) => {
  const {command, mode} = args;
  const config: Config = {
    serve: {
      main: () => getServeConf('./src/sites/main'),
      camera: () => getServeConf('./src/sites/camera'),
      fpv: () => getServeConf('./src/sites/fpv'),
      test: () => getServeConf('./src/utils'),
    },
    build: {
      main: () => getBuildConf(
        './src/sites/main',
        '../../../dist/main',
        './public',
      ),
      camera: () => getBuildConf(
        './src/sites/camera',
        '../../../dist/camera',
      ),
      fpv: () => getBuildConf(
        './src/sites/fpv',
        '../../../dist/fpv',
      ),
    },
  };
  if (
    command === 'serve'
    && (
      mode === 'main'
      || mode === 'camera'
      || mode === 'fpv'
      || mode === 'test')
    ) return config[command][mode]();
  if (
    command === 'build'
    && (
      mode === 'main'
      || mode === 'camera'
      || mode === 'fpv' 
    )
  ) return config[command][mode]();
  throw new Error('Unknown config modifiers');
});
