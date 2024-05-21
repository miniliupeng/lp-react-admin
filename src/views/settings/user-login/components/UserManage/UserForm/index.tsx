import { getPwdRule, getRoles } from '@/api/modules/user';
import { RoleNameEnum } from '@/enums';
import { getComfirmPwdValidator, getPwdValidator } from '@/utils/validator';
import { useRequest } from 'ahooks';
import { DatePicker, Form, FormInstance, Input, Select } from 'antd';

export const UserForm = ({ form }: { form?: FormInstance }) => {
  const { data } = useRequest(getRoles);
  const roles = data?.flatMap((item) => {
    if (item.id !== 1) {
      return [
        {
          label: RoleNameEnum[item.role_name],
          value: item.id
        }
      ];
    }
    return [];
  });
  const { data: pwdRule } = useRequest(getPwdRule);
  const isAdd = !form!.getFieldValue('id');
  return (
    <Form form={form} labelCol={{ span: 6 }}>
      <Form.Item
        label="账号名"
        name="user_name"
        rules={[
          {
            required: true
          },
          () => ({
            validator(rule, value) {
              if (value?.length > 0) {
                const reg = /^([a-zA-Z])\w+$/;
                if (value.length < 4 || value.length > 20 || !reg.test(value)) {
                  return Promise.reject('由4-20个英文字母、数字或下划线组成，且只能以英文字符开头');
                }
              }
              return Promise.resolve();
            }
          })
        ]}
      >
        <Input placeholder="请输入" />
      </Form.Item>
      <Form.Item
        label="姓名"
        name="name"
        rules={[
          {
            required: true
          },
          () => ({
            validator(rule, value) {
              if (value?.length > 0) {
                const reg = /^[\u4e00-\u9fa5\w]+$/;
                if (value.length > 20 || !reg.test(value)) {
                  return Promise.reject('最多由20个英文字母、汉字或数字或下划线组成');
                }
              }
              return Promise.resolve();
            }
          })
        ]}
      >
        <Input placeholder="请输入" />
      </Form.Item>
      <Form.Item
        label="账号角色"
        name="role_id"
        rules={[
          {
            required: true
          },
          () => ({
            validator(rule, value) {
              if (value?.length > 0) {
                const reg = /^[\u4e00-\u9fa5\w]+$/;
                if (value.length > 20 || !reg.test(value)) {
                  return Promise.reject('最多由20个英文字母、汉字或数字或下划线组成');
                }
              }
              return Promise.resolve();
            }
          })
        ]}
      >
        <Select placeholder="请选择" options={roles} />
      </Form.Item>
      {isAdd && (
        <>
          <Form.Item
            label="密码"
            name="password"
            rules={[
              {
                required: true
              },
              getPwdValidator(pwdRule)
            ]}
          >
            <Input placeholder="请输入" />
          </Form.Item>
          <Form.Item
            label="确认密码"
            name="password_confirm"
            rules={[
              {
                required: true
              },
              getComfirmPwdValidator(pwdRule)
            ]}
          >
            <Input placeholder="请输入" />
          </Form.Item>
        </>
      )}

      <Form.Item label="账号有效期至" name="account_period" rules={[{ required: true }]}>
        <DatePicker showNow showTime className="w-full" />
      </Form.Item>
      <Form.Item
        label="邮箱"
        name="email"
        rules={[
          {
            required: true
          },
          () => ({
            validator(rule, value) {
              if (value?.length > 0) {
                const reg = /^\w+@[a-zA-Z0-9]{2,10}(?:\.[a-z]{2,4}){1,3}$/;
                // eslint-disable-next-line no-restricted-globals
                if (!reg.test(value)) {
                  return Promise.reject('请输入正确的邮箱');
                }
              }

              return Promise.resolve();
            }
          })
        ]}
      >
        <Input placeholder="请输入" />
      </Form.Item>
      <Form.Item
        label="电话"
        name="phone"
        rules={[
          () => ({
            validator(rule, value) {
              if (!value) return Promise.resolve();
              const reg1 = /^0\d{2,3}-?\d{7,8}$/;
              const reg2 = /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/;
              if (!reg1.test(value) && !reg2.test(value)) {
                return Promise.reject('请输入正确的固话或手机号码');
              }

              return Promise.resolve();
            }
          })
        ]}
      >
        <Input placeholder="请输入" />
      </Form.Item>
      <Form.Item label="备注" name="notes">
        <Input.TextArea placeholder="请输入" maxLength={200} />
      </Form.Item>
    </Form>
  );
};
