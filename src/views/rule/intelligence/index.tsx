import { LTable, SearchForm } from '@/components';
import { getColumns, getFormItems } from './helper';
import { useRequest } from 'ahooks';
import {
  addIocRule,
  deleteIocRule,
  getRuleIocList,
  getThreatTypeOptions,
  updateIocRule,
  updateIocRuleStatus
} from '@/api/modules/rule/intelligence';
import { useFormModal, useTable } from '@/hooks';
import { Operate } from './Operate';
import { IocForm } from './IocForm';
import { message } from 'antd';

const Intelligence = () => {
  const { data: option } = useRequest(() => getThreatTypeOptions().then((res) => res.data));
  const { loading, dataSource, pagination, onSearch, refresh } = useTable({
    service: getRuleIocList
  });
  const openModal = useFormModal({
    title: '自定义威胁情报',
    content: <IocForm option={option} />,
    add: (data) => addIocRule({ ...data, enable: true }),
    update: updateIocRule,
    refresh
  });
  const { run: onEnable } = useRequest(updateIocRuleStatus, {
    manual: true,
    onSuccess: (res) => {
      refresh();
      message.success(res.reason);
    }
  });
  const { run: onDelete } = useRequest(deleteIocRule, {
    manual: true,
    onSuccess: (res) => {
      refresh();
      message.success(res.reason);
    }
  });

  return (
    <div>
      <SearchForm
        className="page-wrapper pt-4 mb-4"
        items={getFormItems(option)}
        onSearch={onSearch}
      />
      <LTable
        actions={<Operate onAdd={() => openModal()} refresh={refresh} />}
        className="page-wrapper pt-4"
        loading={loading}
        dataSource={dataSource}
        pagination={pagination}
        columns={getColumns(onEnable, openModal, onDelete)}
      />
    </div>
  );
};
export default Intelligence;
