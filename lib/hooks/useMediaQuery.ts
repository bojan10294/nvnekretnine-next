import { useEffect, useState } from 'react';

type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

const availableBreakpoints = {
  '2xl': 1536,
  lg: 1024,
  md: 768,
  sm: 640,
  xl: 1280
};

// /**
//  * sm: 640,
//  * md: 768,
//  * lg: 1024,
//  * xl: 1280,
//  * 2xl: 1536
//  */

const getMatches = (query: string): boolean => {
  if (typeof window !== 'undefined') {
    return window.matchMedia(query).matches;
  }
  return false;
};

const useMediaQuery = (
  breakpoint: Breakpoint,
  minMax: 'up' | 'down'
): boolean => {
  const bp =
    minMax === 'down'
      ? availableBreakpoints[breakpoint] - 1
      : availableBreakpoints[breakpoint];

  const query = `(${minMax === 'up' ? 'min' : 'max'}-width: ${bp}px)`;

  const [matches, setMatches] = useState<boolean>(false);

  const handleChange = () => setMatches(getMatches(query));

  useEffect(() => {
    const matchMedia = window.matchMedia(query);

    handleChange();

    matchMedia.addEventListener('change', handleChange);

    return () => matchMedia.removeEventListener('change', handleChange);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return matches;
};

export default useMediaQuery;
