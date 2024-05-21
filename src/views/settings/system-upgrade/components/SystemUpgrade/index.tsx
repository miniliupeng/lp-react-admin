import {
  getUpgradeProducts,
  getUpgradeSetting,
  getUpgradeSettingOptions,
  updateUpgradeSetting
} from '@/api/modules/system-upgrade';
import { UploadOutlined } from '@ant-design/icons';
import { useRequest } from 'ahooks';
import { Button, Card, Col, Form, Row, Select } from 'antd';
import { Operate } from './Operate';
import { useModal2 } from '@/hooks';
import { UploadModal } from './UploadModal';

export const ISystemUpgrade = () => {
  const { data: products = {}, refresh: onProductsRefresh } = useRequest(getUpgradeProducts);
  const list = Object.keys(products).map((item) => ({
    ...products[item],
    name: item
  }));
  const [form] = Form.useForm();
  const { refresh: onRefreshSetting } = useRequest(getUpgradeSetting, {
    onSuccess: (data) => {
      form.setFieldsValue(data);
    }
  });
  const { run: updateSetting } = useRequest(updateUpgradeSetting, {
    manual: true,
    onSuccess: onRefreshSetting
  });
  const { data: options } = useRequest(getUpgradeSettingOptions);
  const uploadModal = useModal2();
  return (
    <div>
      <div className="flex-y-center justify-between mb-4">
        <h1 className="text-4">系统升级</h1>
        <Button type="primary" ghost icon={<UploadOutlined />} onClick={uploadModal.onOpen}>
          上传升级包
        </Button>
      </div>

      <Form
        form={form}
        className="grid grid-cols-[repeat(auto-fit,minmax(250px,400px))] gap-4"
        onValuesChange={(_, values) => updateSetting(values)}
      >
        {list.map((product) => (
          <Card
            title={product.name}
            hoverable
            classNames={{ header: '!px-4', body: '!p-4 !pb-0' }}
            className=" cursor-default"
            key={product.name}
          >
            <Form.Item label="当前版本" className="mb-1">
              {product.version}
            </Form.Item>
            <Form.Item label="更新时间" className="mb-2">
              {product.last_upgrade}
            </Form.Item>
            <Form.Item label="升级策略" name={[product.name, 'action']}>
              <Select options={options?.actions}></Select>
            </Form.Item>
            <Form.Item
              noStyle
              shouldUpdate={(prevValues, currentValues) =>
                prevValues?.[product.name]?.['action'] !== currentValues?.[product.name]?.['action']
              }
            >
              {({ getFieldValue }) =>
                getFieldValue([product.name, 'action']) === 3 ? (
                  <Form.Item label="升级时间">
                    <Row gutter={8}>
                      <Col span={8}>
                        <Form.Item name={[product.name, 'weakday']} initialValue={-1} noStyle>
                          <Select options={options?.weakdays} />
                        </Form.Item>
                      </Col>
                      <Col span={16}>
                        <Form.Item
                          name={[product.name, 'timerange']}
                          initialValue={'00:00 ~ 01:00'}
                          noStyle
                        >
                          <Select options={options?.timeranges} />
                        </Form.Item>
                      </Col>
                    </Row>
                  </Form.Item>
                ) : null
              }
            </Form.Item>
            <Operate {...product} onRefresh={onProductsRefresh} />
          </Card>
        ))}
      </Form>
      <UploadModal {...uploadModal} />
    </div>
  );
};
