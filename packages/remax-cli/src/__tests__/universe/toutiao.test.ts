import * as path from 'path';
import runTest from '../helpers/runTest';
import { Platform } from '../../build/platform';

describe('build universe app in toutiao', () => {
  runTest('universe', Platform.toutiao, path.resolve(__dirname, `../fixtures/universe/expected/toutiao`));
});
