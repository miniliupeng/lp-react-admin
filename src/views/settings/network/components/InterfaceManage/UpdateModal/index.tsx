import { interfaceTypeOptions } from '@/config/options/network';
import { useForwardRefModal } from '@/hooks';
import { updateNicService } from '@/services/network';
import { Form, Input, Modal, Radio, message } from 'antd';
import { forwardRef } from 'react';

export const UpdateModal = forwardRef(
  ({ support = [], refresh }: { support?: string[]; refresh: () => void }, ref) => {
    const { form, ...modalProps } = useForwardRefModal({
      ref,
      service: updateNicService,
      onSuccess: (res) => {
        message.success(res.data);
        refresh();
      }
    });
    return (
      <Modal title="配置接口" {...modalProps}>
        <Form form={form} labelCol={{ span: 4 }}>
          <Form.Item label="接口" name="name" rules={[{ required: true }]}>
            <Input disabled />
          </Form.Item>
          <Form.Item
            label="接口类型"
            name="type"
            rules={[
              { required: true },
              {
                warningOnly: true,
                validator: (_, value) => {
                  if (value === 'biz' && !support.includes(form.getFieldValue('chip'))) {
                    return Promise.reject(`当前设备只支持 ${support} 网卡类型`);
                  }
                  return Promise.resolve();
                }
              }
            ]}
          >
            <Radio.Group options={interfaceTypeOptions} />
          </Form.Item>
          <Form.Item
            noStyle
            shouldUpdate={(pre, cur) => {
              return pre['type'] !== cur['type'];
            }}
          >
            {({ getFieldValue }) => {
              if (getFieldValue(['type']) === 'manage')
                return (
                  <>
                    <Form.Item label="IP地址" name="ip" rules={[{ required: true }]}>
                      <Input />
                    </Form.Item>
                    <Form.Item label="子网掩码" name="mask" rules={[{ required: true }]}>
                      <Input />
                    </Form.Item>
                    <Form.Item label="网关" name="gateway" rules={[{ required: true }]}>
                      <Input />
                    </Form.Item>
                  </>
                );
            }}
          </Form.Item>
        </Form>
      </Modal>
    );
  }
);
