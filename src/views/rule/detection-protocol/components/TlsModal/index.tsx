import { useForwardRefModal } from '@/hooks';
import { getTlsCertService, updateTlsCertService } from '@/services/detection-protocol';
import { useRequest } from 'ahooks';
import { Form, Input, Modal, message } from 'antd';
import { forwardRef } from 'react';

export const TlsModal = forwardRef((_, ref) => {
  const { run: get } = useRequest(getTlsCertService, {
    manual: true,
    onSuccess: (data) => form.setFieldsValue(data)
  });
  const { form, ...modalProps } = useForwardRefModal({
    ref,
    service: updateTlsCertService,
    afterOpen: get,
    onSuccess: (res) => message.success(res.reason)
  });

  return (
    <Modal title="配置tls证书" {...modalProps}>
      <Form form={form} labelCol={{ span: 4 }}>
        <Form.Item label="证书" name="cert" rules={[{ required: true }]}>
          <Input.TextArea placeholder="请输入证书, 支持pkcs1、pksc8格式" rows={16} />
        </Form.Item>
      </Form>
    </Modal>
  );
});
