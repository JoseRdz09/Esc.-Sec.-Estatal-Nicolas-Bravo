import React, { useState, useRef } from 'react';
import api from '../api/api'; // Asegúrate de que la ruta sea correcta
import { Link } from 'react-router-dom';
import Alerta from '../components/Alerta';


const Register = () => {
    const [errores, setErrores] = useState([]);
    const [successMessage, setSuccessMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const passwordConfirmationRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsSubmitting(true);
        setErrores([]);
        setSuccessMessage('');

        const formData = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            password_confirmation: passwordConfirmationRef.current.value,
        };

        try {
            const response = await api.post('/register', formData);
            localStorage.setItem('token', response.data.token);
            setSuccessMessage('Registered successfully');
            // Redirige al usuario o realiza otra acción aquí
        } catch (error) {
            if (error.response && error.response.data) {
                setErrores(Object.values(error.response.data.errors || {}));
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <h1 className="text-4xl font-black">Crea tu Cuenta</h1>
            <p>Crea tu Cuenta llenando el formulario</p>

            <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
                <form onSubmit={handleSubmit} noValidate>
                    {successMessage && <Alerta>{successMessage}</Alerta>}
                    {errores.length > 0 && errores.map((error, i) => <Alerta key={i}>{error}</Alerta>)}

                    <div className="mb-4">
                        <label className="text-slate-800" htmlFor="name">Nombre:</label>
                        <input
                            type="text"
                            id="name"
                            className="mt-2 w-full p-3 bg-gray-50"
                            name="name"
                            placeholder="Tu Nombre"
                            ref={nameRef}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="text-slate-800" htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            className="mt-2 w-full p-3 bg-gray-50"
                            name="email"
                            placeholder="Tu email"
                            ref={emailRef}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="text-slate-800" htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            className="mt-2 w-full p-3 bg-gray-50"
                            name="password"
                            placeholder="Tu Password"
                            ref={passwordRef}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="text-slate-800" htmlFor="password_confirmation">Repetir Password:</label>
                        <input
                            type="password"
                            id="password_confirmation"
                            className="mt-2 w-full p-3 bg-gray-50"
                            name="password_confirmation"
                            placeholder="Repetir Password"
                            ref={passwordConfirmationRef}
                        />
                    </div>

                    <input
                        type="submit"
                        value="Crear Cuenta"
                        className={`bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={isSubmitting}
                    />
                </form>
            </div>

            <nav className="mt-5">
                <Link to="/auth/login">
                    ¿Ya tienes cuenta? Inicia Sesión
                </Link>
            </nav>
        </>
    );
};

export default Register;
