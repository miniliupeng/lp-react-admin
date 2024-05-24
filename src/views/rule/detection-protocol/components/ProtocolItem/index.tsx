import { Switch } from '@/components';
import { BoolEnum } from '@/enums';

export const ProtocolItem = ({
  id,
  protocol_name,
  threat_detection,
  traffic_log,
  run,
  onOpen,
  types
}) => {
  const checked = types === 0 ? threat_detection : traffic_log;
  const onChange = (val) => {
    if (types === 0) {
      run({
        id,
        protocol_name,
        types: 0,
        threat_detection: val
      });
    } else {
      run({
        id,
        protocol_name,
        types: 1,
        traffic_log: val
      });
    }
  };
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
      <Switch field={[BoolEnum.TRUE, BoolEnum.FALSE]} checked={checked} onChange={onChange} />
    </div>
  );
};
