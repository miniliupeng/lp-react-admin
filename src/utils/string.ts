import CryptoJS from 'crypto-js';
import { Base64 } from 'js-base64';
import { message } from 'antd';

export const getBase64Str = (str) => {
  return Base64.encode(str);
  // return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(str));
};
export const getStrFromBase64 = (base64 = '') => {
  return Base64.decode(base64);
  // return CryptoJS.enc.Base64.parse(base64).toString(CryptoJS.enc.UTF8);
};

export const getMd5Str = (str) => CryptoJS.MD5(str).toString();

export function copyAction(str = ' ') {
  const createTextarea = document.createElement('textarea');
  createTextarea.value = str;
  document.body.appendChild(createTextarea);
  createTextarea.select();
  document.execCommand('Copy'); // document执行复制操作
  createTextarea.remove();
  message.success('复制成功');
}
