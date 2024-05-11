// 一、用户管理

import request from '..';
import {
  ReqConfiguration,
  ReqSessionId,
  ReqUserList,
  ResPwdRule,
  ResRuleList,
  ResSafetyConfig,
  ResUserList,
  User
} from '../interface/user';

// 1.用户管理查询
export const usersQueryKey = '/ndr/api/user/get_all_users';
export const getAllUsersApi = (data: ReqUserList) =>
  request<ResUserList>({
    method: 'POST',
    url: usersQueryKey,
    data
  });
// 2.新增用户
export const addUserApi = (data: User) =>
  request({
    method: 'POST',
    url: '/ndr/api/user/add_user',
    data
  });
// 3.更新用户
export const updateUserApi = (data: User) =>
  request({
    method: 'POST',
    url: '/ndr/api/user/update_user',
    data
  });
// 4.重置密码
export const resetUserPwdApi = (data) =>
  request<string>({
    method: 'POST',
    url: '/ndr/api/user/reset_pwd',
    data
  });
// 5.删除用户
export const deleteUserApi = (data) =>
  request({
    method: 'POST',
    url: '/ndr/api/user/delete_user',
    data
  });

// 获取角色列表
export const rulesQueryKey = '/ndr/api/userrole/all_role_name';
export const getRolesApi = () =>
  request<ResRuleList>({
    method: 'GET',
    url: rulesQueryKey
  });

// 二、安全设置

// 1、查询
export const getSafetyConfigApi = (params: ReqConfiguration) =>
  request<ResSafetyConfig>({
    method: 'GET',
    url: '/ndr/api/configuration/get',
    params
  });
// 2、更新
export const updateSafetyConfigApi = (data: ResSafetyConfig) =>
  request({
    method: 'POST',
    url: '/ndr/api/configuration/update_safety_config',
    data
  });

// 三、密码规则
// 1、查询
export const pwdrulesQueryKey = '/ndr/api/pwd/get_rule';
export const getPwdRuleApi = () =>
  request<ResPwdRule>({
    method: 'GET',
    url: pwdrulesQueryKey
  });
// 2、更新
export const updatePwdRuleApi = (data: ResPwdRule) =>
  request({
    method: 'POST',
    url: '/ndr/api/configuration/update_password_config',
    data
  });

// 四、安全运维
// 1、查询二维码
export const sshCodeQueryKey = '/ndr/api/ndr/scancode/sshcode';
export const getSshCodeApi = () =>
  request<string>({
    method: 'GET',
    url: sshCodeQueryKey
  });
// 2、获取session id
export const getSessionIdApi = (data: ReqSessionId) =>
  request({
    method: 'POST',
    url: '/ndr/api/ndr/ssh/get_session_id',
    data
  });
