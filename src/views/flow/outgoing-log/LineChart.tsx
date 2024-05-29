import { Chart } from '@/components';
import { ECOption } from '@/utils/echarts';

export const LineChart = ({ title, loading, data }) => {
  // const _data = data?.slice(0, 10);
  // const yAxisData = _data?.map((item) => item.name);
  // const seriesData = _data?.map((item) => item.count);

  const option: ECOption = {
    grid: {
      top: 20,
      left: 0,
      right: 0,
      bottom: 0
    },
    xAxis: {
      type: 'category',
      show: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value',
      show: false
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        smooth: true,
        showSymbol: false
      }
    ]
  };

  return <Chart className="w-100px h-50px" option={option} loading={loading} />;
};
