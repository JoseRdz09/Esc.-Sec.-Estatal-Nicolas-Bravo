import { Outlet } from 'react-router-dom';
import  Banner from '../components/Banner';
import InfoSection from '../components/InfoSection';
import EventCarousel from '../components/EventCarousel';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className='relative w-full flex flex-col items-center'>
      {/* Hero Section */}
      <Banner />

      <Outlet />

      {/* Info Sections */}
      <div className="w-full flex flex-col items-center">
        <InfoSection
          imageUrl="../img/home2.png"
          title="QUIENES SOMOS"
          text="Bienvenidos a la Secundaria Nicolás Bravo, una institución educativa comprometida con la excelencia académica y el desarrollo integral de nuestros estudiantes. Desde nuestra fundación, nos hemos dedicado a proporcionar una educación de alta calidad que prepara a los jóvenes para los desafíos del futuro. Nuestro enfoque se centra en fomentar un ambiente de aprendizaje inclusivo y estimulante, donde cada estudiante puede alcanzar su máximo potencial."
          imageLeft={true}
        />
        <InfoSection
          imageUrl="../img/home2.png"
          title="INSCRIBETE"
          text="¿Buscas una educación de calidad para tu hijo? ¡La Secundaria Nicolás Bravo es tu mejor opción! Te invitamos a formar parte de nuestra comunidad educativa, donde nos comprometemos a proporcionar una experiencia de aprendizaje enriquecedora y significativa. Nuestra institución ofrece una amplia variedad de programas académicos, actividades extracurriculares y recursos que aseguran el desarrollo integral de cada estudiante."
          imageLeft={false}
        />
        {/* Add more sections as needed */}
      </div>

      {/* Event Carousel */}
      <EventCarousel />
      <Footer />
    </main>
  );
}
