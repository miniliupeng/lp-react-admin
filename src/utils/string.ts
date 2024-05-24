import CryptoJS from 'crypto-js';

export const getBase64Str = (str) => CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(str));
export const getStrFromBase64 = (base64 = '') =>
  CryptoJS.enc.Base64.parse(base64).toString(CryptoJS.enc.Utf8);

export const getMd5Str = (str) => CryptoJS.MD5(str).toString();
