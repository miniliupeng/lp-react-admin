import request from '@/api';
import { ReqLoginForm, ResCaptcha, ResLogin } from '@/api/interface/login';

// 1.登录接口
export const login = (data: ReqLoginForm) =>
  request<ResLogin>({
    method: 'POST',
    url: '/ndr/api/login/login',
    data
  });
// 2.验证码接口
export const getCaptcha = () =>
  request<ResCaptcha>({
    method: 'POST',
    url: '/ndr/api/login/captcha'
  });
// 3.首次登录修改密码
export const updateLoginUserPwd = (data) =>
  request<string>({
    method: 'POST',
    url: '/ndr/api/login/update',
    data
  });
// 4.退出登录
export const logout = () =>
  request({
    method: 'POST',
    url: '/ndr/api/logout/logout'
  });
// 5.修改密码
export const updateUserPwd = (data) =>
  request<string>({
    method: 'POST',
    url: '/ndr/api/pwd/update_pwd',
    data
  });
