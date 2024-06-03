import { useFormModal, useModal, useTable } from '@/hooks';
import { getColumns, getFormItems } from './helper';
import { LTable, SearchForm } from '@/components';
import { useRequest } from 'ahooks';
import {
  getRuleNetList,
  updateRuleNet,
  updateRuleNetStatus
} from '@/api/modules/rule/network-attack';
import { NetAttackForm } from './NetAttackForm';
import { getSeconds } from '@/utils/time';
import { message } from 'antd';
import { getRuleOptions } from '@/api/modules/rule/web-attack';

const NetworkAttack = () => {
  const { loading, dataSource, pagination, onSearch, refresh } = useTable({
    service: getRuleNetList
  });
  const { data: option } = useRequest(getRuleOptions);
  const { run: onEnable } = useRequest(updateRuleNetStatus, {
    manual: true,
    onSuccess: (res) => {
      refresh();
      message.success(res.reason);
    }
  });
  const openModal = useFormModal({
    title: '配置',
    content: <NetAttackForm option={option} />,
    update: (data) => {
      return updateRuleNet({
        ...data,
        ids: [data.id],
        alarm_threshold_times: data.alarm_threshold_times,
        alarm_threshold_s: data.alarm_threshold_s ? getSeconds(data.alarm_threshold_s) : 0,
        alarm_interval_s: data.alarm_interval_s ? getSeconds(data.alarm_interval_s) : 0
      });
    },
    refresh
  });
  const { showModal: openDetailModal } = useModal();
  return (
    <div>
      <SearchForm
        className="page-wrapper pt-4 mb-4"
        items={getFormItems(option)}
        onSearch={onSearch}
      />
      <LTable
        className="page-wrapper pt-4"
        loading={loading}
        dataSource={dataSource}
        pagination={pagination}
        columns={getColumns(onEnable, openModal, openDetailModal)}
      />
    </div>
  );
};

export default NetworkAttack;
