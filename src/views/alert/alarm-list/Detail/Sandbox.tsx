import { Operate } from './Operate';
import { SandboxAlert } from '@/api/interface/alarm-list';
import { LTag } from '@/components';
import { Descriptions } from 'antd';
interface AlertDetailProps {
  data: SandboxAlert;
}

export const Sandbox = ({ data }: AlertDetailProps) => {
  return (
    <div className="page-wrapper p-4">
      <div className="flex justify-between mb-4">
        <h1 className="text-4">告警详情</h1>
        <Operate data={data} />
      </div>
      <div className="mb-4">
        <LTag type="成功">沙箱</LTag> {data.payload.threat_family}
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
                    label: '文件名',
                    children: data.payload.file_name
                  },
                  {
                    label: '文件大小',
                    children: data.payload.file_size
                  },
                  {
                    label: '文件类型',
                    children: data.payload.file_type
                  },
                  {
                    label: '威胁类型',
                    children: data.payload.threat_family
                  },
                  {
                    label: '描述',
                    children: data.payload.threat_desc
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
