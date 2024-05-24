import { FDefaultProps, FormItemTypeEnum } from '../interface';
import { DatePicker } from '@/components/DatePicker';
import { Switch } from '@/components/Switch';
import { TagGroup } from '@/components/TagGroup';
import { RangePicker } from '@/components/RangePicker';

import {
  Cascader,
  Checkbox,
  Input,
  Radio,
  Select,
  TimePicker,
  TreeSelect,
  InputNumber
} from 'antd';

export const components: Omit<Record<FormItemTypeEnum, any>, 'Render'> = {
  Input,
  InputNumber,
  TextArea: Input.TextArea,
  Select,
  Cascader,
  TreeSelect,
  RadioGroup: Radio.Group,
  CheckboxGroup: Checkbox.Group,
  TimePicker,
  DatePicker,
  RangePicker: RangePicker,
  Switch,
  TagGroup
};

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
