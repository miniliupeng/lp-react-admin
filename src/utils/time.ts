import { TIME_FORMAT } from '@/config/constants';
import dayjs, { Dayjs } from 'dayjs';

export const getSeconds = (time: Dayjs): number => {
  return time.hour() * 3600 + time.minute() * 60 + time.second();
};

export const getTimes = (second: number): Dayjs => {
  return dayjs(dayjs.duration(second * 1000).format(TIME_FORMAT));
};
