import * as path from 'path';
import hostComponents from '../hostComponents/node';
import { RemaxNodePluginConstructor } from 'remax-types';

const TPL_DEFAULT_ROOT = path.join(__dirname, '../../templates', 'default');
const TPL_STATIC_ROOT = path.join(__dirname, '../../templates', 'static');

const plugin: RemaxNodePluginConstructor = () => {
  return {
    name: 'remax-alipay',
    meta: {
      global: 'my',
      template: {
        extension: '.axml',
        tag: 'import',
        src: 'src',
      },
      style: '.acss',
      jsHelper: {
        extension: '.sjs',
        tag: 'import-sjs',
        src: 'from',
      },
      include: {
        tag: 'include',
        src: 'src',
      },
      ejs: {
        base: '',
        page: path.join(TPL_DEFAULT_ROOT, 'page.ejs'),
      },
      staticEjs: {
        base: '',
        page: path.join(TPL_STATIC_ROOT, 'page.ejs'),
      },
    },
    hostComponents,
    shouldHostComponentRegister: ({ componentName }) =>
      componentName !== 'swiper-item' && componentName !== 'picker-view-column',
  };
};

export default plugin;
