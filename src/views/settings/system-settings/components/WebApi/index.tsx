import { addOpenApp, deleteOpenApp, getOpenAppList } from '@/api/modules/system-settings';
import { useFormModal } from '@/hooks';
import { DeleteOutlined, ShareAltOutlined } from '@ant-design/icons';
import { useRequest } from 'ahooks';
import { Button, Card, Descriptions, Popconfirm, message } from 'antd';
import { AddForm } from './AddForm';
// import { CardButton } from '@/components/ButtonGroup/CardButton';

export const WebApi = () => {
  const { data, refresh } = useRequest(getOpenAppList);
  const openModal = useFormModal({
    titleText: '对外API',
    content: <AddForm />,
    refresh,
    add: addOpenApp
  });
  const { run: onDelete } = useRequest(deleteOpenApp, {
    manual: true,
    onSuccess: (res) => {
      message.success(res.reason);
      refresh();
    }
  });

  return (
    <div>
      <div className="flex-y-center justify-between  mb-4">
        <h1 className="text-4">WEBAPI</h1>
        <div className="flex gap-2">
          <Button type="primary" ghost onClick={() => openModal()}>
            新增
          </Button>
          <Button
            icon={<ShareAltOutlined />}
            type="primary"
            ghost
            onClick={() => window.open('/#/webapi-doc')}
          >
            接口文档
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(350px,_400px))] gap-4">
        {data?.list.map((item) => (
          <Card
            title={item.app_name}
            hoverable
            className="cursor-default"
            size="small"
            extra={
              <Popconfirm title="确定删除？" onConfirm={() => onDelete({ id: item.id })}>
                <DeleteOutlined className="text-error" />
              </Popconfirm>
            }
          >
            <Descriptions
              column={1}
              items={[
                {
                  label: 'AppKey',
                  children: item.app_key
                },
                {
                  label: 'AppSecret',
                  children: item.app_secret
                },
                {
                  label: '描述',
                  children: item.note
                }
              ]}
            />
          </Card>
        ))}
        {/* <CardButton /> */}
      </div>
    </div>
  );
};
