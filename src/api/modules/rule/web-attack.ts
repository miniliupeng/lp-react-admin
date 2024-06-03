import request from '@/api';
import { ResRuleOptions } from '@/api/interface/rule-web-attack';

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
