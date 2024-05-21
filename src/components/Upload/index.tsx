import { useUserStore } from '@/stores';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload as AntUpload, UploadProps } from 'antd';

export const Upload = ({
  name = 'file',
  children = (
    <Button type="primary" ghost icon={<UploadOutlined />}>
      导入
    </Button>
  ),
  ...props
}: UploadProps) => {
  const token = useUserStore.getState().token;
  return (
    <AntUpload name={name} {...props} headers={{ Authorization: token }}>
      {children}
    </AntUpload>
  );
};
