import { LForm } from '@/components';
import { FormItems } from './helper';
import { useInlineForm } from '@/hooks';
import { getMemoryLimit, updateMemoryLimit } from '@/api/modules/operating-state';

export const MemoryLimit = () => {
  const { form, onValuesChange } = useInlineForm({
    query: getMemoryLimit,
    update: updateMemoryLimit
  });
  return <LForm form={form} layout="inline" items={FormItems} onValuesChange={onValuesChange} />;
};
