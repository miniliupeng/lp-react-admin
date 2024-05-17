import { InterfaceManage } from './components/InterfaceManage';
import { Divider } from 'antd';
import { Firewall } from './components/Firewall';
import { SshPort } from './components/SshPort';
import { SNMPServiceConfig } from './components/SNMPServiceConfig';
import { SNMPTrapConfig } from './components/SNMPTrapConfig';
import { HomeNet } from './components/HomeNet';
import { XFF } from './components/XFF';

const NetWork = () => {
  return (
    <div className="rounded-2 shadow bg-[var(--admin-bg-1)] p-4">
      <InterfaceManage />
      <Divider />
      <Firewall />
      <Divider />
      <SshPort />
      <Divider />
      <SNMPServiceConfig />
      <Divider />
      <SNMPTrapConfig />
      <Divider />
      <HomeNet />
      <Divider />
      <XFF />
    </div>
  );
};

export default NetWork;
