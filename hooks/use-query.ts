"use client";

import { useEffect, useState } from "react";

interface UseQueryResult<T> {
  data: T | null;
  error: string | null;
  isLoading: boolean;
}

interface UseQueryOptions {
  enabled?: boolean;
}

export function useQuery<T>(
  queryFn: () => Promise<T>,
  deps: unknown[],
  { enabled = true }: UseQueryOptions = {}
): UseQueryResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(enabled);

  useEffect(() => {
    if (!enabled) {
      setData(null);
      setError(null);
      setIsLoading(false);
      return;
    }

    let cancelled = false;
    setData(null);
    setError(null);
    setIsLoading(true);

    queryFn()
      .then((result) => {
        if (!cancelled) {
          setData(result);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "Something went wrong");
          setIsLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enabled, ...deps]);

  return { data, error, isLoading };
}
