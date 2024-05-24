import { Chart } from '@/components';
import { attackResultColors } from '@/components/Chart/colors';
import { ECOption } from '@/utils/echarts';

export const Trend = ({ data, loading }) => {
  const names = ['企图', '成功', '失陷'];
  const xAxisData = data?.map((item) => item.name);
  const initialSeries = names.map((item) => ({
    name: item,
    type: 'bar',
    stack: 'total',
    data: []
  }));
  const series = data?.reduce((prev, item) => {
    item.count.forEach((itm, idx) => {
      prev[idx].data.push(itm);
    });
    return prev;
  }, initialSeries);

  const grid = {
    left: 100,
    right: 100,
    top: 50,
    bottom: 50
  };

  const option: ECOption = {
    legend: {},
    tooltip: {},
    color: attackResultColors,
    grid,
    yAxis: {
      type: 'value'
    },
    xAxis: {
      type: 'category',
      data: xAxisData
    },
    series
  };

  return (
    <div className="h-300px">
      <Chart option={option} loading={loading} />
    </div>
  );
};
