import { Descriptions } from 'antd';

export const NetAttackDetail = ({ data }) => {
  return (
    <>
      <Descriptions
        layout="vertical"
        column={1}
        colon={false}
        labelStyle={{ fontWeight: 'bold', color: '#000' }}
        contentStyle={{ marginBottom: 8 }}
        items={[
          {
            label: '基本信息',
            children: (
              <Descriptions
                items={[
                  {
                    label: '漏洞类型',
                    children: data.vuln_type
                  },
                  {
                    label: '发布时间',
                    children: data.update_version
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
                    children: data.id
                  }
                ]}
              />
            )
          },
          {
            label: '漏洞描述',
            children: data.vuln_desc
          },
          {
            label: '漏洞危害',
            children: data.vuln_harm
          },
          {
            label: '处置建议',
            children: data.bulletin
          }
        ]}
      />
    </>
  );
};
