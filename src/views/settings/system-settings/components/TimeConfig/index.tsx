// import { useRequest } from 'ahooks';
import { Button, DatePicker, Form, Input, Select, Switch } from 'antd';

export const TimeConfig = () => {
  const [form] = Form.useForm();
  // const {a } = useRequest()
  return (
    <div>
      <h1 className="text-4 mb-4">系统时间设置</h1>
      <Form
        form={form}
        // onFinish={onFinish}
        labelCol={{ style: { width: 150 } }}
        className="max-w-600px"
      >
        <Form.Item label="时区设置" name="time_zone">
          <Select options={[]} />
        </Form.Item>
        <Form.Item label="系统时间" name="date_time">
          <DatePicker showTime className="w-full" />
        </Form.Item>
        <Form.Item label="自动与时间服务器同步" name="sync_status" valuePropName="checked">
          <Switch />
        </Form.Item>
        <Form.Item label="时间服务器地址" name="sync_time_addr">
          <Input allowClear />
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
