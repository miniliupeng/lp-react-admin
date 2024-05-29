import { Form } from 'antd';
import { FormItemProps } from '../interface';
import { components, defaultProps } from './helper';

export const LFormItem = (props: FormItemProps) => {
  if (props.type === 'Render') {
    if (props.fProps) {
      return (
        <Form.Item {...props.fProps}>
          <>{props.render()}</>
        </Form.Item>
      );
    }
    return <>{props.render()}</>;
  }
  const { type, fProps, props: _props } = props;
  const Component = components[type];
  const defaultProp = defaultProps[type];
  return (
    <Form.Item {...fProps}>
      <Component {...defaultProp} {..._props} />
    </Form.Item>
  );
};

export const LFormItems = ({ items }: { items: FormItemProps[] }) => (
  <>
    {items.map((item, index) => (
      <LFormItem key={index} {...item} />
    ))}
  </>
);
