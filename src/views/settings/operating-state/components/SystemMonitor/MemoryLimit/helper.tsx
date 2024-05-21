import { FormItemProps, FormItemTypeEnum } from '@/components/LForm/interface';
import { BoolEnum } from '@/enums';

export const FormItems: FormItemProps[] = [
  {
    type: FormItemTypeEnum.Switch,
    fProps: {
      label: '内存限制',
      name: 'enable'
    },
    props: {
      field: [BoolEnum.TRUE, BoolEnum.FALSE]
    }
  },
  {
    type: FormItemTypeEnum.Select,
    fProps: {
      label: '内存使用率',
      name: 'percent',
      rules: [{ required: true }]
    },
    props: {
      options: [
        { label: '50%', value: 50 },
        { label: '60%', value: 60 },
        { label: '70%', value: 70 },
        { label: '80%', value: 80 },
        { label: '90%', value: 90 }
      ],
      className: '!w-100px'
    }
  },
  {
    type: FormItemTypeEnum.Select,
    fProps: {
      label: '检查时间间隔',
      name: 'interval',
      rules: [{ required: true }]
    },
    props: {
      options: [
        { label: '5分钟', value: 5 },
        { label: '10分钟', value: 10 },
        { label: '15分钟', value: 15 }
      ],
      className: '!w-100px'
    }
  }
];
