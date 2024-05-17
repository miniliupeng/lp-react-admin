import { ResPageList } from '.';

// 检测协议
export interface DetectionProtocol {
  title: string;
  protocols: { id: number; protocol_name: string; threat_detection: Bool; traffic_log: Bool }[];
}
export type ResDetectionProtocolList = ResPageList<DetectionProtocol>;
