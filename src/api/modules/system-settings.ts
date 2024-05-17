import request from '..';
import {
  ResSystemSettingsConfig,
  ResTimeConfig,
  ResTimeStatusConfig
} from '../interface/system-settings';

// 获取logo
export const getLogoApi = (params) =>
  request<string>({
    method: 'GET',
    url: '/ndr/api/opconfig/show_logo',
    params
  });
// 修改logo
export const updateLogoApi = (data) =>
  request<string>({
    method: 'POST',
    url: '/ndr/api/opconfig/set_logo',
    data
  });
// 获取系统名称
export const getSystemSettingsConfigApi = () =>
  request<ResSystemSettingsConfig>({
    method: 'GET',
    url: '/ndr/api/opconfig/get_config'
  });
// 修改系统名称
export const updateSystemSettingsConfigApi = (data) =>
  request({
    method: 'POST',
    url: '/ndr/api/opconfig/save_config',
    data
  });
// 获取系统时间
export const getTimeConfigApi = () =>
  request<ResTimeConfig>({
    method: 'GET',
    url: '/ndr/api/sysmaintain/get_time'
  });
// 更新系统时间
export const updateTimeConfigApi = (data) =>
  request({
    method: 'POST',
    url: '/ndr/api/sysmaintain/save_time',
    data
  });
// 获取系统时区列表
export const getTimeZoneApi = () =>
  request<any>({
    method: 'GET',
    url: '/ndr/api/sysmaintain/time_zone'
  });
// 获取时间根据系统时区
export const getTimeByTimeZoneApi = (data) =>
  request<string>({
    method: 'POST',
    url: '/ndr/api/sysmaintain/zone_time',
    data
  });
// 同步状态
export const syncStatusApi = (data) =>
  request<ResTimeStatusConfig>({
    method: 'POST',
    url: '/ndr/api/sysmaintain/sync_status',
    data
  });
// 同步时间
export const syncTimeApi = (data) =>
  request({
    method: 'POST',
    url: '/ndr/api/sysmaintain/sync_time',
    data
  });
