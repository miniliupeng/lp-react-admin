import request from '../../index';

// 日志外发（传输配置）
// 列表
export const getTransportList = (params) =>
  request({
    method: 'GET',
    url: '/ndr/api/transport/data/getlist',
    params
  });

// 新增
export const addTransport = (data) =>
  request({
    method: 'POST',
    url: '/ndr/api/transport/data/add',
    data
  });
// 更新
export const updateTransport = (data) =>
  request({
    method: 'POST',
    url: '/ndr/api/transport/data/update',
    data
  });
// 删除
export const deleteTransport = (data) =>
  request({
    method: 'POST',
    url: '/ndr/api/transport/data/delete',
    data
  });
// 启停
export const updateTransportStatus = (data) =>
  request<string>({
    method: 'POST',
    url: '/ndr/api/transport/data/update_status',
    data
  });
// 生成秘钥
export const genTransportKey = () =>
  request<{ key: string }>({
    method: 'GET',
    url: '/ndr/api/transport/data/genkey'
  });

// 告警类型
export const getAlertTypes = () =>
  request<any>({
    method: 'GET',
    url: '/ndr/api/transport/data/alert_type/get'
  });

// 日志类型
export const getLogTypes = () =>
  request<any>({
    method: 'GET',
    url: '/ndr/api/transport/data/protocol_type/get'
  });

// 日志外发折线图趋势
export const getLogLine = (params) =>
  request<any>({
    method: 'GET',
    url: '/ndr/api/ndr/monitor/log_outgo/get',
    params
  });
