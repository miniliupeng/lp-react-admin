import useSWRMutation from 'swr/mutation';

export const useOperation = ({ queryKey, add: _add, update: _update, delete: _delete }) => {
  const { trigger: add } = useSWRMutation(queryKey, (_, { arg }) => _add(arg));
  const { trigger: update } = useSWRMutation(queryKey, (_, { arg }) => _update(arg));
  const { trigger: del } = useSWRMutation(queryKey, (_, { arg }) => _delete(arg));
  return {
    add,
    update,
    del
  };
};
