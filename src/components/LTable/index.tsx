import { CaretRightOutlined } from '@ant-design/icons';
import { Table } from 'antd';
import type { TableProps } from 'antd';

interface LTableProps extends Omit<TableProps<any>, 'title'> {
  title?: React.ReactNode;
  actions?: React.ReactNode;
  total?: number;
}

export const LTable = ({
  rowKey = 'id',
  expandable,
  scroll,
  title,
  actions,
  total,
  className,
  ...props
}: LTableProps) => {
  const showTitle = title || actions;
  return (
    <div className={className}>
      {showTitle && (
        <div className="flex-y-center justify-between mb-2">
          <div className="flex gap-2 items-center">
            <h2 className="text-4">{title}</h2>
            {total && (
              <span>
                共<span className="text-primary m-1">{total}</span>条
              </span>
            )}
          </div>
          {actions}
        </div>
      )}
      <Table
        size="small"
        rowKey={rowKey}
        scroll={{ x: 'max-content', ...scroll }}
        expandable={
          expandable
            ? {
                expandIcon: ({ expanded, onExpand, record }) => {
                  const rotate = expanded ? 90 : 0;
                  return (
                    <CaretRightOutlined rotate={rotate} onClick={(e) => onExpand(record, e)} />
                  );
                },
                ...expandable
              }
            : undefined
        }
        {...props}
      />
    </div>
  );
};
