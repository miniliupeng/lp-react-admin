import { Divider } from 'antd';
import { IpSplinter } from './IpSplinter';
import { Flood } from './Flood';

const Dos = () => {
  return (
    <div className="rounded-2 shadow bg-[var(--admin-bg-1)] p-4">
      <IpSplinter />
      <Divider />
      <Flood />
    </div>
  );
};

export default Dos;
