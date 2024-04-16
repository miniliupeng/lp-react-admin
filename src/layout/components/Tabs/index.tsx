import { Tabs } from 'antd';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import './index.scss';
import { useTabStore } from '@/stores';
const LayoutTabs = () => {
  const { pathname } = useLocation();

  const navigate = useNavigate();
  const [activeKey, setActiveKey] = useState(pathname);
  const { tabList, setTabList } = useTabStore();
  console.log(tabList);

  useEffect(() => {
    setActiveKey(pathname);
  }, [pathname]);
  const onChange = (path: string) => {
    navigate(path);
    setActiveKey(path);
  };
  const onRemoveTab = (key: string) => {
    if (activeKey === key) {
      tabList?.forEach((item, index) => {
        if (item.key === key) {
          const nextTab = tabList[index + 1] || tabList[index - 1];
          if (!nextTab) return;
          onChange(nextTab.key);
        }
      });
    }
    setTabList(tabList?.filter((tab) => tab.key !== key));
  };
  return (
    <div className="layout-tabs-container bg-[var(--admin-bg-1)]">
      <Tabs
        animated
        activeKey={activeKey}
        onChange={onChange}
        hideAdd
        type="editable-card"
        onEdit={(key) => onRemoveTab(key as string)}
        items={tabList}
      />
    </div>
  );
};

export default LayoutTabs;
