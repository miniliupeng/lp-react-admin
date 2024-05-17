import { DatePicker as AntDatePicker } from 'antd';
import type { DatePickerProps as AntDatePickerProps } from 'antd';
import dayjs from 'dayjs';
export interface DatePickerProps extends Omit<AntDatePickerProps, 'onChange'> {
  onChange?: (val: string | string[]) => void;
}
export const DatePicker = ({ value, onChange, className, ...restProps }: DatePickerProps) => {
  return (
    <AntDatePicker
      showTime
      className={`w-full ${className}`}
      value={dayjs(value)}
      onChange={(_, val) => onChange?.(val)}
      {...restProps}
    />
  );
};
