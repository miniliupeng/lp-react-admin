import { getWeakPasswordSalt, updateWeakPasswordSalt } from '@/api/modules/rule/weak-password';
import { useForwardRefModal } from '@/hooks';
import { useRequest } from 'ahooks';
import { Form, Input, Modal, message } from 'antd';
import { forwardRef } from 'react';

export const SaltModal = forwardRef((_, ref) => {
  const { run: get } = useRequest(getWeakPasswordSalt, {
    manual: true,
    onSuccess: (data) => form.setFieldsValue(data)
  });
  const { form, ...modalProps } = useForwardRefModal({
    ref,
    service: updateWeakPasswordSalt,
    afterOpen: get,
    onSuccess: (res) => message.success(res.reason)
  });

  return (
    <Modal title="弱口令盐值配置" {...modalProps}>
      <Form form={form}>
        <Form.Item
          name="salt_value"
          rules={[
            {
              validator(rule, value, callback) {
                if (value && value.split('\n').length > 10) {
                  callback('换行分隔，最多支持10个');
                }
                callback();
              }
            }
          ]}
        >
          <Input.TextArea placeholder="换行分隔，最多支持10个" rows={10} />
        </Form.Item>
      </Form>
    </Modal>
  );
});
