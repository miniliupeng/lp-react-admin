import { TIME_FORMAT } from '@/config/constants';
import { DatePicker, DatePickerProps, GetProps, TimeRangePickerProps } from 'antd';
import dayjs from 'dayjs';

interface LRangePickerProps
  extends Omit<GetProps<typeof DatePicker.RangePicker>, 'value' | 'onChange'> {
  field?: string[];
  value?: Record<string, string | undefined>;
  onChange?: (val: Record<string, string | undefined>) => void;
}

const defaultPresets: TimeRangePickerProps['presets'] = [
  { label: '今天', value: [dayjs().startOf('day'), dayjs()] },
  { label: '最近7天', value: [dayjs().add(-7, 'd'), dayjs()] },
  { label: '最近14天', value: [dayjs().add(-14, 'd'), dayjs()] }
];
export const initTime = {
  start_time: defaultPresets[2].value[0].format(TIME_FORMAT),
  end_time: defaultPresets[2].value[1].format(TIME_FORMAT)
};

const disabled14DaysDate: DatePickerProps['disabledDate'] = (current, { from }) => {
  if (from) {
    return Math.abs(current.diff(from, 'days')) > 14;
  }

  return false;
};

export const RangePicker = ({
  field = ['tbg', 'ted'],
  value,
  onChange,
  presets = defaultPresets,
  ...props
}: LRangePickerProps) => {
  return (
    <DatePicker.RangePicker
      disabledDate={disabled14DaysDate}
      value={
        value && value[field[0]] && value[field[1]]
          ? [dayjs(value[field[0]]), dayjs(value[field[1]])]
          : undefined
      }
      onChange={(_, val) => {
        onChange?.({
          [field[0]]: val?.[0] || undefined,
          [field[1]]: val?.[1] || undefined
        });
      }}
      presets={presets}
      {...props}
    />
  );
};
