import { useInterval, useIntervalProps } from '@/hooks';

interface IntervalView {
  open?: boolean;
  time?: number;
  fn: () => void;
}

const Interval = ({ fn, time, autoPlay }: useIntervalProps) => {
  useInterval({
    fn,
    time,
    autoPlay
  });
  return <></>;
};
export const IntervalView = ({ open = true, time = 1000, ...restProps }: IntervalView) => {
  if (!open) return null;
  return <Interval time={time} {...restProps} />;
};
