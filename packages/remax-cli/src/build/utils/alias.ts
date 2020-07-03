import * as path from 'path';
import { Options, Platform } from '@remax/types';

interface Alias {
  [key: string]: string;
}

export default (options: Options, target: Platform) => {
  const config: Alias = {
    '@': path.resolve(options.cwd, options.rootDir),
    // 防止 link 开发时加载多个 React
    react: path.resolve(options.cwd, 'node_modules', 'react'),
    'react-router': path.resolve(options.cwd, 'node_modules', 'react-router'),
  };

  if (target !== Platform.web) {
    config['react-dom'] = '@remax/runtime';
  }

  return config;
};
