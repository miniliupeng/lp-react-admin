import { PlusOutlined } from '@ant-design/icons';
import React from 'react';

export const CardButton = () => {
  return (
    <div className="border-1 border-dashed border-[var(--admin-border-1)] hover:border-primary rounded-2 w-140px text-16px flex-center gap-2 cursor-pointer bg-[var(--admin-bg-3)]">
      <PlusOutlined />
      新增
    </div>
  );
};
