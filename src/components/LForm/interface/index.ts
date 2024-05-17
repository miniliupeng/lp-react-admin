import { DatePicker } from '@/components/DatePicker';
import { Switch } from '@/components/Switch';
import { TagGroup } from '@/components/TagGroup';
import type {
  Cascader,
  Checkbox,
  DatePicker as AntDatePicker,
  GetProps,
  Input,
  Radio,
  Select,
  TimePicker,
  TreeSelect,
  InputNumber
} from 'antd';
import { Form } from 'antd';
type fProps = GetProps<typeof Form.Item>;

export enum FormItemTypeEnum {
  Render = 'Render',
  Input = 'Input',
  InputNumber = 'InputNumber',
  TextArea = 'TextArea',
  Select = 'Select',
  Cascader = 'Cascader',
  TreeSelect = 'TreeSelect',
  RadioGroup = 'RadioGroup',
  CheckboxGroup = 'CheckboxGroup',
  TimePicker = 'TimePicker',
  DatePicker = 'DatePicker',
  RangePicker = 'RangePicker',
  Switch = 'Switch',
  TagGroup = 'TagGroup'
}
interface RenderFormItemProps {
  type: FormItemTypeEnum.Render;
  fProps?: fProps;
  render: () => JSX.Element;
}

interface InputFormItemProps {
  type: FormItemTypeEnum.Input;
  fProps?: fProps;
  props?: GetProps<typeof Input>;
}
interface InputNumberFormItemProps {
  type: FormItemTypeEnum.InputNumber;
  fProps?: fProps;
  props?: GetProps<typeof InputNumber>;
}
interface TextAreaFormItemProps {
  type: FormItemTypeEnum.TextArea;
  fProps?: fProps;
  props?: GetProps<typeof Input.TextArea>;
}

interface SelectFormItemProps {
  type: FormItemTypeEnum.Select;
  fProps?: fProps;
  props?: GetProps<typeof Select>;
}

interface CascaderFormItemProps {
  type: FormItemTypeEnum.Cascader;
  fProps?: fProps;
  props?: GetProps<typeof Cascader>;
}

interface TreeSelectFormItemProps {
  type: FormItemTypeEnum.TreeSelect;
  fProps?: fProps;
  props?: GetProps<typeof TreeSelect>;
}

interface RadioGroupFormItemProps {
  type: FormItemTypeEnum.RadioGroup;
  fProps?: fProps;
  props?: GetProps<typeof Radio.Group>;
}
interface CheckboxGroupFormItemProps {
  type: FormItemTypeEnum.CheckboxGroup;
  fProps?: fProps;
  props?: GetProps<typeof Checkbox.Group>;
}
interface TimePickerFormItemProps {
  type: FormItemTypeEnum.TimePicker;
  fProps?: fProps;
  props?: GetProps<typeof TimePicker>;
}

interface DatePickerFormItemProps {
  type: FormItemTypeEnum.DatePicker;
  fProps?: fProps;
  props?: GetProps<typeof DatePicker>;
}

interface RangePickerFormItemProps {
  type: FormItemTypeEnum.RangePicker;
  fProps?: fProps;
  props?: GetProps<typeof AntDatePicker.RangePicker>;
}

interface SwitchFormItemProps {
  type: FormItemTypeEnum.Switch;
  fProps?: fProps;
  props?: GetProps<typeof Switch>;
}

interface TagGroupFormItemProps {
  type: FormItemTypeEnum.TagGroup;
  fProps?: fProps;
  props?: GetProps<typeof TagGroup>;
}

export type FormItemProps =
  | RenderFormItemProps
  | InputFormItemProps
  | InputNumberFormItemProps
  | TextAreaFormItemProps
  | SelectFormItemProps
  | CascaderFormItemProps
  | TreeSelectFormItemProps
  | RadioGroupFormItemProps
  | CheckboxGroupFormItemProps
  | TimePickerFormItemProps
  | DatePickerFormItemProps
  | RangePickerFormItemProps
  | SwitchFormItemProps
  | TagGroupFormItemProps;

export type FDefaultProps = {
  Input: GetProps<typeof Input>;
  InputNumber: GetProps<typeof InputNumber>;
  Textarea: GetProps<typeof Input.TextArea>;
  Select: GetProps<typeof Select>;
  Cascader: GetProps<typeof Cascader>;
  TreeSelect: GetProps<typeof TreeSelect>;
  RadioGroup: GetProps<typeof Radio.Group>;
  CheckboxGroup: GetProps<typeof Checkbox.Group>;
  TimePicker: GetProps<typeof TimePicker>;
  DatePicker: GetProps<typeof DatePicker>;
  RangePicker: GetProps<typeof AntDatePicker.RangePicker>;
  Switch: GetProps<typeof Switch>;
  TagGroup: GetProps<typeof TagGroup>;
};
