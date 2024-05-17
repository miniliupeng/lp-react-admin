import { GetProp, TableProps } from 'antd';
import { useState } from 'react';

type RowSelection<T extends object> = GetProp<TableProps<T>, 'rowSelection'>;

export const useRowSelection = <DataType extends object>({
  defaultSelectedRowKeys = [],
  ...options
}: RowSelection<DataType> = {}) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>(defaultSelectedRowKeys);
  // const [selectedRows, setSelectedRows] = useState<React.Key[]>([]);
  const onChange = (selectedRowKeys /* , selectedRows */) => {
    setSelectedRowKeys(selectedRowKeys);
    // setSelectedRows(selectedRows);
  };

  return {
    ...options,
    selectedRowKeys,
    // selectedRows,
    onChange
  };
};
