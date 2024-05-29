import { FlagIcon } from '@/components';
import { FormItemProps, FormItemTypeEnum } from '@/components/LForm/interface';
import { ColumnsType } from '@/typings/antd';
import { ArrowDownOutlined } from '@ant-design/icons';

export const formItems: FormItemProps[] = [
  {
    type: FormItemTypeEnum.Input,
    fProps: {
      className: '!flex-1',
      name: 'keyword'
    },
    props: {
      placeholder: 'IP/geo/手法'
    }
  },
  {
    type: FormItemTypeEnum.RadioGroup,
    fProps: {
      className: '!mr-0',
      name: 'order_by'
    },
    props: {
      size: 'small',
      options: [
        {
          label: (
            <>
              最近动作
              <ArrowDownOutlined />
            </>
          ),
          value: 'lastest'
        },
        // {
        //   label: (
        //     <>
        //       持续日期
        //       <ArrowDownOutlined />
        //     </>
        //   ),
        //   value: 'days'
        // },
        {
          label: (
            <>
              告警数量
              <ArrowDownOutlined />
            </>
          ),
          value: 'total'
        }
      ],
      optionType: 'button',
      buttonStyle: 'solid'
    }
  }
];

export const columns: ColumnsType<any> = [
  {
    title: 'ip',
    render: (record) => (
      <div className="flex-y-center gap-1">
        <FlagIcon code={record.attacker_geo?.country_code} />
        <span>{record.attacker_geo?.country}</span>
        <span>{record.attacker_geo?.city}</span>
        <span>
          <span className="font-700">{record.ip}</span>
        </span>
      </div>
    )
  },
  {
    title: '最近时间',
    dataIndex: 'last_time'
  },
  {
    title: '次数',
    dataIndex: 'action_total'
  }
];
