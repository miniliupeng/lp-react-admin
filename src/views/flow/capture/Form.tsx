import { LForm } from '@/components';
import { LFormItem } from '@/components/LForm/LFormItem';
import { FormItemTypeEnum } from '@/components/LForm/interface';
import { FormInstance, Space } from 'antd';

export const Form = ({ form }: { form?: FormInstance }) => {
  return (
    <LForm
      labelCol={{ span: 4 }}
      form={form}
      items={[
        {
          type: FormItemTypeEnum.Input,
          fProps: {
            label: '任务名称',
            name: 'name',
            rules: [{ required: true, message: '请输入任务名称' }]
          },
          props: {
            maxLength: 32
          }
        },
        {
          type: FormItemTypeEnum.Render,
          fProps: {
            label: '源IP/端口'
          },
          render: () => (
            <Space.Compact className="w-full">
              <LFormItem
                type={FormItemTypeEnum.Input}
                fProps={{ name: 'sip', noStyle: true }}
                props={{ placeholder: 'IP' }}
              />
              <LFormItem
                type={FormItemTypeEnum.Input}
                fProps={{ name: 'sport', noStyle: true }}
                props={{ placeholder: '端口范围0-65535' }}
              />
            </Space.Compact>
          )
        },
        {
          type: FormItemTypeEnum.Render,
          fProps: {
            label: '目标IP/端口'
          },
          render: () => (
            <Space.Compact className="w-full">
              <LFormItem
                type={FormItemTypeEnum.Input}
                fProps={{ name: 'dip', noStyle: true }}
                props={{ placeholder: 'IP' }}
              />
              <LFormItem
                type={FormItemTypeEnum.Input}
                fProps={{ name: 'dport', noStyle: true }}
                props={{ placeholder: '端口范围0-65535' }}
              />
            </Space.Compact>
          )
        },
        {
          type: FormItemTypeEnum.Select,
          fProps: {
            label: '协议',
            name: 'proto',
            rules: [{ required: true, message: '请选择协议' }]
          },
          props: {
            options: [
              { label: 'TCP', value: 'TCP' },
              { label: 'UDP', value: 'UDP' },
              { label: 'ICMP', value: 'ICMP' },
              { label: '其他', value: 'OTHER' }
            ]
          }
        },
        {
          type: FormItemTypeEnum.InputNumber,
          fProps: {
            label: 'VLAN ID',
            name: 'vlanid'
          },
          props: {
            placeholder: '请输入VLAN ID (0-4094)',
            min: 0,
            max: 4094
          }
        },
        {
          type: FormItemTypeEnum.RangePicker,
          fProps: {
            label: '抓包时间',
            name: 'time',
            rules: [{ required: true, message: '请选择抓包时间' }]
          },
          props: {
            className: 'w-full',
            field: ['start_time', 'end_time'],
            showTime: { format: 'HH:mm' }
          }
        },
        {
          type: FormItemTypeEnum.InputNumber,
          fProps: {
            label: '抓包大小',
            name: 'max_size'
          },
          props: {
            placeholder: '请输入抓包大小 (0-1000)',
            min: 0,
            max: 1000,
            addonAfter: 'MB'
          }
        }
      ]}
    />
  );
};
