// @ts-nocheck
import ReactDOM from 'react-dom/client';
import { Spin } from 'antd';

export const showGlobalLoading = () => {
  const dom = document.createElement('div');
  dom.id = 'globalLoading';

  dom.style =
    'width: 100%; height: 100%; position: fixed; top: 0; left: 0; background-color: rgba(255, 255, 255, 0.2); display: flex; justify-content: center; align-items: center; z-index: 9999;';
  document.body.appendChild(dom);
  ReactDOM.createRoot(dom).render(<Spin size="large"></Spin>);
};

export const hideGlobalLoading = () => {
  const dom = document.getElementById('globalLoading');
  if (dom) {
    document.body.removeChild(dom);
  }
};
