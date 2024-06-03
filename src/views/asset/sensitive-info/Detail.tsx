import { Descriptions, DescriptionsProps, Space } from 'antd';
import { Pwd } from '../weak-password/Pwd';
import { getStrFromBase64 } from '@/utils/string';
import { LTable } from '@/components';

export const Detail = ({ data, pwdMap, onReveal, onResetPwdMapById }) => {
  const items: DescriptionsProps['items'] = [
    {
      label: '敏感信息',
      className: 'before-line',
      children: (
        <Space>
          {pwdMap[data.id]?.info || data.info}
          <Pwd
            pwdMap={pwdMap}
            id={data.id}
            onReveal={onReveal}
            onResetPwdMapById={onResetPwdMapById}
          />
        </Space>
      )
    },
    {
      label: '访问用户',
      className: 'before-line',
      children: (
        <LTable
          dataSource={data.access_users}
          pagination={false}
          columns={[
            {
              title: 'IP',
              dataIndex: 'ip'
            },
            {
              title: '访问次数',
              dataIndex: 'count'
            },
            {
              title: 'cookie',
              dataIndex: 'cookie'
            },
            {
              title: 'ua',
              dataIndex: 'ua'
            }
          ]}
        />
      )
    },
    {
      label: 'payload',
      className: 'before-line',
      children: getStrFromBase64(data.response_body)
    }
  ];
  return (
    <div className="page-wrapper p-4">
      <Descriptions column={1} items={items} />
    </div>
  );
};
