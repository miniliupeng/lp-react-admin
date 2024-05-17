// 用户登录

import { ResPageData } from '.';

// 用户管理
export interface User {
  user_name: string;
  name: string;
  role_id: number;
  password: string;
  password_confirm: string;
  account_period: string;
  email: string;
  phone: string;
  notes: string;
  [key: string]: any;
}
export type ResUserList = ResPageData<User>;

export type ResRuleList = { id: number; role_name: string }[];

// 安全设置
export interface ReqConfiguration {
  configuration: string;
}
export interface ResSafetyConfig {
  is_account_lock: number;
  is_page_timeout: number;
  lock_duration: number;
  odd_login_times: number;
  page_timeout_duration: number;
}

// 密码规则
export interface ResPwdRule {
  is_first_login_change_pwd: Bool;
  is_force_change_pwd: Bool;
  pwd_change_period: number;
  pwd_shortest_length: number;
  pwd_strength: {
    lower: Bool;
    upper: Bool;
    number: Bool;
    special_char: Bool;
  };
}

// 安全运维
export interface ReqSessionId {
  address: string;
  port: number;
  user: string;
  pwd: string;
}
