export const getKey = (pageIndex: number, previousPageData: any) => {
  if (previousPageData && !previousPageData.data) return '1';
  if (pageIndex === 0) return `1`;
  return `/users?cursor=${previousPageData.nextCursor}&limit=10`;
};
