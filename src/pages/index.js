import { useEffect } from 'react';
import { MainLayout } from '../components/main-layout';
import { gtm } from '../lib/gtm';

const Home = () => {
  useEffect(() => {
    gtm.push({ event: 'page_view' });
    window.location.href = "/authentication/login.html"
  }, []);

  return (
    <>
      <main>
        
      </main>
    </>
  );
};


export default Home;
