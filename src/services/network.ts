import {
  diagnoseApi,
  getDiagnoseOptionsApi,
  getFirewallApi,
  getNicListApi,
  getSNMPServerApi,
  getSNMPTrapApi,
  getSNMPTrapDetailApi,
  getSshPortApi,
  toggleBizApi,
  updateFirewallApi,
  updateNicApi,
  updateSNMPServerApi,
  updateSNMPTrapApi,
  updateSNMPTrapDetailApi,
  updateSshPortApi
} from '@/api/modules/network';

// 获取接口管理列表
export const getNicListService = () => getNicListApi().then((res) => res.data);

// 更新接口
export const updateNicService = (data) => updateNicApi(data);

// 启用停用业务接口
export const toggleBizService = (data) => toggleBizApi(data);

// 获取诊断命令列表
export const getDiagnoseOptionsService = () =>
  getDiagnoseOptionsApi().then((res) =>
    res.data.commands.map((item) => ({
      label: item,
      value: item
    }))
  );

// 诊断
export const diagnoseService = (data) =>
  diagnoseApi({
    command: data.command,
    nicname: data.name,
    nicip: data.ip,
    address: data.address
  });

// 获取防火墙配置
export const getFirewallService = () =>
  getFirewallApi().then((res) => ({
    ...res.data,
    ports:
      res.data.ports?.map((item) => ({
        name: item.port,
        closable: !item.lock
      })) || []
  }));

// 更新防火墙配置
export const updateFirewallService = (data) =>
  updateFirewallApi({
    active: data.active,
    ports: data?.ports?.map((item) => item.name)
  });

// 获取SSH端口配置
export const getSshPortService = () => getSshPortApi().then((res) => res.data);

// 更新SSH端口配置
export const updateSshPortService = (data) => updateSshPortApi(data);

// 获取SNMP服务配置
export const getSNMPServerService = () => getSNMPServerApi().then((res) => res.data);

// 更新SNMP服务配置
export const updateSNMPServerService = (data) => updateSNMPServerApi(data);

// 获取SNMP Trap配置
export const getSNMPTrapService = () => getSNMPTrapApi().then((res) => res.data);

// 更新SNMP Trap配置
export const updateSNMPTrapService = (data) => updateSNMPTrapApi(data);

// 获取SNMP Trap 详情配置
export const getSNMPTrapDetailService = () =>
  getSNMPTrapDetailApi().then((res) => JSON.parse(res.data.trap_detail));

// 更新SNMP Trap 详情配置
export const updateSNMPTrapDetailService = (data) => updateSNMPTrapDetailApi(data);
