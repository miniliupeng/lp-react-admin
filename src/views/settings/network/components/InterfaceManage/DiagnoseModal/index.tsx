import { useForwardRefModal } from '@/hooks';
import { diagnoseService, getDiagnoseOptionsService } from '@/services/network';
import { useRequest } from 'ahooks';
import { Button, Form, Input, Modal, Select } from 'antd';
import { forwardRef, useState } from 'react';

export const DiagnoseModal = forwardRef((_, ref) => {
  const { run: getDiagnoseOptions, data: diagnoseOptions } = useRequest(getDiagnoseOptionsService, {
    manual: true
  });
  const [output, setOutput] = useState('');
  const { form, onFinish, confirmLoading, ...modalProps } = useForwardRefModal({
    ref,
    afterOpen: (data) => {
      getDiagnoseOptions();
      form.setFieldValue('nic', `${data.name}-${data.ip}`);
    },
    afterClose: () => {
      setOutput('');
    },
    service: diagnoseService,
    onBefore: () => {
      setOutput('');
    },
    onSuccess: (res) => {
      setOutput(res.data.output);
    }
  });
  return (
    <Modal title="网络工具" footer={null} width={1000} {...modalProps}>
      <Form form={form} layout="inline" onFinish={onFinish}>
        <Form.Item
          label="选择命令"
          name="command"
          required={false}
          rules={[{ required: true, message: '请选择命令' }]}
        >
          <Select
            showSearch
            placeholder="请选择命令"
            options={diagnoseOptions}
            style={{ width: 200 }}
          />
        </Form.Item>
        <Form.Item name="nic">
          <Input disabled />
        </Form.Item>
        <Form.Item
          name="address"
          rules={[
            {
              required: true,
              message: '请输入合法的地址',
              pattern: /^[A-Za-z0-9.:_-]+$/
            }
          ]}
        >
          <Input placeholder="请输入地址" style={{ width: 300 }} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={confirmLoading}>
            发送
          </Button>
        </Form.Item>
        <Form.Item label="输出结果" className="diagnose-output-form-item mt-4 w-full">
          <div className="w-full min-h-200px border border-solid border-[var(--ant-color-border)] rounded-2 p-2 whitespace-pre-line">
            {output}
          </div>
        </Form.Item>
      </Form>
    </Modal>
  );
});
