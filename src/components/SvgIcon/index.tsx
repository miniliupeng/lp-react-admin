import React, { useMemo } from 'react';

interface SvgIconProps {
  /**
   * 前缀
   * @default icon
   */
  prefix?: string;
  /**
   * 必填标识 由 dir-name 组成
   */
  name: string;
  /**
   * fill
   */
  color?: string;
  /**
   * stroke
   */
  stroke?: string;
  /**
   * 图标尺寸大小
   * @default 16
   */
  size?: number | string;
  /**
   * 点击事件
   */
  onClick?: () => void;
  /**
   * css 类名
   */
  className?: string;
  /**
   * css 样式
   */
  style?: React.CSSProperties;
}

export const SvgIcon = (props: SvgIconProps) => {
  const {
    prefix = 'icon',
    name,
    color = 'currentColor',
    size = 16,
    stroke,
    style,
    ...attrs
  } = props;

  const symbolId = useMemo(() => `#${prefix}-${name}`, [prefix, name]);

  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      {...attrs}
      style={{ verticalAlign: '-0.3em', ...style }}
    >
      <use href={symbolId} fill={color} stroke={stroke} />
    </svg>
  );
};
