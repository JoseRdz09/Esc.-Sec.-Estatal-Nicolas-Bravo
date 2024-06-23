import { createRef, useState } from 'react'
import usericon from '../assets/icons/usericon.svg';
import lock from '../assets/icons/lock.svg';



export default function Login() {
    
    const emailRef = createRef();
    const passwordRef = createRef();

    // const [errores, setErrores] = useState([])
    // const { login } = useAuth({
    //     middleware: 'guest',
    //     url: '/'
    // })

    // const handleSubmit = async e => {
    //     e.preventDefault();

    //     const datos = {
    //         email: emailRef.current.value,
    //         password: passwordRef.current.value,
    //     }
    //     login(datos, setErrores)
    // }


    return (
        <>
            <h1 className="text-4xl font-black">Iniciar Sesión</h1>
            <p>Para crear un pedido debes iniciar sesión</p>

            <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
                <form
                    // onSubmit={handleSubmit}
                    // noValidate
                >

                    {/* {errores ? errores.map((error, i) => <Alerta key={i}>{error}</Alerta>)  : null } */}

                    <div className="mb-4">
                        <label
                            className="text-slate-800"
                            htmlFor="email"
                        >Email:</label>
                        <div className="flex items-center mt-2">
                            <img src={usericon} alt="User Icon" className="mr-2" />
                            <input 
                                type="email"
                                id="email"
                                className="w-full p-3 rounded-2xl bg-gray-50"
                                name="email"
                                placeholder="Tu Email"
                                ref={emailRef}
                            />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label
                            className="text-slate-800"
                            htmlFor="password"
                        >Password:</label>
                        <div className='flex items-center mt-2'>
                            <img src={lock} alt="User Icon" className="mr-2" />
                            <input 
                                type="password" 
                                id="password"
                                className="mt-2 w-full p-3 rounded-2xl bg-gray-50"
                                name="password"
                                placeholder="Tu Password"
                                ref={passwordRef}
                            />
                        </div>
                    </div>

        
                    <input
                        type="submit"
                        value="Iniciar Sesión"
                        className="bg-picton-blue-400 hover:bg-indigo-800 text-white w-full rounded-2xl mt-5 p-3 uppercase font-bold cursor-pointer"
                    />
                </form>
            </div>
        </>
    )
}
