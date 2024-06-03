import { Alert } from 'antd';
import { LForm } from '@/components';
import { useInlineForm } from '@/hooks';
import { floodFormItems } from './helper';
import { getDos, updateDos } from '@/api/modules/rule/dos';

export const Flood = () => {
  const { form, onFinish } = useInlineForm({
    query: () => getDos().then((res) => res.data),
    update: updateDos,
    msgKey: 'reason'
  });
  return (
    <div>
      <h1 className="text-4 mb-4">Flood阈值</h1>
      <Alert
        message="取值范围 0~100000 ，超过设定值时产生告警，0 表示不开启"
        type="warning"
        showIcon
      />
      <LForm
        className="max-w-[500px] mt-4"
        labelCol={{
          style: {
            width: 100
          }
        }}
        form={form}
        onFinish={onFinish}
        items={floodFormItems}
      />
    </div>
  );
};
