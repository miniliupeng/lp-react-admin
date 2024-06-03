import {
  addWeakPasswordDict,
  deleteWeakPasswordDict,
  getWeakPasswordDictList,
  updateWeakPasswordDict,
  updateWeakPasswordDictStatus
} from '@/api/modules/rule/weak-password';
import { LTable, SearchForm } from '@/components';
import { useFormModal, useTable } from '@/hooks';
import { getColumns, getFormItems } from './helper';
import { useRequest } from 'ahooks';
import { message } from 'antd';
import { DictForm } from './DictForm';
import { Operate } from './Operate';

export const Dict = () => {
  const { loading, dataSource, pagination, onSearch, refresh } = useTable({
    service: getWeakPasswordDictList
  });
  const { run: onEnable } = useRequest(updateWeakPasswordDictStatus, {
    manual: true,
    onSuccess: (res) => {
      refresh();
      message.success(res.reason);
    }
  });
  const { run: onDelete } = useRequest(deleteWeakPasswordDict, {
    manual: true,
    onSuccess: (res) => {
      refresh();
      message.success(res.reason);
    }
  });
  const openModal = useFormModal({
    title: '弱口令',
    content: <DictForm />,
    add: (data) => addWeakPasswordDict({ ...data, ...data.hash, ...data.salt, hash: undefined }),
    update: (data) =>
      updateWeakPasswordDict({ ...data, ...data.hash, ...data.salt, hash: undefined }),
    refresh
  });
  return (
    <div>
      <SearchForm items={getFormItems()} onSearch={onSearch} />
      <LTable
        actions={<Operate onAdd={() => openModal()} refresh={refresh} />}
        loading={loading}
        dataSource={dataSource}
        pagination={pagination}
        columns={getColumns(onEnable, openModal, onDelete)}
      />
    </div>
  );
};
