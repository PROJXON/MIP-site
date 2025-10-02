import { useEffect, useState } from 'react';

export default function useWPFetchOne<T>(route: string): [T | null, boolean] {
  const [item, setItem] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);

  const API_BASE_URL =
    typeof window !== 'undefined' && window.location.hostname === 'localhost'
      ? 'http://localhost:5050'
      : 'https://api.momentuminternshipprogram.com';

  useEffect(() => {
    let isMounted = true;

    (async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/${route}`);
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        if (isMounted) {
          setItem(data);
        }
      } catch (err) {
        console.error(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    })();

    return () => {
      isMounted = false;
    };
  }, [route, API_BASE_URL]);

  return [item, loading];
}
