import * as path from 'path';
import runTest from '../helpers/runTest';
import { Platform } from '../../build/platform';

describe('build universe app in alipay', () => {
  runTest('universe', Platform.wechat, path.resolve(__dirname, `../fixtures/universe/expected/wechat`));
});
