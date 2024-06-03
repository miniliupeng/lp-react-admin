import { LForm } from '@/components';
import { useInlineForm } from '@/hooks';
import { getIpSplinterFormItems } from './helper';
import { getIpSplinter, updateIpSplinter } from '@/api/modules/rule/dos';
import { BoolEnum } from '@/enums';
import { useState } from 'react';

const getValue = (data: any[]) => {
  const res: Record<string, BoolEnum> = {};
  data.forEach((item) => {
    res[item.name] = item.status;
  });
  return res;
};

export const IpSplinter = () => {
  const [protocols, setProtocols] = useState<any[]>([]);
  const options = protocols.map((item) => ({ label: item.name, value: item.name }));
  const { form, onFinish } = useInlineForm({
    query: () =>
      getIpSplinter().then((data) => {
        setProtocols(data);
        return {
          check: getValue(data)
        };
      }),
    update: (data) =>
      updateIpSplinter({
        protocols: protocols.map((item) => ({
          ...item,
          status: data.check[item.name]
        }))
      }),
    msgKey: 'reason'
  });
  return (
    <div>
      <h1 className="text-4 mb-4">IP碎片攻击</h1>
      <LForm form={form} onFinish={onFinish} items={getIpSplinterFormItems(options)} />
    </div>
  );
};
