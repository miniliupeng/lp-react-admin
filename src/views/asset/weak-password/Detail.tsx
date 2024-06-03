import { Descriptions, DescriptionsProps, Space } from 'antd';
import { Pwd } from './Pwd';

export const Detail = ({ data, pwdMap, onReveal, onResetPwdMapById }) => {
  const items: DescriptionsProps['items'] = [
    {
      label: '弱口令',
      className: 'before-line',
      children: (
        <Space>
          {pwdMap[data.id]?.passwd || data.passwd}
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
      label: '最近登录IP',
      className: 'before-line',
      children: data.login_ip
    },
    {
      label: '最近登录ua',
      className: 'before-line',
      children: data.login_ua
    },
    {
      label: '最近登录时间',
      className: 'before-line',
      children: data.login_time
    }
  ];
  return (
    <div className="page-wrapper p-4">
      <Descriptions column={1} items={items} />
    </div>
  );
};
