import request from '..';
import { ResDetectionProtocolList } from '../interface/detection-protocol';

// 获取检测协议列表
export const getDetectionProtocolList = () =>
  request<ResDetectionProtocolList>({
    method: 'GET',
    url: '/ndr/api/protocol/get'
    // data
  });
// 修改检测协议
export const updateDetectionProtocol = (data) =>
  request({
    method: 'POST',
    url: '/ndr/api/protocol/update_status',
    data
  });

// 获取tls证书
export const getTlsCert = () =>
  request({
    method: 'GET',
    url: '/ndr/api/protocol/tlscert/get'
  });
// 修改tls证书
export const updateTlsCert = (data) =>
  request({
    method: 'POST',
    url: '/ndr/api/protocol/tlscert/set',
    data
  });
