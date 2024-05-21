export interface Product {
  name: string;
  version: string;
  new_version: string;
  release_note: string;
  product_id: number;
  encrypted: boolean;
  upgrade_id: number;
  phase: number;
  file_size: number;
  file_md5: string;
  downloaded: number;
  file_path: string;
  last_upgrade: string;
}

export type ResProducts = Record<string, Product>;

export interface ResUpgradeSettingOptions {
  actions: any[];
  timeranges: any[];
  weakdays: any[];
}

export interface ResCertInfo {
  certificate_type: string;
  ndr_certificate_expiry_date: string;
  serial_number: string;
}
