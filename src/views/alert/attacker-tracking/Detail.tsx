import { ResAttacker } from '@/api/interface/attacker-tracking';
import { Calendar, Descriptions, DescriptionsProps, Divider, Empty, Tag } from 'antd';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import './index.scss';

export const Detail = ({ data }: { data?: ResAttacker }) => {
  if (!data) return <Empty className="mt-200px" image={Empty.PRESENTED_IMAGE_SIMPLE}></Empty>;
  const items: DescriptionsProps['items'] = [
    {
      label: 'ip',
      children: data.ip
    },
    {
      label: '攻击次数',
      children: data.action_total
    },
    {
      label: '首次攻击时间',
      children: data.first_time
    },
    {
      label: '最近攻击时间',
      children: data.last_time
    }
  ];

  const cellRender = (value: Dayjs) => {
    const dateStr = value.format('YYYY-MM-DD');
    const list = data.action_map[dateStr];
    if (!list) return null;
    return (
      <>
        {list[0] > 0 && <Tag>企图: {list[0]}</Tag>}
        {list[1] > 0 && <Tag color="error">成功: {list[1]}</Tag>}
        {list[2] > 0 && <Tag color="var(--ant-color-error)">失陷: {list[2]}</Tag>}
      </>
    );
  };

  return (
    <div className="overflow-auto">
      <h1 className="text-4 mb-4 font-700">{data.ip}</h1>
      <Descriptions items={items} />
      <Divider />
      <h1 className="text-4 mb-4 font-700">攻击手法</h1>
      <div className="flex flex-wrap gap-2">
        {data.rule_name_list.map((item) => (
          <Tag bordered={false} color="error">
            {item.name}: {item.count}
          </Tag>
        ))}
      </div>
      <Divider />
      <h1 className="text-4 mb-4 font-700">追踪</h1>
      <Calendar
        className="l-calendar"
        cellRender={cellRender}
        headerRender={() => <h1 className="text-4 mb-4 font-700">{dayjs().format('YYYY-MM')}</h1>}
        validRange={[dayjs().startOf('month'), dayjs().endOf('month')]}
      />
      <Calendar
        className="l-calendar"
        defaultValue={dayjs().subtract(1, 'month')}
        cellRender={cellRender}
        headerRender={() => (
          <h1 className="text-4 mb-4 font-700">{dayjs().subtract(1, 'month').format('YYYY-MM')}</h1>
        )}
        validRange={[
          dayjs().subtract(1, 'month').startOf('month'),
          dayjs().subtract(1, 'month').endOf('month')
        ]}
      />
      <Calendar
        className="l-calendar"
        defaultValue={dayjs().subtract(2, 'month')}
        cellRender={cellRender}
        headerRender={() => (
          <h1 className="text-4 mb-4 font-700">{dayjs().subtract(2, 'month').format('YYYY-MM')}</h1>
        )}
        validRange={[
          dayjs().subtract(2, 'month').startOf('month'),
          dayjs().subtract(2, 'month').endOf('month')
        ]}
      />
    </div>
  );
};
