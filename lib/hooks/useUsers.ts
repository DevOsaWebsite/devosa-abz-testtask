import useSWR from 'swr';
import { getUsers } from '../users';



export const useUsers = (page: number = 1) => {
  const { data, error, isLoading } = useSWR(`${page}`, getUsers);

  return {
    data,
    error,
    isLoading,
  };
};
