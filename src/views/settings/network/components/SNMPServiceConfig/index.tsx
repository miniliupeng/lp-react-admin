import { Switch } from '@/components';
import { BoolEnum } from '@/enums';
import { useInlineForm, useModal } from '@/hooks';
import { Button, Form, Input, InputNumber, Select } from 'antd';
import { Oid } from './Oid';
import { getSNMPServer, updateSNMPServer } from '@/api/modules/network';
export const SNMPServiceConfig = () => {
  const { form, onFinish, loading } = useInlineForm({
    query: () => getSNMPServer().then((res) => res.data),
    update: updateSNMPServer
  });

  const { showModal } = useModal();
  return (
    <div>
      <div className="flex mb-4">
        <h1 className="text-4">SNMP服务配置</h1>
        <Button
          type="primary"
          ghost
          className="border-0"
          onClick={() =>
            showModal({
              width: 888,
              title: 'SNMP OID列表',
              content: <Oid />,
              footer: null
            })
          }
        >
          oid格式说明
        </Button>
      </div>

      <Form
        form={form}
        onFinish={onFinish}
        className="max-w-600px"
        labelCol={{ style: { width: 150 } }}
      >
        <Form.Item label="SNMP服务开关" name="snmp_server_status">
          <Switch field={[BoolEnum.TRUE, BoolEnum.FALSE]} />
        </Form.Item>
        <Form.Item label="SNMP服务端口" name="snmp_server_port">
          <InputNumber disabled className="w-full" />
        </Form.Item>
        <Form.Item label="SNMP服务协议类型" name="snmp_server_type">
          <Input disabled />
        </Form.Item>
        <Form.Item label="SNMP版本" name="snmp_server_version">
          <Select
            options={[
              {
                label: 'SNMPv1',
                value: 'SNMPv1'
              },
              {
                label: 'SNMPv2c',
                value: 'SNMPv2c'
              }
            ]}
          />
        </Form.Item>
        <Form.Item label="团体字" name="snmp_server_character">
          <Input />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            style: {
              marginLeft: 150
            }
          }}
        >
          <Button type="primary" htmlType="submit" loading={loading}>
            保存
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
