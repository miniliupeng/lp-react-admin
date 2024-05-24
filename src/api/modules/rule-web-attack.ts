import request from '..';
import { ResRuleOptions } from '../interface/rule-web-attack';

// web攻击列表
export const getRuleWebList = (data) =>
  request({
    method: 'POST',
    url: '/ndr/api/rule/web/getlist',
    data
  });
// web攻击启停
export const updateRuleWebStatus = (data) =>
  request({
    method: 'POST',
    url: '/ndr/api/rule/web/update_status',
    data
  });
// web攻击配置
export const updateRuleWeb = (data) =>
  request({
    method: 'POST',
    url: '/ndr/api/rule/web/update',
    data
  });
// options
export const getRuleOptions = () =>
  request<ResRuleOptions>({
    method: 'GET',
    url: '/ndr/api/rule/web/get'
  });
// 网络攻击列表
export const getRuleNetList = (data) =>
  request({
    method: 'POST',
    url: '/ndr/api/rule/net/getlist',
    data
  });
// 网络攻击启停
export const updateRuleNetStatus = (data) =>
  request({
    method: 'POST',
    url: '/ndr/api/rule/net/update_status',
    data
  });
// 网络攻击配置
export const updateRuleNet = (data) =>
  request({
    method: 'POST',
    url: '/ndr/api/rule/net/update',
    data
  });
