import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import { resolve } from 'path';

export default function unplugin(viteEnv: ImportMetaEnv) {
  const { VITE_LOCAL_ICON_PREFIX } = viteEnv;

  return [
    createSvgIconsPlugin({
      iconDirs: [resolve(process.cwd(), 'src/assets/svg')],
      symbolId: `${VITE_LOCAL_ICON_PREFIX}-[dir]-[name]`
    })
  ];
}
