// ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth'; // Ajusta la ruta según la ubicación de tu hook

const ProtectedRoute = ({ children }) => {
    const { user, isAdmin, error, loading } = useAuth();

    if (loading) {
        return <div>Loading...</div>; // Puedes usar un spinner o mensaje de carga
    }

    if (error || !user) {
        // Manejar errores y redirigir si el usuario no está logueado o hay un error
        return <Navigate to="/auth/login" />;
    }

    if (!isAdmin()) {
        // Usuario no tiene permiso de administrador
        return <Navigate to="/unauthorized" />;
    }

    // Usuario autenticado y con permisos adecuados
    return children;
};

export default ProtectedRoute;
