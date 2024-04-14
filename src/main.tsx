import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import 'uno.css';
import '@unocss/reset/eric-meyer.css'; // unocss提供的浏览器默认样式重置
import zhCN from 'antd/locale/zh_CN';
import 'dayjs/locale/zh-cn';
import { ConfigProvider } from 'antd';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider locale={zhCN}>
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
