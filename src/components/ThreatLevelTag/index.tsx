import React from 'react';
import { Tag as AntTag } from 'antd';
import { isFalsy } from '@/utils/object';
import { UnknownText } from '@/components/UnknownText';
import { SvgIcon } from '../SvgIcon';

export type Level =
  | '正常'
  | '安全'
  | '0'
  | '低危'
  | '1'
  | '中危'
  | '2'
  | '高危'
  | '3'
  | '危急'
  | '严重'
  | '未定义';

interface ThreatLevelTagProps extends React.ComponentProps<typeof AntTag> {
  level: Level;
}

const textMap: { [key in Level]: string } = {
  正常: '正常',
  安全: '安全',
  '0': '低危',
  低危: '低危',
  '1': '中危',
  中危: '中危',
  '2': '高危',
  高危: '高危',
  '3': '危急',
  危急: '危急',
  严重: '危急',
  未定义: '未定义'
};

export const colorMap: { [key in Level]: string } = {
  正常: '#91CC75',
  安全: '#91CC75',
  '0': '#1CC2C1',
  低危: '#1CC2C1',
  '1': '#F0B11B',
  中危: '#F0B11B',
  '2': '#FC8452',
  高危: '#FC8452',
  '3': '#EE6666',
  危急: '#EE6666',
  严重: '#EE6666',
  未定义: '#b1b4b7'
};

export const ThreatLevelTag = ({ level, className = '' }: ThreatLevelTagProps) => {
  if (isFalsy(level)) return <UnknownText />;
  return (
    <AntTag
      className={`line-height-28px h-28px text-white border-0 px-12px ${className}`}
      style={{
        backgroundColor: colorMap[level] || '#F0B11B'
      }}
    >
      <SvgIcon name="alertLevel" />
      {textMap[level]}
    </AntTag>
  );
};
