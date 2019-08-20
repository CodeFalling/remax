import { RemaxOptions } from './getConfig';

export interface Context {
  config: RemaxOptions;
  app: any;
  pages: Array<{ path: string; [key: string]: any }>;
}
