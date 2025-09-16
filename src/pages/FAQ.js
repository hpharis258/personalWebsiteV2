import Navbar from '../components/NavBar';
import { useEffect } from 'react';
import AppFooter from '../components/AppFooter';

function FAQ() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://studio.pickaxe.co/api/embed/bundle.js';
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  //   <>

  //   </>;

  return (
    <>
      <Navbar />
      <div
        id="deployment-cc68fae4-0ee3-4508-9cd2-1a53b8a36fe6"
        style={{
          width: '100%',
          minHeight: '100vh',
          boxSizing: 'border-box',
          margin: 0,
          padding: 0,
        }}
      ></div>
      <AppFooter />
    </>
  );
}

export default FAQ;
