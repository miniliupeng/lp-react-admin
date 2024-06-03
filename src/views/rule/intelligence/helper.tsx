import { Switch } from '@/components';
import { FormItemProps, FormItemTypeEnum } from '@/components/LForm/interface';
import { ColumnsType } from '@/typings/antd';
import { Space, Tag } from 'antd';

export const getFormItems = (option): FormItemProps[] => [
  {
    type: FormItemTypeEnum.Select,
    fProps: {
      name: 'threat_type'
    },
    props: {
      placeholder: '威胁类型',
      options: option,
      showSearch: true,
      fieldNames: {
        label: 'name',
        value: 'name'
      }
    }
  },
  {
    type: FormItemTypeEnum.Input,
    fProps: {
      name: 'alarm_ioc'
    },
    props: {
      placeholder: '情报IOC'
    }
  }
];

export const getColumns = (onEnable, openModal, onDelete): ColumnsType<any> => [
  {
    title: '规则编号',
    dataIndex: 'id',
    width: 150,
    fixed: 'left'
  },
  {
    title: 'IOC',
    dataIndex: 'alarm_ioc'
  },
  {
    title: '威胁类型',
    dataIndex: 'threat_type',
    render: (threat_type) => (
      <>
        {threat_type?.map((item) => (
          <Tag color="error" key={item}>
            {item}
          </Tag>
        ))}
      </>
    )
  },
  {
    title: '更新时间',
    dataIndex: 'update_time'
  },
  {
    title: '操作',
    width: 110,
    fixed: 'right',
    render: (record) => (
      <Space>
        <Switch
          value={record.enable}
          onChange={(val) =>
            onEnable({
              ids: [record.id],
              enable: val
            })
          }
        />
        <div className="table-btn" onClick={() => openModal({ data: record })}>
          编辑
        </div>
        <div className="table-btn" onClick={() => onDelete({ ids: [record.id] })}>
          删除
        </div>
      </Space>
    )
  }
];
