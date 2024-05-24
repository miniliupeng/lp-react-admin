import React from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useAuthStore } from '@/stores';
import { useLocation, useNavigate } from 'react-router-dom';

export const HorizontalMenu: React.FC = () => {
  const getHorizontalMenuList = useAuthStore((state) => state.getHorizontalMenuList);
  const menuList = getHorizontalMenuList();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const onClick: MenuProps['onClick'] = (e) => {
    navigate(e.key);
  };

  return (
    <Menu
      className="justify-center min-w-0  border-b-0 text-3.5"
      mode="horizontal"
      items={menuList}
      selectedKeys={[`/${pathname.split('/')[1]}`]}
      onClick={onClick}
    />
  );
};
