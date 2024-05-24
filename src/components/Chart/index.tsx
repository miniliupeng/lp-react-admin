import { UseChartProps, useChart } from '@/hooks';
import { forwardRef, useImperativeHandle } from 'react';

interface ChartProps extends UseChartProps {
  className?: string;
}

export const Chart = forwardRef(({ className = '', option, loading }: ChartProps, ref) => {
  const { domRef, chartInstance } = useChart({ option, loading });

  useImperativeHandle(ref, () => ({
    getChartInstance: () => chartInstance
  }));
  return <div ref={domRef} className={`w-full h-100% ${className}`} />;
});
