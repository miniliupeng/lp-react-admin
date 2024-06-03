import { Divider } from 'antd';
import { FileRestore } from './FileRestore';
import { Sandbox } from './Sandbox';

const File = () => {
  return (
    <div className="rounded-2 shadow bg-[var(--admin-bg-1)] p-4">
      <FileRestore />
      <Divider />
      <Sandbox />
    </div>
  );
};

export default File;
