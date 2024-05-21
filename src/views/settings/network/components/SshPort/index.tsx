import { getSshPort, updateSshPort } from '@/api/modules/network';
import { useInlineForm } from '@/hooks';
import { Button, Form, InputNumber } from 'antd';

export const SshPort = () => {
  const { form, onFinish } = useInlineForm({
    query: getSshPort,
    update: updateSshPort,
    msgKey: 'reason'
  });
  return (
    <div>
      <h1 className="text-4 mb-4">SSH端口</h1>
      <Form
        form={form}
        onFinish={onFinish}
        className="max-w-600px"
        labelCol={{ style: { width: 150 } }}
      >
        <Form.Item label="端口号" name="port" rules={[{ required: true }]}>
          <InputNumber min={1} maxLength={65535} className="w-full" />
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
