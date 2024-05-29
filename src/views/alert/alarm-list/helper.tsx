import { FlagIcon, LTag } from '@/components';
import { FormItemProps, FormItemTypeEnum } from '@/components/LForm/interface';
import { attackResultOptions } from '@/config/options';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { TimeRangePickerProps } from 'antd';
import { ColumnsType } from 'antd/es/table';
import dayjs from 'dayjs';

const presets: TimeRangePickerProps['presets'] = [
  { label: '今天', value: [dayjs().startOf('day'), dayjs()] },
  { label: '最近7天', value: [dayjs().add(-7, 'd'), dayjs()] },
  { label: '最近14天', value: [dayjs().add(-14, 'd'), dayjs()] }
];

export const getFormItems = (): FormItemProps[] => [
  {
    type: FormItemTypeEnum.RangePicker,
    fProps: {
      name: 'time'
    },
    props: {
      field: ['start_time', 'end_time'],
      presets
    }
  },
  {
    type: FormItemTypeEnum.Input,
    fProps: {
      name: 'src_ip'
    },
    props: {
      placeholder: '源IP'
    }
  },
  {
    type: FormItemTypeEnum.Input,
    fProps: {
      name: 'dest_ip'
    },
    props: {
      placeholder: '目的IP'
    }
  },
  {
    type: FormItemTypeEnum.Select,
    fProps: {
      name: 'attack_result'
    },
    props: {
      placeholder: '攻击结果',
      options: attackResultOptions
    }
  },
  {
    type: FormItemTypeEnum.Input,
    fProps: {
      name: 'keyword'
    },
    props: {
      placeholder: '威胁名称'
    }
  }
];

export const getColumns = (): ColumnsType<any> => [
  {
    title: '类型',
    fixed: 'left',
    render: (record) => {
      return (
        <LTag type={record.attack_result}>
          {record.attack_result}{' '}
          {record.attack_dir && record.attack_dir === 'CTS' ? <RightOutlined /> : <LeftOutlined />}
        </LTag>
      );
    }
  },
  {
    title: '时间',
    dataIndex: 'timestamp'
  },
  {
    title: '源IP',
    render: (record) => (
      <div className="flex-y-center gap-1">
        <FlagIcon code={record.attacker_geo?.country_code} />
        <span>{record.attacker_geo?.country}</span>
        <span>{record.attacker_geo?.city}</span>
        <span>
          <span className="font-700">{record.src_ip}</span>:{record.src_port}
        </span>
      </div>
    )
  },
  {
    title: '目的IP',
    render: (record) => (
      <>
        <span className="font-700">{record.dest_ip}</span>:{record.dest_port}
      </>
    )
  },
  {
    title: '协议',
    dataIndex: 'proto'
  },
  {
    title: 'URL',
    dataIndex: 'url'
  },
  {
    title: '威胁名称',
    dataIndex: 'rule_name'
  }
];
