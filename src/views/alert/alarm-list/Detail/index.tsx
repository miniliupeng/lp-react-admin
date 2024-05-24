import { Alert } from '@/api/interface/alarm-list';
import { Web } from './Web';
import { Net } from './Net';
import { Ioc } from './Ioc';
import { Sandbox } from './Sandbox';

const CpmMap = {
  web: Web,
  net: Net,
  ioc: Ioc,
  sandbox: Sandbox
};

interface AlertDetailProps {
  data: Alert;
}

export const Detail = ({ data }: AlertDetailProps) => {
  const Cpm = CpmMap[data.payload.source];
  return <Cpm data={data} />;
};
