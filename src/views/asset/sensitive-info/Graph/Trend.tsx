import { Chart } from '@/components';
import { ECOption } from '@/utils/echarts';

export const Trend = ({ data, loading }) => {
  const xAxisData = data?.map((item) => item.name);
  const seriesData = data?.map((item) => item.count);

  const grid = {
    left: 24,
    right: 24,
    top: 50,
    bottom: 24
  };

  const option: ECOption = {
    title: {
      text: '敏感信息访问趋势'
    },
    legend: {},
    tooltip: {},
    grid,
    yAxis: {
      type: 'value'
    },
    xAxis: {
      type: 'category',
      data: xAxisData
    },
    series: {
      type: 'bar',
      data: seriesData
    }
  };

  return <Chart className="flex-1" option={option} loading={loading} />;
};
