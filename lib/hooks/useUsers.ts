import useSWR, { useSWRConfig } from 'swr';

export const useUsers = (page: number) => {
  const { fallback } = useSWRConfig();
  console.log(fallback);

  const { data, error, isLoading } = useSWR(`/api/users?page=${page}`);

  return {
    data,
    error,
    isLoading,
  };
};
