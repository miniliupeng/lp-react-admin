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
export const getNicList = () =>
  request<ResNicList>({
    method: 'GET',
    url: '/ndr/api/network/nic/list'
  });

// 更新接口
export const updateNic = (data) =>
  request({
    method: 'POST',
    url: '/ndr/api/network/nic/update',
    data
  });

// 启用停用业务接口
export const toggleBiz = (data) =>
  request({
    method: 'POST',
    url: '/ndr/api/network/nic/togglebiz',
    data
  });

// 获取诊断命令列表
export const getDiagnoseOptions = () =>
  request<{ commands: string[] }>({
    method: 'GET',
    url: '/ndr/api/network/nic/diagnoseoptions'
  });
// 诊断
export const diagnose = (data) =>
  request({
    method: 'POST',
    url: '/ndr/api/network/nic/diagnose',
    data
  });

// 获取防火墙
export const getFirewall = () =>
  request<ResFirewall>({
    method: 'GET',
    url: '/ndr/api/network/ufw/status'
  });

// 更新防火墙设置
export const updateFirewall = (data) =>
  request({
    method: 'POST',
    url: '/ndr/api/network/ufw/apply',
    data
  });

// 获取SSH端口配置
export const getSshPort = () =>
  request<ResSshPort>({
    method: 'GET',
    url: '/ndr/api/network/sshport/get'
  });

// 更新防火墙设置
export const updateSshPort = (data) =>
  request({
    method: 'POST',
    url: '/ndr/api/network/sshport/set',
    data
  });

// 获取SNMP服务配置
export const getSNMPServer = () =>
  request<ResSNMPServer>({
    method: 'POST',
    url: '/ndr/api/ndr/snmp_manage/get_snmp_server_config'
  });

// 更新SNMP服务配置
export const updateSNMPServer = (data) =>
  request({
    method: 'POST',
    url: '/ndr/api/ndr/snmp_manage/save_snmp_server_config',
    data
  });

// 获取SNMP Trap配置
export const getSNMPTrap = () =>
  request<ResSNMPTrap>({
    method: 'POST',
    url: '/ndr/api/ndr/snmp_manage/get_snmp_trap_config'
  });
// 更新SNMP Trap配置
export const updateSNMPTrap = (data) =>
  request({
    method: 'POST',
    url: '/ndr/api/ndr/snmp_manage/save_snmp_trap_config',
    data
  });

// 获取SNMP Trap 详情配置
export const getSNMPTrapDetail = () =>
  request<{ trap_detail: string }>({
    method: 'POST',
    url: '/ndr/api/ndr/snmp_manage/get_snmp_trap_detail'
  });
// 更新SNMP Trap 详情配置
export const updateSNMPTrapDetail = (data) =>
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
export const getXFF = () =>
  request({
    method: 'GET',
    url: '/ndr/api/network/xff/get'
  });
// 更新 XFF 配置
export const updateXFF = (data) =>
  request<string>({
    method: 'POST',
    url: '/ndr/api/network/xff/set',
    data
  });
