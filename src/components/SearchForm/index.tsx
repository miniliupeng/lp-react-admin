import { ButtonGroup } from '../ButtonGroup';
import { LForm } from '../LForm';
import { Form, GetProps } from 'antd';
import { ReloadOutlined, SearchOutlined } from '@ant-design/icons';
import './index.scss';

interface SearchFormProps extends GetProps<typeof LForm> {
  onSearch: (values: any) => void;
}

export const SearchForm = ({ className = '', items, onSearch }: SearchFormProps) => {
  const [form] = Form.useForm();
  const onReset = () => {
    form.resetFields();
  };
  return (
    <LForm
      form={form}
      layout="inline"
      items={items}
      className={`search-form ${className}`}
      onFinish={onSearch}
    >
      <Form.Item className="ml-auto !mr-0">
        <ButtonGroup
          options={[
            {
              type: 'primary',
              ghost: true,
              icon: <SearchOutlined />,
              htmlType: 'submit',
              children: '搜索'
            },
            {
              icon: <ReloadOutlined />,
              onClick: onReset,
              children: '重置'
            }
          ]}
        />
      </Form.Item>
    </LForm>
  );
};
