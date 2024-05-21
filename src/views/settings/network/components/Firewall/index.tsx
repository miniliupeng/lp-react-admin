import { getFirewall, updateFirewall } from '@/api/modules/network';
import { Switch, TagGroup } from '@/components';
import { useInlineForm } from '@/hooks';
import { Form } from 'antd';
export const Firewall = () => {
  const { form, onValuesChange } = useInlineForm({
    query: () =>
      getFirewall().then((data) => ({
        ...data,
        ports:
          data.ports?.map((item) => ({
            name: item.port,
            closable: !item.lock
          })) || []
      })),
    update: (data) =>
      updateFirewall({
        active: data.active,
        ports: data?.ports?.map((item) => item.name)
      })
  });

  return (
    <div>
      <h1 className="text-4 mb-4">防火墙设置</h1>
      <Form
        form={form}
        onValuesChange={onValuesChange}
        layout="inline"
        className="max-w-600px"
        labelCol={{ style: { width: 150 } }}
      >
        <Form.Item label="是否启用" name="active">
          <Switch />
        </Form.Item>
        <Form.Item
          noStyle
          shouldUpdate={(prevValues, currentValues) => prevValues.active !== currentValues.active}
        >
          {({ getFieldValue }) =>
            getFieldValue('active') ? (
              <Form.Item name="ports">
                <TagGroup />
              </Form.Item>
            ) : null
          }
        </Form.Item>
      </Form>
    </div>
  );
};
