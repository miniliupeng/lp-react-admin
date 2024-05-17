import { addHomeNet, delHomeNet, getHomeNet } from '@/api/modules/network';
import { TagGroup } from '@/components';
import { useRequest } from 'ahooks';
import { message } from 'antd';

export const HomeNet = () => {
  const { data, refresh } = useRequest(async () => {
    const res = await getHomeNet();
    return res.data.homenet.map((item) => ({ name: item, closable: true }));
  });
  const { run: add } = useRequest(addHomeNet, {
    manual: true,
    onSuccess: (res) => {
      message.error(res.data);
      refresh();
    }
  });
  const { run: del } = useRequest(delHomeNet, {
    manual: true,
    onSuccess: (res) => {
      message.error(res.data);
      refresh();
    }
  });
  return (
    <div>
      <h1 className="text-4 mb-4">HomeNet配置</h1>
      <TagGroup
        value={data}
        onAdd={(name) => add({ ip: name })}
        onDelete={(name) => del({ ip: name })}
      />
    </div>
  );
};
