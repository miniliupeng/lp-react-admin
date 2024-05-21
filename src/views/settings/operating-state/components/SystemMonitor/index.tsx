import { MemoryLimit } from './MemoryLimit';
import { DataPersist } from './DataPersist';

export const SystemMonitor = () => {
  return (
    <div>
      <h1 className="text-4 mb-4">系统监控</h1>
      <MemoryLimit />
      <DataPersist />
    </div>
  );
};
