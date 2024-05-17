import { BoolEnum } from '@/enums';
import { Button, Space } from 'antd';

export const ProtocolItem = ({
  id,
  protocol_name,
  threat_detection,
  traffic_log,
  onChange,
  onOpen
}) => {
  return (
    <div className="flex-center " key={id}>
      <label className="w-80px text-right shrink-0">
        <span
          className={protocol_name === 'tls' ? 'text-primary cursor-pointer' : ''}
          onClick={protocol_name === 'tls' ? onOpen : undefined}
        >
          {protocol_name}
        </span>
        <span className="ml-2px mr-8px">:</span>
      </label>
      <Space.Compact block>
        <Button
          type={threat_detection === BoolEnum.TRUE ? 'primary' : 'default'}
          onClick={() =>
            onChange({
              id,
              protocol_name,
              types: 0,
              threat_detection: threat_detection === BoolEnum.TRUE ? BoolEnum.FALSE : BoolEnum.TRUE
            })
          }
        >
          威胁检测
        </Button>
        <Button
          type={traffic_log === BoolEnum.TRUE ? 'primary' : 'default'}
          onClick={() =>
            onChange({
              id,
              protocol_name,
              types: 1,
              traffic_log: traffic_log === BoolEnum.TRUE ? BoolEnum.FALSE : BoolEnum.TRUE
            })
          }
        >
          流量日志
        </Button>
      </Space.Compact>
    </div>
  );
};
