import {
  captchaApi,
  loginApi,
  logoutApi,
  updateUserPwdApi,
  updateLoginUserPwdApi
} from '@/api/modules/login';
import { getBase64Str, getMd5Str } from '@/utils/string';

export const loginService = (data) =>
  loginApi({
    ...data,
    password: getMd5Str(data.password)
  });

export const getCaptchaService = () => captchaApi().then((res) => res.data);

export const updateUserPwdService = (data) =>
  updateUserPwdApi({
    ...data,
    password: getBase64Str(data.password),
    confirm_pass: getBase64Str(data.confirm_pass),
    old_pass: getMd5Str(data.old_pass)
  });

export const logoutService = () => logoutApi();

export const updateLoginUserPwdervice = (data) =>
  updateLoginUserPwdApi({
    ...data,
    password: getBase64Str(data.password),
    confirm_pass: getBase64Str(data.confirm_pass),
    old_pass: getMd5Str(data.old_pass)
  });
