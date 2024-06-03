import { FormItemProps, FormItemTypeEnum } from '@/components/LForm/interface';
import { Button } from 'antd';

export const getIpSplinterFormItems = (options): FormItemProps[] => [
  {
    type: FormItemTypeEnum.CheckboxGroup,
    fProps: {
      name: 'check'
    },
    props: {
      returnObj: true,
      options
    }
  },
  {
    type: FormItemTypeEnum.Render,
    render: () => (
      <Button type="primary" htmlType="submit">
        保存
      </Button>
    )
  }
];

const fields = [
  {
    label: 'ACK',
    value: 'ack_flood'
  },
  {
    label: 'UDP',
    value: 'udp_flood'
  },
  {
    label: 'SYN',
    value: 'syn_flood'
  },
  {
    label: 'Ping',
    value: 'ping_flood'
  },
  {
    label: 'HTTP2快速重置',
    value: 'httpquickrst_flood'
  },
  {
    label: 'HTTP',
    value: 'http_flood'
  },
  {
    label: 'HTTP新建连接',
    value: 'httpnewconn_flood'
  },
  {
    label: 'HTTP并发连接',
    value: 'httpconconn_flood'
  },
  {
    label: 'HTTP URI CC',
    value: 'httpuricc_flood'
  },
  {
    label: 'HTTPS',
    value: 'https_flood'
  },
  {
    label: 'HTTPS新建连接',
    value: 'httpsnewcon_flood'
  },
  {
    label: 'HTTPS并发连接',
    value: 'httpsconconn_flood'
  },
  {
    label: 'IP',
    value: 'ip_flood'
  },
  {
    label: 'IP FRAG',
    value: 'ipfrag_flood'
  },
  {
    label: 'DOS',
    value: 'dos_attack'
  },
  {
    label: 'ICMP',
    value: 'icmp_flood'
  },
  {
    label: 'TCP',
    value: 'tcp_flood'
  },
  {
    label: 'SYNACK',
    value: 'synack_flood'
  },
  {
    label: 'FIN',
    value: 'fin_flood'
  },
  {
    label: 'RST',
    value: 'rst_flood'
  },
  {
    label: 'DNS REQUEST',
    value: 'dnsrequest_flood'
  },
  {
    label: 'DNS REPLY',
    value: 'dnsreply_flood'
  }
];
export const floodFormItems: FormItemProps[] = [
  ...(fields.map((item) => ({
    type: FormItemTypeEnum.InputNumber,
    fProps: {
      label: item.label,
      name: item.value
    },
    props: {
      min: 0,
      max: 100000,
      addonAfter: 'PPS'
    }
  })) as FormItemProps[]),

  {
    type: FormItemTypeEnum.Render,
    render: () => (
      <Button type="primary" htmlType="submit">
        保存
      </Button>
    )
  }
];
