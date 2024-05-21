import { Button, Form, Input, InputNumber } from 'antd';
import { useRequest } from 'ahooks';
import { getSessionId, getSshCode } from '@/api/modules/user';

export const SecurityOperations = () => {
  const { data: qrcode } = useRequest(getSshCode);
  const onFinish = async (values) => {
    const session_id = await getSessionId(values);
    window.open(
      `${window.location.origin}${window.location.pathname}#/webssh/terminal?session_id=${session_id}`
    );
  };
  return (
    <div>
      <h1 className="text-4 mb-4">安全运维</h1>
      <div className="flex gap-16">
        <Form
          initialValues={{
            address: window.location.hostname,
            port: 22,
            user: 'xdrsec'
          }}
          onFinish={onFinish}
        >
          <Form.Item label="IP" name="address" rules={[{ required: true }]}>
            <Input allowClear />
          </Form.Item>
          <Form.Item label="端口" name="port" rules={[{ required: true }]}>
            <InputNumber min={1} max={65535} className="w-full" />
          </Form.Item>
          <Form.Item label="账号" name="user" rules={[{ required: true }]}>
            <Input allowClear />
          </Form.Item>
          <Form.Item label="密码" name="pwd" rules={[{ required: true }]}>
            <Input.Password allowClear />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              连接
            </Button>
          </Form.Item>
        </Form>
        <div className="flex-col items-center gap-2">
          <span>扫码登录</span>
          <img width="160px" height="160px" src={`data:image/png;base64,${qrcode}`} />
          <span>使用飞书app扫码获取登录信息</span>
        </div>
      </div>
    </div>
  );
};
