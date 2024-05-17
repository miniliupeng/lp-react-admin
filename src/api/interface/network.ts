import { interfaceTypeEnum } from '@/enums/nework';

// 接口
export interface Nic {
  name: string;
  type: interfaceTypeEnum;
  ip: string;
  mask: string;
  chip: string;
  enabled: Bool;
  connected: Bool;
  buscode: string;
}
export type ResNicList = {
  list: Nic[];
  support: string[];
};

export interface ResFirewall {
  active: boolean;
  ports: { port: string; lock: boolean }[];
}
export interface ResSshPort {
  port: number;
}

export interface ResSNMPServer {
  snmp_server_status: Bool;
  snmp_server_port: number;
  snmp_server_type: string;
  snmp_server_version: string;
  snmp_server_character: string;
}
export interface ResSNMPTrap {
  snmp_trap_status: Bool;
  snmp_trap_port: number;
  snmp_trap_ip: string;
}

export interface ResHomeNet {
  homenet: string[];
}
