import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import LayoutMenu from './components/Menu';
import LayoutHeader from './components/Header';
import LayoutFooter from './components/Footer';
import LayoutTabs from './components/Tabs';

const { Sider, Content } = Layout;
const ILayout = () => {
  return (
    <Layout className="h-full">
      <Sider width={200} className="border-[var(--admin-border-1)] border-r border-solid">
        <LayoutMenu />
      </Sider>
      <Layout>
        <LayoutHeader />
        <LayoutTabs />
        <Content className="overflow-auto p-16px">
          <Outlet />
        </Content>
        <LayoutFooter />
      </Layout>
    </Layout>
  );
};

export default ILayout;
