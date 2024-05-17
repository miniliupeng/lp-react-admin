import { FormItemProps, FormItemTypeEnum } from '@/components/LForm/interface';
import { Button } from 'antd';

export const formItems: FormItemProps[] = [
  {
    type: FormItemTypeEnum.Input,
    fProps: {
      label: 'XFF字段',
      name: 'xff',
      rules: [{ required: true }]
    }
  },
  {
    type: FormItemTypeEnum.Render,
    fProps: {
      wrapperCol: {
        style: {
          marginLeft: 150
        }
      }
    },
    render: () => (
      <Button type="primary" htmlType="submit">
        保存
      </Button>
    )
  }
];
