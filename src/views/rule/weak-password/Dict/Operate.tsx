import { Upload } from '@/components';
import { PlusOutlined } from '@ant-design/icons';
import { useRequest } from 'ahooks';
import { Button, Dropdown, MenuProps, Space, UploadProps, message } from 'antd';
import { SaltModal } from './SaltModal';
import { ModalRef } from '@/hooks';
import { useRef } from 'react';
import {
  exportWeakPassword,
  exportWeakPasswordTemplate,
  importWeakPasswordUrl
} from '@/api/modules/rule/weak-password';

export const Operate = ({ onAdd, refresh }) => {
  const ref = useRef() as React.MutableRefObject<ModalRef>;
  const { run: onExportIocRuleTemplate } = useRequest(exportWeakPasswordTemplate, {
    manual: true
  });
  const { run: onExportIocRule } = useRequest(exportWeakPassword, {
    manual: true
  });
  const uploadProps: UploadProps = {
    name: 'filename',
    accept: '.xlsx',
    showUploadList: false,
    action: importWeakPasswordUrl,
    beforeUpload: (file) => {
      const verifyFileSize = file.size > 100 * 1024 * 1024;
      if (verifyFileSize) {
        message.error('上传文件最大不超过100M!');
      }
      return !verifyFileSize;
    },
    onChange: ({ file }) => {
      if (file.response) {
        const { result, reason } = file.response;
        if (result === 1) {
          message.success(reason);
          refresh();
        } else {
          message.error(reason);
        }
      }
    }
  };
  const items: MenuProps['items'] = [
    {
      label: '新增',
      key: 'add'
    },
    {
      label: '下载模板',
      key: 'template'
    },
    {
      label: (
        <Upload {...uploadProps}>
          <div className="w-48px">导入</div>
        </Upload>
      ),
      key: 'import'
    },
    {
      label: '导出',
      key: 'export'
    }
  ];
  const handleMenuClick: MenuProps['onClick'] = (e) => {
    const key = e.key;
    console.log(key);
    switch (key) {
      case 'add':
        onAdd();
        break;
      case 'template':
        onExportIocRuleTemplate();
        break;
      case 'import':
        // onImport();
        break;

      case 'export':
        onExportIocRule();

        break;
      default:
        break;
    }
  };
  const menuProps = {
    items,
    onClick: handleMenuClick
  };

  return (
    <Space>
      <Button type="primary" ghost onClick={() => ref.current.showModal()}>
        盐值配置
      </Button>
      <Dropdown.Button type="primary" menu={menuProps}>
        <PlusOutlined />
        添加
      </Dropdown.Button>
      <SaltModal ref={ref} />
    </Space>
  );
};
