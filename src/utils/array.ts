export const getFlatList = (list) => {
  if (!list) return [];
  return list.flatMap((item) => [item, ...(item.children ? getFlatList(item.children) : [])]);
};
