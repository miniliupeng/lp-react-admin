import { useRequest } from 'ahooks';
import { Form, message } from 'antd';

interface UseInlineFormProps {
  query: (data?: any) => Promise<any>;
  update: (data?: any) => Promise<any>;
}

export const useInlineForm = ({ query, update }: UseInlineFormProps) => {
  const [form] = Form.useForm();

  const { run } = useRequest(query, {
    onSuccess: (data) => {
      form.setFieldsValue(data);
    }
  });
  const onValuesChange = () => {
    update(form.getFieldsValue(true)).then(run);
  };
  const onFinish = () => {
    update(form.getFieldsValue(true)).then((res) => {
      message.success(res.data);
      run();
    });
  };
  return {
    form,
    onValuesChange,
    onFinish
    // initialValues
  };
};
