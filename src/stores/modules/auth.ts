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
          key: '/rule/detection-protocol',
          label: '检测协议',
          icon: 'local:react'
        },
        {
          key: '/rule/web-attack',
          label: 'web攻击',
          icon: 'local:react'
        },
        {
          key: '/rule/network-attack',
          label: '网络攻击',
          icon: 'local:react'
        }
      ]
    },
    {
      key: '/alert',
      label: '告警与威胁',
      children: [
        {
          key: '/alert/alarm-list',
          label: '告警调查',
          icon: 'local:react'
        },
        {
          key: '/alert/attacker-tracking',
          label: '攻击者追踪',
          icon: 'local:react'
        }
      ]
    },
    {
      key: '/response',
      label: '响应处置'
    },
    {
      key: '/flow',
      label: '流量管理',
      children: [
        {
          key: '/flow/capture',
          label: '流量抓取',
          icon: 'antd:AppstoreOutlined'
        },
        {
          key: '/flow/outgoing-log',
          label: '日志外发',
          icon: 'antd:AppstoreOutlined'
        },
        {
          key: '/flow/detection-tool',
          label: '检测工具',
          icon: 'antd:AppstoreOutlined'
        }
      ]
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
        },
        {
          key: '/settings/network',
          label: '网络设置',
          icon: 'antd:AppstoreOutlined'
        },
        {
          key: '/settings/operating-state',
          label: '运行状态',
          icon: 'antd:AppstoreOutlined'
        },
        {
          key: '/settings/system-upgrade',
          label: '系统升级',
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
