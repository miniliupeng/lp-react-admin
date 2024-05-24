import request, { download } from '../../index';

// 流量抓取
// 列表
export const getCaptureList = (data) =>
  request({
    method: 'POST',
    url: '/ndr/api/packetcapture/list',
    data
  });
// 新增
export const addCaptureTask = (data) =>
  request({
    method: 'POST',
    url: '/ndr/api/packetcapture/add',
    data
  });

// 停止
export const stopCaptureTask = (data) =>
  request({
    method: 'POST',
    url: '/ndr/api/packetcapture/stop',
    data
  });
// 删除
export const deleteCaptureTask = (data) =>
  request({
    method: 'POST',
    url: '/ndr/api/packetcapture/del',
    data
  });
// 下载
export const downloadCaptureTask = (params) =>
  download({
    method: 'GET',
    url: '/ndr/api/packetcapture/download',
    params
  });
