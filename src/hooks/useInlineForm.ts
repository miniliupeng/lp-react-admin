import { useRequest } from 'ahooks';
import { Form, message } from 'antd';

interface UseInlineFormProps {
  query: (data?: any) => Promise<any>;
  update: (data?: any) => Promise<any>;
  msgKey?: 'data' | 'reason';
  showMsg?: boolean;
  // sendAllData?: boolean;
}

export const useInlineForm = ({
  query,
  update,
  msgKey = 'data',
  showMsg = true
  // sendAllData = true
}: UseInlineFormProps) => {
  const [form] = Form.useForm();

  const { run } = useRequest(query, {
    onSuccess: (data) => {
      form.setFieldsValue(data);
    }
  });
  const { runAsync, loading } = useRequest(update, {
    manual: true,
    onSuccess: run
  });
  const onValuesChange = () => {
    runAsync(form.getFieldsValue(true));
  };
  const onFinish = async () => {
    const res = await runAsync(form.getFieldsValue(true));
    showMsg && message.success(res[msgKey]);
  };
  return {
    form,
    onValuesChange,
    onFinish,
    loading
    // initialValues
  };
};
