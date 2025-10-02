import { useState, useEffect } from 'react';

export default function useWPFetch<T>(route: string): [T[], boolean] {
  const [blogs, setBlogs] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const API_BASE_URL =
    typeof window !== 'undefined' && window.location.hostname === 'localhost'
      ? 'http://localhost:5050'
      : 'https://api.momentuminternshipprogram.com';

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/${route}`);
        if (!response.ok) {throw new Error(`Error: ${response.statusText}`);}
        const data = await response.json();
        setBlogs(data);
      } catch (err) {
        console.error(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    })();
  }, [API_BASE_URL, route]);

  return [blogs, loading];
}
