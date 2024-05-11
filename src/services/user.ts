import { Bool } from '@/api/interface';
import {
  addUserApi,
  deleteUserApi,
  getAllUsersApi,
  getPwdRuleApi,
  getRolesApi,
  getSafetyConfigApi,
  getSessionIdApi,
  getSshCodeApi,
  resetUserPwdApi,
  updatePwdRuleApi,
  updateSafetyConfigApi,
  updateUserApi
} from '@/api/modules/user';
import { TIME_FORMAT } from '@/config/constants';
import { BoolEnum, RoleNameEnum } from '@/enums/user';
import dayjs from 'dayjs';
import { getBase64Str } from '@/utils/string';
// 查询用户
export const getAllUsersService = () =>
  getAllUsersApi({ limit: 10, offset: 0 }).then((res) => res.data.data);

export const addUserService = (data) => {
  return addUserApi({
    ...data,
    password: getBase64Str(data.password),
    password_confirm: getBase64Str(data.password_confirm),
    account_period: dayjs(data.account_period).format(TIME_FORMAT)
  });
};

export const updateUserService = (data) =>
  updateUserApi({
    ...data,
    account_period: dayjs(data.account_period).format(TIME_FORMAT)
  });
export const resetUserPwdService = (data) => resetUserPwdApi(data).then((res) => res.data);
export const deleteUserService = (data) => deleteUserApi(data);

export const getRolesService = () =>
  getRolesApi().then((res) => {
    return res.data.flatMap((item) => {
      if (item.id !== 1) {
        return [
          {
            label: RoleNameEnum[item.role_name],
            value: item.id
          }
        ];
      }
      return [];
    });
  });

export const getUserPwdRuleService = () => getPwdRuleApi().then((res) => res.data);

const getCheckboxValue = (obj: Record<string, Bool>) => {
  const value: string[] = [];
  for (const key in obj) {
    if (obj[key] === BoolEnum.TRUE) {
      value.push(key);
    }
  }
  return value;
};

export const getSafetyConfigService = () =>
  getSafetyConfigApi({
    configuration: 'safety_config'
  }).then((res) => {
    return {
      ...res.data,
      is_account_lock: res.data.is_account_lock === 1,
      is_page_timeout: res.data.is_page_timeout === 1
    };
  });
export const updateSafetyConfigService = (data) => {
  return updateSafetyConfigApi({
    ...data,
    is_account_lock: data.is_account_lock ? 1 : -1,
    is_page_timeout: data.is_page_timeout ? 1 : -1
  });
};

export const getPwdRuleService = () =>
  getPwdRuleApi().then((res) => {
    return {
      ...res.data,
      is_first_login_change_pwd: res.data.is_first_login_change_pwd === 1,
      is_force_change_pwd: res.data.is_force_change_pwd === 1,
      pwd_strength: getCheckboxValue(res.data.pwd_strength)
    };
  });
export const updatePwdRuleService = (data) => {
  const pwd_strength = {
    lower: -1,
    upper: -1,
    number: -1,
    special_char: -1
  };
  data.pwd_strength.forEach((key) => {
    pwd_strength[key] = 1;
  });
  return updatePwdRuleApi({
    ...data,
    is_first_login_change_pwd: data.is_first_login_change_pwd ? 1 : -1,
    is_force_change_pwd: data.is_force_change_pwd ? 1 : -1,
    pwd_strength
  });
};

export const getSessionId = (data) => getSessionIdApi(data).then((res) => res.data);

export const getSshCodeService = () =>
  getSshCodeApi().then((res) => `data:image/png;base64,${res.data}`);
