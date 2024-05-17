import { ResultData } from '@/api/interface';
import { useRequest } from 'ahooks';
import { Form, FormInstance, ModalProps } from 'antd';
import { useImperativeHandle, useState } from 'react';

export interface ModalRef {
  showModal: (data?: any) => void;
}

interface ForwardRefModalParams {
  ref: any;
  service: (data: any) => Promise<ResultData<any>>;
  afterOpen?: (data?: any) => void;
  afterClose?: () => void;
  onSuccess?: (data: ResultData) => void;
  onBefore?: (data: any) => void;
}

interface ResForwardRefModal extends ModalProps {
  form: FormInstance;
  onFinish: () => Promise<void>;
}

export const useForwardRefModal = ({
  ref,
  service,
  afterOpen,
  afterClose: _afterClose,
  onSuccess,
  onBefore
}: ForwardRefModalParams): ResForwardRefModal => {
  const { runAsync, loading } = useRequest(service, { manual: true, onSuccess, onBefore });
  const [form] = Form.useForm();
  const [open, setOpen] = useState(false);
  const onCancel = () => {
    setOpen(false);
  };
  useImperativeHandle(ref, () => ({
    showModal: (data) => {
      form.setFieldsValue(data);
      setOpen(true);
      afterOpen?.(data);
    }
  }));
  const onFinish = async () => {
    await form.validateFields();
    await runAsync(form.getFieldsValue(true));
  };
  const onOk = async () => {
    await onFinish();
    onCancel();
  };
  const afterClose = () => {
    form.resetFields();
    _afterClose?.();
  };
  return {
    form,
    open,
    onOk,
    onCancel,
    afterClose,
    confirmLoading: loading,
    onFinish
  };
};
