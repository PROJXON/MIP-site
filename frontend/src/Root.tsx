import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import App from './components/App/App';
import { GA_MEASUREMENT_ID, initGA } from './lib/ga';

export default function Root() {
  const location = useLocation();

  useEffect(() => {
    initGA();
    if (typeof window.gtag === 'function' && GA_MEASUREMENT_ID) {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: location.pathname,
      });
    }
  }, [location.pathname]);

  return <App />;
}


