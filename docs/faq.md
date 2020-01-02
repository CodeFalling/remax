---
title: 常见问题
order: 60
---

### 在小程序里使用 React 会有什么限制吗？

不会。Remax 不同于静态编译方案，拥有完整的 React 环境，因此不会有特殊的限制。你可以把 Remax 理解为针对小程序的 React Native。

### 如何跨平台开发？

关于这个问题，请查看 [高级指南 - 跨平台开发](/advanced-guide/cross-platform)

### 使用高阶组件导致页面的生命周期未调用

如果使用了 Redux 的 connect ，请将 connect 的 option.forwardRef 设置为 true[文档](https://react-redux.js.org/api/connect#forwardref-boolean)。其它第三方库的高阶组件的处理方式也类似。原因如下。

对于使用 class 组件的页面，Remax 会通过 ref 获取页面生命周期。当页面组件被高阶组件（有时被称为 HOC）包裹时，通过 ref 取得的是 HOC 最外层的容器组件，而不是被包裹的组件 。我们需要 `React.forwardRef` 将 ref 转发到内部组件。

```jsx
import React, { forwardRef } from 'react';
import { View } from 'remax/alipay';
class IndexPage extends React.Component {
  onReady() {
    console.log('onReady被调用');
  }

  render() {
    return <View>这是一个例子</View>;
  }
}

// HOC 的容器是一个函数式组件
const HOC = Component => {
  const Wrapped = (props, ref) => {
    // 一些高阶组件的逻辑
    return <Component {...props} ref={ref} />;
  };

  return forwardRef(Wrapped);
};

// 另一种情况，HOC 容器是一个 class component
const ClazzHOC = Component => {
  class Wrapped extends React.Component {
    // 另一些高阶组件的逻辑
    render() {
      const { forwardRef, ...rest } = this.props;
      return <Component {...rest} ref={forwardRef} />;
    }
  }
  // 比起第一种情况，这里的处理要稍微麻烦一些
  return forwardRef((props, ref) => <Wrapped {...props} forwardRef={ref} />);
};
// 下面这三种方式导出的页面都是可以按照预期调用 `onReady`
export default ClazzHOC(IndexPage);
// export default HOC(IndexPage);
// export default IndexPage;
```

### 编译后小程序提示找不到 xxx 文件路径

1. 尝试删除打包目录，重新 build
2. 真机中出现此问题，查看编译选项是否开启了代码保护，目前开发模式开启代码保护有出错可能。

### 微信嵌套层级

Remax 默认为微信的每个 host 组件定义了嵌套层数。其中 `View` 20 层，其他组件都在 1 ~ 5 层。如果出现形如下图的情况，可以通过配置修改嵌套层数。

![未找到模板提醒](https://gw.alipayobjects.com/mdn/rms_a6d2d8/afts/img/A*pExGT4kna-AAAAAAAAAAAABkARQnAQ)

```js
// remax.config.js

{
  UNSAFE_wechatTemplateDepth: {
    button: 2, // 把 button 的嵌套层数修改为 2 层
  }
}
```
