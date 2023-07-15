import { useEffect } from 'react';

import { useRouter } from 'next/router';

export const useOnRouteChange = (callback: () => void) => {
  const router = useRouter();

  useEffect(() => {
    // Close drawer on route change if it's open
    const handleRouteChange = () => {
      if (callback && typeof callback === 'function') {
        callback();
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [callback, router.events]);
};
