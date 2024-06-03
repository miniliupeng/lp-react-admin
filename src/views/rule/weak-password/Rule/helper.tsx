import { LFormItem } from '@/components/LForm/LFormItem';
import { FormItemProps, FormItemTypeEnum } from '@/components/LForm/interface';
import { Button } from 'antd';

export const formItems: FormItemProps[] = [
  {
    type: FormItemTypeEnum.CheckboxGroup,
    fProps: {
      name: 'flag'
    },
    props: {
      className: 'inline-flex flex-col items-baseline gap-2',
      returnObj: true,
      options: [
        {
          label: (
            <div className="flex gap-2 whitespace-nowrap">
              密码长度小于
              <LFormItem
                type={FormItemTypeEnum.InputNumber}
                fProps={{ name: 'password_len', noStyle: true }}
                props={{ min: 1, max: 10 }}
              />
              字符
            </div>
          ),
          value: 'flag_len'
        },
        {
          label: '密码只包含数字',
          value: 'flag_digit'
        },
        {
          label: '密码只包含小写字母',
          value: 'flag_lower_case'
        },
        {
          label: '密码只包含大写字母',
          value: 'flag_upper_case'
        },
        {
          label: (
            <div className="flex gap-2 whitespace-nowrap">
              密码不包含任一特殊字符
              <LFormItem
                type={FormItemTypeEnum.Input}
                fProps={{ name: 'special_chars', noStyle: true }}
              />
            </div>
          ),
          value: 'flag_special_chars'
        },
        {
          label: '密码包含用户名',
          value: 'flag_username'
        },
        {
          label: '密码中连续或重复出现的字符，如"aa"或"123123"',
          value: 'flag_repeat'
        },
        {
          label: '易于键入的键盘顺序序列： 密码中包含容易在键盘上找到的字符书序序列，如"qwer"',
          value: 'flag_keyboard'
        }
      ]
    }
  },
  {
    type: FormItemTypeEnum.Render,

    render: () => (
      <Button type="primary" htmlType="submit">
        保存
      </Button>
    )
  }
];
