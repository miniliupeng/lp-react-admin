import * as echarts from 'echarts/core';

import {
  BarChart,
  LineChart,
  PieChart,
  GraphChart,
  HeatmapChart
  // RadarChart,
  // MapChart,
  // PictorialBarChart
} from 'echarts/charts';

import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  // RadarComponent,
  // ToolboxComponent,
  // DataZoomComponent,
  VisualMapComponent,
  // TimelineComponent,
  CalendarComponent
  // GraphicComponent,
  // PolarComponent,
  // AriaComponent,
  // ParallelComponent
} from 'echarts/components';

import { LabelLayout, UniversalTransition } from 'echarts/features';

import { /* CanvasRenderer, */ SVGRenderer } from 'echarts/renderers';

import type {
  // 系列类型的定义后缀都为 SeriesOption
  BarSeriesOption,
  LineSeriesOption,
  GraphSeriesOption,
  HeatmapSeriesOption,
  PieSeriesOption
} from 'echarts/charts';

import type {
  // 组件类型的定义后缀都为 ComponentOption
  TitleComponentOption,
  TooltipComponentOption,
  GridComponentOption,
  LegendComponentOption,
  CalendarComponentOption,
  VisualMapComponentOption
  // DatasetComponentOption
} from 'echarts/components';

import type { ComposeOption } from 'echarts/core';

// 通过 ComposeOption 来组合出一个只有必须组件和图表的 Option 类型
export type ECOption = ComposeOption<
  | BarSeriesOption
  | LineSeriesOption
  | GraphSeriesOption
  | HeatmapSeriesOption
  | PieSeriesOption
  | TitleComponentOption
  | TooltipComponentOption
  | LegendComponentOption
  | GridComponentOption
  | CalendarComponentOption
  | VisualMapComponentOption
  // | DatasetComponentOption
>;

echarts.use([
  LegendComponent,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  // PolarComponent,
  // AriaComponent,
  // ParallelComponent,
  // RadarComponent,
  // ToolboxComponent,
  // DataZoomComponent,
  VisualMapComponent,
  // TimelineComponent,
  CalendarComponent,
  // GraphicComponent,
  BarChart,
  LineChart,
  PieChart,
  // MapChart,
  // RadarChart,
  // PictorialBarChart,
  GraphChart,
  HeatmapChart,
  LabelLayout,
  UniversalTransition,
  // CanvasRenderer,
  SVGRenderer
]);

export default echarts;
