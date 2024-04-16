import { AppstoreOutlined, HomeOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { NavLink } from 'react-router-dom';
export const menuList: MenuProps['items'] = [
  {
    key: '/home',
    label: '首页',
    icon: <HomeOutlined />
  },
  {
    key: '/menu',
    label: '嵌套菜单',
    icon: <AppstoreOutlined />,
    children: [
      {
        key: '/menu/menu1',
        label: '嵌套菜单-1',
        icon: <AppstoreOutlined />
      },
      {
        key: '/menu/menu2',
        label: '嵌套菜单-2',
        icon: <AppstoreOutlined />
      }
    ]
  }
];

export const getFormatMenuList = (list) => {
  const loop = (list) =>
    list.map(({ key, label, icon, children }) => ({
      key,
      icon,
      label: children ? label : <NavLink to={key}>{label}</NavLink>,
      children: children ? loop(children) : undefined
    }));
  return [...loop(list)];
};
