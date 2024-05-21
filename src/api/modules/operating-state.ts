import request, { download } from '..';
import { ResMemoryLimit, ResSystemInfo, ResSystemServices } from '../interface/operating-state';

// 获取系统信息
export const getSystemInfo = () =>
  request<ResSystemInfo>({
    method: 'GET',
    url: '/ndr/api/ndr/monitor/system_info/get'
  });

// 获取系统服务
export const getSystemServices = () =>
  request<ResSystemServices>({
    method: 'GET',
    url: '/ndr/api/misc/get_services'
  });
// 重启系统服务
export const restartSystemService = (data: { service_name: string }) =>
  request<string>({
    method: 'POST',
    url: '/ndr/api/misc/restart_service',
    data
  });
// 下载系统服务日志
export const downloadSystemService = () =>
  download({
    method: 'GET',
    url: '/ndr/api/misc/get_logcollection'
  });
// 获取内存限制信息
export const getMemoryLimit = () =>
  request<ResMemoryLimit>({
    method: 'GET',
    url: '/ndr/api/ndr/mem_monitor/get_config'
  });
// 修改内存限制信息
export const updateMemoryLimit = (data) =>
  request({
    method: 'POST',
    url: '/ndr/api/ndr/mem_monitor/save_config',
    data
  });
// 获取数据存储信息
export const getDataPersist = () =>
  request<{ days: number }>({
    method: 'GET',
    url: '/ndr/api/ndr/data_persist/get'
  });
// 修改数据存储信息
export const updateDataPersist = (data) =>
  request({
    method: 'POST',
    url: '/ndr/api/ndr/data_persist/set',
    data
  });
// 查询审计日志
export const getAuditLogList = (params) =>
  request({
    method: 'GET',
    url: '/ndr/api/log/list_adminoptlog',
    params
  });
