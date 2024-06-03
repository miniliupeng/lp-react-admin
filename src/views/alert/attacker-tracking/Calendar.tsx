import { Chart } from '@/components';
import { attackResultColors } from '@/components/Chart/colors';
import { ECOption } from '@/utils/echarts';
import dayjs from 'dayjs';

const getCalendarData = (actionMap: { string: number[] }) => {
  const data: [string, number][] = [];
  for (const [key, value] of Object.entries(actionMap)) {
    data.push([key, value.reduce((accumulator, currentValue) => accumulator + currentValue, 0)]);
  }
  return data;
};

export const Calendar = ({ actionMap }) => {
  const option: ECOption = {
    tooltip: {
      formatter: ({ value }: any) => {
        const dayStr = value[0];
        const counts = actionMap[dayStr];
        return `<div>
          <div>${dayStr}</div>
          <div><span style="display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:${attackResultColors[0]};"></span>企图：${counts[0]}</div>
          <div><span style="display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:${attackResultColors[1]};"></span>成功：${counts[1]}</div>
          <div><span style="display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:${attackResultColors[2]};"></span>失陷：${counts[2]}</div>
        </div>`;
      }
    },
    visualMap: {
      min: 0,
      max: 1000,
      type: 'piecewise',
      orient: 'horizontal',
      left: 'center'
    },
    calendar: {
      top: 20,
      left: 30,
      right: 30,
      height: 150,
      cellSize: ['auto', 13],
      range: [
        dayjs().subtract(2, 'month').startOf('month').format('YYYY-MM-DD'),
        dayjs().endOf('month').format('YYYY-MM-DD')
      ],
      itemStyle: {
        borderWidth: 0.5
      },
      dayLabel: {
        nameMap: 'ZH'
      },
      monthLabel: {
        nameMap: 'ZH'
      },
      yearLabel: { show: false }
    },
    series: {
      type: 'heatmap',
      coordinateSystem: 'calendar',
      data: getCalendarData(actionMap)
    }
  };

  return <Chart className="h-200px" option={option} />;
};
