import { Product } from '@/api/interface/system-upgrade';
import { downloadUpgrade, getUpgradeProducts, installUpgrade } from '@/api/modules/system-upgrade';
import { IntervalView } from '@/components';
import { useInterval } from '@/hooks';
import { hideGlobalLoading, showGlobalLoading } from '@/utils/loading';
import { InfoCircleOutlined } from '@ant-design/icons';
import { Progress, Tooltip, message } from 'antd';
import { useState } from 'react';

interface Props extends Product {
  onRefresh: () => void;
}

const IProgress = ({ product, refresh }) => {
  const [percent, setPercent] = useState<number>(0);
  const getPercent = async () => {
    const data = await getUpgradeProducts();
    const target = data[product];
    if (target.phase === 3) {
      message.success('下载完成');
      clean();
      setTimeout(() => {
        refresh();
      }, 1000);
    }
    setPercent(
      target.file_size === 0 ? 0 : Number(((target.downloaded / target.file_size) * 100).toFixed(2))
    );
  };

  const { clean } = useInterval({ fn: getPercent, time: 1000 });
  return (
    <Progress
      strokeColor={{
        '0%': '#108ee9',
        '100%': '#87d068'
      }}
      percent={percent}
    />
  );
};

export const Operate = ({
  name,
  phase,
  new_version,
  release_note,
  upgrade_id,
  onRefresh
}: Props) => {
  const [show, setShow] = useState(false);
  const onDownload = async () => {
    message.success('准备下载中，请稍等...');
    await downloadUpgrade({ product: name });
    message.success('正在下载，请稍等...');
    setShow(true);
  };
  const onInstallNdr = (id = upgrade_id) => {
    showGlobalLoading();
    message.success('正在安装主程序，大概需要15分钟...');
    installUpgrade({ id, async: 0 });
  };
  const onInstall = async (id = upgrade_id) => {
    try {
      showGlobalLoading();
      message.success('正在安装，请稍等...');
      const res = await installUpgrade({ id, async: 1 });
      message.success(res.reason);
      onRefresh();
    } catch (error) {
      console.log(error);
    } finally {
      hideGlobalLoading();
    }
  };
  const handleInstall = name === 'NDR' ? onInstallNdr : onInstall;
  if (phase === 0) return <p className="mb-4">当前为最新版本</p>;
  if (phase === 1)
    return (
      <>
        <p className="mb-4">
          版本 {new_version}{' '}
          <Tooltip title={<pre>{release_note}</pre>}>
            <InfoCircleOutlined />
          </Tooltip>{' '}
          可更新{' '}
          <a className="view-operation" onClick={onDownload}>
            下载安装包
          </a>
        </p>
        {show && <IntervalView fn={onRefresh} />}
      </>
    );
  if (phase === 2)
    return (
      <>
        <p className="mb-4">版本 {new_version} 下载中...</p>
        <IProgress product={name} refresh={onRefresh} />
      </>
    );
  if (phase === 3)
    return (
      <p className="mb-4">
        版本 {new_version}{' '}
        <Tooltip title={<pre>{release_note}</pre>}>
          <InfoCircleOutlined />
        </Tooltip>{' '}
        安装包已下载完毕{' '}
        <a className="view-operation" onClick={() => handleInstall()}>
          安装
        </a>
      </p>
    );
  if (phase === 4)
    return (
      <>
        <p className="mb-4">版本 {new_version} 安装中...</p>
        <IntervalView fn={onRefresh} />
      </>
    );
};
