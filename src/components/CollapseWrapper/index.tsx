import { useSpringValue, animated } from '@react-spring/web';
import { SvgIcon } from '../SvgIcon';
import { useState } from 'react';

export const CollapseWrapper = ({ min = 16, max = 366, children }) => {
  const height = useSpringValue(max);
  const [open, setOpen] = useState(true);
  return (
    <animated.div className="position-relative overflow-hidden" style={{ height }}>
      <div className="page-wrapper p-4 my-4">
        <SvgIcon
          name="collapse"
          size={36}
          className="position-absolute left-50% cursor-pointer hover:text-primary"
          style={{
            bottom: open ? '3px' : '-6px',
            transform: open ? 'translateX(-50%) rotate(-90deg)' : 'translateX(-50%) rotate(90deg)' // 旋转动画
          }}
          onClick={() => {
            setOpen(!open);
            if (open) {
              height.start(min);
            } else {
              height.start(max);
            }
          }}
        />
        {children}
      </div>
    </animated.div>
  );
};
