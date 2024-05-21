import { Divider, TabsProps } from 'antd';
import { SystemInfo } from './components/SystemInfo';
import { SystemService } from './components/SystemService';
import { SystemMonitor } from './components/SystemMonitor';

import { AuditLog } from './components/AuditLog';
import { LTabs } from '@/components';

const items: TabsProps['items'] = [
  {
    key: '1',
    label: '系统信息',
    children: (
      <>
        <SystemInfo />
        <Divider />
        <SystemService />
        <Divider />
        <SystemMonitor />
      </>
    )
  },
  {
    key: '2',
    label: '审计日志',
    children: <AuditLog />
  }
];

const OperatingState = () => {
  return (
    <div className="rounded-2 shadow bg-[var(--admin-bg-1)] px-4">
      <LTabs items={items} headerFixed />
    </div>
  );
};

export default OperatingState;
