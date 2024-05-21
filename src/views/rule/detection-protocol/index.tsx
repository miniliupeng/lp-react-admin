import { useRequest } from 'ahooks';
import { ProtocolItem } from './components/ProtocolItem';
import { TlsModal } from './components/TlsModal';
import { Fragment, useRef } from 'react';
import { ModalRef } from '@/hooks';
import { Divider } from 'antd';
import {
  getDetectionProtocolList,
  updateDetectionProtocol
} from '@/api/modules/detection-protocol';

const DetectionProtocol = () => {
  const { data, refresh } = useRequest(() => getDetectionProtocolList().then((data) => data.list));

  const { run } = useRequest(updateDetectionProtocol, {
    manual: true,
    debounceWait: 300,
    onSuccess: refresh
  });
  const ref = useRef() as React.MutableRefObject<ModalRef>;
  return (
    <div className="rounded-2 shadow bg-[var(--admin-bg-1)] p-4">
      <div>
        {data?.map((item, index) => (
          <Fragment key={item.title}>
            <h1 className="text-4 mb-4">{item.title}</h1>
            <div className="flex flex-wrap gap-4">
              {item.protocols.map((protocol) => (
                <ProtocolItem
                  key={protocol.id}
                  {...protocol}
                  onChange={run}
                  onOpen={() => ref.current.showModal()}
                />
              ))}
            </div>
            {index !== data.length - 1 && <Divider />}
          </Fragment>
        ))}
      </div>
      <TlsModal ref={ref} />
    </div>
  );
};

export default DetectionProtocol;
