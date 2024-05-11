import request from '@/api';
import { ReqLoginForm, ResCaptcha, ResLogin } from '@/api/interface/login';

// 1.登录接口
export const loginApi = (data: ReqLoginForm) =>
  request<ResLogin>({
    method: 'POST',
    url: '/ndr/api/login/login',
    data
  });

// 2.验证码接口
export const captchaQueryKey = '/ndr/api/login/captcha';
export const captchaApi = () =>
  request<ResCaptcha>({
    method: 'POST',
    url: captchaQueryKey
  });
// 3.首次登录修改密码
export const updateLoginUserPwdApi = (data) =>
  request<string>({
    method: 'POST',
    url: '/ndr/api/login/update',
    data
  });
// 4.退出登录
export const logoutApi = () =>
  request({
    method: 'POST',
    url: '/ndr/api/logout/logout'
  });
// 5.修改密码
export const updateUserPwdApi = (data) =>
  request<string>({
    method: 'POST',
    url: '/ndr/api/pwd/update_pwd',
    data
  });
