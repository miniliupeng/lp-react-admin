import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, message } from 'antd';

import { HOME_URL } from '@/config';
import { useUserStore } from '@/stores';
import { useRequest } from 'ahooks';
import { ResetPwdModal, ResetPwdModalRefProps } from '../ResetPwdModal';
import { getLogo, getSystemSettingsConfig } from '@/api/modules/system-settings';
import { getCaptcha } from '@/api/modules/login';

export const LoginForm = () => {
  const navigate = useNavigate();
  const login = useUserStore((state) => state.login);

  const { data, refresh } = useRequest(() => getCaptcha().then((res) => res.data));
  const { data: config } = useRequest(getSystemSettingsConfig);
  const { data: logo } = useRequest(() => getLogo({ image_type: 1 }));
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const ref = useRef() as React.MutableRefObject<ResetPwdModalRefProps>;
  const onFinish = async (values) => {
    try {
      setLoading(true);
      await login({
        ...values,
        captcha_id: data?.captchaId
      });
      message.success('登录成功');
      navigate(HOME_URL);
    } catch (error: any) {
      if (error.is_reset === 1) {
        ref.current.showModal({
          user_name: values.user_name
        });
      }
      refresh();
      form.resetFields(['password', 'captcha_code']);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-450px p-6 pb-0 rounded-15px m-auto  bg-white z-1">
      <img src={logo} alt="" height={50} />
      <h2 className="mt-30px mb-40px font-700 text-28px">{config?.sys_name}</h2>
      <Form
        name="login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
        form={form}
        size="large"
      >
        <Form.Item name="user_name" rules={[{ required: true, message: '请输入用户名' }]}>
          <Input
            prefix={<UserOutlined className="color-primary" />}
            placeholder="请输入用户名"
            maxLength={20}
          />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true, message: '请输入密码' }]}>
          <Input.Password
            prefix={<LockOutlined className="color-primary" />}
            type="password"
            placeholder="请输入密码"
            maxLength={20}
          />
        </Form.Item>
        <Form.Item>
          <div className="flex justify-between gap-4">
            <Form.Item
              noStyle
              name={'captcha_code'}
              rules={[{ required: true, message: '请输入验证码' }]}
            >
              <Input placeholder="请输入验证码" />
            </Form.Item>
            <img
              src={data?.picPath}
              alt=""
              className="w-100px bg-white cursor-pointer"
              onClick={refresh}
            />
          </div>
        </Form.Item>
        <Form.Item>
          <Button loading={loading} type="primary" htmlType="submit" block>
            登录
          </Button>
        </Form.Item>
      </Form>
      <ResetPwdModal ref={ref} />
    </div>
  );
};
