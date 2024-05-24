interface WebPayload {
  source: 'web';
  cookie: string;
  host: string;
  protocol: string;
  referer: string;
  request_body: string;
  request_headers: string;
  request_method: string;
  response_body: string;
  response_code: string;
  response_headers: string;
  set_cookie: string;
  uri: string;
  xff: string;
}

interface NetPayload {
  source: 'net';
  raw: string;
}

interface IocPayload {
  source: 'ioc';
  ioc: string;
  ioc_desc: string;
  organization: string;
}

interface SandboxPayload {
  source: 'sandbox';
  file_id: string;
  file_md5: string;
  file_name: string;
  file_size: number;
  file_type: string;
  threat_desc: string;
  threat_family: string;
}

export interface Alert {
  id: string;
  flow_id: number;
  serial_num: string;
  timestamp: string;
  src_ip: string;
  src_port: number;
  dest_ip: string;
  dest_port: number;
  proto: string;
  app_proto: string;
  attack_dir: string;
  attacker_ip: string;
  victim_ip: string;
  rule_id: string;
  rule_name: string;
  threat_type: string;
  packet_size: number;
  packet_data: string;
  severity: string;
  bulletin: string;
  detail_info: string;
  vuln_type: string;
  vuln_desc: string;
  vuln_harm: string;
  confidence: string;
  tags: string;
  cnnvd_id: string;
  cve_id: string;
  kill_chain: string;
  att_ck: string;
  attack_result: string;
  attack_method: string;
  site_app: string;
  server_type: string;
  code_language: string;
  payload: any;
  custom: string;
  feature_field: string;
  feature_payload: string;
  flow_dir: number;
  attacker_geo: {
    country: string;
    country_code: string;
    city: string;
  };
}

export interface WebAlert extends Alert {
  payload: WebPayload;
}

export interface NetAlert extends Alert {
  payload: NetPayload;
}

export interface IocAlert extends Alert {
  payload: IocPayload;
}

export interface SandboxAlert extends Alert {
  payload: SandboxPayload;
}

export interface ResAlarmList {
  alerts: (WebAlert | NetAlert | IocAlert | SandboxAlert)[];
  alertstat: {
    attacker: [];
    threat: [];
    time: [];
    victim: [];
  };
  total;
}
