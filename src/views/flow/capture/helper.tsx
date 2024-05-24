import { LtableBtn } from '@/components/LTable/LtableBtn';
import { ColumnsType } from '@/typings/antd';
import { Badge, Flex } from 'antd';

const statusMap = {
  0: '未开始',
  1: '进行中',
  2: '已完成',
  3: '已停止'
};
const statusBadgeMap = {
  0: 'default',
  1: 'processing',
  2: 'success',
  3: 'warning'
};

export const getColumns = (onStop, onDelete, onDownload): ColumnsType<any> => [
  {
    title: '任务名称 / 状态',
    fixed: 'left',
    render: (record) => {
      return (
        <Flex gap={16}>
          <span>{record.name}</span>
          <Badge status={statusBadgeMap[record.status]} text={statusMap[record.status]} />
        </Flex>
      );
    }
  },
  {
    title: '源IP',
    dataIndex: 'sip'
  },
  {
    title: '源端口',
    dataIndex: 'sport'
  },
  {
    title: '目标IP',
    dataIndex: 'dip'
  },
  {
    title: '目标端口',
    dataIndex: 'dport'
  },
  {
    title: '协议',
    dataIndex: 'proto'
  },
  {
    title: '时间范围',
    render: (record) => {
      return (
        <>
          {record.start_time} ~ {record.end_time}
        </>
      );
    }
  },
  {
    title: '抓包大小',
    dataIndex: 'max_size'
  },
  {
    title: '操作',
    render: (record) => {
      return (
        <div className="flex-y-center gap-2">
          <LtableBtn
            onClick={() => onStop({ id: record.id })}
            disabled={[2, 3].includes(record.status)}
          >
            停止
          </LtableBtn>
          <LtableBtn onClick={() => onDelete({ id: record.id })}>删除</LtableBtn>
          <LtableBtn onClick={() => onDownload({ id: record.id })}>下载</LtableBtn>
        </div>
      );
    }
  }
];
