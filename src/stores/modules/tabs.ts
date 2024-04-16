import type { TabsProps } from 'antd';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type List = TabsProps['items'];

interface TabStore {
  // activeKey: string;
  // setActiveKey: (key: string) => void;
  tabList: List;
  setTabList: (list: List) => void;
}
export const useTabStore = create<TabStore>()(
  persist(
    (set) => ({
      // activeKey: '/home',
      // setActiveKey: (key: string) => set(() => ({ activeKey: key })),
      tabList: [
        {
          label: '首页',
          key: '/home',
          closable: false
        },
        {
          label: '嵌套菜单-2',
          key: '/menu/menu2'
        }
      ],
      setTabList: (list: List) => set(() => ({ tabList: list }))
    }),
    {
      name: 'tabList'
    }
  )
);
