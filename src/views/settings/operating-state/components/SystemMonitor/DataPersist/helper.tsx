import { FormItemProps, FormItemTypeEnum } from '@/components/LForm/interface';

export const FormItems: FormItemProps[] = [
  {
    type: FormItemTypeEnum.Select,
    fProps: {
      label: '数据存储',
      name: 'days',
      rules: [{ required: true }]
    },
    props: {
      options: [
        { label: '7天', value: 7 },
        { label: '14天', value: 14 },
        { label: '30天', value: 30 },
        { label: '60天', value: 60 },
        { label: '90天', value: 90 }
      ],
      className: '!w-100px'
    }
  }
];
