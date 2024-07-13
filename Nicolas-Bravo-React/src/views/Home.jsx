import { Outlet } from 'react-router-dom';
import Banner from '../components/Banner';
import InfoSection from '../components/InfoSection';
import EventCarousel from '../components/EventCarousel';
import Footer from '../components/Footer';
import Comunicados from '../components/Comunicados'; // Importa el componente
import Location from '../components/Location';

export default function Home() {
  const announcements = [
    {
      title: 'Aviso de Mantenimiento',
      date: '9 de julio de 2024',
      content: 'El día 10 de julio de 2024 se realizarán trabajos de mantenimiento en las instalaciones de la escuela. Por favor, tomen sus precauciones.',
    },
    {
      title: 'Entrega de Boletas',
      date: '5 de julio de 2024',
      content: 'La entrega de boletas será el día 15 de julio de 2024 en el auditorio principal.',
    },
    {
      title: 'Entrega de Boletas',
      date: '5 de julio de 2024',
      content: 'La entrega de boletas será el día 15 de julio de 2024 en el auditorio principal.',
    }
    // Agrega más comunicados aquí
  ];

  return (
    <main className='relative w-full flex flex-col items-center'>
      {/* Hero Section */}
      <Banner />

      <Outlet />

      {/* Info Sections */}
      <div className="w-full flex flex-col items-center">
        <InfoSection
          imageUrl="../img/img_e4.jpg"
          title="QUIENES SOMOS"
          text="Bienvenidos a la Secundaria Nicolás Bravo, una institución educativa comprometida con la excelencia académica y el desarrollo integral de nuestros estudiantes. Desde nuestra fundación, nos hemos dedicado a proporcionar una educación de alta calidad que prepara a los jóvenes para los desafíos del futuro. Nuestro enfoque se centra en fomentar un ambiente de aprendizaje inclusivo y estimulante, donde cada estudiante puede alcanzar su máximo potencial."
          imageLeft={true}
        />
        <InfoSection
          imageUrl="../img/imgp.png"
          title="NUESTROS VALORES!"
          text="¿Buscas una educación de calidad para tu hijo? ¡La Secundaria Nicolás Bravo es tu mejor opción! Te invitamos a formar parte de nuestra comunidad educativa, donde nos comprometemos a proporcionar una experiencia de aprendizaje enriquecedora y significativa. Nuestra institución ofrece una amplia variedad de programas académicos, actividades extracurriculares y recursos que aseguran el desarrollo integral de cada estudiante."
          imageLeft={false}
          showButton={true} // Aquí se muestra el botón
        />
        <InfoSection
          imageUrl="../img/img_e5.jpg"
          title="INSCRIBETE"
          text="¿Buscas una educación de calidad para tu hijo? ¡La Secundaria Nicolás Bravo es tu mejor opción! Te invitamos a formar parte de nuestra comunidad educativa, donde nos comprometemos a proporcionar una experiencia de aprendizaje enriquecedora y significativa. Nuestra institución ofrece una amplia variedad de programas académicos, actividades extracurriculares y recursos que aseguran el desarrollo integral de cada estudiante."
          imageLeft={true}
        />
        {/* Add more sections as needed */}
      </div>

      {/* Important Announcements Section */}
      <Comunicados announcements={announcements} />

      {/* Event Carousel */}
      <EventCarousel />
      
      <Location />

      <Footer />
    </main>
  );
}
