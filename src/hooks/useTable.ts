import { PaginationProps } from 'antd/lib/pagination';
import { useEffect } from 'react';
import { useImmer } from 'use-immer';

interface State {
  dataSource: any[];
  pagination: {
    current: number;
    pageSize: number;
    total: number;
  };
  loading: boolean;
  searchParams: any;
  extraData: any;
}

interface UseMyTable {
  service: (params?: any) => Promise<any>;
  initParams?: any;
}

export const useTable = ({ service, initParams = {} }: UseMyTable) => {
  const [state, setState] = useImmer<State>({
    dataSource: [],
    pagination: {
      current: 1,
      pageSize: 10,
      total: 0
    },
    loading: false,
    searchParams: {},
    extraData: {}
  });

  const getTableList = async (params?: any) => {
    try {
      setState((state) => {
        state.loading = true;
      });
      const data = await service({ ...initParams, ...params });

      setState((state) => {
        const simpleData = 'total' in data;
        const { list, data: _data, total, ...restData } = simpleData ? data : data.data;
        state.loading = false;
        state.dataSource = list || _data;
        state.pagination.total = total;
        state.extraData = restData;
      });
    } catch (error) {
      setState((state) => {
        state.loading = false;
      });
    }
  };
  useEffect(() => {
    onSearch({
      offset: (state.pagination.current - 1) * state.pagination.pageSize,
      limit: state.pagination.pageSize
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const turnPage: PaginationProps['onChange'] = (pageNumber, pageSize) => {
    setState((state) => {
      state.pagination.current = pageNumber;
      state.pagination.pageSize = pageSize;
    });
    getTableList({ ...state.searchParams, offset: (pageNumber - 1) * pageSize, limit: pageSize });
  };

  const pagination: PaginationProps = {
    showQuickJumper: true,
    showSizeChanger: true,
    onChange: turnPage,
    showTotal(total, range) {
      if (range[1] === range[0]) {
        return `第${range[0]}条/总共${total}条`;
      } else {
        return `第${range[0]}-${range[1]}条/总共${total}条`;
      }
    },
    ...state.pagination
  };

  const onSearch = (params: any) => {
    setState((state) => {
      state.pagination.current = 1;
      state.searchParams = params;
    });
    getTableList({ ...params, offset: 0, limit: state.pagination.pageSize });
  };

  const refresh = () => {
    getTableList({
      offset: (state.pagination.current - 1) * state.pagination.pageSize,
      limit: state.pagination.pageSize,
      ...state.searchParams
    });
  };
  return { ...state, pagination, onSearch, refresh, total: state.pagination.total };
};
