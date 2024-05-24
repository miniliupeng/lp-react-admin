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

export interface ResOpenAppList {
  list: {
    app_key: string;
    app_name: string;
    app_secret: string;
    create_time: string;
    id: number;
    note: string;
  }[];
  total: number;
}

export type ResOpenAppDoc = {
  group: string;
  description: string;
  apis: {
    name: string;
    url: string;
    method: string;
    params: [
      {
        name: string;
        type: string;
        note: string;
      }
    ];
    response: string;
    description: string;
    example: string;
  }[];
}[];
