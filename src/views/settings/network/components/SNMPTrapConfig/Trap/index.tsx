import { Editable } from '@/components';
import { getSNMPTrapDetailService, updateSNMPTrapDetailService } from '@/services/network';
import { useRequest } from 'ahooks';
import { Modal } from 'antd';
import { forwardRef, useImperativeHandle, useState } from 'react';
import { columns, defaultValue } from './helper';
import { useRowSelection } from '@/hooks';
import { message } from 'antd/lib';

export const Trap = forwardRef((_, ref) => {
  const {
    data = defaultValue,
    run,
    mutate
  } = useRequest(getSNMPTrapDetailService, {
    manual: true,
    onSuccess: (data) => {
      rowSelection.onChange(data.filter((item) => item.status === 1).map((item) => item.id));
    }
  });
  const { run: update, loading } = useRequest(updateSNMPTrapDetailService, {
    manual: true,
    onSuccess: (res) => {
      message.success(res.data);
      setOpen(false);
    }
  });
  const rowSelection = useRowSelection();
  const [open, setOpen] = useState(false);
  useImperativeHandle(ref, () => ({
    showModal: () => {
      run();
      setOpen(true);
    }
  }));
  const onChange = (val) => {
    mutate(val);
  };
  const onOk = async () => {
    const values = data.map((item) => ({
      ...item,
      status: rowSelection.selectedRowKeys.includes(item.id) ? 1 : 0
    }));
    update({
      trap_detail: JSON.stringify(values)
    });
  };
  const onCancel = () => {
    setOpen(false);
  };
  return (
    <Modal
      title="SNMP Trap监控项配置"
      open={open}
      width={888}
      onOk={onOk}
      onCancel={onCancel}
      confirmLoading={loading}
    >
      <Editable
        rowSelection={rowSelection}
        className="snmp-table"
        rowClassName={() => 'editable-row'}
        rowKey={'id'}
        size="small"
        columns={columns}
        pagination={false}
        dataSource={data}
        bordered
        onChange={onChange}
      />
    </Modal>
  );
});
