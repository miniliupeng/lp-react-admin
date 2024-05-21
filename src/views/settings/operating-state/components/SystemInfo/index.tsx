import { Descriptions, Divider, Progress } from 'antd';
import { getDeviceInfoItems, getProgressColor } from './helper';
import { useRequest } from 'ahooks';
import { getSystemInfo } from '@/api/modules/operating-state';
import { DeviceInfo, DiskInfo } from '@/api/interface/operating-state';

export const SystemInfo = () => {
  const { data } = useRequest(getSystemInfo, {
    pollingInterval: 3000
  });
  const DeviceInfo = data?.sys_info || {};
  const DiskInfo = data?.disk || ({} as DiskInfo);

  return (
    <div>
      <h1 className="text-4 mb-4">设备信息</h1>
      <Descriptions items={getDeviceInfoItems(DeviceInfo as DeviceInfo)} />
      <Divider />
      <h1 className="text-4 mb-4">硬件资源</h1>
      <div className="flex-y-center gap-4 max-w-500px">
        <span className="w-70px">CPU</span>
        <Progress
          percent={DiskInfo.cpu_used_percent}
          status="active"
          strokeColor={getProgressColor(DiskInfo.cpu_used_percent)}
        />
      </div>
      <div className="flex-y-center gap-4 max-w-500px">
        <span className="w-70px">mem</span>
        <Progress
          percent={DiskInfo.mem_used_percent}
          status="active"
          strokeColor={getProgressColor(DiskInfo.mem_used_percent)}
        />
      </div>
      <div className="flex-y-center gap-4 max-w-500px">
        <span className="w-70px">disk</span>
        <Progress
          percent={DiskInfo.disk}
          status="active"
          strokeColor={getProgressColor(DiskInfo.disk)}
        />
      </div>
    </div>
  );
};
