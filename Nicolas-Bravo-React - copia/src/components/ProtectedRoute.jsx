// // src/components/ProtectedRoute.js
// import React from 'react';
// import { Navigate, useLocation } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext'; // Ajusta la ruta según tu estructura de archivos

// const ProtectedRoute = ({ children }) => {
//     const { isAuthenticated } = useAuth(); // Verifica si el usuario está autenticado
//     const location = useLocation(); // Obtén la ubicación actual para redirigir después de la autenticación

//     if (!isAuthenticated) {
//         // Redirige a la página de inicio de sesión si no está autenticado
//         return <Navigate to="/auth/login" state={{ from: location }} />;
//     }

//     return children; // Renderiza los hijos si está autenticado
// };

// export default ProtectedRoute;
