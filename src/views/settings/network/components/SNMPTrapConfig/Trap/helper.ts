export const columns = [
  {
    title: '名称',
    dataIndex: 'name'
  },
  {
    title: '发送间隔（S）',
    dataIndex: 'moninterval',
    editable: {
      type: 'Input',
      style: {
        width: '93.36px'
      }
    },
    width: 110
  },
  {
    title: '发送条件',
    align: 'left',
    dataIndex: 'name',
    render(text) {
      if (text.includes('太')) {
        return text.replace(/太.*$/g, '');
      }
    },
    colSpan: 3
  },
  {
    colSpan: 0,
    dataIndex: 'condition',
    // editable: {
    //   type: 'Select',
    //   style: {
    //     width: '93.36px'
    //   },
    //   defaultOpen: true,
    //   options: [
    //     {
    //       label: '>',
    //       value: '>'
    //     },
    //     {
    //       label: '>=',
    //       value: '>='
    //     },
    //     {
    //       label: '=',
    //       value: '='
    //     },
    //     {
    //       label: '<',
    //       value: '<'
    //     },
    //     {
    //       label: '<=',
    //       value: '<='
    //     }
    //   ]
    // },
    width: 110
  },
  {
    colSpan: 0,
    dataIndex: 'minval',
    editable: {
      type: 'Input',
      style: {
        width: '93.36px'
      },
      options: [
        {
          label: '>',
          value: '>'
        },
        {
          label: '>=',
          value: '>='
        },
        {
          label: '=',
          value: '='
        },
        {
          label: '<',
          value: '<'
        },
        {
          label: '<=',
          value: '<='
        }
      ]
    },
    width: 110
  }
];

export const defaultValue = [
  {
    condition: '<',
    id: '0',
    minval: '20',
    moninterval: '60',
    name: '空闲CPU百分比太低'
  },
  {
    condition: '>',
    id: '1',
    minval: '80',
    moninterval: '60',
    name: '用户进程使用CPU百分比太高'
  },
  {
    condition: '>',
    id: '2',
    minval: '80',
    moninterval: '60',
    name: '内核(system)进程使用CPU百分比太高'
  },
  {
    condition: '<',
    id: '3',
    minval: '1048576',
    moninterval: '60',
    name: '空闲内存(kB)太少'
  },
  {
    condition: '>',
    id: '4',
    minval: '10',
    moninterval: '60',
    name: '1分钟平均CPU负载太高'
  },
  {
    condition: '>',
    id: '5',
    minval: '15',
    moninterval: '60',
    name: '5分钟平均CPU负载太高'
  },
  {
    condition: '>',
    id: '6',
    minval: '20',
    moninterval: '60',
    name: '15分钟平均CPU负载太高'
  },
  {
    condition: '>',
    id: '9',
    minval: '2000',
    moninterval: '60',
    name: '系统启动进程个数太多'
  },
  {
    condition: '>',
    id: '10',
    minval: '100',
    moninterval: '60',
    name: '系统登录用户太多'
  },
  {
    condition: '<',
    id: '80',
    minval: '102400',
    moninterval: '60',
    name: '可用磁盘空间(kB)太低'
  },
  {
    condition: '>',
    id: '81',
    minval: '80',
    moninterval: '60',
    name: '磁盘使用百分比太高'
  },
  {
    condition: '>',
    id: '82',
    minval: '80',
    moninterval: '60',
    name: '磁盘1分钟平均负载太高'
  },
  {
    condition: '>',
    id: '83',
    minval: '80',
    moninterval: '60',
    name: '磁盘5分钟平均负载太高'
  },
  {
    condition: '>',
    id: '84',
    minval: '80',
    moninterval: '60',
    name: '磁盘15分钟平均负载太高'
  },
  {
    // condition: ">",
    id: '90',
    // minval: "0",
    moninterval: '60',
    name: '威胁情报匹配已开启'
  },
  {
    // condition: ">",
    id: '91',
    // minval: "0",
    moninterval: '60',
    name: '数据库数量达到告警设定值'
  },
  {
    // condition: ">",
    id: '92',
    // minval: "0",
    moninterval: '60',
    name: '登录失败次数达到设定值'
  }
];
