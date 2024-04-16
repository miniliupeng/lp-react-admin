import { Spin } from 'antd';
import { Suspense, lazy } from 'react';

// 路由懒加载的封装
export const LazyLoad = (module: ReturnType<typeof lazy>) => {
  const Com = module;
  return (
    <Suspense
      fallback={
        <Spin
          size="large"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%'
          }}
        />
      }
    >
      <Com />
    </Suspense>
  );
};
