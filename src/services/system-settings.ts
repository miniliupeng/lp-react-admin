import {
  getLogoApi,
  getSystemSettingsConfigApi,
  getTimeByTimeZoneApi,
  getTimeConfigApi,
  getTimeZoneApi,
  syncStatusApi,
  syncTimeApi,
  updateLogoApi,
  updateSystemSettingsConfigApi,
  updateTimeConfigApi
} from '@/api/modules/system-settings';

export const getLogoService = (params) => getLogoApi(params).then((res) => res.data);

export const updateLogoService = (data) => updateLogoApi(data);

export const getSystemSettingsConfigService = () =>
  getSystemSettingsConfigApi().then((res) => res.data);

export const updateSystemSettingsConfigService = (data) => updateSystemSettingsConfigApi(data);

export const getTimeConfigService = () =>
  getTimeConfigApi().then((res) => ({
    id: res.data.id,
    sync_status: res.data.sync_status,
    addr: res.data.sync_time_addr,
    time_zone: res.data.time_zone,
    sys_time: res.data.date_time
  }));

export const updateTimeConfigService = (data) => updateTimeConfigApi(data);

export const getTimeZoneService = () => getTimeZoneApi().then((res) => res.data);

export const getTimeByTimeZoneService = (data) =>
  getTimeByTimeZoneApi(data).then((res) => res.reason);

export const syncStatusService = (data) => syncStatusApi(data).then((res) => res.data);

export const syncTimeService = (data) => syncTimeApi(data);
