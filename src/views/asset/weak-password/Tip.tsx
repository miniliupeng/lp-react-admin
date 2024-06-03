import { getAuthCode } from '@/api/modules/asset/weak-password';
import { copyAction } from '@/utils/string';
import { CopyOutlined } from '@ant-design/icons';
import { useCountDown, useRequest } from 'ahooks';
import { Space } from 'antd';
import { useState } from 'react';

export const Tip = ({ onResetPwdMap }) => {
  const { data, refresh: refreshAuthCode } = useRequest(getAuthCode, {
    onSuccess: (data) => {
      setTargetDate(Date.now() + data.ttl * 1000);
    }
  });
  const [targetDate, setTargetDate] = useState<number>();
  const [countdown] = useCountDown({
    targetDate,
    onEnd: () => {
      onResetPwdMap();
      refreshAuthCode();
    }
  });
  const copy = () => {
    copyAction(data?.auth_code);
  };
  return (
    <Space style={{ marginLeft: 16 }}>
      查看授权码: {data?.auth_code}
      <span className="table-btn">
        <CopyOutlined onClick={copy} className="text-primary" />
      </span>
      <span>{Math.round(countdown / 1000)} 秒后到期</span>
    </Space>
  );
};
