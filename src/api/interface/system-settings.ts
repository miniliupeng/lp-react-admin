export interface ResSystemSettingsConfig {
  browser_tab_name: string;
  copyright_info: string;
  id: number;
  product_name: string;
  sys_name: string;
}
export interface ResTimeConfig {
  id: number;
  sync_status: string;
  sync_time_addr: string;
  time_zone: string;
  date_time: string;
}
export interface ResTimeStatusConfig {
  status: 0 | 1 | 2;
}
