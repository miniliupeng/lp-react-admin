import {
  getLogoApi,
  getSystemSettingsConfigApi,
  updateLogoApi,
  updateSystemSettingsConfigApi
} from '@/api/modules/system-settings';

export const getLogoService = (params) => getLogoApi(params).then((res) => res.data);

export const updateLogoService = (data) => updateLogoApi(data);

export const getSystemSettingsConfigService = () =>
  getSystemSettingsConfigApi().then((res) => res.data);

export const updateSystemSettingsConfigService = (data) => updateSystemSettingsConfigApi(data);
