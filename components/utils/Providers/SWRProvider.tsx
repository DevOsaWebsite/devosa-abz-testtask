'use client';
import { SWRConfig, unstable_serialize } from 'swr';
interface SWRConfigProviderProps {
  children: React.ReactNode;
  users: unknown;
}

export const SWRProvider = ({ children, users }: SWRConfigProviderProps) => {
  return (
    <SWRConfig
      value={{
        refreshInterval: 10000,
        revalidateOnReconnect: true,
        shouldRetryOnError: true,
        fetcher: (resource, init) => fetch(resource, init).then(res => res.json()),
        fallback: {
          '/api/users?page=1': users,
        },
      }}
    >
      {children}
    </SWRConfig>
  );
};
