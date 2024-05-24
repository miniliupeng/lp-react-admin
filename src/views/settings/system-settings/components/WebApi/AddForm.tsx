import { LForm } from '@/components';
import { FormItemTypeEnum } from '@/components/LForm/interface';
import { FormInstance } from 'antd';

export const AddForm = ({ form }: { form?: FormInstance }) => {
  return (
    <LForm
      form={form}
      labelCol={{
        span: 5
      }}
      items={[
        {
          type: FormItemTypeEnum.Input,
          fProps: {
            label: 'AppName',
            name: 'app_name',
            rules: [{ required: true, message: '请输入AppName' }]
          },
          props: {
            placeholder: '请输入AppName'
          }
        },
        {
          type: FormItemTypeEnum.TextArea,
          fProps: {
            label: '描述',
            name: 'note',
            rules: [{ required: true, message: '请输入描述' }]
          },
          props: {
            placeholder: '请输入描述'
          }
        }
      ]}
    />
  );
};
