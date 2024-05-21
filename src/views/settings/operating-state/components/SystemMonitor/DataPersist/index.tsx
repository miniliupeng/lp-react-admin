import { LForm } from '@/components';
import { FormItems } from './helper';
import { useInlineForm } from '@/hooks';
import { getDataPersist, updateDataPersist } from '@/api/modules/operating-state';

export const DataPersist = () => {
  const { form, onValuesChange } = useInlineForm({
    query: getDataPersist,
    update: updateDataPersist
  });
  return (
    <LForm
      className="my-4"
      form={form}
      layout="inline"
      items={FormItems}
      onValuesChange={onValuesChange}
    />
  );
};
