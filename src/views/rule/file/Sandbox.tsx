import { LForm } from '@/components';
import { useInlineForm } from '@/hooks';
import { SANDBOX_TYPES, sandboxFormItems } from './helper';
import { getSandbox, updateSandbox } from '@/api/modules/rule/file';

export const Sandbox = () => {
  const { form, onFinish } = useInlineForm({
    query: () =>
      getSandbox().then((res) => ({
        ...res.data,
        check: SANDBOX_TYPES.reduce((prev, item) => {
          prev[item.value] = res.data[item.value];
          return prev;
        }, {})
      })),
    update: (data) =>
      updateSandbox({
        ...data,
        ...data.check,
        check: undefined
      }),
    msgKey: 'reason'
  });
  return (
    <div>
      <h1 className="text-4 mb-4">沙箱检测</h1>
      <LForm
        className="max-w-[500px] mt-4"
        labelCol={{
          style: {
            width: 100
          }
        }}
        form={form}
        onFinish={onFinish}
        items={sandboxFormItems}
      />
    </div>
  );
};
