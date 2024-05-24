import { Operate } from './Operate';
import { IocAlert } from '@/api/interface/alarm-list';
import { LTag } from '@/components';
import { Descriptions } from 'antd';
interface AlertDetailProps {
  data: IocAlert;
}

export const Ioc = ({ data }: AlertDetailProps) => {
  return (
    <div className="page-wrapper p-4">
      <div className="flex justify-between mb-4">
        <h1 className="text-4">告警详情</h1>
        <Operate data={data} />
      </div>
      <div className="mb-4">
        <LTag type="成功">IOC</LTag> {data.payload.ioc}
      </div>
      <Descriptions
        layout="vertical"
        column={1}
        colon={false}
        labelStyle={{ fontWeight: 'bold', color: '#000', fontSize: 14 }}
        contentStyle={{ marginBottom: 8 }}
        items={[
          {
            label: '基本信息',
            children: (
              <Descriptions
                column={1}
                items={[
                  {
                    label: '命中IOC',
                    children: data.payload.ioc
                  },
                  {
                    label: '描述',
                    children: data.payload.ioc_desc
                  },
                  {
                    label: '组织',
                    children: data.payload.organization
                  }
                ]}
              />
            ),
            contentStyle: {
              display: 'table-cell'
            }
          }
        ]}
      />
    </div>
  );
};
