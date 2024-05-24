import { DatePicker, GetProps } from 'antd';
import dayjs from 'dayjs';

interface LRangePickerProps
  extends Omit<GetProps<typeof DatePicker.RangePicker>, 'value' | 'onChange'> {
  field?: string[];
  value?: Record<string, string>;
  onChange?: (val: Record<string, string>) => void;
}

export const RangePicker = ({
  field = ['tbg', 'ted'],
  value,
  onChange,
  ...props
}: LRangePickerProps) => {
  return (
    <DatePicker.RangePicker
      value={value ? [dayjs(value[field[0]]), dayjs(value[field[1]])] : undefined}
      onChange={(_, val) => {
        onChange?.({
          [field[0]]: val?.[0],
          [field[1]]: val?.[1]
        });
      }}
      {...props}
    />
  );
};
