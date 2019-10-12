import * as htmlparser2 from 'htmlparser2';
import fs from 'fs';
import { Adapter } from '../../adapters';
import { pushArray, getPath } from './util';
import { output } from '../../utils/output';

const parser = new htmlparser2.Parser({});

const templatePaths: string[] = [];

export function walk(filePath: string) {
  if (!fs.existsSync(filePath)) {
    output(`\n🚨 文件 ${filePath} 不存在`, 'red');
    return;
  }

  pushArray(templatePaths, filePath);

  const content = fs.readFileSync(filePath).toString();

  parser._cbs.onopentag = (name, attrs) => {
    if (name === 'import' && attrs.src) {
      walk(getPath(filePath, attrs.src));
    }
  };

  parser.reset();
  parser.write(content);
  parser.end();
}

export const getTemplatePaths = () => {
  return templatePaths;
};

export default (id: string, adapter: Adapter) => {
  const filePath = id.replace(/\.js$/, adapter.extensions.template);

  walk(filePath);
};
