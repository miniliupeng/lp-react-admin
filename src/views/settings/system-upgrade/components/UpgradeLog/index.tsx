import { getUpgradeLogs } from '@/api/modules/system-upgrade';
import { LTable } from '@/components';
import { useTable } from '@/hooks';
import { columns } from './helper';

export const UpgradeLog = () => {
  const { loading, dataSource, pagination } = useTable({
    service: getUpgradeLogs
  });

  return (
    <div>
      <LTable loading={loading} dataSource={dataSource} pagination={pagination} columns={columns} />
    </div>
  );
};
