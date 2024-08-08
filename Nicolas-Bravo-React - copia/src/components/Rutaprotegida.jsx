import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Ajusta la ruta según tu estructura de archivos

const ProtectedRoute = ({ element, ...rest }) => {
    const { isAuthenticated } = useAuth(); // Verifica si el usuario está autenticado

    return (
        <Route
            {...rest}
            element={isAuthenticated ? element : <Navigate to="/login" />}
        />
    );
};

export default ProtectedRoute;
