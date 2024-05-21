import { ButtonGroup, Switch } from '@/components';
import { BoolEnum } from '@/enums';
import { interfaceTypeEnum, interfaceTypeMapEnum } from '@/enums/nework';
import { ColumnsType } from '@/typings/antd';
import { ipToCIDR } from '@/utils/ip';
import { Badge, ButtonProps } from 'antd';

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
        size="small"
        options={[
          { type: 'primary', children: '编辑', onClick: () => onOpenUpdateModal(record) },
          ...(record.type === interfaceTypeEnum.manage
            ? ([
                {
                  type: 'primary',
                  children: '诊断',
                  onClick: () => onOpenDiagnoseModal(record)
                }
              ] as ButtonProps[])
            : [])
        ]}
      />
    )
  }
];
