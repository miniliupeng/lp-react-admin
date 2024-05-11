import React from 'react';
import ReactDOM from 'react-dom/client';
import 'virtual:svg-icons-register';
import App from './App.tsx';
import 'uno.css';
import '@unocss/reset/eric-meyer.css'; // unocss提供的浏览器默认样式重置
import '@/styles/index.scss';
ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
