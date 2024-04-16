import { UserOutlined } from '@ant-design/icons';
import { Layout, Space } from 'antd';
const { Header } = Layout;
const LayoutHeader = () => {
  return (
    <Header className="flex justify-between items-center border-[var(--admin-border-1)] border-b border-solid">
      <div></div>
      <div>
        {/* <Dropdown menu={{ items }}> */}
        <Space className=" cursor-pointer ml-16px">
          <UserOutlined />
          <span>{'admin'}</span>
        </Space>
        {/* </Dropdown> */}
      </div>
    </Header>
  );
};

export default LayoutHeader;
