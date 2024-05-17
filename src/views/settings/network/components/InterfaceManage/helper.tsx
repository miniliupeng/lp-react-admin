import { ButtonGroup, Switch } from '@/components';
import { BoolEnum } from '@/enums';
import { interfaceTypeEnum, interfaceTypeMapEnum } from '@/enums/nework';
import { ipToCIDR } from '@/utils/ip';
import { Badge, type GetProp, type TableProps } from 'antd';

type ColumnsType<T extends object> = GetProp<TableProps<T>, 'columns'>;

export const getColumns = (onEnable, onOpenUpdateModal, onOpenDiagnoseModal): ColumnsType<any> => [
  {
    dataIndex: 'connected',
    render: (connected) => <Badge status={connected === 1 ? 'success' : 'error'} />
  },
  {
    dataIndex: 'name'
  },
  {
    dataIndex: 'chip'
  },
  {
    render: (record) => {
      const { ip, mask, type, enabled } = record;
      if (type === interfaceTypeEnum.manage) {
        return <>{ipToCIDR(ip, mask)}</>;
      } else if (type === interfaceTypeEnum.biz) {
        return (
          <Switch
            field={[BoolEnum.TRUE, BoolEnum.FALSE]}
            checkedChildren="开启"
            unCheckedChildren="关闭"
            checked={enabled === 1}
            onChange={(val) =>
              onEnable({
                ...record,
                enabled: val
              })
            }
          />
        );
      }
    }
  },
  {
    dataIndex: 'type',
    render: (type) => interfaceTypeMapEnum[type]
  },
  {
    render: (record) => (
      <ButtonGroup
        options={[
          { children: '编辑', onClick: () => onOpenUpdateModal(record) },
          ...(record.type === interfaceTypeEnum.manage
            ? [
                {
                  children: '诊断',
                  onClick: () => onOpenDiagnoseModal(record)
                }
              ]
            : [])
        ]}
      />
    )
  }
];
