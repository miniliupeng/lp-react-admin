import { LForm } from '@/components';
import { LFormItem } from '@/components/LForm/LFormItem';
import { FormItemTypeEnum } from '@/components/LForm/interface';
import { Form, FormInstance } from 'antd';

export const DictForm = ({ form }: { form?: FormInstance }) => {
  return (
    <LForm
      form={form}
      labelCol={{
        span: 4
      }}
      initialValues={{
        regular: 0,
        enable: true
      }}
      items={[
        {
          type: FormItemTypeEnum.RadioGroup,
          fProps: {
            label: '弱口令类型',
            name: 'regular'
          },
          props: {
            options: [
              { label: '字符串', value: 0 },
              { label: '正则表达式', value: 1 }
            ]
          }
        },

        {
          type: FormItemTypeEnum.Input,
          fProps: {
            label: '弱口令',
            name: 'pwd',
            rules: [{ required: true, max: 32, message: '超过最大长度32个字符限制!' }]
          }
        },
        {
          type: FormItemTypeEnum.CheckboxGroup,
          fProps: {
            label: '哈希方式',
            name: 'hash'
          },
          props: {
            returnObj: true,
            options: [
              { label: 'MD5', value: 'md5' },
              { label: 'SHA1', value: 'sha1' },
              { label: 'SHA256', value: 'sha256' }
            ]
          }
        },
        {
          type: FormItemTypeEnum.Render,
          render: () => (
            <Form.Item
              noStyle
              shouldUpdate={(prevValues, currentValues) =>
                prevValues.regular !== currentValues.regular
              }
            >
              {({ getFieldValue }) =>
                getFieldValue('regular') === 0 ? (
                  <LFormItem
                    type={FormItemTypeEnum.CheckboxGroup}
                    fProps={{
                      name: 'salt',
                      label: '是否加盐'
                    }}
                    props={{
                      returnObj: true,
                      options: [{ label: '是', value: 'salt' }]
                    }}
                  />
                ) : null
              }
            </Form.Item>
          )
        }
      ]}
    />
  );
};
