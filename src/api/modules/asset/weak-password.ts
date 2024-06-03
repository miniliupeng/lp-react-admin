import { ResPageList } from '@/api/interface';
import request from '../..';

// 获取authcode
export const getAuthCode = () =>
  request<{ auth_code: string; ttl: number }>({
    method: 'GET',
    url: '/ndr/api/risk/authcode'
  });

// 弱口令列表
export const getWeakPasswordList = (data) =>
  request<ResPageList<any>>({
    method: 'POST',
    url: '/ndr/api/risk/weakpasswd',
    data
  });
// 弱口令显示
export const revealWeakPassword = (data) =>
  request<any>({
    method: 'POST',
    url: '/ndr/api/risk/weakpasswd/reveal',
    data
  });
