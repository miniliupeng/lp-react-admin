import request, { download } from '@/api';

// 弱口令字典列表
export const getWeakPasswordDictList = (data) =>
  request({
    method: 'POST',
    url: '/ndr/api/v2/weak_password/get',
    data
  });
// 弱口令字典新增
export const addWeakPasswordDict = (data) =>
  request({
    method: 'POST',
    url: '/ndr/api/v2/weak_password/add',
    data
  });
// 弱口令字典编辑
export const updateWeakPasswordDict = (data) =>
  request({
    method: 'POST',
    url: '/ndr/api/v2/weak_password/update',
    data
  });
// 弱口令字典删除
export const deleteWeakPasswordDict = (data) =>
  request({
    method: 'POST',
    url: '/ndr/api/v2/weak_password/del',
    data
  });
// 更新状态
export const updateWeakPasswordDictStatus = (data) =>
  request({
    method: 'POST',
    url: '/ndr/api/v2/weak_password/update_status',
    data
  });
// 查询盐值
export const getWeakPasswordSalt = () =>
  request({
    method: 'GET',
    url: '/ndr/api/v2/weak_password/salt/get'
  });
// 修改盐值
export const updateWeakPasswordSalt = (data) =>
  request({
    method: 'POST',
    url: '/ndr/api/v2/weak_password/salt/update',
    data
  });
// 下载模板
export const exportWeakPasswordTemplate = () =>
  download(
    {
      method: 'GET',
      url: '/ndr/api/v2/weak_password/template'
    },
    '弱口令字典模板.xlsx'
  );
// 导入
export const importWeakPasswordUrl = '/ndr/api/v2/weak_password/import';

// 导出
export const exportWeakPassword = () =>
  download({
    method: 'GET',
    url: '/ndr/api/v2/weak_password/export'
  });

// 查询强度规则
export const getWeakPasswordPolicy = () =>
  request<any>({
    method: 'GET',
    url: '/ndr/api/v2/weak_password/get_weakpasswd_policy'
  });
// 修改强度规则
export const updateWeakPasswordPolicy = (data) =>
  request({
    method: 'POST',
    url: '/ndr/api/v2/weak_password/set_weakpasswd_policy',
    data
  });
