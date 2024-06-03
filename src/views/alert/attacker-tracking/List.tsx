import { getAttackerList } from '@/api/modules/alert/attacker-tracking';
import { LForm, LTable } from '@/components';
import { useTable } from '@/hooks';
import { columns, formItems } from './helper';
import { useDebounceFn } from 'ahooks';

export const List = ({ attackerData, setAttackerData }) => {
  const { loading, dataSource, pagination, onSearch } = useTable({
    service: (params) =>
      getAttackerList(params).then((res) => {
        setAttackerData(res.data.attackers[0]);
        return {
          list: res.data.attackers,
          total: res.data.total
        };
      }),
    initParams: {
      order_by: 'lastest'
    }
  });
  const { run: debounceSearch } = useDebounceFn(onSearch);

  return (
    <div className="border-r border-solid border-[var(--admin-border-1)] pr-4 overflow-auto">
      <LForm
        initialValues={{ order_by: 'lastest' }}
        items={formItems}
        layout="inline"
        className="mb-4"
        onValuesChange={debounceSearch}
      />
      <LTable
        onRow={(record) => ({
          onClick: () => {
            setAttackerData(record);
          }
        })}
        rowClassName={(record) =>
          attackerData.id === record.id ? 'ant-table-row-selected' : 'cursor-pointer'
        }
        loading={loading}
        dataSource={dataSource}
        pagination={pagination}
        columns={columns}
      />
    </div>
  );
};
