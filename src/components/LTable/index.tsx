import { Table } from 'antd';
import type { TableProps } from 'antd';

export const LTable = ({ rowKey = 'id', ...props }: TableProps) => {
  return <Table bordered size="middle" rowKey={rowKey} {...props} />;
};
