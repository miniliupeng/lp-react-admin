import { LForm } from '@/components';
import { useInlineForm } from '@/hooks';
import { fileRestoreFormItems } from './helper';
import { getFileRestore, updateFileRestore } from '@/api/modules/rule/file';

export const FileRestore = () => {
  const { form, onFinish } = useInlineForm({
    query: () => getFileRestore().then((res) => res.data),
    update: updateFileRestore,
    msgKey: 'reason'
  });
  return (
    <div>
      <h1 className="text-4 mb-4">文件还原</h1>

      <LForm
        className="max-w-[500px] mt-4"
        labelCol={{
          style: {
            width: 100
          }
        }}
        form={form}
        onFinish={onFinish}
        items={fileRestoreFormItems}
      />
    </div>
  );
};
