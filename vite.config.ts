import { ConfigEnv, defineConfig, loadEnv } from 'vite';
import pkg from './package.json';
import { resolve } from 'path';
import dayjs from 'dayjs';
import { setupVitePlugins } from './vite';
import postcssPresetEnv from 'postcss-preset-env';

const { dependencies, devDependencies, name, version } = pkg;
const __APP_INFO__ = {
  pkg: { dependencies, devDependencies, name, version },
  lastBuildTime: dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss')
};

export default defineConfig((configEnv: ConfigEnv) => {
  const viteEnv = loadEnv(configEnv.mode, process.cwd()) as ImportMetaEnv;

  return {
    base: viteEnv.VITE_BASE_URL,
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src')
      }
    },
    server: {
      host: '0.0.0.0',
      port: 8080,
      open: true,
      proxy: {}
    },
    css: {
      postcss: {
        plugins: [postcssPresetEnv()]
      }
    },
    plugins: setupVitePlugins(viteEnv),
    define: { __APP_INFO__: JSON.stringify(__APP_INFO__) }
  };
});
