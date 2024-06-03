import { exportSysconf } from '@/api/modules/system-upgrade';
import { Upload } from '@/components';
import { DownloadOutlined, UploadOutlined } from '@ant-design/icons';
import { useRequest } from 'ahooks';
import { Button, Space, UploadProps, message } from 'antd';

export const SystemConfig = () => {
  const { run: onExport, loading } = useRequest(exportSysconf, {
    manual: true
  });

  const onChange: UploadProps['onChange'] = ({ file }) => {
    if (file.response) {
      const { result, reason } = file.response;
      if (result === 1) {
        message.success('导入配置成功');
      } else {
        message.error(reason);
      }
    }
  };

  return (
    <div>
      <div className="flex-y-center justify-between mb-4">
        <h1 className="text-4">系统配置</h1>
        <Space>
          <Button
            type="primary"
            ghost
            icon={<DownloadOutlined />}
            onClick={onExport}
            loading={loading}
          >
            导出配置
          </Button>
          <Upload
            action="/ndr/api/sysconf/import"
            accept=".txt"
            onChange={onChange}
            showUploadList={false}
          >
            <Button type="primary" ghost icon={<UploadOutlined />}>
              导入配置
            </Button>
          </Upload>
        </Space>
      </div>
    </div>
  );
};
