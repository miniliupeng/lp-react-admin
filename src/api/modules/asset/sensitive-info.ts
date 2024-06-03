import { ResPageList } from '@/api/interface';
import request from '../..';

// 敏感信息列表
export const getSensitiveInfoList = (data) =>
  request<ResPageList<any>>({
    method: 'POST',
    url: '/ndr/api/risk/infoleak',
    data
  });
// 敏感信息显示
export const revealSensitiveInfo = (data) =>
  request<any>({
    method: 'POST',
    url: '/ndr/api/risk/infoleak/reveal',
    data
  });
