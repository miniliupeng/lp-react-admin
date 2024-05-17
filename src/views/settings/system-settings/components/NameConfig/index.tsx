import { useInlineForm } from '@/hooks';
import {
  getSystemSettingsConfigService,
  updateSystemSettingsConfigService
} from '@/services/system-settings';
import { Button, Form, Input } from 'antd';

export const NameConfig = () => {
  const { form, onFinish } = useInlineForm({
    query: getSystemSettingsConfigService,
    update: updateSystemSettingsConfigService
  });
  return (
    <div>
      <h1 className="text-4 mb-4">名称设置</h1>
      <Form
        initialValues={{
          product_name: '产品名称'
        }}
        form={form}
        onFinish={onFinish}
        labelCol={{ style: { width: 150 } }}
        className="max-w-600px"
      >
        <Form.Item label="浏览器页签名称" name="browser_tab_name">
          <Input allowClear />
        </Form.Item>
        <Form.Item label="系统名称" name="sys_name">
          <Input allowClear maxLength={20} />
        </Form.Item>
        <Form.Item label="版权信息" name="copyright_info">
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
