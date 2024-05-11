import { MenuProps } from 'antd';
import { create } from 'zustand';

type MenuItem = Required<MenuProps>['items'][number];

interface AuthStore {
  menuList: MenuItem[];
  getHorizontalMenuList: () => MenuItem[];
  getVerticalMenuList: (key: string) => MenuItem[];
}
export const useAuthStore = create<AuthStore>()((set, get) => ({
  menuList: [
    {
      key: '/home',
      label: '首页',
      children: [
        {
          key: '/home/network-flow',
          label: '接口流量',
          icon: 'antd:AppstoreOutlined'
        },
        {
          key: '/home/session-stats',
          label: '会话状态',
          icon: 'antd:AppstoreOutlined'
        }
      ]
    },
    {
      key: '/rule',
      label: '检测规则',
      children: [
        {
          key: '/rule/ssl',
          label: '检测协议',
          icon: 'local:react'
        }
      ]
    },
    {
      key: '/alert',
      label: '威胁告警'
    },
    {
      key: '/response',
      label: '响应处置'
    },
    {
      key: '/flow',
      label: '流量管理'
    },
    {
      key: '/settings',
      label: '设置',
      children: [
        {
          key: '/settings/user-login',
          label: '用户登录',
          icon: 'antd:AppstoreOutlined'
        },
        {
          key: '/settings/system-settings',
          label: '系统设置',
          icon: 'antd:AppstoreOutlined'
        }
      ]
    }
  ],
  getHorizontalMenuList: () =>
    get().menuList.map(({ key, label }) => ({
      key,
      label
    })),
  getVerticalMenuList: (rootKey: string) =>
    get().menuList.find((menu) => menu?.key === rootKey)?.children
}));
