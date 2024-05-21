import { FormItemProps, FormItemTypeEnum } from '@/components/LForm/interface';
import { ColumnsType } from 'antd/es/table';

export const getFormItems = (optOptions): FormItemProps[] => [
  {
    type: FormItemTypeEnum.RangePicker,
    fProps: {
      name: 'time'
    }
  },
  {
    type: FormItemTypeEnum.Input,
    fProps: {
      name: 'opt_user'
    },
    props: {
      placeholder: '请输入用户名'
    }
  },
  {
    type: FormItemTypeEnum.Select,
    fProps: {
      name: 'opt_action'
    },
    props: {
      placeholder: '请选择操作类型',
      options: optOptions
    }
  }
];

export const columns: ColumnsType<any> = [
  {
    title: '操作时间',
    dataIndex: 'opt_time',
    fixed: 'left'
  },
  {
    title: '用户名',
    dataIndex: 'opt_user'
  },
  {
    title: 'IP地址',
    dataIndex: 'opt_ip'
  },
  {
    title: '功能',
    dataIndex: 'opt_module'
  },
  {
    title: '操作类型',
    dataIndex: 'opt_action'
  },
  {
    title: '操作详情',
    dataIndex: 'opt_detail'
  }
];
