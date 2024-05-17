import { Table } from 'antd';
import data from './oid.json';
import { columns } from './helper';
export const Oid = () => {
  return <Table size="small" columns={columns} pagination={false} dataSource={data} bordered />;
};
