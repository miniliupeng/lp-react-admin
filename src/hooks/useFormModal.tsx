import { Form, ModalFuncProps, message } from 'antd';
import { useModal } from './useModal';
import React from 'react';

interface useFormModalParams {
  title?: string;
  content: any;
  add: (data: any) => Promise<any>;
  update?: (data?: any) => Promise<any>;
  refresh: () => void;
}

interface openModalParams extends ModalFuncProps {
  data?: any;
}
export const useFormModal = ({ title, content, add, update, refresh }: useFormModalParams) => {
  const [form] = Form.useForm();
  const onOk = async () => {
    const values = await form.validateFields();
    const id = form.getFieldValue('id');
    const extra = form.getFieldValue('extra');
    const service = id ? update : add;
    await service?.({ id, ...values, ...extra });
    refresh();
    message.success('操作成功');
  };
  const afterClose = () => {
    form.resetFields();
  };
  const { showModal } = useModal({
    width: 520,
    onOk,
    // onCancel,
    afterClose,
    content: React.cloneElement(content, { form: form })
  });
  const openModal = ({ data, ...restParams }: openModalParams = {}) => {
    form.setFieldsValue(data);
    showModal({
      title: data ? `编辑${title}` : `新增${title}`,
      ...restParams
    });
  };
  return openModal;
};
