---
title: babel-preset-remax
---

`babel-preset-remax` 是 Remax 提供的 babel preset.

```js
{
  presets: [
    [
      'remax',
      {
        typescript: {
          allowNamespaces: true,
        },
        'class-properties': {
          loose: true,
        },
        decorators: {
          legacy: true,
        },
        'throw-if-namespace': true,
        targets: ['chrome >= 49', 'firefox >= 64', 'ios >= 8', 'Android > 4.4'],
      },
    ],
  ];
}
```

## 选项

### typescript

[babel-preset-typescript](https://babeljs.io/docs/en/babel-preset-typescript) 配置

### decorators

[babel-plugin-proposal-decorators](https://babeljs.io/docs/en/babel-plugin-proposal-decorators) 配置

### class-properties

[babel-plugin-proposal-class-properties](https://babeljs.io/docs/en/babel-plugin-proposal-class-properties) 配置

### targets

[babel-preset-env](https://www.babeljs.cn/docs/babel-preset-env#targets) 中关于 targets 的配置
