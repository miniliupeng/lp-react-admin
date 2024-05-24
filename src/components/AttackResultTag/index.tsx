import React from 'react';
import { Tag as AntTag } from 'antd';
import { isFalsy } from '@/utils/object';

export type Result = '失陷' | '成功' | '企图' | '失败';

interface AttackResultTagProps extends React.ComponentProps<typeof AntTag> {
  result: Result;
  extra?: React.ReactNode;
}

const colorMap: { [key in Result]: string } = {
  失陷: '#EE6666',
  成功: '#FC8452',
  企图: '#F0B11B',
  失败: '#A0A9C3'
};

export const AttackResultTag = ({ result, extra, className = '' }: AttackResultTagProps) => {
  if (isFalsy(result)) return <span className="invalid">N/A</span>;
  return (
    <AntTag
      className={`line-height-28px h-28px text-white border-0 px-12px ${className}`}
      style={{
        backgroundColor: colorMap[result] || '#F0B11B'
      }}
    >
      {result}
      {extra}
    </AntTag>
  );
};
