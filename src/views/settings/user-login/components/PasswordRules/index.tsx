import { useInlineForm } from '@/hooks';
import { Checkbox, Form, Select, Switch } from 'antd';
import { getPwdRuleService, updatePwdRuleService } from '@/services/user';
import { pwdChangePeriodOptions, pwdLengthOptions, pwdStrengthOptions } from '@/config/options';

export const PasswordRules = () => {
  const { form, onValuesChange } = useInlineForm({
    query: getPwdRuleService,
    update: updatePwdRuleService
  });

  return (
    <div>
      <h1 className="text-4 mb-4">密码规则</h1>
      <Form form={form} onValuesChange={onValuesChange}>
        <Form.Item label="登录密码强度要求" name="pwd_strength">
          <Checkbox.Group options={pwdStrengthOptions}></Checkbox.Group>
        </Form.Item>
        <Form.Item label="最短登录密码长度" name="pwd_shortest_length">
          <Select style={{ width: 120 }} options={pwdLengthOptions} />
        </Form.Item>
        <Form.Item label="是否强制密码更换" name="is_force_change_pwd" valuePropName="checked">
          <Switch />
        </Form.Item>
        <Form.Item label="强制密码变更周期" name="pwd_change_period">
          <Select style={{ width: 120 }} options={pwdChangePeriodOptions} />
        </Form.Item>
        <Form.Item label="首次登录更改密码" name="is_first_login_change_pwd">
          <Switch />
        </Form.Item>
      </Form>
    </div>
  );
};
