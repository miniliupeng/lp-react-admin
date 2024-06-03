import { LTable, SearchForm, initTime } from '@/components';
import { formItems, getColumns } from './helper';
import { useTable } from '@/hooks';
import { useState } from 'react';
import { Detail } from './Detail';
import { Tip } from '../weak-password/Tip';
import { useRequest } from 'ahooks';
import { Graph } from './Graph';
import { getSensitiveInfoList, revealSensitiveInfo } from '@/api/modules/asset/sensitive-info';

const SensitiveInfo = () => {
  const { loading, dataSource, pagination, onSearch, extraData, total } = useTable({
    service: (params) =>
      getSensitiveInfoList(params).then((res) => ({
        ...res.data.stat,
        list: res.data.list,
        total: res.data.total
      })),
    initParams: {
      ...initTime
    }
  });

  const [pwdMap, setPwdMap] = useState<Record<string, any>>({});
  const onResetPwdMap = () => setPwdMap({});
  const onResetPwdMapById = (id) => setPwdMap((prev) => ({ ...prev, [id]: undefined }));
  const { runAsync: onReveal } = useRequest(revealSensitiveInfo, {
    manual: true,
    onSuccess: (res) => {
      setPwdMap((prev) => ({ ...prev, [res.data.id]: res.data }));
    }
  });
  console.log(pwdMap);

  return (
    <div>
      <SearchForm
        className="page-wrapper pt-4"
        items={formItems}
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
        title="敏感信息列表"
        desc={<Tip onResetPwdMap={onResetPwdMap} />}
        total={total}
        className="page-wrapper pt-4"
        loading={loading}
        dataSource={dataSource}
        pagination={pagination}
        columns={getColumns(pwdMap)}
        expandable={{
          expandedRowRender: (record) => (
            <Detail
              data={record}
              pwdMap={pwdMap}
              onReveal={onReveal}
              onResetPwdMapById={onResetPwdMapById}
            />
          )
        }}
      />
    </div>
  );
};

export default SensitiveInfo;
