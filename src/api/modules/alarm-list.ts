import request, { download } from '..';
import { ResAlarmList } from '../interface/alarm-list';

// 告警调查列表
export const getAlarmList = (data) =>
  request<ResAlarmList>({
    method: 'POST',
    url: '/ndr/api/ndr/threat/alert/investigate',
    data
  });
// 导出告警列表
export const exportAlert = (data) =>
  download({
    method: 'POST',
    url: '/ndr/api/ndr/threat/alert/export',
    data
  });

// 白名单添加
export const addAlertwlist = (data) =>
  request({
    method: 'POST',
    url: '/ndr/api/alertwlist/add',
    data
  });
// 阻断添加
export const addBlackList = (data) =>
  request({
    method: 'POST',
    url: '/ndr/api/bypassblock/blacklist/add',
    data
  });
// 导出告警pcap
export const exportAlertPcap = (data) =>
  download({
    method: 'POST',
    url: '/ndr/api/ndr/threat/alert/pcap',
    data
  });
