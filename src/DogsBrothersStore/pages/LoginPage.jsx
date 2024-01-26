import { EyeIcon, EyeSlashIcon, UserIcon } from "@heroicons/react/24/solid"
import { Input } from "@material-tailwind/react"
import { useState } from "react"

export const LoginPage = () => {

    const [showPassword, setShowPassword] = useState(false)
    const [errorEmail, setErrorEmail] = useState(false)
    const [errorPassword, setErrorPassword] = useState(false)

    const validarEmail = (e) => {
        const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        const resultado = regex.test(e.target.value); // true -> Cumple la expresion regular
        setErrorEmail(!resultado); //
    };

    return (
            <div className="container mx-auto my-16">
                <div className="mx-auto max-w-md w-11/12 p-8 bg-gray-900 rounded-3xl shadow-lg">
                    <div className="flex justify-center mb-8">
                        <img src="/assets/logos/logo_white.webp" alt="Logo" className="w-30 h-20" />
                    </div>
                    <h1 className="text-2xl font-semibold text-center text-white mt-8 mb-6">Iniciar sesión</h1>
                    <form>
                        
                        <div className="mb-6">
                            <Input
                                className={ errorEmail ? "text-red-400" : "text-white" }
                                color="white"
                                label="Correo Electrónico" 
                                error = { errorEmail }
                                onBlur={validarEmail}
                                onFocus={ () => setErrorEmail(false) }  // Agregado el manejo del evento onFocus
                                // style={{ borderColor: errorEmail ? 'red' : 'white' }}
                            />
                            {/* {errorEmail && <p style={{ color: 'red' }}>Correo electrónico inválido</p>} */}
                        </div>

                        <div className="mb-6">
                            <Input 
                                type={ showPassword ? "text" : "password" }
                                color="white"
                                label="Contraseña" 
                                error = { errorPassword }
                                icon={ 
                                    showPassword 
                                    ? <EyeIcon onClick={() => setShowPassword(!showPassword)} color="white"/> 
                                    : <EyeSlashIcon onClick={() => setShowPassword(!showPassword)} color="white"/>
                                } 
                            />
                        </div>

                        

                        <button type="submit" className="w-32 bg-gradient-to-r from-cyan-400 to-cyan-600 text-white py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mt-4 mb-6">Acceso</button>
                    </form>

                    <div className="text-center">
                        <p className="text-sm text-white">¿No tienes una cuenta? <a href="#" className="text-cyan-600">Regístrate ahora</a></p>
                    </div>

                    <p className="text-xs text-white text-center mt-10">&copy; 2024 Dogs Brothers Store</p>
                </div>
            </div>
    )
}
