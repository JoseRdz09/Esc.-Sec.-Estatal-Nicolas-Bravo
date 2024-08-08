import { Outlet } from 'react-router-dom';
import Banner from '../components/Banner';
import InfoSection from '../components/InfoSection';
import EventCarousel from '../components/EventCarousel';
import Footer from '../components/Footer';
import Comunicados from '../components/Comunicados'; // Importa el componente
import Location from '../components/Location';
import TalleresSection from '../components/Talleresection';
import ActividadesSection from '../components/Actividadessection';

export default function Home() {
  const announcements = [
    {
      title: "Título del Comunicado 1",
      date: "Fecha del Comunicado 1",
      content: "Contenido del Comunicado 1",
      logo: "/img/megafono2.png"
    },
    {
      title: "Título del Comunicado 2",
      date: "Fecha del Comunicado 2",
      content: "Contenido del Comunicado 2",
      logo: "/img/task.png"
    },
    {
      title: "Título del Comunicado 1",
      date: "Fecha del Comunicado 1",
      content: "Contenido del Comunicado 1",
      logo: "/img/megafono2.png"
    },
    {
      title: "Título del Comunicado 2",
      date: "Fecha del Comunicado 2",
      content: "Contenido del Comunicado 2",
      logo: "/img/task.png"
    }
    // Más anuncios...
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
        text={(
          <>
            Respeto: Valoramos y promovemos el respeto hacia uno mismo, hacia los demás y hacia el entorno. Fomentamos la convivencia armoniosa y el reconocimiento de la diversidad. <br/><br/>
            Responsabilidad: Enseñamos a nuestros estudiantes a asumir la responsabilidad de sus acciones y decisiones, tanto en el ámbito académico como en su vida personal. <br/><br/>
            Honestidad: Fomentamos la honestidad y la integridad en todas las interacciones, promoviendo un ambiente de confianza y transparencia. <br/><br/>
            Compromiso: Nos comprometemos con la excelencia educativa y con el desarrollo integral de nuestros estudiantes, incentivando su participación activa en la comunidad escolar. <br/><br/>
            Esfuerzo: Valoramos el esfuerzo y la dedicación como pilares fundamentales para alcanzar el éxito académico y personal. <br/><br/>
            Solidaridad: Promovemos la solidaridad y el trabajo en equipo, enseñando a nuestros estudiantes a apoyarse mutuamente y a contribuir al bienestar común.
          </>
        )}
        imageLeft={false}
      />

        <InfoSection
          imageUrl="../img/img_e5.jpg"
          title="INSCRIBETE"
          text="¿Buscas una educación de calidad para tu hijo? ¡La Secundaria Nicolás Bravo es tu mejor opción! Te invitamos a formar parte de nuestra comunidad educativa, donde nos comprometemos a proporcionar una experiencia de aprendizaje enriquecedora y significativa. Nuestra institución ofrece una amplia variedad de programas académicos, actividades extracurriculares y recursos que aseguran el desarrollo integral de cada estudiante."
          imageLeft={true}
          showButton={true}
        />
        {/* Add more sections as needed */}
      </div>

      {/* Important Announcements Section */}
      <Comunicados announcements={announcements} />

      {/* Event Carousel */}
      <EventCarousel />
      
      <TalleresSection />

      <ActividadesSection />

      <Location />

      <Footer />
    </main>
  );
}
