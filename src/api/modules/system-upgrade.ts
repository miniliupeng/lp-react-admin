import request, { download } from '..';
import { ResCertInfo, ResProducts, ResUpgradeSettingOptions } from '../interface/system-upgrade';

// 获取升级产品信息
export const getUpgradeProducts = () =>
  request<ResProducts>({
    method: 'GET',
    url: '/ndr/api/upgrade/remote/products'
  });

// 获取升级配置
export const getUpgradeSetting = () =>
  request({
    method: 'GET',
    url: '/ndr/api/upgrade/remote/setting/get'
  });
// 获取升级配置选项
export const getUpgradeSettingOptions = () =>
  request<ResUpgradeSettingOptions>({
    method: 'GET',
    url: '/ndr/api/upgrade/remote/setting/options'
  });
// 更新升级配置
export const updateUpgradeSetting = (data) =>
  request({
    method: 'POST',
    url: '/ndr/api/upgrade/remote/setting/update',
    data
  });

// 下载安装包
export const downloadUpgrade = (data) =>
  request({
    method: 'POST',
    url: '/ndr/api/upgrade/remote/download',
    data
  });
// 安装安装包
export const installUpgrade = (data) =>
  request({
    method: 'POST',
    url: '/ndr/api/upgrade/install',
    data
  });

// 上传升级包
export const uploadUpgrade = ({ headers, data, onUploadProgress, cancelToken }) =>
  request<{ id: string }>({
    method: 'POST',
    url: '/ndr/api/upgrade/upload',
    data,
    headers,
    onUploadProgress,
    cancelToken
  });

// 查询上传包进度
export const getUpgradeUploadInfo = (headers) =>
  request<ResProducts>({
    method: 'GET',
    url: '/ndr/api/upgrade/uploadinfo',
    headers
  });

// 升级日志查询
export const getUpgradeLogs = (data) =>
  request({
    method: 'POST',
    url: '/ndr/api/upgrade/logs',
    data
  });

// 证书信息
export const getCertInfo = () =>
  request<ResCertInfo>({
    method: 'GET',
    url: '/ndr/api/cert/getInfo'
  });
export const uploadCert = () =>
  request<ResCertInfo>({
    method: 'POST',
    url: '/ndr/api/cert/upload'
  });

// 系统配置导出
export const exportSysconf = () =>
  download({
    method: 'GET',
    url: '/ndr/api/sysconf/export'
  });

// 系统配置导入
export const importSysconf = (data) =>
  request({
    method: 'POST',
    url: '/ndr/api/sysconf/import',
    data
  });
