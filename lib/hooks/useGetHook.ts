import { fetcher } from '@/components/utils/Providers/SWRProvider';
import useSWR from 'swr';

export const useUsers = (page: number) => {
  const { data, error, isLoading } = useSWR(`/api/users?page=${page}`);

  return {
    data,
    error,
    isLoading,
  };
};

export const useGetToken = () => {
  const { data, error, isLoading } = useSWR(`/api/token`, fetcher, {
    refreshInterval: 2400000,
    revalidateIfStale: true,
  });
  return {
    data,
    error,
    isLoading,
  };
};
