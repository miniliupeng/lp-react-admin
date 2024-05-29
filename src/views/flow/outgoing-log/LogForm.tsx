import { LForm } from '@/components';
import { LFormItem, LFormItems } from '@/components/LForm/LFormItem';
import { FormItemTypeEnum } from '@/components/LForm/interface';
import { Divider, Form, FormInstance } from 'antd';
import { GenerateKey } from './GenerateKey';

import { ATTACK_RESULT_OPTIONS, SEVERITY_LEVEL_OPTIONS } from '@/config/options';

export const LogForm = ({
  form,
  alertTypes,
  logTypes
}: {
  form?: FormInstance;
  alertTypes: any;
  logTypes: any;
}) => {
  return (
    <LForm
      labelCol={{ span: 5 }}
      form={form}
      initialValues={{
        trans_type: 'data',
        trans_way: 'kafka',
        alarm_status: 1,
        log_status: 1,
        trans_info: {
          attack_type: ['全部'],
          severity: ['全部'],
          attack_result: ['全部'],
          traffic_log: ['全部']
        }
      }}
      items={[
        {
          type: FormItemTypeEnum.RadioGroup,
          fProps: {
            label: '传输方式',
            name: 'trans_way'
          },
          props: {
            options: [
              { label: 'kafka', value: 'kafka' },
              { label: 'syslog', value: 'syslog' }
            ]
          }
        },
        {
          type: FormItemTypeEnum.Input,
          fProps: {
            label: '传输内容名称',
            name: 'trans_name',
            rules: [{ required: true, max: 32, message: '超过最大长度32个字符限制!' }]
          }
        },
        {
          type: FormItemTypeEnum.Input,
          fProps: {
            label: 'IP地址',
            name: 'addr',
            rules: [{ required: true }]
          }
        },
        {
          type: FormItemTypeEnum.Input,
          fProps: {
            label: '端口',
            name: 'port',
            rules: [{ required: true }]
          },
          props: {
            placeholder: `多端口请用英文逗号“,”分隔，如23,453,2374`
          }
        },
        {
          type: FormItemTypeEnum.Render,
          render: () => (
            <Form.Item
              noStyle
              shouldUpdate={(pre, cur) => {
                return pre['trans_way'] !== cur['trans_way'];
              }}
            >
              {({ getFieldValue }) => {
                return (
                  <>
                    {(() => {
                      if (getFieldValue(['trans_way']) === 'syslog')
                        return (
                          <LFormItem
                            type={FormItemTypeEnum.RadioGroup}
                            fProps={{
                              label: '传输协议',
                              name: 'proto',
                              rules: [{ required: true }],
                              initialValue: 'TCP'
                            }}
                            props={{
                              options: [
                                { label: 'TCP', value: 'TCP' },
                                { label: 'UDP', value: 'UDP' },
                                { label: 'TCP+TLS', value: 'TCP+TLS' }
                              ]
                            }}
                          />
                        );
                      return (
                        <LFormItem
                          type={FormItemTypeEnum.Input}
                          fProps={{
                            label: 'topic',
                            name: 'topic',
                            rules: [{ required: true }]
                          }}
                        />
                      );
                    })()}
                  </>
                );
              }}
            </Form.Item>
          )
        },
        {
          type: FormItemTypeEnum.Select,
          fProps: {
            label: '加密算法',
            name: 'cipher_alg'
          },
          props: {
            options: [
              { label: 'AES', value: 'AES' },
              { label: 'SM4', value: 'SM4' }
            ]
          }
        },
        {
          type: FormItemTypeEnum.Render,
          render: () => <GenerateKey />
        },
        {
          type: FormItemTypeEnum.TextArea,
          fProps: {
            label: 'TLS证书',
            name: 'tls_client_cert'
          }
        },
        {
          type: FormItemTypeEnum.TextArea,
          fProps: {
            label: 'TLS私钥',
            name: 'tls_client_key'
          }
        },
        {
          type: FormItemTypeEnum.Render,
          render: () => (
            <Divider orientation="left" orientationMargin="0">
              传输内容
            </Divider>
          )
        },
        {
          type: FormItemTypeEnum.Checkbox,
          fProps: {
            name: 'alarm_status',
            className: 'ml-3',
            valuePropName: 'checked',
            getValueFromEvent: (e) => (e.target.checked ? 1 : 0)
          },
          props: {
            children: '威胁告警'
          }
        },
        {
          type: FormItemTypeEnum.Render,
          render: () => (
            <Form.Item
              noStyle
              shouldUpdate={(pre, cur) => {
                return pre['alarm_status'] !== cur['alarm_status'];
              }}
            >
              {({ getFieldValue }) => {
                if (getFieldValue(['alarm_status']) === 1)
                  return (
                    <LFormItems
                      items={[
                        {
                          type: FormItemTypeEnum.TreeSelect,
                          fProps: {
                            label: '告警类型',
                            name: ['trans_info', 'attack_type'],
                            rules: [{ required: true }]
                          },
                          props: {
                            treeCheckable: true,
                            treeData: [
                              {
                                name: '全部',
                                children: alertTypes
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
                          type: FormItemTypeEnum.TreeSelect,
                          fProps: {
                            label: '威胁等级',
                            name: ['trans_info', 'severity'],
                            rules: [{ required: true }]
                          },
                          props: {
                            treeCheckable: true,
                            treeData: [
                              {
                                label: '全部',
                                value: '全部',
                                children: SEVERITY_LEVEL_OPTIONS
                              }
                            ],
                            showCheckedStrategy: 'SHOW_PARENT',
                            maxTagCount: 1,
                            treeNodeFilterProp: 'label'
                          }
                        },
                        {
                          type: FormItemTypeEnum.TreeSelect,
                          fProps: {
                            label: '攻击结果',
                            name: ['trans_info', 'attack_result'],
                            rules: [{ required: true }]
                          },
                          props: {
                            treeCheckable: true,
                            treeData: [
                              {
                                label: '全部',
                                value: '全部',
                                children: ATTACK_RESULT_OPTIONS
                              }
                            ],
                            showCheckedStrategy: 'SHOW_PARENT',
                            maxTagCount: 1
                          }
                        }
                      ]}
                    ></LFormItems>
                  );
              }}
            </Form.Item>
          )
        },
        {
          type: FormItemTypeEnum.TreeSelect,
          fProps: {
            label: (
              <LFormItem
                type={FormItemTypeEnum.Checkbox}
                fProps={{
                  name: 'log_status',
                  className: 'mb-0',
                  valuePropName: 'checked',
                  getValueFromEvent: (e) => (e.target.checked ? 1 : 0)
                }}
                props={{ children: <span className="-mr-2">流量日志</span> }}
              />
            ),
            name: ['trans_info', 'traffic_log']
          },
          props: {
            treeCheckable: true,
            treeData: [
              {
                label: '全部',
                name: '全部',
                children: logTypes
              }
            ],
            fieldNames: {
              label: 'label',
              value: 'name'
            },
            showCheckedStrategy: 'SHOW_PARENT',
            maxTagCount: 1,
            treeNodeFilterProp: 'label'
          }
        }
      ]}
    />
  );
};
