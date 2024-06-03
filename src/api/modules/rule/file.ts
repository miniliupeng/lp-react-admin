import request from '@/api';

// 查询文件还原配置
export const getFileRestore = () =>
  request({
    method: 'POST',
    url: '/ndr/api/ndr/file/get_conf'
  });
// 修改文件还原配置
export const updateFileRestore = (data) =>
  request({
    method: 'POST',
    url: '/ndr/api/ndr/file/set_conf',
    data
  });
// 查询沙箱检测
export const getSandbox = () =>
  request<any>({
    method: 'POST',
    url: '/ndr/api/ndr/sandbox/get_conf'
  });
// 更新沙箱检测
export const updateSandbox = (data) =>
  request({
    method: 'POST',
    url: '/ndr/api/ndr/sandbox/set_conf',
    data
  });
