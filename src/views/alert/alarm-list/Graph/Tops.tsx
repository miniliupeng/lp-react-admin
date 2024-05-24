import { Chart } from '@/components';
import { ECOption } from '@/utils/echarts';
import React from 'react';

const Top = ({ title, loading, data }) => {
  const _data = data?.slice(0, 10);
  const yAxisData = _data?.map((item) => item.name);
  const seriesData = _data?.map((item) => item.count);

  const option: ECOption = {
    title: {
      text: title
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      top: 45,
      left: '3%',
      right: '10%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      boundaryGap: [0, 0.01]
    },
    yAxis: {
      type: 'category',
      data: yAxisData,
      axisLabel: {
        width: '60', // 将内容的宽度固定
        overflow: 'truncate' // 超出的部分截断
      }
    },
    series: [
      {
        name: '告警数量',
        type: 'bar',
        data: seriesData,
        label: {
          show: true,
          position: 'right'
        }
      }
    ]
  };

  return <Chart className="h-300px" option={option} loading={loading} />;
};

export const Tops = ({ data, loading }) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-4">
      <Top title="攻击者IP" data={data.attacker} loading={loading} />
      <Top title="受害者IP" data={data.victim} loading={loading} />
      <Top title="威胁名称" data={data.threat} loading={loading} />
    </div>
  );
};
