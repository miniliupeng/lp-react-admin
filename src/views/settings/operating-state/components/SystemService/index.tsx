import { ResSystemService } from '@/api/interface/operating-state';
import {
  downloadSystemService,
  getSystemServices,
  restartSystemService
} from '@/api/modules/operating-state';
import { CheckCircleFilled, DownloadOutlined, ExclamationCircleFilled } from '@ant-design/icons';
import { useRequest } from 'ahooks';
import { Button, Empty, message } from 'antd';
import { useState } from 'react';

export const SystemService = () => {
  const { data, refresh } = useRequest(getSystemServices);
  const [restartServiceNames, setRestartServiceNames] = useState<string[]>([]);
  const { run: restart, loading } = useRequest(
    (data) =>
      restartSystemService(data)
        .then((res) => message.success(res.data))
        .finally(() => {
          const serveiceName = data.service_name;
          setRestartServiceNames((prev) => prev.filter((item) => item !== serveiceName));
        }),
    {
      manual: true,
      onSuccess: refresh
    }
  );
  const { run: onDownload, loading: downloading } = useRequest(downloadSystemService, {
    manual: true
  });

  const services = (data?.services || []) as ResSystemService[];
  return (
    <div>
      <div className="flex-y-center justify-between  mb-4">
        <h1 className="text-4">系统服务</h1>
        <Button
          loading={downloading}
          icon={<DownloadOutlined />}
          type="primary"
          ghost
          onClick={onDownload}
        >
          下载服务日志
        </Button>
      </div>

      {services.length === 0 && <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />}
      {services.map(({ name, status, uptime }) => (
        <div key={name} className="flex-y-center gap-4 mt-1">
          {status === 'RUNNING' ? (
            <CheckCircleFilled className="text-success" />
          ) : (
            <ExclamationCircleFilled className="text-error" />
          )}
          <span>{name}</span>
          <span>{status}</span>
          <span>{uptime}</span>
          <Button
            loading={loading && restartServiceNames.includes(name)}
            type="primary"
            ghost
            className="border-0"
            autoInsertSpace={false}
            onClick={() => {
              setRestartServiceNames((restartServiceNames) => [...restartServiceNames, name]);
              restart({ service_name: name });
            }}
          >
            重启
          </Button>
        </div>
      ))}
    </div>
  );
};
