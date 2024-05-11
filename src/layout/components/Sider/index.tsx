import React from 'react';
import { Layout } from 'antd';
import LayoutMenu from './Menu';
import './index.scss';
const { Sider } = Layout;
const LayoutSider = () => {
  return (
    <Sider width={200} className="shadow-sider">
      <LayoutMenu />
    </Sider>
  );
};

export default LayoutSider;
