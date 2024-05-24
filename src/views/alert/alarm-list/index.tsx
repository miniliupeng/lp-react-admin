import { ButtonGroup, LTable, SearchForm } from '@/components';
import { getColumns, getFormItems } from './helper';
import { useTable } from '@/hooks';
import { exportAlert, getAlarmList } from '@/api/modules/alarm-list';
import { Detail as AlertDetail } from './Detail';
import { DownloadOutlined } from '@ant-design/icons';
import { useRequest } from 'ahooks';
import { Graph } from './Graph';

const AlarmList = () => {
  const { loading, dataSource, pagination, onSearch, extraData, total, searchParams } = useTable({
    service: (params) =>
      getAlarmList(params).then((res) => {
        return {
          ...res.data.alertstat,
          list: res.data.alerts,
          total: res.data.total
        };
      }),
    initParams: {
      start_time: '2024-05-23 15:52:00',
      end_time: '2024-05-23 15:53:00'
    }
  });

  const { run: onExportAlert } = useRequest(exportAlert, {
    manual: true
  });

  return (
    <div>
      <SearchForm
        className="page-wrapper pt-4"
        items={getFormItems()}
        onSearch={(params) =>
          onSearch({
            ...params,
            ...params.time,
            time: undefined
          })
        }
      />
      <Graph data={extraData} loading={loading} />
      <LTable
        title="告警列表"
        total={total}
        actions={
          <ButtonGroup
            options={[
              {
                type: 'primary',
                ghost: true,
                icon: <DownloadOutlined />,
                onClick: () => {
                  console.log(searchParams);
                  onExportAlert(searchParams);
                },
                children: '导出'
              }
            ]}
          />
        }
        className="page-wrapper pt-4"
        loading={loading}
        dataSource={dataSource}
        pagination={pagination}
        columns={getColumns()}
        expandable={{
          expandedRowRender: (record) => <AlertDetail data={record} />
        }}
      />
    </div>
  );
};
export default AlarmList;
