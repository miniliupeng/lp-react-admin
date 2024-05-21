import { useRequest } from 'ahooks';
import { App, Table } from 'antd';
import React, { useRef } from 'react';
import { getColumns } from './helper';
import './index.scss';
import { Nic } from '@/api/interface/network';
import { BoolEnum } from '@/enums';
import { UpdateModal } from './UpdateModal';
import { ModalRef } from '@/hooks';
import { DiagnoseModal } from './DiagnoseModal';
import { getNicList, toggleBiz } from '@/api/modules/network';

export const InterfaceManage = () => {
  const { modal } = App.useApp();
  const { data, refresh, loading } = useRequest(getNicList);
  const { runAsync } = useRequest(toggleBiz, {
    manual: true,
    onSuccess: () => {
      refresh();
    }
  });

  const onEnable = async ({ name, buscode, enabled }: Nic) => {
    if (enabled === BoolEnum.FALSE) {
      // 停用
      modal.confirm({
        title: '业务接口开关关闭后无法采集流量，是否仍要关闭？',
        onOk: () => runAsync({ name, buscode, enabled })
      });
    } else {
      runAsync({ name, buscode, enabled });
    }
  };

  const updateModalRef = useRef() as React.MutableRefObject<ModalRef>;
  const onOpenUpdateModal = (data) => {
    updateModalRef.current?.showModal(data);
  };
  const diagnoseModalRef = useRef() as React.MutableRefObject<ModalRef>;
  const onOpenDiagnoseModal = (data) => {
    diagnoseModalRef.current?.showModal(data);
  };

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-4 mb-4">接口管理</h1>
      </div>
      <Table
        rowKey="buscode"
        className="interface-table"
        dataSource={data?.list}
        columns={getColumns(onEnable, onOpenUpdateModal, onOpenDiagnoseModal)}
        showHeader={false}
        pagination={false}
        size="small"
        loading={loading}
      />
      <UpdateModal ref={updateModalRef} support={data?.support} refresh={refresh} />
      <DiagnoseModal ref={diagnoseModalRef} />
    </div>
  );
};
