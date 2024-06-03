import { FDefaultProps, FormItemTypeEnum } from '../interface';
import { DatePicker } from '@/components/DatePicker';
import { Switch } from '@/components/Switch';
import { TagGroup } from '@/components/TagGroup';
import { RangePicker } from '@/components/RangePicker';
import { CheckboxGroup } from '@/components/CheckboxGroup';

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
  Radio,
  RadioGroup: Radio.Group,
  Checkbox,
  CheckboxGroup: CheckboxGroup,
  TimePicker,
  DatePicker,
  RangePicker: RangePicker,
  Switch,
  TagGroup
};

export const defaultProps: FDefaultProps = {
  Input: {
    allowClear: true,
    placeholder: '请输入'
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
  Radio: {},
  RadioGroup: {},
  Checkbox: {},
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
