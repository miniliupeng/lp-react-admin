import { Divider, TabsProps } from 'antd';
import { LTabs } from '@/components';
import { ISystemUpgrade } from './components/SystemUpgrade';
import { Certificate } from './components/Certificate';
import { SystemConfig } from './components/SystemConfig';
import { UpgradeLog } from './components/UpgradeLog';

const items: TabsProps['items'] = [
  {
    key: '1',
    label: '系统升级',
    children: (
      <>
        <ISystemUpgrade />
        <Divider />
        <Certificate />
        <Divider />
        <SystemConfig />
      </>
    )
  },
  {
    key: '2',
    label: '升级日志',
    children: <UpgradeLog />
  }
];

const SystemUpgrade = () => {
  return (
    <div className="page-wrapper">
      <LTabs items={items} headerFixed />
    </div>
  );
};

export default SystemUpgrade;
