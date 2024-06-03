import { FormItemProps, FormItemTypeEnum } from '@/components/LForm/interface';
import { BoolEnum } from '@/enums';
import { Button } from 'antd';

export const fileRestoreFormItems: FormItemProps[] = [
  {
    type: FormItemTypeEnum.Switch,
    fProps: {
      label: '启用文件还原',
      name: 'enable',
      valuePropName: 'checked'
    },
    props: {
      field: [BoolEnum.TRUE, BoolEnum.FALSE]
    }
  },
  {
    type: FormItemTypeEnum.InputNumber,
    fProps: {
      label: '文件存储时间',
      name: 'save_time'
    },
    props: {
      addonAfter: '小时'
    }
  },
  {
    type: FormItemTypeEnum.InputNumber,
    fProps: {
      label: '最大保留文件数',
      name: 'max_file_count'
    }
  },
  {
    type: FormItemTypeEnum.InputNumber,
    fProps: {
      label: '最大占用磁盘',
      name: 'max_disk_occupy'
    },
    props: {
      addonAfter: 'MB'
    }
  },
  {
    type: FormItemTypeEnum.Render,
    render: () => (
      <Button type="primary" htmlType="submit">
        保存
      </Button>
    )
  }
];

export const SANDBOX_TYPES = [
  {
    label: 'doc/docx',
    value: 'doc/docx'
  },
  {
    label: 'ppt/pptx',
    value: 'ppt/pptx'
  },
  {
    label: 'xls/xlsx',
    value: 'xls/xlsx'
  },
  {
    label: 'bat',
    value: 'bat'
  },
  {
    label: 'dll',
    value: 'dll'
  },
  {
    label: 'exe',
    value: 'exe'
  },
  {
    label: 'msi',
    value: 'msi'
  },
  {
    label: 'vbs',
    value: 'vbs'
  },
  {
    label: 'rar',
    value: 'rar'
  }
];

export const sandboxFormItems: FormItemProps[] = [
  {
    type: FormItemTypeEnum.Switch,
    fProps: {
      label: '启用文件还原',
      name: 'enable',
      valuePropName: 'checked'
    },
    props: {
      field: [BoolEnum.TRUE, BoolEnum.FALSE]
    }
  },
  {
    type: FormItemTypeEnum.CheckboxGroup,
    fProps: {
      label: '检测文件类型',
      name: 'check'
    },
    props: {
      className: 'gap-2',
      returnObj: true,
      options: SANDBOX_TYPES
    }
  },
  {
    type: FormItemTypeEnum.InputNumber,
    fProps: {
      label: '文件存储时间',
      name: 'save_time'
    },
    props: {
      addonAfter: '小时'
    }
  },
  {
    type: FormItemTypeEnum.InputNumber,
    fProps: {
      label: '最大保留文件数',
      name: 'max_file_count'
    }
  },
  {
    type: FormItemTypeEnum.InputNumber,
    fProps: {
      label: '最大占用磁盘',
      name: 'max_disk_occupy'
    },
    props: {
      addonAfter: 'MB'
    }
  },
  {
    type: FormItemTypeEnum.Render,
    render: () => (
      <Button type="primary" htmlType="submit">
        保存
      </Button>
    )
  }
];
