import { Switch } from '@/components';
import { LtableBtn } from '@/components/LTable/LtableBtn';
import { ATTACK_RESULT_OPTIONS, SEVERITY_LEVEL_OPTIONS } from '@/config/options';
import { BoolEnum } from '@/enums';
import { ColumnsType } from '@/typings/antd';
import { DownOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { Badge, Dropdown, Space, Tag, Tooltip } from 'antd';
import { LineChart } from './LineChart';

const statusBadgeMap = {
  0: 'default',
  1: 'processing'
};

export const getColumns = (onEnable, onEdit, onDelete, onMenuChange): ColumnsType<any> => [
  {
    title: (
      <Space>
        名称
        <Tooltip
          title={
            <Space direction="vertical">
              <Badge status={'processing'} text={<span className="text-white">在线</span>} />
              <Badge color="gray" text={<span className="text-white">离线</span>} />
            </Space>
          }
        >
          <QuestionCircleOutlined />
        </Tooltip>
      </Space>
    ),
    fixed: 'left',
    render: (record) => <Badge status={statusBadgeMap[record.online]} text={record.trans_name} />
  },
  {
    title: '地址',
    render: (record) => (
      <Space direction="vertical">
        <Tag color="blue">{record.trans_way}</Tag>
        <span>
          <span className="font-700">{record.display}</span>
          {/* :{record.port} */}
        </span>
      </Space>
    )
  },
  {
    title: '内容',
    render: (record) => {
      const _trans_info = JSON.parse(record.trans_info);
      const showAlertTag = record.alarm_status === 1;
      const showLogTag =
        record.log_status === 1 && _trans_info.traffic_log?.some((item) => item.value === 1);
      const isAllAlert =
        showAlertTag &&
        _trans_info.attack_type.every((item) => item.value === 1) &&
        _trans_info.severity.every((item) => item.value === 1) &&
        _trans_info.attack_result.every((item) => item.value === 1);
      const isAllLog = showLogTag && _trans_info.traffic_log?.every((item) => item.value === 1);
      return (
        <Space direction="vertical">
          {showAlertTag && (
            <Tag color={isAllAlert ? '#ff4d4f' : 'error'}>{isAllAlert ? '告警' : '部分告警'}</Tag>
          )}
          {showLogTag && (
            <Tag color={isAllLog ? '#1677ff' : 'processing'}>{isAllLog ? '日志' : '部分日志'}</Tag>
          )}
        </Space>
      );
    }
  },
  {
    title: (
      <Space>
        流量
        <Dropdown
          menu={{
            items: [
              {
                label: '实时',
                key: '0'
              },
              {
                label: '24小时',
                key: '1'
              },
              {
                label: '一周',
                key: '2'
              }
            ],
            selectable: true,
            defaultSelectedKeys: ['0'],
            onClick: onMenuChange
          }}
        >
          <LtableBtn>
            切换
            <DownOutlined />
          </LtableBtn>
        </Dropdown>
      </Space>
    ),
    width: 100,
    render: () => <LineChart />
  },
  {
    title: '操作',
    width: 120,
    render: (record) => {
      return (
        <div className="flex-y-center gap-2">
          <Switch
            field={[BoolEnum.TRUE, BoolEnum.FALSE]}
            value={record.enable}
            onChange={(val) =>
              onEnable({
                id: record.id,
                enable: val
              })
            }
          />
          <LtableBtn onClick={() => onEdit(record)}>编辑</LtableBtn>
          <LtableBtn onClick={() => onDelete({ ids: [record.id] })}>删除</LtableBtn>
        </div>
      );
    }
  }
];

export const formatTransData = (data: any, alertTypes: any, logTypes: any) => {
  let trans_info: Record<string, any> = {};
  if (data.alarm_status === 1) {
    trans_info = {
      attack_type: alertTypes?.map((item) => ({
        name: item.name,
        value:
          data.trans_info.attack_type.includes('全部') ||
          data.trans_info.attack_type.includes(item.name)
            ? 1
            : 0
      })),
      severity: SEVERITY_LEVEL_OPTIONS.map((item) => ({
        name: item.value,
        value:
          data.trans_info.severity.includes('全部') || data.trans_info.severity.includes(item.value)
            ? 1
            : 0
      })),
      attack_result: ATTACK_RESULT_OPTIONS.map((item) => ({
        name: item.value,
        value:
          data.trans_info.attack_result.includes('全部') ||
          data.trans_info.attack_result.includes(item.value)
            ? 1
            : 0
      }))
    };
  }
  if (data.log_status === 1) {
    trans_info.traffic_log = logTypes?.map((item) => ({
      name: item.name,
      value:
        data.trans_info.traffic_log.includes('全部') ||
        data.trans_info.traffic_log.includes(item.name)
          ? 1
          : 0
    }));
  }

  return {
    trans_type: 'data',
    ...data,
    trans_info
  };
};

export const parseData = (data: any) => {
  const trans_info: Record<string, any> = {};
  const _trans_info = JSON.parse(data.trans_info);
  for (const key in _trans_info) {
    trans_info[key] = _trans_info[key].flatMap((item: any) => {
      if (item.value === 1) return [item.name];
      return [];
    });
  }

  return {
    ...data,
    trans_info
  };
};
