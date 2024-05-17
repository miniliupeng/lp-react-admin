import {
  getDetectionProtocolListApi,
  getTlsCertApi,
  updateDetectionProtocolApi,
  updateTlsCertApi
} from '@/api/modules/detection-protocol';

// 获取检测协议列表
export const getDetectionProtocolListService = (data) =>
  getDetectionProtocolListApi({ ...data, limit: 37 }).then((res) => res.data.list);

// 获取检测协议列表
export const updateDetectionProtocolService = (data) => updateDetectionProtocolApi(data);

// 获取tls证书
export const getTlsCertService = () => getTlsCertApi().then((res) => res.data);
// 修改tls证书
export const updateTlsCertService = (data) => updateTlsCertApi(data);
