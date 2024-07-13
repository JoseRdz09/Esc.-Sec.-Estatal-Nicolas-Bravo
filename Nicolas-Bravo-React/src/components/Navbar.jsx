import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { useState } from 'react';
import { ReactSVG } from 'react-svg';
import ArrowIcon from '../assets/icons/dropdown.svg';

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  return (
    <nav className="bg-persian-blue-950 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logotipo a la izquierda */}
        <div className="text-white text-xl flex-shrink-0">
          <Link to="/" className="block">
            <img src="../img/Logo.png" alt="Logo" className="w-16 h-16" />
          </Link>
        </div>
        
        {/* Enlaces de navegación en el medio */}
        <ul className="flex space-x-4 mx-auto">
          <li>
            <Link to="/" className="text-white hover:text-gray-200">
              INICIO
            </Link>
          </li>
          <li
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              to="../home/alumnos"
              className="text-white hover:text-gray-200 focus:outline-none flex items-center"
            >
              ALUMNOS
              <ReactSVG
                src={ArrowIcon}
                className={`w-5 h-5 ml-2 transition-transform duration-200 ${
                  dropdownOpen ? 'rotate-180' : 'rotate-0'
                }`}
              />
            </Link>
            {dropdownOpen && (
              <ul className="absolute left-0 bg-white text-black rounded-lg shadow-lg w-48 z-10">
                <li className="rounded-lg hover:bg-gray-200">
                  <Link to="../home/alumnos/inscripcion" className="block px-4 py-2 rounded-lg">
                    Inscripción
                  </Link>
                </li>
                <li className="rounded-lg hover:bg-gray-200">
                  <Link to="../home/alumnos/reinscripcion" className="block px-4 py-2 rounded-lg">
                    Reinscripción
                  </Link>
                </li>
                <li className="rounded-lg hover:bg-gray-200">
                  <Link to="../home/alumnos/calendario" className="block px-4 py-2 rounded-lg">
                    Calendario
                  </Link>
                </li>
                <li className="rounded-lg hover:bg-gray-200">
                  <Link to="../home/alumnos/lista-aceptados" className="block px-4 py-2 rounded-lg">
                    Lista de Aceptados
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <ScrollLink
              to="contactanos"
              smooth={true}
              duration={500}
              className="text-white hover:text-gray-200 cursor-pointer"
            >
              CONTACTANOS
            </ScrollLink>
          </li>
        </ul>
        
        {/* Botón de "Iniciar sesión" a la derecha */}
        <div>
          <Link to="/auth/login" className="text-white hover:text-gray-200">
            INICIAR SESION
          </Link>
        </div>
      </div>
    </nav>
  );
}
