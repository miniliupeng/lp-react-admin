import { useRef, useState } from 'react';
import { message, Upload, Modal as AntModal, Modal, Button } from 'antd';
import axios from 'axios';
import { getHASH } from '@/utils/file';
import { hideGlobalLoading, showGlobalLoading } from '@/utils/loading';
import { SvgIcon } from '@/components';
import { getUpgradeUploadInfo, installUpgrade, uploadUpgrade } from '@/api/modules/system-upgrade';

const CancelToken = axios.CancelToken;
let source = CancelToken.source();

const { Dragger } = Upload;
const Content = ({ uploadingRef }) => {
  const [uploadedId, setUploadedId] = useState<string>();
  const productRef = useRef<string>();
  const onInstall = async (id = uploadedId) => {
    try {
      showGlobalLoading();
      if (productRef.current === 'NDR') {
        message.success('正在安装主程序，大概需要15分钟...');
      }
      const res = await installUpgrade({ id, async: 0 });
      message.success(res.reason);
      productRef.current = undefined;
    } catch (error) {
      console.log(error);
    } finally {
      hideGlobalLoading();
    }
  };
  const props = {
    maxCount: 1,
    customRequest: async ({ file, onProgress, onSuccess, onError }) => {
      const filename = file.name;
      if (!/^(NDRRULE-|NDR)[0-9.]+.*(\.bin|\.gz|\.tgz)$/i.test(filename)) {
        onError();
        return message.error('文件格式不正确');
      }
      if (filename.includes('NDRRULE')) {
        productRef.current = 'NDRRULE';
      } else {
        productRef.current = 'NDR';
      }
      const { HASH } = await getHASH(file);
      const { offset = 0 } = await getUpgradeUploadInfo({
        headers: { md5: HASH }
      });
      uploadingRef.current = true;
      setUploadedId(undefined);
      uploadUpgrade({
        headers: {
          md5: HASH,
          offset,
          length: file.size - offset,
          filename: file.name,
          // startover: '23456', // 任意字符串表示重新传
          'Content-Type': 'application/octet-stream'
        },
        data: file.slice(offset),
        onUploadProgress: (progress) => {
          console.log(progress);
          onProgress({
            percent: `${(((progress.loaded + offset) / file.size) * 100).toFixed(2)}`
          });
        },
        cancelToken: source.token
      })
        .then((res) => {
          const id = res.data.id;
          onSuccess();
          uploadingRef.current = false;
          setUploadedId(id);
          AntModal.confirm({
            title: '提示',
            content: '文件上传成功，是否立即安装?',
            okText: '确定',
            okType: 'primary',
            cancelText: '取消',
            onOk: () => {
              onInstall(id);
            },
            onCancel() {
              console.log('Cancel');
            }
          });
        })
        .catch((err) => {
          console.log('catch', err);
          uploadingRef.current = false;
          onError();
        });
    },
    showUploadList: {
      showRemoveIcon: false
    },
    progress: {
      strokeColor: {
        '0%': '#108ee9',
        '100%': '#87d068'
      },
      strokeWidth: 3,
      format: (percent) => percent && `${percent}%`
    },
    accept: '.bin,.gz,.tgz'
  };
  return (
    <div>
      <Dragger className="inline-block w-full" {...props}>
        <p className="ant-upload-drag-icon">
          <SvgIcon name="upload" size={64} />
        </p>
        <p className="ant-upload-text">将文件拖动到此处，或点击选择文件</p>
      </Dragger>
      {uploadedId !== undefined && (
        <div style={{ display: 'flex' }}>
          <div style={{ marginLeft: 'auto' }}>
            <Button type="primary" onClick={() => onInstall()}>
              安装
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export const UploadModal = ({ open, onCancel: _onCancel }) => {
  const uploadingRef = useRef(false);
  const onCancel = () => {
    if (!uploadingRef.current) return _onCancel();
    AntModal.confirm({
      title: '温馨提示',
      // icon: <ExclamationCircleOutlined />,
      content: '关闭将停止上传，您确定吗?',
      okText: '确定',
      okType: 'primary',
      cancelText: '取消',
      onOk: () => {
        _onCancel();
        source.cancel('中断上传!');
        source = CancelToken.source();
      },
      onCancel() {
        console.log('Cancel');
      }
    });
  };
  return (
    <Modal width="800px" open={open} onCancel={onCancel} title={'上传升级包'} destroyOnClose>
      <Content uploadingRef={uploadingRef} />
    </Modal>
  );
};
