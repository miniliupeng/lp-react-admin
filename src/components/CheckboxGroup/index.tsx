import { BoolEnum } from '@/enums';
import { Checkbox, GetProps } from 'antd';
import React from 'react';

interface CheckboxGroup extends Omit<GetProps<typeof Checkbox.Group>, 'onChange'> {
  returnObj?: boolean;
  onChange?: (value: any) => void;
}

const getValueFromObj = (obj: any = {}) => {
  const res: any[] = [];
  Object.keys(obj).forEach((key) => {
    if (obj[key]) {
      res.push(key);
    }
  });
  return res;
};

const getObjFromValue = (value: any[] = [], options: any[] = []) => {
  const res: Record<string, BoolEnum> = {};
  options.forEach((item) => {
    if (value.includes(item.value)) {
      res[item.value] = BoolEnum.TRUE;
    } else {
      res[item.value] = BoolEnum.FALSE;
    }
  });
  return res;
};
export const CheckboxGroup = ({
  returnObj = false,
  value,
  onChange,
  options,
  ...restProps
}: CheckboxGroup) => {
  const _value = returnObj ? getValueFromObj(value) : value;
  return (
    <Checkbox.Group
      options={options}
      onChange={(checkedValue) =>
        onChange?.(returnObj ? getObjFromValue(checkedValue, options) : checkedValue)
      }
      value={_value}
      {...restProps}
    />
  );
};
