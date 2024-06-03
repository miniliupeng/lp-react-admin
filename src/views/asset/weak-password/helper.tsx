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

export const getColumns = (showUsername, onToggleShowUsername, pwdMap): ColumnsType<any> => [
  {
    title: (
      <Space>
        用户名
        <LtableBtn onClick={onToggleShowUsername}>
          {showUsername ? <EyeOutlined /> : <EyeInvisibleOutlined />}
        </LtableBtn>
      </Space>
    ),
    fixed: 'left',
    dataIndex: 'username',
    render: (username) => (showUsername ? username : `${username[0]}${'*'.repeat(5)}`)
  },

  {
    title: '弱口令',
    render: (record) => <>{pwdMap[record.id]?.passwd || record.passwd}</>
  },
  {
    title: '资产',
    render: (record) => (
      <>
        <Tag color="processing">{record.app_proto}</Tag>
        {record.asset}
      </>
    )
  },
  {
    title: '最近登录',
    dataIndex: 'login_time'
  }
];
