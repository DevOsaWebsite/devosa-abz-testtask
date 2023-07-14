'use client';
import { SWRConfig, preload } from 'swr';
interface SWRConfigProviderProps {
  children: React.ReactNode;
  users: unknown;
}
export const fetcher = (resource: RequestInfo | URL, init?: RequestInit) =>
  fetch(resource, init).then(res => res.json());

export const preloadUsers = (page: number) => preload(`/api/users?page=${page}`, fetcher);
export const SWRProvider = ({ children, users }: SWRConfigProviderProps) => {
  return (
    <SWRConfig
      value={{
        refreshInterval: 10000,
        revalidateOnReconnect: true,
        shouldRetryOnError: true,
        fetcher,
        fallback: {
          '/api/users?page=1': users,
        },
      }}
    >
      {children}
    </SWRConfig>
  );
};
