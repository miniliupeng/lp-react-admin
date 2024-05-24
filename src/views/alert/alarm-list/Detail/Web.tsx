import { WebAlert } from '@/api/interface/alarm-list';
import { Chart, HighlightedText } from '@/components';
import { getAttackGraphOption } from './helper';
import { Card, Descriptions, Divider } from 'antd';
import { getStrFromBase64 } from '@/utils/string';
import { Operate } from './Operate';

interface AlertDetailProps {
  data: WebAlert;
}
export const Web = ({ data }: AlertDetailProps) => {
  return (
    <div className="page-wrapper p-4">
      <div className="flex justify-between mb-4">
        <h1 className="text-4">告警详情</h1>
        <Operate data={data} />
      </div>
      <div className="h-100px w-80% m-auto">
        <Chart option={getAttackGraphOption(data)} />
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
                    label: '编程语言',
                    children: data.code_language
                  },
                  {
                    label: '建站程序',
                    children: data.site_app
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
            label: '请求头',
            children: (
              <Card hoverable className="w-full bg-[--admin-bg-2] cursor-default" size="small">
                <HighlightedText
                  text={data.payload.request_headers}
                  keyword={data.feature_payload}
                />
              </Card>
            )
          },
          {
            label: '请求体',
            children: (
              <Card hoverable className="w-full bg-[--admin-bg-2] cursor-default">
                <HighlightedText
                  text={getStrFromBase64(data.payload.request_body)}
                  keyword={data.feature_payload}
                />
              </Card>
            )
          },
          {
            label: '响应头',
            children: (
              <Card hoverable className="w-full bg-[--admin-bg-2] cursor-default">
                <HighlightedText
                  text={data.payload.response_headers}
                  keyword={data.feature_payload}
                />
              </Card>
            )
          },
          {
            label: '响应体',
            children: (
              <Card hoverable className="w-full bg-[--admin-bg-2] cursor-default">
                <HighlightedText
                  text={getStrFromBase64(data.payload.response_body)}
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
