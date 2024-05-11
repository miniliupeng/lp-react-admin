import { Button, Modal, message } from 'antd';
import { UserCard } from './UserCard';
import { useFormModal } from '@/hooks';
import { UserForm } from './UserForm';
import {
  addUserService,
  deleteUserService,
  getAllUsersService,
  resetUserPwdService,
  updateUserService
} from '@/services/user';
import { useRequest } from 'ahooks';
import dayjs from 'dayjs';

export const UserManage = () => {
  const { data, refresh } = useRequest(getAllUsersService);
  const showModal = useFormModal({
    title: '用户',
    content: <UserForm />,
    refresh,
    add: addUserService,
    update: updateUserService
  });
  const onDelete = async (user) => {
    await deleteUserService({ user_ids: `${user.id}` });
    message.success('操作成功');
    refresh();
  };
  const onReset = async (user) => {
    const password = await resetUserPwdService({ id: user.id });
    Modal.success({
      content: `您重置后的密码为：${password}`,
      okText: '关闭'
    });
  };

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-4 mb-4">用户管理</h1>
        <Button type="primary" onClick={() => showModal()}>
          新增用户
        </Button>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(150px,_400px))] gap-4 ">
        {data?.map((user) => (
          <UserCard
            key={user.user_name}
            data={user}
            onEdit={() =>
              showModal({ data: { ...user, account_period: dayjs(user.account_period) } })
            }
            onDelete={() => onDelete(user)}
            onReset={() => onReset(user)}
          />
        ))}
        {/* <div className="border-dashed border border-[var(--admin-border-1)] rounded-4 p-4 flex gap-4"></div> */}
      </div>
    </div>
  );
};
