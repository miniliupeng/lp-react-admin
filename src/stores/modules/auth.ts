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
          key: '/home/security-situation',
          label: '安全态势',
          icon: 'local:menu-home-security-situation'
        },
        {
          key: '/home/system-flow',
          label: '系统流量',
          icon: 'local:menu-home-system-flow'
        },
        {
          key: '/home/data-screen',
          label: '大屏',
          icon: 'local:menu-home-data-screen'
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
          icon: 'local:menu-rule-detection-protocol'
        },
        {
          key: '/rule/web-attack',
          label: 'web攻击',
          icon: 'local:menu-rule-web-attack'
        },
        {
          key: '/rule/network-attack',
          label: '网络攻击',
          icon: 'local:menu-rule-network-attack'
        },
        {
          key: '/rule/intelligence',
          label: '自定义威胁情报',
          icon: 'local:menu-rule-intelligence'
        },
        {
          key: '/rule/weak-password',
          label: '弱口令检测',
          icon: 'local:menu-rule-weak-password'
        },
        {
          key: '/rule/dos',
          label: 'Dos检测',
          icon: 'local:menu-rule-dos'
        },
        {
          key: '/rule/file',
          label: '文件检测',
          icon: 'local:menu-rule-file'
        }
      ]
    },
    {
      key: '/asset',
      label: '资产与风险',
      children: [
        {
          key: '/asset/weak-password',
          label: '弱口令',
          icon: 'local:menu-asset-weak-password'
        },
        {
          key: '/asset/sensitive-info',
          label: '敏感信息',
          icon: 'local:menu-asset-sensitive-info'
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
          icon: 'local:menu-alert-alarm-list'
        },
        {
          key: '/alert/attacker-tracking',
          label: '攻击者追踪',
          icon: 'local:menu-alert-attacker-tracking'
        }
      ]
    },
    {
      key: '/response',
      label: '响应处置',
      children: [
        {
          key: '/response/black-list',
          label: '旁路阻断',
          icon: 'local:react'
        }
      ]
    },
    {
      key: '/flow',
      label: '流量管理',
      children: [
        {
          key: '/flow/capture',
          label: '流量抓取',
          icon: 'local:menu-flow-capture'
        },
        {
          key: '/flow/outgoing-log',
          label: '日志外发',
          icon: 'local:menu-flow-outgoing-log'
        },
        {
          key: '/flow/detection-tool',
          label: '检测工具',
          icon: 'local:menu-flow-detection-tool'
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
          icon: 'local:menu-settings-user-login'
        },
        {
          key: '/settings/system-settings',
          label: '系统设置',
          icon: 'local:menu-settings-system-settings'
        },
        {
          key: '/settings/network',
          label: '网络设置',
          icon: 'local:menu-settings-network'
        },
        {
          key: '/settings/operating-state',
          label: '运行状态',
          icon: 'local:menu-settings-operating-state'
        },
        {
          key: '/settings/system-upgrade',
          label: '系统升级',
          icon: 'local:menu-settings-system-upgrade'
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
