import { LForm } from '@/components';
import { useInlineForm } from '@/hooks';
import { formItems } from './helper';
import { getWeakPasswordPolicy, updateWeakPasswordPolicy } from '@/api/modules/rule/weak-password';

export const Rule = () => {
  const { form, onFinish } = useInlineForm({
    query: () =>
      getWeakPasswordPolicy().then((data) => {
        return {
          flag: { ...data, password_len: undefined, special_chars: undefined },
          password_len: data.password_len,
          special_chars: data.special_chars
        };
      }),
    update: (data) =>
      updateWeakPasswordPolicy({
        ...data.flag,
        password_len: data.password_len || undefined,
        special_chars: data.special_chars,
        flag: undefined
      })
  });
  return (
    <div className="pb-4">
      <LForm form={form} onFinish={onFinish} items={formItems} />
    </div>
  );
};
