import { CollapseWrapper } from '@/components';
import { Trend } from './Trend';
import { Pie } from './Pie';
import { memo } from 'react';

interface GraphProps {
  data: any;
  loading: boolean;
}

export const Graph = memo(({ data, loading }: GraphProps) => {
  return (
    <CollapseWrapper>
      <div className="h-300px flex">
        <Trend data={data.day} loading={loading} />
        <Pie data={data.asset} loading={loading} />
      </div>
    </CollapseWrapper>
  );
});
