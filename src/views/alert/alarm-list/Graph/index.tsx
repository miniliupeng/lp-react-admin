import { useSpringValue, animated } from '@react-spring/web';
import { LTabs, SvgIcon } from '@/components';
import { Trend } from './Trend';
import { Tops } from './Tops';
import { memo, useState } from 'react';

interface GraphProps {
  data: any;
  loading: boolean;
}

export const Graph = memo(({ data, loading }: GraphProps) => {
  const height = useSpringValue(366);
  const [open, setOpen] = useState(true);
  const items = [
    {
      key: '趋势',
      label: '趋势',
      children: <Trend data={data.time} loading={loading} />
    },
    {
      key: 'Tops',
      label: 'Tops',
      children: <Tops data={data} loading={loading} />
    }
  ];
  return (
    <animated.div className="position-relative overflow-hidden" style={{ height }}>
      <div className="page-wrapper p-4 pl-0 my-4">
        <SvgIcon
          name={open ? 'collapse' : 'open'}
          className="position-absolute bottom-0 left-50% transform -translate-x-50% cursor-pointer hover:text-primary"
          onClick={() => {
            setOpen(!open);
            if (open) {
              height.start(16);
            } else {
              height.start(366);
            }
          }}
        />

        <LTabs tabPosition="left" items={items} destroyInactiveTabPane />
      </div>
    </animated.div>
  );
});
