import request from '@/api';

// 查询IP碎片化
export const getIpSplinter = () =>
  request<any>({
    method: 'GET',
    url: '/ndr/api/ndr/ddos/ip_splinter/get'
  });
// 修改IP碎片化
export const updateIpSplinter = (data) =>
  request({
    method: 'POST',
    url: '/ndr/api/ndr/ddos/ip_splinter/update',
    data
  });
// DDOS阈值配置查询
export const getDos = () =>
  request({
    method: 'POST',
    url: '/ndr/api/ndr/ddos/get'
  });
// DDOS阈值配置更新

export const updateDos = (data) =>
  request({
    method: 'POST',
    url: '/ndr/api/ndr/ddos/update',
    data
  });
