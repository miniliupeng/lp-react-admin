import request from '..';
import {
  ResFirewall,
  ResHomeNet,
  ResNicList,
  ResSNMPServer,
  ResSNMPTrap,
  ResSshPort
} from '../interface/network';

// 获取接口管理列表
export const getNicListApi = () =>
  request<ResNicList>({
    method: 'GET',
    url: '/ndr/api/network/nic/list'
  });

// 更新接口
export const updateNicApi = (data) =>
  request({
    method: 'POST',
    url: '/ndr/api/network/nic/update',
    data
  });

// 启用停用业务接口
export const toggleBizApi = (data) =>
  request({
    method: 'POST',
    url: '/ndr/api/network/nic/togglebiz',
    data
  });

// 获取诊断命令列表
export const getDiagnoseOptionsApi = () =>
  request<{ commands: string[] }>({
    method: 'GET',
    url: '/ndr/api/network/nic/diagnoseoptions'
  });
// 诊断
export const diagnoseApi = (data) =>
  request({
    method: 'POST',
    url: '/ndr/api/network/nic/diagnose',
    data
  });

// 获取防火墙
export const getFirewallApi = () =>
  request<ResFirewall>({
    method: 'GET',
    url: '/ndr/api/network/ufw/status'
  });

// 更新防火墙设置
export const updateFirewallApi = (data) =>
  request({
    method: 'POST',
    url: '/ndr/api/network/ufw/apply',
    data
  });

// 获取SSH端口配置
export const getSshPortApi = () =>
  request<ResSshPort>({
    method: 'GET',
    url: '/ndr/api/network/sshport/get'
  });

// 更新防火墙设置
export const updateSshPortApi = (data) =>
  request({
    method: 'POST',
    url: '/ndr/api/network/sshport/set',
    data
  });

// 获取SNMP服务配置
export const getSNMPServerApi = () =>
  request<ResSNMPServer>({
    method: 'POST',
    url: '/ndr/api/ndr/snmp_manage/get_snmp_server_config'
  });

// 更新SNMP服务配置
export const updateSNMPServerApi = (data) =>
  request({
    method: 'POST',
    url: '/ndr/api/ndr/snmp_manage/save_snmp_server_config',
    data
  });

// 获取SNMP Trap配置
export const getSNMPTrapApi = () =>
  request<ResSNMPTrap>({
    method: 'POST',
    url: '/ndr/api/ndr/snmp_manage/get_snmp_trap_config'
  });
// 更新SNMP Trap配置
export const updateSNMPTrapApi = (data) =>
  request({
    method: 'POST',
    url: '/ndr/api/ndr/snmp_manage/save_snmp_trap_config',
    data
  });

// 获取SNMP Trap 详情配置
export const getSNMPTrapDetailApi = () =>
  request<{ trap_detail: string }>({
    method: 'POST',
    url: '/ndr/api/ndr/snmp_manage/get_snmp_trap_detail'
  });
// 更新SNMP Trap 详情配置
export const updateSNMPTrapDetailApi = (data) =>
  request<string>({
    method: 'POST',
    url: '/ndr/api/ndr/snmp_manage/save_snmp_trap_detail',
    data
  });

// 获取 HomeNet 配置列表
export const getHomeNet = () =>
  request<ResHomeNet>({
    method: 'GET',
    url: '/ndr/api/network/homenet/list'
  });
// 新增 HomeNet 配置
export const addHomeNet = (data) =>
  request<string>({
    method: 'POST',
    url: '/ndr/api/network/homenet/add',
    data
  });
// 删除 HomeNet 配置
export const delHomeNet = (data) =>
  request<string>({
    method: 'POST',
    url: '/ndr/api/network/homenet/delete',
    data
  });
// 获取 XFF 配置
export const getXFFApi = () =>
  request({
    method: 'GET',
    url: '/ndr/api/network/xff/get'
  });
// 更新 XFF 配置
export const updateXFFApi = (data) =>
  request<string>({
    method: 'POST',
    url: '/ndr/api/network/xff/set',
    data
  });
