import { Button, Upload, message } from 'antd';
import { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import type { GetProp, UploadProps } from 'antd';
import './index.scss';
import { useRequest } from 'ahooks';
import { getLogoService, updateLogoService } from '@/services/system-settings';

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const getBase64 = (img: FileType, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

const beforeUpload = (file) => {
  const isPng = file.type === 'image/png';
  if (!isPng) {
    message.error('只能上传png格式文件');
  }
  const isLt1M = file.size / 1024 / 1024 < 1;
  if (!isLt1M) {
    message.error('文件大小必须小于1M');
  }
  return isPng && isLt1M;
};

const whMap = {
  0: '187*24',
  1: '110*40',
  2: '32*32'
};

export const UploadCard = ({ title, image_type }) => {
  const [imageUrl, setImageUrl] = useState<string>();
  const { refresh } = useRequest(() => getLogoService({ image_type }), {
    cacheKey: `cacheKey-logo-${image_type}`,
    onSuccess: setImageUrl
  });
  const { run } = useRequest(updateLogoService, {
    manual: true,
    onSuccess: ({ data }) => {
      message.success(data);
      refresh();
      // document.head.querySelectorAll('link').forEach((link) => {
      //   if (link.rel === 'icon') {
      //     link.parentNode?.removeChild(link);
      //   }
      // });
      // const link = document.createElement('link');
      // link.rel = 'icon';
      // link.href = 'https://10.1.100.113/ndr/server_static/logo/sys_logo_default.png';
      // document.head.append(link);
    }
  });
  const handleChange: UploadProps['onChange'] = (info) => {
    const { file } = info;

    if (beforeUpload(file)) {
      getBase64(file as FileType, (url) => {
        setImageUrl(url);
      });
    }
  };
  return (
    <div className="rounded-2 border border-solid border-[var(--admin-border-1)]">
      <div className="border-b border-solid border-[var(--admin-border-1)] p-4">{title}</div>
      <div className="p-4 text-center">
        <Upload
          listType="picture-card"
          className="logo-config-upload"
          showUploadList={false}
          beforeUpload={() => false}
          onChange={handleChange}
        >
          {imageUrl ? (
            <img src={imageUrl} alt="avatar" className="max-w-full max-h-full object-contain" />
          ) : (
            <PlusOutlined />
          )}
        </Upload>
        <p className="m-t-2">
          图片应小于1M,仅支持PNG格式，建议宽高:
          <span className="text-primary">{whMap[image_type]}</span>像素
        </p>
        <Button
          type="primary"
          className="m-t-2"
          onClick={() =>
            run({
              image_type,
              image_base64: imageUrl
            })
          }
        >
          上传
        </Button>
      </div>
    </div>
  );
};
