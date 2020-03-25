import * as fs from 'fs';
import MagicString from 'magic-string';
import { relative, dirname } from 'path';
import * as t from '@babel/types';
import * as babelParser from '@babel/parser';
import traverse, { NodePath } from '@babel/traverse';
import { get } from 'lodash';
import resolve from 'resolve';
import { getPath, pushArray, readFile } from './util';
import { RemaxOptions } from 'remax-types';
import winPath from '../../../winPath';

const modules: string[] = [];

export function resolveModulesInCode(code: string, filePath: string, options: RemaxOptions) {
  const magicString = new MagicString(code);
  const ast = babelParser.parse(code, {
    sourceType: 'module',
  });

  const extract = (path: NodePath) => {
    const { node } = path;

    let importPath =
      (get(node, 'callee.name') === 'require' ? get(node, 'arguments[0].value') : '') || get(node, 'source.value');

    if (!importPath) {
      return;
    }

    try {
      // 尝试 resolve
      importPath = resolve.sync(importPath, { basedir: options.cwd });
    } catch {
      return;
    }

    const absoluteId = getPath(filePath, importPath);
    const resolveId = winPath(relative(dirname(filePath), absoluteId))
      .replace(/@/g, '_')
      .replace(/node_modules/g, 'npm');

    if (t.isImportDeclaration(node)) {
      const sourcePath = path.get('source') as NodePath;
      magicString.overwrite(sourcePath.node.start!, sourcePath.node.end!, `'${resolveId}'`);
    } else {
      const sourcePath = path.get('arguments.0') as NodePath;
      magicString.overwrite(sourcePath.node.start!, sourcePath.node.end!, `'${resolveId}'`);
    }
  };

  traverse(ast, {
    CallExpression: extract,
    ImportDeclaration: extract,
  });

  return magicString.toString();
}

const walk = (jsPath: string, options: RemaxOptions) => {
  const jsContent = readFile(jsPath);
  const ast = babelParser.parse(jsContent, {
    sourceType: 'module',
  });

  const extract = ({ node }: any) => {
    let importPath =
      (get(node, 'callee.name') === 'require' ? get(node, 'arguments[0].value') : '') || get(node, 'source.value');

    if (!importPath) {
      return;
    }

    try {
      // 尝试 resolve，失败跳过
      importPath = resolve.sync(importPath, { basedir: options.cwd });
    } catch {
      // ignore
    }

    const absoluteId = getPath(jsPath, importPath);

    let absolutePath = /.js$/.test(absoluteId) ? absoluteId : absoluteId + '.js';

    if (!fs.existsSync(absolutePath)) {
      absolutePath = absoluteId + '/index.js';
    }

    if (!fs.existsSync(absolutePath)) {
      return;
    }

    pushArray(modules, absolutePath);

    walk(absolutePath, options);
  };

  traverse(ast, {
    CallExpression: extract,
    ImportDeclaration: extract,
  });
};

const parseTemplate = (filePath: string, options: RemaxOptions) => {
  walk(filePath, options);
  pushArray(modules, filePath);
};

export default function jsModule(options: RemaxOptions, id: string) {
  const templatePath = id;

  parseTemplate(templatePath, options);
}

export const getJsModules = () => modules;
