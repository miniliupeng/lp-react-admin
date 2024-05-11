import request from '..';
import { ResSystemSettingsConfig } from '../interface/system-settings';

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
