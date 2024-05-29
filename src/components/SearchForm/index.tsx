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
      items={items}
      className={`search-form flex flex-nowrap gap-4 ${className}`}
      onFinish={onSearch}
    >
      <Form.Item className="ml-auto !mr-0 !flex-basis-0">
        <ButtonGroup
          options={[
            {
              type: 'primary',
              icon: <SearchOutlined />,
              htmlType: 'submit'
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
