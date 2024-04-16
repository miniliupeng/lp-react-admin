import { Menu } from 'antd';
import type { MenuProps, TabsProps } from 'antd';
import Logo from './Logo';
import { getFormatMenuList, menuList } from './helper';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useTabStore } from '@/stores';
import { getFlatList } from '@/utils/array';

const LayoutMenu = () => {
  const { pathname } = useLocation();
  const { tabList, setTabList } = useTabStore();
  const [openKeys, setOpenKeys] = useState<string[]>([pathname.split('/').slice(0, 2).join('/')]);
  const formatMenuList = getFormatMenuList(menuList);
  const flatMenuList = getFlatList(menuList) as MenuProps['items'];
  useEffect(() => {
    const key = pathname.split('/').slice(0, 2).join('/');
    setOpenKeys([key]);
  }, [pathname]);
  const onOpenChange = (openKeys: string[]) => {
    setOpenKeys([openKeys[openKeys.length - 1]]);
  };
  const onMenuClick: MenuProps['onClick'] = ({ key }: { key: string }) => {
    console.log('onClick');

    if (tabList?.find((tab) => tab.key === key)) return;
    console.log(flatMenuList);

    const menu = flatMenuList?.find(
      (item: any) => item.key === key
    ) as Required<TabsProps>['items'][number];
    setTabList([...tabList!, menu]);
  };
  return (
    <div className="h-full flex flex-col">
      <Logo></Logo>
      <Menu
        className="flex-1 overflow-auto"
        mode="inline"
        triggerSubMenuAction="click"
        selectedKeys={[pathname]}
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        onClick={onMenuClick}
        items={formatMenuList}
      ></Menu>
    </div>
  );
};

export default LayoutMenu;
