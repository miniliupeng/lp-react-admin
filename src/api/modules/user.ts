// 一、用户管理

import request from '..';
import {
  ReqConfiguration,
  ReqSessionId,
  ResPwdRule,
  ResRuleList,
  ResSafetyConfig,
  ResUserList,
  User
} from '../interface/user';

// 1.用户管理查询
export const getAllUsers = () =>
  request<ResUserList>({
    method: 'GET',
    url: '/ndr/api/user/get_all_users'
  });
// 2.新增用户
export const addUser = (data: User) =>
  request({
    method: 'POST',
    url: '/ndr/api/user/add_user',
    data
  });
// 3.更新用户
export const updateUser = (data: User) =>
  request({
    method: 'POST',
    url: '/ndr/api/user/update_user',
    data
  });
// 4.重置密码
export const resetUserPwd = (data) =>
  request<string>({
    method: 'POST',
    url: '/ndr/api/user/reset_pwd',
    data
  });
// 5.删除用户
export const deleteUser = (data) =>
  request({
    method: 'POST',
    url: '/ndr/api/user/delete_user',
    data
  });

// 获取角色列表
export const getRoles = () =>
  request<ResRuleList>({
    method: 'GET',
    url: '/ndr/api/userrole/all_role_name'
  });

// 二、安全设置

// 1、查询
export const getSafetyConfig = (params: ReqConfiguration) =>
  request<ResSafetyConfig>({
    method: 'GET',
    url: '/ndr/api/configuration/get',
    params
  });
// 2、更新
export const updateSafetyConfig = (data: ResSafetyConfig) =>
  request({
    method: 'POST',
    url: '/ndr/api/configuration/update_safety_config',
    data
  });

// 三、密码规则
// 1、查询
export const getPwdRule = () =>
  request<ResPwdRule>({
    method: 'GET',
    url: '/ndr/api/pwd/get_rule'
  });
// 2、更新
export const updatePwdRule = (data: ResPwdRule) =>
  request({
    method: 'POST',
    url: '/ndr/api/configuration/update_password_config',
    data
  });

// 四、安全运维
// 1、查询二维码
export const getSshCode = () =>
  request<string>({
    method: 'GET',
    url: '/ndr/api/ndr/scancode/sshcode'
  });
// 2、获取session id
export const getSessionId = (data: ReqSessionId) =>
  request({
    method: 'POST',
    url: '/ndr/api/ndr/ssh/get_session_id',
    data
  });
