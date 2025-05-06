'use client';

import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode, useState } from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Toaster, toast } from 'sonner';

export default function QueryProviders({ children }: { children: ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        queryCache:new QueryCache({
          onError:(error)=>{
            toast.error(error.message+" server not found")
          }
        }),
        defaultOptions: {
          queries: {
            staleTime: Infinity, // Data will never be considered stale
            refetchOnMount: false, // Don't refetch on mount
            refetchOnWindowFocus: false, // Don't refetch on window focus
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster position="top-center" />
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
