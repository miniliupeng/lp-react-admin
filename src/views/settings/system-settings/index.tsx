import { Divider } from 'antd';
import { LogoConfig } from './components/LogoConfig';
import { NameConfig } from './components/NameConfig';
import { TimeConfig } from './components/TimeConfig';

const SystemLogin = () => {
  return (
    <div className="rounded-2 shadow bg-[var(--admin-bg-1)] p-4">
      <LogoConfig />
      <Divider />
      <NameConfig />
      <Divider />
      <TimeConfig />
    </div>
  );
};

export default SystemLogin;
