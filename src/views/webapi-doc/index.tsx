import { getOpenAppDoc } from '@/api/modules/system-settings';
import { LTable } from '@/components';
import { useRequest } from 'ahooks';
import { Descriptions, DescriptionsProps, Layout, Menu, MenuProps } from 'antd';
import { useState } from 'react';

const { Sider, Content } = Layout;
type MenuItem = Required<MenuProps>['items'][number];

const WebApiDoc = () => {
  const [openKeys /* , setOpenKeys */] = useState(['登录授权']);
  const [selectedKeys, setSelectedKeys] = useState(['登录接口']);
  const { data } = useRequest(getOpenAppDoc);
  const items: MenuItem[] =
    data?.map((item) => {
      const subMenus: MenuItem[] = item.apis?.map((subItem) => {
        return {
          key: subItem.name,
          label: subItem.name
        };
      });
      return {
        key: item.group,
        label: item.group,
        children: subMenus
      };
    }) || [];

  const onClick: MenuProps['onClick'] = (e) => {
    setSelectedKeys([e.key]);
  };

  const api = data
    ?.find((item) => item.group === openKeys[0])
    ?.apis.find((api) => api.name === selectedKeys[0]);

  const DescriptionsItems: DescriptionsProps['items'] = [
    {
      label: '接口地址',
      children: api?.url
    },
    {
      label: '方法',
      children: api?.method
    },
    {
      label: '参数',
      contentStyle: {
        display: 'table-cell',
        paddingTop: 24
      },
      children: (
        <>
          <LTable
            dataSource={api?.params}
            pagination={false}
            columns={[
              {
                title: '参数名称',
                dataIndex: 'name'
              },
              {
                title: '参数类型',
                dataIndex: 'type'
              },
              {
                title: '参数说明',
                dataIndex: 'note'
              }
            ]}
          />
          {/* {api?.params.map((param) => (
            <div>
              <h2>参数一</h2>
              <Descriptions
                items={[
                  {
                    label: '参数名称',
                    children: param.name
                  },
                  {
                    label: '参数类型',
                    children: param.type
                  },
                  {
                    label: '参数说明',
                    children: param.note
                  }
                ]}
                column={1}
              />
            </div>
          ))} */}
        </>
      )
    },
    {
      label: '返回',
      children: api?.response
    },
    {
      label: '说明',
      children: api?.description
    },
    {
      label: '例子',
      children: api?.example
    }
  ];
  return (
    <Layout className="h-full">
      <Sider width="200px" className="shadow-sider">
        <Menu
          className="text-3.5"
          mode="inline"
          selectedKeys={selectedKeys}
          defaultOpenKeys={['登录授权']}
          items={items}
          onClick={onClick}
        />
      </Sider>
      <Content className="overflow-auto p-16px bg-[var(--admin-bg-2)]">
        <div className="page-wrapper p-4">
          <h1 className="text-4 mb-4">{api?.name}</h1>
          <Descriptions items={DescriptionsItems} column={1} />
        </div>
      </Content>
    </Layout>
  );
};
export default WebApiDoc;
