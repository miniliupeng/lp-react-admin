import { message } from 'antd';

export const downloadBolbFile = (res, name?: string) => {
  return new Promise((resolve) => {
    const content = res.headers['content-disposition'];
    const filename =
      name || content.match(/filename="(.*)"/)?.[1] || content.match(/filename=(.*)/)?.[1]; // 获取filename的值
    const link = document.createElement('a'); // 创建元素
    link.style.display = 'none';
    link.href = window.URL.createObjectURL(res.data); // 创建下载的链接
    filename && link.setAttribute('download', filename); // 给下载后的文件命名
    document.body.appendChild(link);
    link.click(); // 点击下载
    document.body.removeChild(link); //  下载完成移除元素
    window.URL.revokeObjectURL(link.href); // 释放掉blob对象
    resolve(undefined);
  });
};

// 生成文件切片
function createFileChunk(file: Blob, size = 4 * 1024 * 1024) {
  const chunks: Blob[] = [];
  let cur = 0;
  while (cur < file.size) {
    chunks.push(file.slice(cur, cur + size));
    cur += size;
  }
  return chunks;
}
// 生成文件 hash（web-worker）
function createFileMd5InWorker(fileChunks): Promise<{ hash: string }> {
  return new Promise((resolve) => {
    const worker = new Worker(new URL('./hash.js', import.meta.url));
    worker.postMessage({ fileChunks });
    worker.onmessage = (e) => {
      // 这边加了进度条 这里的进度条，看需要显示
      const { /* percentage,  */ hash } = e.data;
      // console.log(percentage);
      // 计算出hash之后，扔出去
      hash && resolve({ hash });
    };
  });
}
export async function getHASH(file) {
  const chunks = createFileChunk(file);
  // 这里注意放chunks
  message.info('解析文件中....');
  const { hash: md5 } = await createFileMd5InWorker(chunks);
  message.success('解析文件成功，开始上传');
  return {
    HASH: md5
  };
}
