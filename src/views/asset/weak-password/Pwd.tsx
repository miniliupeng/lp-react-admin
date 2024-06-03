import { LForm } from '@/components';
import { FormItemTypeEnum } from '@/components/LForm/interface';
import { useFormModal } from '@/hooks';
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import { Alert, FormInstance } from 'antd';

const AuthCodeForm = ({ form }: { form?: FormInstance }) => (
  <LForm
    form={form}
    items={[
      {
        type: FormItemTypeEnum.Render,
        render: () => (
          <Alert
            showIcon
            type="info"
            message="查看弱口令账户/密码需要输入授权码，可联系管理员获取！"
            className="mb-4"
          ></Alert>
        )
      },
      {
        type: FormItemTypeEnum.Input,
        fProps: {
          label: '授权码',
          name: 'auth_code'
        }
      }
    ]}
  />
);

export const Pwd = ({ pwdMap, onResetPwdMapById, id, onReveal }) => {
  const visible = !!pwdMap[id];
  const showModal = useFormModal({
    title: '授权码输入提醒',
    content: <AuthCodeForm />,
    add: (data) => onReveal({ ...data, id }),
    refresh: () => {}
  });
  const onClick = async () => {
    if (visible) {
      onResetPwdMapById(id);
      return;
    }
    try {
      await onReveal({ id });
    } catch (error: any) {
      error.reason === 'authcode' && showModal();
    }
  };

  return (
    <>
      <span className="text-primary cursor-pointer" onClick={onClick}>
        {visible ? <EyeOutlined /> : <EyeInvisibleOutlined />}
      </span>
    </>
  );
};
