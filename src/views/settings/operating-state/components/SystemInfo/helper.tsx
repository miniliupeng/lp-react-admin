import { DeviceInfo } from '@/api/interface/operating-state';
import { DescriptionsProps } from 'antd';

export const getProgressColor = (percent: number) => {
  if (percent < 50) return 'var(--ant-color-info)';
  if (percent < 90) return 'var(--ant-color-warning)';
  return 'var(--ant-color-error)';
};

export const getDeviceInfoItems = (data: DeviceInfo): DescriptionsProps['items'] => [
  {
    key: 'equipment_serial_number',
    label: '设备序列号',
    children: data.equipment_serial_number
  },
  {
    key: 'software_version',
    label: '软件版本',
    children: data.software_version
  },
  {
    key: 'certificate_info',
    label: '证书信息',
    children: data.certificate_info
  },
  {
    key: 'engine_rule_version',
    label: '规则版本',
    children: data.engine_rule_version
  },
  {
    key: 'use_time',
    label: '运行时间',
    children: data.use_time
  }
];
