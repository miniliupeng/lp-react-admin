import { NetAlert } from '@/api/interface/alarm-list';
import { HighlightedText } from '@/components';
import { Card, Descriptions, Divider } from 'antd';
import { getStrFromBase64 } from '@/utils/string';
import { Operate } from './Operate';

interface AlertDetailProps {
  data: NetAlert;
}
export const Net = ({ data }: AlertDetailProps) => {
  return (
    <div className="page-wrapper p-4">
      <div className="flex justify-between mb-4">
        <h1 className="text-4">告警详情</h1>
        <Operate data={data} />
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
                column={3}
                items={[
                  {
                    label: '告警名称',
                    children: data.rule_name
                  },
                  {
                    label: '告警类型',
                    children: data.threat_type
                  },
                  {
                    label: '攻击方法',
                    children: data.attack_method
                  },
                  {
                    label: '受影响系统',
                    children: data.server_type
                  },
                  {
                    label: 'cnnvd编号',
                    children: data.cnnvd_id
                  },
                  {
                    label: 'cve编号',
                    children: data.cve_id
                  },
                  {
                    label: '规则编号',
                    children: data.rule_id
                  },
                  {
                    label: '可信度',
                    children: data.confidence
                  }
                ]}
              />
            ),
            contentStyle: {
              display: 'table-cell'
            }
          },
          {
            label: '告警描述',
            children: data.vuln_desc
          },
          {
            label: '处置建议',
            children: data.bulletin
          }
        ]}
      />
      <Divider />
      <h1 className="text-4 mb-4">负载详情</h1>

      <Descriptions
        layout="vertical"
        column={1}
        colon={false}
        labelStyle={{ fontWeight: 'bold', color: '#000', marginBottom: 8, fontSize: 14 }}
        contentStyle={{ marginBottom: 8 }}
        items={[
          {
            label: '五元组信息',
            children: (
              <Descriptions
                column={3}
                items={[
                  {
                    label: '源IP',
                    children: data.src_ip
                  },
                  {
                    label: '目的IP',
                    children: data.dest_ip
                  },
                  {
                    label: '源端口',
                    children: data.src_port
                  },
                  {
                    label: '目的端口',
                    children: data.dest_port
                  },
                  {
                    label: '传输层协议',
                    children: data.proto
                  }
                ]}
              />
            ),
            contentStyle: {
              display: 'table-cell'
            }
          },
          {
            label: '载荷长度',
            children: data.packet_size
          },
          {
            label: '载荷内容',
            children: (
              <Card hoverable className="w-full bg-[--admin-bg-2] cursor-default">
                <HighlightedText
                  text={getStrFromBase64(data.payload.raw)}
                  keyword={data.feature_payload}
                />
              </Card>
            )
          }
        ]}
      />
    </div>
  );
};
