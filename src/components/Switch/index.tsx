import { Switch as AntSwitch } from 'antd';
import type { SwitchProps as AntSwitchProps } from 'antd';
interface SwitchProps extends Omit<AntSwitchProps, 'onChange'> {
  field?: Bool[];
  onChange?: (val: Bool) => void;
}
export const Switch = ({ field = [true, false], value, onChange, ...restProps }: SwitchProps) => {
  return (
    <AntSwitch
      value={value === field[0]}
      onChange={(val) => onChange?.(val ? field[0] : field[1])}
      {...restProps}
    />
  );
};
