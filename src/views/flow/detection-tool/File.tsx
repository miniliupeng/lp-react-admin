import { getFileDetectionList } from '@/api/modules/flow/detection-tool';
import { UploadOutlined } from '@ant-design/icons';
import { Button, UploadProps, message } from 'antd';
import { List } from 'antd';
import { useTable } from '@/hooks';
import { Upload } from '@/components';

export const File = () => {
  const { dataSource, refresh, pagination } = useTable({ service: getFileDetectionList });
  const beforeUpload: UploadProps['beforeUpload'] = (file) => {
    const isLt2G = file.size < 2 * 1024 * 1024 * 1024;
    if (!isLt2G) {
      message.error(`${file.name}文件不能超过2G!`);
    }
    return isLt2G;
  };
  const onChange: UploadProps['onChange'] = (info) => {
    if (info.file.status === 'done') {
      message.success(`${info.file.name} 文件上传成功`);
      refresh();
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} 文件上传失败`);
    }
  };
  return (
    <div>
      <Upload
        showUploadList={false}
        action={'/ndr/api/ndr/sandbox/customupload'}
        onChange={onChange}
        multiple
        // accept=".pcap"
        beforeUpload={beforeUpload}
      >
        <Button type="primary" ghost icon={<UploadOutlined />}>
          上传文件
        </Button>
      </Upload>

      <List
        className="mt-4"
        pagination={pagination}
        dataSource={dataSource}
        renderItem={(item) => (
          <List.Item key={item.id}>
            <span>{item.file_name}</span>
            <span>{item.create_time}</span>
          </List.Item>
        )}
      />
    </div>
  );
};
