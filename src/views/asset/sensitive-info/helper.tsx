import { initTime } from '@/components';
import { FormItemProps, FormItemTypeEnum } from '@/components/LForm/interface';
import { LtableBtn } from '@/components/LTable/LtableBtn';
import { ColumnsType } from '@/typings/antd';
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import { Space, Tag } from 'antd';

export const formItems: FormItemProps[] = [
  {
    type: FormItemTypeEnum.RangePicker,
    fProps: {
      name: 'time',
      initialValue: initTime
    },
    props: {
      field: ['start_time', 'end_time']
    }
  }
];

export const getColumns = (pwdMap): ColumnsType<any> => [
  {
    title: '类型',
    fixed: 'left',
    dataIndex: 'kind'
  },
  {
    title: '敏感信息',
    render: (record) => <>{pwdMap[record.id]?.info || record.info}</>
  },
  {
    title: '接口',
    render: (record) => <>{record.asset}</>
  },
  {
    title: '最近访问时间',
    dataIndex: 'access_time'
  },
  {
    title: '访问次数',
    dataIndex: 'access_count'
  }
];
