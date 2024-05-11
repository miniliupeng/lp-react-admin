import { Form } from 'antd';
import useSWR from 'swr';
import useSWRMutation from 'swr/mutation';

interface UseInlineFormProps {
  queryKey: string;
  query: (data?: any) => Promise<any>;
  update: (data?: any) => Promise<any>;
}

export const useInlineForm = ({ queryKey, query, update }: UseInlineFormProps) => {
  const [form] = Form.useForm();

  const { data: initialValues } = useSWR(queryKey, () => query(), {
    onSuccess: (data) => {
      console.log(queryKey, data);
      form.setFieldsValue(data);
    }
  });
  const { trigger } = useSWRMutation(queryKey, (_, { arg }) => update(arg));
  const onValuesChange = () => {
    trigger(form.getFieldsValue(true));
  };
  const onFinish = (values) => {
    trigger(values);
  };
  return {
    form,
    onValuesChange,
    onFinish,
    initialValues
  };
};
