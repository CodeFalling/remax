// TODO: type定义
function promisify(api: (config: any) => void) {
  return (config: any = {}) =>
    new Promise<any>((resolve, reject) => {
      api({
        ...config,
        success: (res: any) => {
          if (config && typeof config.success === 'function') {
            config.success(res);
          }
          resolve(res);
        },
        fail: (res: any) => {
          if (config && typeof config.fail === 'function') {
            config.fail(res);
          }
          reject(res);
        },
      });
    });
}

export default promisify;
