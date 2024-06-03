import { Button, Modal, message } from 'antd';
import { UserCard } from './UserCard';
import { useFormModal } from '@/hooks';
import { UserForm } from './UserForm';
import { useRequest } from 'ahooks';
import dayjs from 'dayjs';
import { addUser, deleteUser, getAllUsers, resetUserPwd, updateUser } from '@/api/modules/user';
import { getBase64Str } from '@/utils/string';
import { TIME_FORMAT } from '@/config/constants';
import { PlusOutlined } from '@ant-design/icons';

export const UserManage = () => {
  const { data, refresh } = useRequest(getAllUsers);
  const showModal = useFormModal({
    title: '用户',
    content: <UserForm />,
    refresh,
    add: (data) =>
      addUser({
        ...data,
        password: getBase64Str(data.password),
        password_confirm: getBase64Str(data.password_confirm),
        account_period: dayjs(data.account_period).format(TIME_FORMAT)
      }),
    update: (data) =>
      updateUser({
        ...data,
        account_period: dayjs(data.account_period).format(TIME_FORMAT)
      })
  });
  const onDelete = async (user) => {
    await deleteUser({ user_ids: `${user.id}` });
    message.success('操作成功');
    refresh();
  };
  const onReset = async (user) => {
    const res = await resetUserPwd({ id: user.id });
    Modal.success({
      content: `您重置后的密码为：${res.data}`,
      okText: '关闭'
    });
  };

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-4 mb-4">用户管理</h1>
        <Button icon={<PlusOutlined />} type="primary" onClick={() => showModal()}>
          新增
        </Button>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(150px,_400px))] gap-4 ">
        {data?.data?.map((user) => (
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
