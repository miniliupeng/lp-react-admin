import { getCaptcha, updateLoginUserPwd } from '@/api/modules/login';
import { getPwdRule } from '@/api/modules/user';
import { getBase64Str, getMd5Str } from '@/utils/string';
import { getComfirmPwdValidator, getPwdValidator } from '@/utils/validator';
import { useRequest } from 'ahooks';
import { Form, Input, Modal, message } from 'antd';
import { ForwardedRef, forwardRef, useImperativeHandle, useState } from 'react';

export interface ResetPwdModalRefProps {
  showModal: (data: any) => void;
}

export const ResetPwdModal = forwardRef((_, ref: ForwardedRef<ResetPwdModalRefProps>) => {
  const [form] = Form.useForm();
  const { data: pwdRule } = useRequest(getPwdRule);
  const { data: captacha, refresh } = useRequest(() => getCaptcha().then((res) => res.data));
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
    try {
      const values = await form.validateFields();
      const { data } = await updateLoginUserPwd({
        ...values,
        captcha_id: captacha?.captchaId,
        password: getBase64Str(values.password),
        confirm_pass: getBase64Str(values.confirm_pass),
        old_pass: getMd5Str(values.old_pass)
      });
      message.success(data);
      onCancel();
    } catch (error) {
      refresh();
    }
  };
  return (
    <Modal
      title="修改密码"
      open={open}
      afterClose={() => form.resetFields()}
      onOk={onOk}
      onCancel={onCancel}
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

        <Form.Item label="验证码">
          <div className="flex justify-between gap-4">
            <Form.Item
              noStyle
              name={'captcha_code'}
              rules={[{ required: true, message: '请输入验证码' }]}
            >
              <Input placeholder="请输入验证码" />
            </Form.Item>
            <img
              src={captacha?.picPath}
              alt=""
              className="w-100px bg-white cursor-pointer"
              onClick={refresh}
            />
          </div>
        </Form.Item>
      </Form>
    </Modal>
  );
});
