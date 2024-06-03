import {
  addCaptureTask,
  deleteCaptureTask,
  downloadCaptureTask,
  getCaptureList,
  stopCaptureTask
} from '@/api/modules/flow/capture';
import { LTable } from '@/components';
import { useFormModal, useTable } from '@/hooks';
import { getColumns } from './helper';
import { Button, message } from 'antd';
import { Form } from './Form';
import { useRequest } from 'ahooks';
import { PlusOutlined } from '@ant-design/icons';

const Capture = () => {
  const { loading, dataSource, pagination, refresh } = useTable({
    service: getCaptureList
  });
  const openModal = useFormModal({
    titleText: '任务',
    content: <Form />,
    refresh,
    add: (data) => addCaptureTask({ ...data, ...data.time, time: undefined })
  });
  const { run: onStop } = useRequest(stopCaptureTask, {
    manual: true,
    onSuccess: (res) => {
      message.success(res.reason);
      refresh();
    }
  });
  const { run: onDelete } = useRequest(deleteCaptureTask, {
    manual: true,
    onSuccess: (res) => {
      message.success(res.reason);
      refresh();
    }
  });
  const { run: onDownload } = useRequest(downloadCaptureTask, {
    manual: true
  });
  return (
    <div className="page-wrapper pt-4">
      <LTable
        actions={
          <Button type="primary" ghost onClick={() => openModal()} icon={<PlusOutlined />}>
            新增
          </Button>
        }
        loading={loading}
        dataSource={dataSource}
        pagination={pagination}
        columns={getColumns(onStop, onDelete, onDownload)}
      />
    </div>
  );
};

export default Capture;
