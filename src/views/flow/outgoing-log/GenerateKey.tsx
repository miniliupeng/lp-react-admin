import { genTransportKey } from '@/api/modules/flow/outgoing-log';
import { LtableBtn } from '@/components/LTable/LtableBtn';
import { useRequest } from 'ahooks';
import { Form, Input } from 'antd';

export const GenerateKey = () => {
  const form = Form.useFormInstance();
  const { run: getkey } = useRequest(genTransportKey, {
    manual: true,
    onSuccess: (data) => {
      form.setFieldsValue({
        cipher_key: data.key
      });
    }
  });

  return (
    <div className="form-extra" style={{ position: 'relative' }}>
      <Form.Item label="加密秘钥" name="cipher_key">
        <Input disabled />
      </Form.Item>
      <LtableBtn className="absolute right-2 top-2px" onClick={getkey}>
        生成秘钥
      </LtableBtn>
    </div>
  );
};
