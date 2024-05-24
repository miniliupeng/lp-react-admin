import { LForm } from '@/components';
import { LFormItem } from '@/components/LForm/LFormItem';
import { FormItemTypeEnum } from '@/components/LForm/interface';
import { FormInstance } from 'antd';

export const WebAttackForm = ({ form, option }: { form?: FormInstance; option: any }) => {
  return (
    <LForm
      form={form}
      labelCol={{
        span: 4
      }}
      items={[
        {
          type: FormItemTypeEnum.Input,
          fProps: {
            label: '规则编号',
            name: 'id'
          },
          props: {
            disabled: true
          }
        },
        {
          type: FormItemTypeEnum.Input,
          fProps: {
            label: '规则名称',
            name: 'rule_name'
          },
          props: {
            disabled: true
          }
        },
        {
          type: FormItemTypeEnum.Select,
          fProps: {
            label: '告警类型',
            name: 'vuln_type',
            rules: [{ required: true }]
          },
          props: {
            options: option.threat_type
          }
        },
        {
          type: FormItemTypeEnum.Select,
          fProps: {
            label: '告警级别',
            name: 'severity',
            rules: [{ required: true }]
          },
          props: {
            options: option.threat_level
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
            options: option.confidence
          }
        },
        {
          type: FormItemTypeEnum.Select,
          fProps: {
            label: '攻击结果',
            name: 'result',
            rules: [{ required: true }]
          },
          props: {
            options: option.result
          }
        },
        {
          type: FormItemTypeEnum.Render,
          fProps: {
            label: '告警阈值'
          },
          render: () => (
            <div className="flex whitespace-nowrap items-center gap-2">
              <LFormItem
                type={FormItemTypeEnum.TimePicker}
                fProps={{
                  name: 'alarm_threshold_s',
                  noStyle: true,
                  rules: [
                    ({ getFieldValue, setFields }) => ({
                      validator(_, value) {
                        if (
                          (!value || value.format('HH:mm:ss') == '00:00:00') &&
                          getFieldValue('alarm_threshold_times')
                        ) {
                          return Promise.reject(new Error('请同时配置时间和次数!'));
                        }
                        if (!value && !getFieldValue('alarm_threshold_times')) {
                          setFields([
                            {
                              name: 'alarm_threshold_times',
                              errors: []
                            }
                          ]);
                        }
                        return Promise.resolve();
                      }
                    })
                  ]
                }}
                props={{
                  className: 'w-170px'
                }}
              />
              <span>内发生</span>
              <LFormItem
                type={FormItemTypeEnum.InputNumber}
                fProps={{
                  name: 'alarm_threshold_times',
                  noStyle: true,
                  rules: [
                    ({ getFieldValue, setFields }) => ({
                      validator(_, value) {
                        if (!value && getFieldValue('alarm_threshold_s')) {
                          return Promise.reject(new Error('请同时配置时间和次数!'));
                        }
                        if (!value && !getFieldValue('alarm_threshold_s')) {
                          setFields([
                            {
                              name: 'alarm_threshold_s',
                              errors: []
                            }
                          ]);
                        }
                        return Promise.resolve();
                      }
                    })
                  ]
                }}
                props={{
                  min: 0,
                  max: 10000,
                  className: 'w-auto'
                }}
              />
              <span>次以上产生告警</span>
            </div>
          )
        },
        {
          type: FormItemTypeEnum.Render,
          fProps: {
            label: '告警间隔'
          },
          render: () => (
            <div className="flex whitespace-nowrap items-center gap-2">
              <span>每</span>
              <LFormItem
                type={FormItemTypeEnum.TimePicker}
                fProps={{
                  name: 'alarm_interval_s',
                  noStyle: true
                }}
              />
              <span>告警一次</span>
            </div>
          )
        }
      ]}
    />
  );
};
