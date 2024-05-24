import request from '../../index';

// pcap检测
// 列表
export const getPcapRelayList = (data) =>
  request({
    method: 'POST',
    url: '/ndr/api/ndr/policy/pcap/replay/get_list',
    data
  });
// 上传
export const uploadPcap = (data) =>
  request({
    method: 'POST',
    url: '/ndr/api/ndr/policy/pcap/replay_push',
    data,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });

// 文件检测
// 列表
export const getFileDetectionList = (data) =>
  request({
    method: 'POST',
    url: '/ndr/api/ndr/sandbox/uploadlog',
    data
  });
// 上传
export const uploadFileDetection = (data) =>
  request({
    method: 'POST',
    url: '/ndr/api/ndr/sandbox/customupload',
    data,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
