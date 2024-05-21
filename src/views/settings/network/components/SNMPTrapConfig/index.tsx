import { Switch } from '@/components';
import { BoolEnum } from '@/enums';
import { ModalRef, useInlineForm } from '@/hooks';
import { Button, Form, Input, InputNumber } from 'antd';
import { Trap } from './Trap';
import { useRef } from 'react';
import { getSNMPTrap, updateSNMPTrap } from '@/api/modules/network';
export const SNMPTrapConfig = () => {
  const { form, onFinish, loading } = useInlineForm({
    query: () => getSNMPTrap().then((res) => res.data),
    update: updateSNMPTrap
  });

  const TrapRef = useRef() as React.MutableRefObject<ModalRef>;
  return (
    <div>
      <div className="flex mb-4">
        <h1 className="text-4">SNMP Trap配置</h1>
        <Button
          type="primary"
          ghost
          className="border-0"
          onClick={() => TrapRef.current.showModal()}
        >
          编辑SNMP Trap
        </Button>
      </div>
      <Form
        form={form}
        onFinish={onFinish}
        className="max-w-600px"
        labelCol={{ style: { width: 150 } }}
      >
        <Form.Item label="SNMP Trap开关" name="snmp_trap_status">
          <Switch field={[BoolEnum.TRUE, BoolEnum.FALSE]} />
        </Form.Item>
        <Form.Item label="SNMP Trap服务器IP" name="snmp_trap_ip">
          <Input />
        </Form.Item>
        <Form.Item label="SNMP Trap服务器端口" name="snmp_trap_port">
          <InputNumber min={1} max={65535} className="w-full" />
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
      <Trap ref={TrapRef} />
    </div>
  );
};
