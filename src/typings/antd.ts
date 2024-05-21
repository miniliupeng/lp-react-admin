import { GetProp, TableProps } from 'antd';

export type ColumnsType<T extends object> = GetProp<TableProps<T>, 'columns'>;
