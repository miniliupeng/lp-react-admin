import request from '@/api';

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
