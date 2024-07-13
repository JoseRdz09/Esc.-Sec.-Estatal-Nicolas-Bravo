import React, { useEffect } from 'react';
import Cards from '../components/Cards';
import Footer from '../components/Footer';

export default function Alumnos() {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Cards />
      <Footer />
    </div>
  );
}

 