import { Switch } from '@/components';
import { FormItemProps, FormItemTypeEnum } from '@/components/LForm/interface';
import { BoolOptions } from '@/config/options';
import { BoolEnum } from '@/enums';
import { ColumnsType } from '@/typings/antd';
import { Badge, Space, Tag } from 'antd';

export const getFormItems = (): FormItemProps[] => [
  {
    type: FormItemTypeEnum.TreeSelect,
    fProps: {
      name: 'regular'
    },
    props: {
      placeholder: '正则',
      treeData: BoolOptions
    }
  },
  {
    type: FormItemTypeEnum.TreeSelect,
    fProps: {
      name: 'salt'
    },
    props: {
      placeholder: '加盐',
      treeData: BoolOptions
    }
  },
  {
    type: FormItemTypeEnum.Input,
    fProps: {
      name: 'pwd'
    },
    props: {
      placeholder: '弱口令'
    }
  }
];

export const getColumns = (onEnable, openModal, onDelete): ColumnsType<any> => [
  {
    title: '弱口令',
    dataIndex: 'pwd',
    fixed: 'left'
  },
  {
    title: '哈希方式',
    render: (record) => (
      <>
        {record.md5 === BoolEnum.TRUE && <Tag color="processing">md5</Tag>}
        {record.sha1 === BoolEnum.TRUE && <Tag color="processing">sha1</Tag>}
        {record.sha256 === BoolEnum.TRUE && <Tag color="processing">sha256</Tag>}
      </>
    )
  },
  {
    title: '正则',
    dataIndex: 'regular',
    render: (regular) => <Badge status={regular === BoolEnum.TRUE ? 'success' : 'error'} />
  },
  {
    title: '加盐',
    dataIndex: 'salt',
    render: (salt) => <Badge status={salt === BoolEnum.TRUE ? 'success' : 'error'} />
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
          field={[BoolEnum.TRUE, BoolEnum.FALSE]}
          value={record.enable}
          onChange={(val) =>
            onEnable({
              ids: [record.id],
              enable: val
            })
          }
        />
        <div
          className="table-btn"
          onClick={() =>
            openModal({
              data: {
                ...record,
                hash: {
                  md5: record.md5,
                  sha1: record.sha1,
                  sha256: record.sha256
                },
                salt: {
                  salt: record.salt
                }
              }
            })
          }
        >
          编辑
        </div>
        <div className="table-btn" onClick={() => onDelete({ ids: [record.id] })}>
          删除
        </div>
      </Space>
    )
  }
];
