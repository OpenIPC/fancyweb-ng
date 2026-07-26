import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import svgr from 'vite-plugin-svgr';
import tailwindcss from '@tailwindcss/vite';
import { UserConfig, ConfigEnv } from 'vite';


const buildModes = [ 'main', 'camera', 'fpv' ] as const;
const devModes = [ 'test', 'development', ...buildModes ] as const;

type DevModes = typeof devModes[number];
type BuildModes = typeof buildModes[number];

type Config = {
  serve: Record<DevModes, () => UserConfig>,
  build: Record<BuildModes, () => UserConfig>,
}

const svgrOpts = {
  include: '**/*.svg?react',
  exclude: '',
};

const serverOpts = {
  host: '0.0.0.0',
  port: 5173,
};

const getServeConf = (root?: string) => {
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
  console.log("args:", args);
  const { command, mode } = args;
  const config: Config = {
    serve: {
      main: () => getServeConf('./src/sites/main'),
      camera: () => getServeConf('./src/sites/camera'),
      fpv: () => getServeConf('./src/sites/fpv'),
      test: () => getServeConf('./src/utils'),
      development: () => getServeConf(),
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

  if (command === 'serve' && devModes.includes(mode as DevModes))
    return config[command][mode as DevModes]();

  if ( command === 'build' && buildModes.includes(mode as BuildModes))
      return config[command][mode as BuildModes]();

  throw new Error('Unknown config modifiers');
});
