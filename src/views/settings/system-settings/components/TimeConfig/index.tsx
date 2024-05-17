import {
  getTimeByTimeZoneService,
  getTimeConfigService,
  getTimeZoneService,
  syncStatusService,
  syncTimeService,
  updateTimeConfigService
} from '@/services/system-settings';
import { useRequest } from 'ahooks';
import { App, Button, Form, Input, Select, message } from 'antd';
import { DatePicker, Switch } from '@/components';
import { BoolEnum } from '@/enums';
export const TimeConfig = () => {
  const { modal } = App.useApp();
  const [form] = Form.useForm();
  const { refresh } = useRequest(getTimeConfigService, {
    onSuccess: (data) => form.setFieldsValue(data)
  });
  const { data: timeZoneOptions } = useRequest(getTimeZoneService);

  const onFinish = async ({ sync_status }) => {
    const values = form.getFieldsValue(true);
    if (sync_status === BoolEnum.FALSE1) {
      // 未开启与时间服务器同步
      modal.confirm({
        title: '确认修改系统时间吗？',
        onOk: async () => {
          const res = await updateTimeConfigService(values);
          message.success(res.reason);
          refresh();
        }
      });
    } else {
      const { status } = await syncStatusService(values);
      if (status === 2) {
        return message.error('修改失败，请检查NTP服务器的时间准确性');
      }
      modal.confirm({
        title:
          status === 0
            ? '系统修改时间需要重启服务，大概需要15分钟，请确认'
            : '确认修改时间吗?请确认修改时间的准确性',
        onOk: async () => {
          const res = await syncTimeService(values);
          message.success(res.reason);
          refresh();
        }
      });
    }
  };
  const onTimeZoneChange = async (time_zone) => {
    const sys_time = await getTimeByTimeZoneService({ time_zone });
    form.setFieldsValue({ sys_time });
  };
  return (
    <div>
      <h1 className="text-4 mb-4">系统时间设置</h1>
      <Form
        form={form}
        onFinish={onFinish}
        labelCol={{ style: { width: 150 } }}
        className="max-w-600px"
      >
        <Form.Item label="时区设置" name="time_zone">
          <Select
            options={timeZoneOptions}
            fieldNames={{
              label: 'name',
              value: 'zone_short'
            }}
            onChange={onTimeZoneChange}
          />
        </Form.Item>
        <Form.Item label="系统时间" name="sys_time">
          <DatePicker disabled />
        </Form.Item>
        <Form.Item label="自动与时间服务器同步" name="sync_status">
          <Switch field={[BoolEnum.TRUE2, BoolEnum.FALSE1]} />
        </Form.Item>
        <Form.Item
          noStyle
          shouldUpdate={(prevValues, currentValues) =>
            prevValues.sync_status !== currentValues.sync_status
          }
        >
          {({ getFieldValue }) =>
            getFieldValue('sync_status') === BoolEnum.TRUE2 ? (
              <>
                <Form.Item
                  label="时间服务器地址"
                  name="addr"
                  rules={[
                    {
                      required: true,
                      message:
                        '请输入如下时间服务器地址: cn.pool.ntp.org、asia.pool.ntp.org、cn.ntp.org.cn、ntp.aliyun.com、time.asia.apple.com、time.windows.com'
                    }
                  ]}
                >
                  <Input allowClear />
                </Form.Item>
              </>
            ) : null
          }
        </Form.Item>
        <Form.Item
          wrapperCol={{
            style: {
              marginLeft: 150
            }
          }}
        >
          <Button type="primary" htmlType="submit">
            保存
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
