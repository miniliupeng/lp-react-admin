import { useInlineForm } from '@/hooks';
import { Checkbox, Form, Select } from 'antd';
import { pwdChangePeriodOptions, pwdLengthOptions, pwdStrengthOptions } from '@/config/options';
import { getPwdRule, updatePwdRule } from '@/api/modules/user';
import { BoolEnum } from '@/enums';
import { Switch } from '@/components';

const getCheckboxValue = (obj: Record<string, Bool>) => {
  const value: string[] = [];
  for (const key in obj) {
    if (obj[key] === BoolEnum.TRUE) {
      value.push(key);
    }
  }
  return value;
};

export const PasswordRules = () => {
  const { form, onValuesChange } = useInlineForm({
    query: () =>
      getPwdRule().then((data) => ({
        ...data,
        pwd_strength: getCheckboxValue(data.pwd_strength)
      })),
    update: (data) => {
      const pwd_strength = {
        lower: -1,
        upper: -1,
        number: -1,
        special_char: -1
      };
      data.pwd_strength.forEach((key) => {
        pwd_strength[key] = 1;
      });
      return updatePwdRule({ ...data, pwd_strength });
    }
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
          <Switch field={[BoolEnum.TRUE, BoolEnum.FALSE2]} />
        </Form.Item>
        <Form.Item label="强制密码变更周期" name="pwd_change_period">
          <Select style={{ width: 120 }} options={pwdChangePeriodOptions} />
        </Form.Item>
        <Form.Item label="首次登录更改密码" name="is_first_login_change_pwd">
          <Switch field={[BoolEnum.TRUE, BoolEnum.FALSE2]} />
        </Form.Item>
      </Form>
    </div>
  );
};
