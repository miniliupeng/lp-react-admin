import { FDefaultProps } from '../interface';

export const defaultProps: FDefaultProps = {
  Input: {
    allowClear: true
  },
  InputNumber: {
    className: 'w-full'
  },
  Textarea: {},
  Select: {
    allowClear: true,
    showArrow: true,
    placeholder: '请选择'
  },
  Cascader: {
    allowClear: true
  },
  TreeSelect: {
    allowClear: true,
    showArrow: true,
    placeholder: '请选择',
    treeDefaultExpandAll: true,
    showSearch: true,
    treeCheckable: true
  },
  RadioGroup: {},
  CheckboxGroup: {},
  TimePicker: {},
  DatePicker: {},
  RangePicker: {
    showTime: true,
    allowClear: true
  },
  Switch: {},
  TagGroup: {}
};
