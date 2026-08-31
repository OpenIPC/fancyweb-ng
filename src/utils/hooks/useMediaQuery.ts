import { useEffect, useState } from 'preact/hooks';

export function useMediaQuery(query: string): boolean {
  const [ matches, setMatches ] = useState<boolean>(() =>
    window.matchMedia(query).matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches);

    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, [query]);

  return matches;
}
