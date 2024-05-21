// 直接copy的  https://juejin.cn/post/6844904046436843527#heading-17
// self.importScripts("./spark-md5.min.js"); // 导入脚本
self.importScripts(new URL('./spark-md5.min.js', import.meta.url)); // 导入脚本

// 生成文件 hash
self.onmessage = (e) => {
  const { fileChunks } = e.data;
  const spark = new self.SparkMD5.ArrayBuffer();
  let percentage = 0;
  let count = 0;
  const loadNext = (index) => {
    const reader = new FileReader();
    reader.readAsArrayBuffer(fileChunks[index]);
    reader.onload = (e) => {
      count++;
      spark.append(e.target.result);
      if (count === fileChunks.length) {
        self.postMessage({
          percentage: 100,
          hash: spark.end()
        });
        self.close();
      } else {
        percentage += 100 / fileChunks.length;
        self.postMessage({
          percentage
        });
        loadNext(count);
      }
    };
  };
  loadNext(0);
};
