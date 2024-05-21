import { ColumnsType } from 'antd/es/table';

const fileSourceMap = {
  0: '本地上传',
  1: '云端下载'
};

const statusMap = {
  0: '文件就绪',
  1: '安装中',
  2: '安装完成'
};

export const columns: ColumnsType<any> = [
  {
    title: '编号',
    // width: 50,
    dataIndex: 'id',
    fixed: 'left'
  },
  {
    title: '文件名称',
    dataIndex: 'file_name'
  },
  {
    title: '文件来源',
    dataIndex: 'file_source',
    render: (file_source) => fileSourceMap[file_source]
  },
  {
    title: '版本',
    dataIndex: 'version',
    render: (version) => version || '--'
  },
  { title: '产品', dataIndex: 'product', render: (product) => product || '--' },
  { title: '状态', dataIndex: 'status', render: (data) => statusMap[data] },
  {
    title: '开始安装时间',
    dataIndex: 'upgrade_start_str'
  },
  {
    title: '安装完成时间',
    dataIndex: 'upgrade_finish_str'
  },
  {
    title: '更新说明',
    dataIndex: 'release_note',
    render: (data) => {
      return (
        <div
          style={{
            width: '500px',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}
        >
          {data || '--'}
        </div>
      );
    }
  }
];
