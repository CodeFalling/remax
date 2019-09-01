import { RemaxOptions } from './getConfig';

const defaultOptions: RemaxOptions = {
  cssModules: false,
  cwd: process.cwd(),
  progress: true,
  output: 'dist',
  UNSAFE_wechatTemplateDepth: 20,
};

export default defaultOptions;
