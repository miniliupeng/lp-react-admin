import request from '..';
import { ResAttackerList } from '../interface/attacker-tracking';

// 攻击者追踪列表
export const getAttackerList = (data) =>
  request<ResAttackerList>({
    method: 'POST',
    url: '/ndr/api/ndr/threat/alert/attacker',
    data
  });
