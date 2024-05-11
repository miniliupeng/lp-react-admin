import { FormOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { App, Button, Dropdown, Layout, MenuProps } from 'antd';
import Logo from '../Sider/Menu/Logo';
import { HorizontalMenu } from './Menu';
import './index.scss';
import { useUserStore } from '@/stores';
import { useNavigate } from 'react-router-dom';
import { UpdatePwdModal, UpdatePwdModalRefProps } from './UpdatePwdModal';
import { useRef } from 'react';

const { Header } = Layout;
const LayoutHeader = () => {
  const userInfo = useUserStore((state) => state.userInfo);
  const logout = useUserStore((state) => state.logout);

  const ref = useRef() as React.MutableRefObject<UpdatePwdModalRefProps>;
  const { modal } = App.useApp();
  const navigate = useNavigate();
  const onClick: MenuProps['onClick'] = ({ key }) => {
    if (key === 'logout') {
      modal.confirm({
        content: '确认退出登录吗？',
        onOk: () => {
          logout();
          navigate('login');
        }
      });
    }
    if (key === 'update') {
      ref.current.showModal({
        user_name: userInfo.user_name
      });
    }
  };
  const items: MenuProps['items'] = [
    {
      key: 'update',
      icon: <FormOutlined />,
      label: '修改密码'
    },
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: '退出登录'
    }
  ];
  return (
    <Header className="grid grid-cols-[auto_1fr_auto] gap-4 h-56px px-0 line-height-56px shadow-header">
      <Logo></Logo>
      <HorizontalMenu />
      <div className="justify-self-end px-4">
        <Dropdown menu={{ items, onClick }} placement="bottom" arrow>
          <Button type="text" icon={<UserOutlined />}>
            {userInfo.name}
          </Button>
        </Dropdown>
      </div>
      <UpdatePwdModal ref={ref} />
    </Header>
  );
};

export default LayoutHeader;
