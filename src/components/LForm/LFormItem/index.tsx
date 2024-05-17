import { FormItemProps } from '../interface';
import { Form, Input, Select } from 'antd';
import { defaultProps } from './helper';

const components: Record<string, any> = { Input, Select };

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
