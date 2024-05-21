import { getCertInfo } from '@/api/modules/system-upgrade';
import { Upload } from '@/components';
import { UploadOutlined } from '@ant-design/icons';
import { useRequest } from 'ahooks';
import { Button, Descriptions, DescriptionsProps, UploadProps, message } from 'antd';

export const Certificate = () => {
  const { data, refresh } = useRequest(getCertInfo);

  const items: DescriptionsProps['items'] = [
    {
      key: 'serial_number',
      label: '设备序列号',
      children: data?.serial_number
    },
    {
      key: 'certificate_type',
      label: '证书类型',
      children: data?.certificate_type
    },
    {
      key: 'ndr_certificate_expiry_date',
      label: '证书有效期',
      children: data?.ndr_certificate_expiry_date
    }
  ];

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
      <div className="flex-y-center justify-between mb-4">
        <h1 className="text-4">证书管理</h1>
        <Upload
          action={'/ndr/api/cert/upload'}
          accept=".bin"
          name="file_name"
          onChange={onChange}
          showUploadList={false}
        >
          <Button type="primary" ghost icon={<UploadOutlined />}>
            导入证书
          </Button>
        </Upload>
      </div>
      <Descriptions items={items} />
    </div>
  );
};
