import request from '..';
import {
  ResOpenAppDoc,
  ResOpenAppList,
  ResSystemSettingsConfig,
  ResTimeConfig,
  ResTimeStatusConfig
} from '../interface/system-settings';

// 获取logo
export const getLogo = (params) =>
  request<string>({
    method: 'GET',
    url: '/ndr/api/opconfig/show_logo',
    params
  });
// 修改logo
export const updateLogo = (data) =>
  request<string>({
    method: 'POST',
    url: '/ndr/api/opconfig/set_logo',
    data
  });
// 获取系统名称
export const getSystemSettingsConfig = () =>
  request<ResSystemSettingsConfig>({
    method: 'GET',
    url: '/ndr/api/opconfig/get_config'
  });
// 修改系统名称
export const updateSystemSettingsConfig = (data) =>
  request({
    method: 'POST',
    url: '/ndr/api/opconfig/save_config',
    data
  });
// 获取系统时间
export const getTimeConfig = () =>
  request<ResTimeConfig>({
    method: 'GET',
    url: '/ndr/api/sysmaintain/get_time'
  });
// 更新系统时间
export const updateTimeConfig = (data) =>
  request({
    method: 'POST',
    url: '/ndr/api/sysmaintain/save_time',
    data
  });
// 获取系统时区列表
export const getTimeZone = () =>
  request<any>({
    method: 'GET',
    url: '/ndr/api/sysmaintain/time_zone'
  });
// 获取时间根据系统时区
export const getTimeByTimeZone = (data) =>
  request<string>({
    method: 'POST',
    url: '/ndr/api/sysmaintain/zone_time',
    data
  });
// 同步状态
export const syncStatus = (data) =>
  request<ResTimeStatusConfig>({
    method: 'POST',
    url: '/ndr/api/sysmaintain/sync_status',
    data
  });
// 同步时间
export const syncTime = (data) =>
  request({
    method: 'POST',
    url: '/ndr/api/sysmaintain/sync_time',
    data
  });

// 对外Api列表
export const getOpenAppList = () =>
  request<ResOpenAppList>({
    method: 'GET',
    url: '/ndr/api/openapp/list'
  });
// 新增对外Api
export const addOpenApp = (data) =>
  request({
    method: 'POST',
    url: '/ndr/api/openapp/add',
    data
  });
// 删除对外Api
export const deleteOpenApp = (data) =>
  request({
    method: 'POST',
    url: '/ndr/api/openapp/delete',
    data
  });
export const getOpenAppDoc = () =>
  request<ResOpenAppDoc>({
    method: 'GET',
    url: '/ndr/api/openapp/apis'
  });
