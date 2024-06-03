import { LTabs } from '@/components';
import { Dict } from './Dict';
import { Rule } from './Rule';

const items = [
  {
    key: '弱口令字典',
    label: '弱口令字典',
    children: <Dict />
  },
  {
    key: '强度规则',
    label: '强度规则',
    children: <Rule />
  }
];
const WeakPassword = () => {
  return (
    <div className="page-wrapper">
      <LTabs items={items} headerFixed />
    </div>
  );
};

export default WeakPassword;
