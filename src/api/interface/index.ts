// 请求响应参数（不包含data）
export interface Result {
  result: 0 | 1;
  reason: string;
}

// 请求响应参数（包含data）
export interface ResultData<T = any> extends Result {
  data: T;
}

// 分页响应参数
export interface ResPageList<T> {
  list: T[];
  total: number;
}
export interface ResPageData<T> {
  data: T[];
  total: number;
}

// 分页请求参数
export interface ReqPage {
  limit: number;
  offset: number;
}
