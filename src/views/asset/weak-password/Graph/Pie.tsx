import { Chart } from '@/components';
import { ECOption } from '@/utils/echarts';

export const Pie = ({ data, loading }) => {
  const seriesData = data?.map((item) => ({
    name: item.name,
    value: item.count
  }));

  const grid = {
    left: 24,
    right: 24,
    top: 50,
    bottom: 24
  };

  const option: ECOption = {
    title: {
      text: '使用弱口令的资产'
    },
    tooltip: {},
    grid,
    series: [
      {
        type: 'pie',
        radius: ['40%', '70%'],
        data: seriesData,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
            borderColor: 'transparent'
          }
        }
      }
    ]
  };
  return <Chart className="flex-basis-30%" option={option} loading={loading} />;
};
