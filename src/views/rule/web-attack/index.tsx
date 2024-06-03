import { useFormModal, useModal, useTable } from '@/hooks';
import { getColumns, getFormItems } from './helper';
import { LTable, SearchForm } from '@/components';
import { useRequest } from 'ahooks';
import {
  getRuleOptions,
  getRuleWebList,
  updateRuleWeb,
  updateRuleWebStatus
} from '@/api/modules/rule/web-attack';
import { WebAttackForm } from './WebAttackForm';
import { getSeconds } from '@/utils/time';
import { message } from 'antd';

const WebAttack = () => {
  const { loading, dataSource, pagination, onSearch, refresh } = useTable({
    service: getRuleWebList
  });
  const { data: option } = useRequest(getRuleOptions);
  const { run: onEnable } = useRequest(updateRuleWebStatus, {
    manual: true,
    onSuccess: (res) => {
      refresh();
      message.success(res.reason);
    }
  });
  const openModal = useFormModal({
    title: '配置',
    content: <WebAttackForm option={option} />,
    update: (data) => {
      return updateRuleWeb({
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

export default WebAttack;
