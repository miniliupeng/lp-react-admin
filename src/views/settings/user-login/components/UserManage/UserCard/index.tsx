import { Avatar, Descriptions, DescriptionsProps, Popconfirm, Space } from 'antd';
import { User } from '@/api/interface/user';
import { RoleNameEnum } from '@/enums/user';
import { DeleteOutlined, FormOutlined } from '@ant-design/icons';
import './index.scss';

interface UserCardProps {
  data: User;
  onEdit: () => void;
  onDelete: () => Promise<any>;
  onReset: () => Promise<any>;
}
export const UserCard = ({
  data: { user_name, role_name, account_period, login_time, login_ip },
  onEdit,
  onDelete,
  onReset
}: UserCardProps) => {
  const items: DescriptionsProps['items'] = [
    {
      key: 'role_name',
      label: '角色名',
      children: RoleNameEnum[role_name]
    },
    {
      key: 'account_period',
      label: '账号有效期至',
      children: account_period
    },
    {
      key: 'login_time',
      label: '最后登录时间',
      children: login_time
    },
    {
      key: 'login_ip',
      label: '最后登录IP',
      children: login_ip
    }
  ];
  return (
    <div className="shadow rounded-4 p-4 flex gap-4 relative user-card-container">
      <Avatar size={100} className="shrink-0 bg-primary">
        {user_name}
      </Avatar>
      <Descriptions items={items} column={1} />
      <Space className="absolute right-2 top-0.5 user-card-extra">
        <FormOutlined onClick={onEdit} className="text-primary" />
        <Popconfirm title="确定删除？" onConfirm={onDelete}>
          <DeleteOutlined className="text-error" />
        </Popconfirm>
        <Popconfirm title="确定重置密码？" onConfirm={onReset}>
          <span className="cursor-pointer text-primary">重置密码</span>
        </Popconfirm>
      </Space>
    </div>
  );
};
