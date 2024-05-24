import { useEffect, useRef } from 'react';
import echarts, { ECOption } from '@/utils/echarts';
import { useDebounceFn } from 'ahooks';

export interface UseChartProps {
  option: ECOption;
  loading?: boolean;
}

export const useChart = ({ option, loading }: UseChartProps) => {
  const domRef = useRef(null);
  const chartInstance = useRef<echarts.ECharts>();
  useEffect(() => {
    if (domRef.current) {
      // 校验 Dom 节点上是否已经挂载了 ECharts 实例，只有未挂载时才初始化
      chartInstance.current = echarts.getInstanceByDom(domRef.current);
      if (!chartInstance.current) {
        chartInstance.current = echarts.init(
          domRef.current
          //   , null, {
          //   renderer: 'svg'
          // }
        );
      }
      // 设置配置项
      option && chartInstance.current.setOption(option);
    }

    return () => {
      // 容器被销毁之后，销毁实例，避免内存泄漏
      chartInstance.current?.dispose();
    };
  }, [domRef, option]);

  // 窗口自适应并开启过渡动画
  const resize = () => {
    if (chartInstance.current) {
      chartInstance.current.resize({
        animation: { duration: 300 }
      });
    }
  };
  const { run: debounceResize } = useDebounceFn(resize);
  // 监听窗口大小
  useEffect(() => {
    window.addEventListener('resize', debounceResize);

    return () => {
      window.removeEventListener('resize', debounceResize);
    };
  }, []);

  // 展示 loading 动画
  useEffect(() => {
    loading ? chartInstance.current?.showLoading() : chartInstance.current?.hideLoading();
  }, [loading]);

  return {
    domRef,
    chartInstance
  };
};
