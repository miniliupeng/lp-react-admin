import { LForm } from '@/components';
import { LFormItem } from '@/components/LForm/LFormItem';
import { FormItemTypeEnum } from '@/components/LForm/interface';
import { CONFIDENCE_OPTIONS_NEW, SEVERITY_LEVEL_OPTIONS_NEW2 } from '@/config/options/ioc';
import { Form, FormInstance } from 'antd';

const iocNameMap = {
  1: 'IP',
  2: 'IP',
  3: '域名',
  4: '域名',
  5: 'URL'
};

export const IocForm = ({ form, option }: { form?: FormInstance; option: any }) => {
  return (
    <LForm
      form={form}
      labelCol={{
        span: 4
      }}
      initialValues={{
        ioc_type: 1,
        enable: true
      }}
      items={[
        {
          type: FormItemTypeEnum.RadioGroup,
          fProps: {
            label: 'IOC类型',
            name: 'ioc_type'
          },
          props: {
            options: [
              { label: 'IP', value: 1 },
              { label: 'IP:端口', value: 2 },
              { label: '域名', value: 3 },
              { label: '域名:端口', value: 4 },
              { label: 'URL', value: 5 }
            ]
          }
        },
        {
          type: FormItemTypeEnum.Render,
          render: () => (
            <Form.Item
              noStyle
              shouldUpdate={(prevValues, currentValues) =>
                prevValues.ioc_type !== currentValues.ioc_type
              }
            >
              {({ getFieldValue }) => {
                const ioc_type = getFieldValue('ioc_type');
                return (
                  <>
                    <LFormItem
                      type={FormItemTypeEnum.Input}
                      fProps={{
                        name: 'intelligence_ioc',
                        label: iocNameMap[ioc_type],
                        rules: [{ required: true }]
                      }}
                    />
                    {[2, 4].includes(ioc_type) && (
                      <LFormItem
                        type={FormItemTypeEnum.Input}
                        fProps={{
                          name: 'port',
                          label: '端口',
                          rules: [{ required: true }]
                        }}
                      />
                    )}
                  </>
                );
              }}
            </Form.Item>
          )
        },
        {
          type: FormItemTypeEnum.TreeSelect,
          fProps: {
            label: '威胁类型',
            name: 'threat_type',
            rules: [{ required: true }]
          },
          props: {
            treeCheckable: true,
            treeData: [
              {
                name: '全部',
                children: option
              }
            ],
            fieldNames: {
              label: 'name',
              value: 'name'
            },
            showCheckedStrategy: 'SHOW_PARENT',
            maxTagCount: 1,
            treeNodeFilterProp: 'name'
          }
        },
        {
          type: FormItemTypeEnum.Select,
          fProps: {
            label: '威胁级别',
            name: 'threat_level',
            rules: [{ required: true }]
          },
          props: {
            options: SEVERITY_LEVEL_OPTIONS_NEW2
          }
        },
        {
          type: FormItemTypeEnum.Select,
          fProps: {
            label: '可信度',
            name: 'confidence',
            rules: [{ required: true }]
          },
          props: {
            options: CONFIDENCE_OPTIONS_NEW
          }
        },
        {
          type: FormItemTypeEnum.Input,
          fProps: {
            label: '组织',
            name: 'organize'
          }
        }
      ]}
    />
  );
};
