import { getAuditLogList } from '@/api/modules/operating-state';
import { useTable } from '@/hooks';
import { columns, getFormItems } from './helper';
import { LTable, SearchForm } from '@/components';

export const AuditLog = () => {
  const { loading, dataSource, pagination, extraData, onSearch } = useTable({
    service: getAuditLogList
  });
  const optOptions = extraData.opt_type?.map((item) => ({
    label: item.opt_action,
    value: item.opt_action
  }));
  return (
    <div>
      <SearchForm items={getFormItems(optOptions)} onSearch={onSearch} />
      <LTable loading={loading} dataSource={dataSource} pagination={pagination} columns={columns} />
    </div>
  );
};
