import { Tag } from 'antd';
import React from 'react';

export const LTag = ({
  type,
  children
}: {
  type: '企图' | '成功' | '失陷';
  children: React.ReactNode;
}) => {
  if (type === '企图') return <Tag>{children}</Tag>;
  if (type === '成功') return <Tag color="error">{children}</Tag>;
  if (type === '失陷') return <Tag color="var(--ant-color-error)">{children}</Tag>;

  return <Tag>{children}</Tag>;
};
