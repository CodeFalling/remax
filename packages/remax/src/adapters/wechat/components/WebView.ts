import factory from './factory';

const WebView = factory<WebViewProps>('web-view');

export interface WebViewProps {
  src?: string; //  否 webview 指向网页的链接。可打开关联的公众号的文章，其它网页需登录小程序管理后台配置业务域名。 1.6.4
  onMessage?: (event: any) => void; //  否 网页向小程序 postMessage 时，会在特定时机（小程序后退、组件销毁、分享）触发并收到消息。e.detail = { data }，data是多次 postMessage 的参数组成的数组 1.6.4
  onLoad?: (event: any) => void; //  否 网页加载成功时候触发此事件。e.detail = { src } 1.6.4
  onError?: (event: any) => void; //  否 网页加载失败的时候触发此事件。e.detail = { src } 1.6.4
}

export default WebView;
