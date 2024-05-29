import { LTabs } from '@/components';
import { Pacp } from './Pacp';
import { File } from './File';

const items = [
  {
    key: 'pcap检测',
    label: 'pcap检测',
    children: <Pacp />
  },
  {
    key: '文件检测',
    label: '文件检测',
    children: <File />
  }
];

const DetectionTool = () => {
  return (
    <div className="page-wrapper pb-4">
      <LTabs items={items} headerFixed />
    </div>
  );
};

export default DetectionTool;
