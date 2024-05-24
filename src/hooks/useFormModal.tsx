import { Form, ModalFuncProps, message } from 'antd';
import { useModal } from './useModal';
import React, { ReactNode } from 'react';

interface useFormModalParams {
  title?: ReactNode;
  titleText?: string;
  content: any;
  add?: (data: any) => Promise<any>;
  update?: (data?: any) => Promise<any>;
  refresh: () => void;
}

interface openModalParams extends ModalFuncProps {
  data?: any;
}
export const useFormModal = ({
  title,
  titleText,
  content,
  add,
  update,
  refresh
}: useFormModalParams) => {
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
      title: title || (data ? `编辑${titleText}` : `新增${titleText}`),
      ...restParams
    });
  };
  return openModal;
};
