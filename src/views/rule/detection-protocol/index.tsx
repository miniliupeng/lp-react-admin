import { useRequest } from 'ahooks';
import { ProtocolItem } from './components/ProtocolItem';
import { TlsModal } from './components/TlsModal';
import { Fragment, useRef } from 'react';
import { ModalRef } from '@/hooks';
import { Divider } from 'antd';
import {
  getDetectionProtocolList,
  updateDetectionProtocol
} from '@/api/modules/rule/detection-protocol';
import { LTabs } from '@/components';

const Content = ({ data, run, types }) => {
  const ref = useRef() as React.MutableRefObject<ModalRef>;

  return (
    <>
      {data?.map((item, index) => (
        <Fragment key={item.title}>
          <h1 className="text-4 mb-4">{item.title}</h1>
          <div className="flex flex-wrap gap-4">
            {item.protocols.map((protocol) => (
              <ProtocolItem
                key={protocol.id}
                {...protocol}
                types={types}
                run={run}
                onOpen={() => ref.current.showModal()}
              />
            ))}
          </div>
          {index !== data.length - 1 && <Divider />}
        </Fragment>
      ))}
      <TlsModal ref={ref} />
    </>
  );
};

const DetectionProtocol = () => {
  const { data, refresh } = useRequest(() => getDetectionProtocolList().then((data) => data.list));

  const { run } = useRequest(updateDetectionProtocol, {
    manual: true,
    debounceWait: 300,
    onSuccess: refresh
  });
  const items = [
    {
      key: '流量日志',
      label: '流量日志',
      children: <Content data={data} run={run} types={1} />
    },
    {
      key: '威胁检测',
      label: '威胁检测',
      children: <Content data={data} run={run} types={0} />
    }
  ];
  return (
    <div className="page-wrapper pb-4">
      <LTabs items={items} headerFixed />
    </div>
  );
};

export default DetectionProtocol;
