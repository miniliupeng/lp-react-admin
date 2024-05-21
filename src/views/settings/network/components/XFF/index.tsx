import { getXFF, updateXFF } from '@/api/modules/network';
import { LForm } from '@/components';
import { useInlineForm } from '@/hooks';

import { message } from 'antd';
import { formItems } from './helper';

export const XFF = () => {
  const { form, onFinish } = useInlineForm({
    query: () => getXFF(),
    update: (data) => updateXFF(data).then(() => message.success('更新成功')),
    showMsg: false
  });
  return (
    <div>
      <h1 className="text-4 mb-4">XFF字段</h1>
      <LForm
        form={form}
        onFinish={onFinish}
        className="max-w-600px"
        labelCol={{ style: { width: 150 } }}
        items={formItems}
      />
    </div>
  );
};
