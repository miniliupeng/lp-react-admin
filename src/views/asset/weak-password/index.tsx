import { LTable, SearchForm, initTime } from '@/components';
import { formItems, getColumns } from './helper';
import { useTable } from '@/hooks';
import { getWeakPasswordList, revealWeakPassword } from '@/api/modules/asset/weak-password';
import { useState } from 'react';
import { Detail } from './Detail';

import { Tip } from './Tip';
import { useRequest } from 'ahooks';
import { Graph } from './Graph';

const WeakPassword = () => {
  const { loading, dataSource, pagination, onSearch, extraData, total } = useTable({
    service: (params) =>
      getWeakPasswordList(params).then((res) => ({
        ...res.data.stat,
        list: res.data.list,
        total: res.data.total
      })),
    initParams: {
      ...initTime
    }
  });
  const [showUsername, setShowUsername] = useState(false);
  const onToggleShowUsername = () => {
    setShowUsername(!showUsername);
  };
  const [pwdMap, setPwdMap] = useState<Record<string, any>>({});
  const onResetPwdMap = () => setPwdMap({});
  const onResetPwdMapById = (id) => setPwdMap((prev) => ({ ...prev, [id]: undefined }));
  const { runAsync: onReveal } = useRequest(revealWeakPassword, {
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
        title="弱口令列表"
        desc={<Tip onResetPwdMap={onResetPwdMap} />}
        total={total}
        className="page-wrapper pt-4"
        loading={loading}
        dataSource={dataSource}
        pagination={pagination}
        columns={getColumns(showUsername, onToggleShowUsername, pwdMap)}
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

export default WeakPassword;
