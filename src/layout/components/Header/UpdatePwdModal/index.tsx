import { updateUserPwdService } from '@/services/login';
import { getUserPwdRuleService } from '@/services/user';
import { getComfirmPwdValidator, getPwdValidator } from '@/utils/validator';
import { useRequest } from 'ahooks';
import { Form, Input, Modal, message } from 'antd';
import { ForwardedRef, forwardRef, useImperativeHandle, useState } from 'react';

export interface UpdatePwdModalRefProps {
  showModal: (data: any) => void;
}

export const UpdatePwdModal = forwardRef((_, ref: ForwardedRef<UpdatePwdModalRefProps>) => {
  const [form] = Form.useForm();
  const { data: pwdRule } = useRequest(getUserPwdRuleService);
  const { loading, run } = useRequest(updateUserPwdService, {
    manual: true,
    onSuccess: ({ data }) => {
      message.success(data);
      onCancel();
    }
  });
  const [open, setOpen] = useState(false);
  const onCancel = () => {
    setOpen(false);
  };
  useImperativeHandle(ref, () => ({
    showModal: (data) => {
      form.setFieldsValue(data);
      setOpen(true);
    }
  }));
  const onOk = async () => {
    const values = await form.validateFields();
    run(values);
  };
  return (
    <Modal
      title="修改密码"
      open={open}
      afterClose={() => form.resetFields()}
      onOk={onOk}
      onCancel={onCancel}
      confirmLoading={loading}
    >
      <Form form={form} labelCol={{ span: 4 }}>
        <Form.Item
          label="用户名"
          name="user_name"
          rules={[{ required: true, message: '用户名不能为空!' }]}
        >
          <Input disabled placeholder="请输入用户名" autoComplete="off" />
        </Form.Item>

        <Form.Item
          label="旧密码"
          name="old_pass"
          rules={[{ required: true, message: '旧密码不能为空!' }]}
        >
          <Input.Password placeholder="请输入旧密码" autoComplete="new-password" />
        </Form.Item>

        <Form.Item
          label="新密码"
          name="password"
          rules={[{ required: true }, getPwdValidator(pwdRule)]}
        >
          <Input.Password placeholder="请输入新密码" autoComplete="new-password" />
        </Form.Item>

        <Form.Item
          label="确认密码"
          name="confirm_pass"
          rules={[
            { required: true, message: '确认密码不能为空!' },
            getComfirmPwdValidator(pwdRule)
          ]}
        >
          <Input.Password placeholder="确认密码" autoComplete="new-password" />
        </Form.Item>
      </Form>
    </Modal>
  );
});
