import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import LayoutHeader from './components/Header';
import LayoutSider from './components/Sider';
// import LayoutFooter from './components/Footer';
// import LayoutTabs from './components/Tabs';

const { Content } = Layout;
const ILayout = () => {
  return (
    <Layout className="h-full">
      <LayoutHeader />
      <Layout>
        <LayoutSider />
        <Layout>
          {/* <LayoutHeader /> */}
          {/* <LayoutTabs /> */}
          <Content className="overflow-auto p-16px bg-[var(--admin-bg-2)]">
            <Outlet />
          </Content>
          {/* <LayoutFooter /> */}
        </Layout>
      </Layout>
    </Layout>
  );
};

export default ILayout;
