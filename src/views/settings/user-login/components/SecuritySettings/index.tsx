import { useInlineForm } from '@/hooks';
import { Form, Row, Select } from 'antd';
import { getSafetyConfig, updateSafetyConfig } from '@/api/modules/user';
import { Switch } from '@/components';
import { BoolEnum } from '@/enums';

export const SecuritySettings = () => {
  const { form, onValuesChange } = useInlineForm({
    query: () =>
      getSafetyConfig({
        configuration: 'safety_config'
      }),
    update: updateSafetyConfig
  });

  return (
    <div>
      <h1 className="text-4 mb-4">安全设置</h1>
      <Form form={form} onValuesChange={onValuesChange}>
        <Row className="gap-4">
          <Form.Item label="登录异常账号锁定" name="is_account_lock" valuePropName="checked">
            <Switch field={[BoolEnum.TRUE, BoolEnum.FALSE2]} />
          </Form.Item>
          <Form.Item
            noStyle
            shouldUpdate={(prevValues, currentValues) =>
              prevValues.is_account_lock !== currentValues.is_account_lock
            }
          >
            {({ getFieldValue }) =>
              getFieldValue('is_account_lock') ? (
                <>
                  <Form.Item label="异常登录次数" name="odd_login_times">
                    <Select
                      style={{ width: 120 }}
                      options={[
                        {
                          label: '3次',
                          value: 3
                        },
                        {
                          label: '4次',
                          value: 4
                        },
                        {
                          label: '5次',
                          value: 5
                        }
                      ]}
                    />
                  </Form.Item>
                  <Form.Item label="锁定时间" name="lock_duration">
                    <Select
                      style={{ width: 120 }}
                      options={[
                        {
                          label: '5分钟',
                          value: 5
                        },
                        {
                          label: '10分钟',
                          value: 10
                        },
                        {
                          label: '20分钟',
                          value: 20
                        },
                        {
                          label: '30分钟',
                          value: 30
                        }
                      ]}
                    />
                  </Form.Item>
                </>
              ) : null
            }
          </Form.Item>
        </Row>
        <Row className="gap-4">
          <Form.Item label="页面超时锁定" name="is_page_timeout" valuePropName="checked">
            <Switch field={[BoolEnum.TRUE, BoolEnum.FALSE2]} />
          </Form.Item>
          <Form.Item
            noStyle
            shouldUpdate={(prevValues, currentValues) =>
              prevValues.is_page_timeout !== currentValues.is_page_timeout
            }
          >
            {({ getFieldValue }) =>
              getFieldValue('is_page_timeout') ? (
                <Form.Item label="页面超时时间" name="page_timeout_duration">
                  <Select
                    style={{ width: 120 }}
                    options={[
                      {
                        label: '5分钟',
                        value: 5
                      },
                      {
                        label: '10分钟',
                        value: 10
                      },
                      {
                        label: '20分钟',
                        value: 20
                      },
                      {
                        label: '30分钟',
                        value: 30
                      }
                    ]}
                  />
                </Form.Item>
              ) : null
            }
          </Form.Item>
        </Row>
      </Form>
    </div>
  );
};
