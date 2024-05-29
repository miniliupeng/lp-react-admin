import {
  addTransport,
  deleteTransport,
  getLogLine,
  getTransportList,
  updateTransport,
  updateTransportStatus
} from '@/api/modules/flow/outgoing-log';
import { LTable } from '@/components';
import { useFormModal, useTable } from '@/hooks';
import { Button, message } from 'antd';
import { formatTransData, getColumns, parseData } from './helper';
import { LogForm } from './LogForm';
import { getAlertTypes, getLogTypes } from '@/api/modules/flow/outgoing-log';
import { useRequest } from 'ahooks';
import { useState } from 'react';
const OutgoingLog = () => {
  const { loading, dataSource, pagination, refresh } = useTable({
    service: getTransportList
  });
  const { data: alertTypes } = useRequest(getAlertTypes);
  const { data: logTypes } = useRequest(getLogTypes);
  const openModal = useFormModal({
    titleText: '传输对象',
    content: <LogForm alertTypes={alertTypes} logTypes={logTypes} />,
    refresh,
    add: (data) => addTransport(formatTransData(data, alertTypes, logTypes)),
    update: (data) => updateTransport(formatTransData(data, alertTypes, logTypes))
  });
  const onEdit = (record) => {
    openModal({ data: parseData(record) });
  };
  const { run: onEnable } = useRequest(updateTransportStatus, {
    manual: true,
    onSuccess: (res) => {
      refresh();
      message.success(res.data);
    }
  });
  const { run: onDelete } = useRequest(deleteTransport, {
    manual: true,
    onSuccess: () => {
      refresh();
      message.success('删除成功');
    }
  });
  // const [period, setPeriod] = useState('0');
  const { data, cancel, run } = useRequest(getLogLine, {
    pollingInterval: 3000,
    defaultParams: [{ period: '0' }]
  });
  const onMenuChange = (e) => {
    // setPeriod(e.key);
    run({ period: e.key });
    if (e.key !== '0') cancel();
  };

  return (
    <div className="page-wrapper pt-4">
      <LTable
        actions={
          <Button type="primary" ghost onClick={() => openModal()}>
            新增
          </Button>
        }
        loading={loading}
        dataSource={dataSource}
        pagination={pagination}
        columns={getColumns(onEnable, onEdit, onDelete, onMenuChange)}
      />
    </div>
  );
};

export default OutgoingLog;
