import request, { download } from '@/api';

// options
export const getThreatTypeOptions = () =>
  request({
    method: 'POST',
    url: '/ndr/api/ndr/threat/alert/threat_type/get'
  });

// 自定义威胁情报列表
export const getRuleIocList = (data) =>
  request({
    method: 'POST',
    url: '/ndr/api/intelligence/rule/custom/list',
    data
  });
// 新增
export const addIocRule = (data) =>
  request({
    method: 'POST',
    url: '/ndr/api/intelligence/rule/custom/add',
    data
  });
// 更新
export const updateIocRule = (data) =>
  request({
    method: 'POST',
    url: '/ndr/api/intelligence/rule/custom/update',
    data
  });
// 更新状态
export const updateIocRuleStatus = (data) =>
  request({
    method: 'POST',
    url: '/ndr/api/intelligence/rule/custom/update_status',
    data
  });
// 删除
export const deleteIocRule = (data) =>
  request({
    method: 'POST',
    url: '/ndr/api/intelligence/rule/custom/delete',
    data
  });
// 下载模板
export const exportIocRuleTemplate = () =>
  download(
    {
      method: 'GET',
      url: '/ndr/api/intelligence/rule/custom/template'
    },
    '自定义IOC规则模板.xlsx'
  );
// 导入
export const importIocRuleUrl = '/ndr/api/intelligence/rule/custom/import';

// 导出
export const exportIocRule = () =>
  download(
    {
      method: 'GET',
      url: '/ndr/api/intelligence/rule/custom/export'
    },
    '自定义IOC规则.xlsx'
  );
