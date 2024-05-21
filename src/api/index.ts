import axios, { AxiosRequestConfig } from 'axios';
import { useUserStore } from '@/stores';
import { message } from 'antd';
import { LOGIN_URL } from '@/config';
import { ResultData } from './interface';
import { downloadBolbFile } from '@/utils/file';

interface simpleRequestConfig<T> extends AxiosRequestConfig<T> {
  method: 'get' | 'GET';
}

const instance = axios.create();

instance.interceptors.request.use((config) => {
  const token = useUserStore.getState().token;
  if (token) config.headers['Authorization'] = token;
  return config;
});

instance.interceptors.response.use(
  (response) => {
    const res = response.data;
    if (response.config.responseType === 'blob' && response.data instanceof Blob) return response;
    if (!handleGeneralError(res.result, res.reason)) return Promise.reject(res);
    return res;
  },
  (err) => {
    handleNetworkError(err.response.status);
    return Promise.reject(err.response);
  }
);

const handleNetworkError = (errStatus: number) => {
  message.destroy();
  let errMessage = '未知错误';
  if (errStatus) {
    switch (errStatus) {
      case 400:
        errMessage = '错误的请求';
        break;
      case 401:
        errMessage = '未授权，请重新登录';
        window.location.hash = LOGIN_URL;
        break;
      case 403:
        errMessage = '拒绝访问';
        break;
      case 404:
        errMessage = '请求错误,未找到该资源';
        break;
      case 405:
        errMessage = '请求方法未允许';
        break;
      case 408:
        errMessage = '请求超时';
        break;
      case 500:
        errMessage = '服务器端出错';
        break;
      case 501:
        errMessage = '网络未实现';
        break;
      case 502:
        errMessage = '网络错误';
        break;
      case 503:
        errMessage = '服务不可用';
        break;
      case 504:
        errMessage = '网络超时';
        break;
      case 505:
        errMessage = 'http版本不支持该请求';
        break;
      default:
        errMessage = `其他连接错误 --${errStatus}`;
    }
  } else {
    errMessage = `无法连接到服务器！`;
  }
  message.error(errMessage);
};

const handleGeneralError = (errno: string | number, errmsg: string) => {
  // if (errno === 401) {
  //   message.destroy();
  //   message.error(errmsg).then(() => {
  //     // MyLocalStorage.localstorage.removeItem(USER_KEY)
  //     window.location.href = LOGIN_URL;
  //   });
  //   return false;
  // }
  if (errno !== 1) {
    message.error(errmsg);
    return false;
  }
  return true;
};

function isSimpleRequestConfig(
  config: AxiosRequestConfig<any>
): config is simpleRequestConfig<any> {
  return ['GET', 'get'].includes(config.method!);
}

function request<T>(config: simpleRequestConfig<any>): Promise<T>;
function request<T>(config: AxiosRequestConfig<any>): Promise<ResultData<T>>;
function request<T>(
  config: AxiosRequestConfig<any> | simpleRequestConfig<any>
): Promise<ResultData<T> | T> {
  if (isSimpleRequestConfig(config)) return instance(config).then((res) => res.data);
  return instance(config);
}

export function download(config: AxiosRequestConfig<any>, filename?: string) {
  return instance({ responseType: 'blob', ...config }).then((res) =>
    downloadBolbFile(res, filename)
  );
}

export default request;
