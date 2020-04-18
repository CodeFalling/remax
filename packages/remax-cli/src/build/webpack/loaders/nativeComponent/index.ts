import utils from 'loader-utils';
import { loader } from 'webpack';
import { registerNativeComponent as register } from 'remax/macro';
import { isNativeComponent } from '../../../nativeComponent';
import jsHelper, { getJsHelpers } from './jsHelper';
import jsModule, { getJsModules } from './modules';
import style, { getcssPaths } from './style';
import json, { getjsonPaths } from './json';
import usingComponents from './usingComponents';
import template, { getTemplatePaths } from './template';

const getAssets = () => [
  ...getcssPaths(),
  ...getjsonPaths(),
  ...getTemplatePaths(),
  ...getJsHelpers(),
  ...getJsModules(),
];

export default function nativeComponent(this: loader.LoaderContext, source: string) {
  if (this.cacheable) {
    this.cacheable();
  }

  const resourcePath = this.resourcePath;
  const { remaxOptions } = utils.getOptions(this);

  if (isNativeComponent(resourcePath)) {
    jsModule(remaxOptions, resourcePath);
    jsHelper(resourcePath);
    style(resourcePath);
    json(resourcePath);
    template(remaxOptions, resourcePath);
    usingComponents(resourcePath, remaxOptions, this);

    const assets = getAssets();

    assets.forEach(file => {
      this.addDependency(file);
    });

    const type = register(resourcePath, '', assets);

    return `import { createNativeComponent } from 'remax';
export default createNativeComponent('${type}')
`;
  }

  return source;
}
