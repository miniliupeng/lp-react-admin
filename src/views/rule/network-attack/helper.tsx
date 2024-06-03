import { ResRuleOptions } from '@/api/interface/rule-web-attack';
import { AttackResultTag, Switch, ThreatLevelTag } from '@/components';
import { FormItemProps, FormItemTypeEnum } from '@/components/LForm/interface';
import { enableOptions } from '@/config/options';
import { BoolEnum } from '@/enums';
import { getTimes } from '@/utils/time';
import { ColumnsType } from 'antd/es/table';
import { NetAttackDetail } from './Detail';

export const getFormItems = (option?: ResRuleOptions): FormItemProps[] => [
  {
    type: FormItemTypeEnum.Select,
    fProps: {
      name: 'vuln_type'
    },
    props: {
      placeholder: '告警类型',
      options: option?.threat_type
    }
  },
  {
    type: FormItemTypeEnum.Select,
    fProps: {
      name: 'enable'
    },
    props: {
      placeholder: '启用状态',
      options: enableOptions
    }
  },
  {
    type: FormItemTypeEnum.Select,
    fProps: {
      name: 'severity'
    },
    props: {
      placeholder: '告警级别',
      options: option?.threat_level
    }
  },
  {
    type: FormItemTypeEnum.Select,
    fProps: {
      name: 'result'
    },
    props: {
      placeholder: '攻击结果',
      options: option?.result
    }
  },
  {
    type: FormItemTypeEnum.Input,
    fProps: {
      name: 'rule'
    },
    props: {
      placeholder: '编号 / 名称'
    }
  }
];

export const getColumns = (onEnable, openModal, openDetailModal): ColumnsType<any> => [
  {
    title: '规则编号',
    dataIndex: 'id',
    width: 150,
    fixed: 'left'
  },
  {
    title: '规则名称',
    dataIndex: 'rule_name'
  },
  {
    title: '告警类型',
    dataIndex: 'vuln_type'
  },
  {
    title: '告警级别',
    dataIndex: 'severity',
    render: (severity) => <ThreatLevelTag level={severity} />
  },
  {
    title: '攻击结果',
    dataIndex: 'result',
    render: (result) => <AttackResultTag result={result} />
  },
  {
    title: '操作',
    width: 110,
    fixed: 'right',
    render: (record) => (
      <div className="flex-y-center gap-2">
        <Switch
          field={[BoolEnum.TRUE3, BoolEnum.FALSE3]}
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
          onClick={() => {
            openModal({
              data: {
                ...record,
                alarm_threshold_times: record.alarm_threshold_times
                  ? record.alarm_threshold_times
                  : undefined,
                alarm_threshold_s: record.alarm_threshold_s
                  ? getTimes(record.alarm_threshold_s)
                  : undefined,
                alarm_interval_s: record.alarm_interval_s
                  ? getTimes(record.alarm_interval_s)
                  : undefined
              }
            });
          }}
        >
          配置
        </div>
        <div
          className="table-btn"
          onClick={() =>
            openDetailModal({
              width: 888,
              title: record.rule_name,
              content: <NetAttackDetail data={record} />,
              footer: null
            })
          }
        >
          查看
        </div>
      </div>
    )
  }
];
