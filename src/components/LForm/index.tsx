import { Form, GetProps } from 'antd';
import { FormItemProps } from './interface';
import { LFormItem } from './LFormItem';

interface FormProps extends GetProps<typeof Form> {
  items: FormItemProps[];
}
export const LForm = ({ items, children, ...props }: FormProps) => {
  return (
    <Form {...props}>
      {items.map((item, index) => (
        <LFormItem key={index} {...item} />
      ))}
      {children}
    </Form>
  );
};
