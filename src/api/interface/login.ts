// 登录模块

import { User } from './user';

export interface ReqLoginForm {
  username: string;
  password: string;
}
export interface ResLogin {
  token: string;
  user: User;
  [key: string]: unknown;
}

export interface ResCaptcha {
  captchaId: string;
  picPath: string;
}
