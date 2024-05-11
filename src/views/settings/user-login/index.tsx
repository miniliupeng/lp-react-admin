import { Divider } from 'antd';
import { UserManage } from './components/UserManage';
import { SecuritySettings } from './components/SecuritySettings';
import { PasswordRules } from './components/PasswordRules';
import { SecurityOperations } from './components/SecurityOperations';

const UserLogin = () => {
  return (
    <div className="rounded-2 shadow bg-[var(--admin-bg-1)] p-4">
      <UserManage />
      <Divider />
      <SecuritySettings />
      <Divider className="mt-0" />
      <PasswordRules />
      <Divider className="mt-0" />
      <SecurityOperations />
    </div>
  );
};

export default UserLogin;
