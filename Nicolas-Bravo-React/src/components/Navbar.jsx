import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-picton-blue-400 p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logotipo a la izquierda */}
        <div className="text-white text-xl flex-shrink-0">
          Esc. Sec. Estatal<br />Nicolas Bravo
        </div>
        
        {/* Enlaces de navegación en el medio */}
        <ul className="flex space-x-4 mx-auto">
          <li>
            <Link to="#inicio" className="text-white hover:text-gray-200">
              Inicio
            </Link>
          </li>
          <li>
            <Link to="#acerca" className="text-white hover:text-gray-200">
              Acerca
            </Link>
          </li>
          <li>
            <Link to="#inscripciones" className="text-white hover:text-gray-200">
              Inscripciones
            </Link>
          </li>
          <li>
            <Link to="#contactanos" className="text-white hover:text-gray-200">
              Contáctanos
            </Link>
          </li>
        </ul>
        
        {/* Botón de "Iniciar sesión" a la derecha */}
        <div>
          <Link to="/auth/login" className="text-white hover:text-gray-200">
            Iniciar sesión
          </Link>
        </div>
      </div>
    </nav>
  );
}
