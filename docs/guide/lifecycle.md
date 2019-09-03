---
title: 生命周期
order: 25
---

Remax 在 `component class` 中增加了对生命周期的支持，如：

```js
export default class Page extends React.Component {
  onShow() {
    console.log('on show');
  }

  onHide() {
    console.log('on hide');
  }

  ...
}
```

同样也支持 **React Hooks**

```jsx
import { useShow, useHide } from 'remax';
import { View } from 'remax/wechat';

export default () => {
  useShow(() => {
    console.log('onShow');
  });

  useHide(() => {
    console.log('onHide');
  });

  return <View>view</View>;
};
```

另外，小程序的 `onLoad` 事件对应 React 的 `componentDidMount` 事件，`onUnload` 对应 `componentWillUnmount` 事件。
