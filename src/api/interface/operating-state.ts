export interface DiskInfo {
  mem_used_percent: number;
  men_used: number;
  cpu_used_percent: number;
  disk: number;
  disk_used: number;
  disk_rest: number;
}

export interface DeviceInfo {
  certificate_info: string;
  engine_rule_version: string;
  equipment_serial_number: string;
  software_version: string;
  use_time: string;
}

export interface ResSystemInfo {
  disk: DiskInfo;
  sys_info: DeviceInfo;
}

export type ResSystemService = {
  name: string;
  status: string;
  pid: number;
  uptime: string;
  cpu: number;
  mem: number;
  md5: string;
};

export interface ResSystemServices {
  services: ResSystemService[];
}

export interface ResMemoryLimit {
  id: number;
  enable: Bool;
  interval: number;
  percent: number;
}
