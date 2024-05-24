import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import StickyBox from 'react-sticky-box';
interface LTabsProps extends TabsProps {
  headerFixed?: boolean;
}

const renderTabBar: TabsProps['renderTabBar'] = (props, DefaultTabBar) => (
  <StickyBox offsetTop={-15} style={{ zIndex: 3 }}>
    <DefaultTabBar {...props} className="bg-white" />
  </StickyBox>
);

export const LTabs = ({ headerFixed, ...props }: LTabsProps) => {
  return <Tabs renderTabBar={headerFixed ? renderTabBar : undefined} {...props} />;
};
