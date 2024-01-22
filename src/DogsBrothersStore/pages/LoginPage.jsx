export const LoginPage = () => {
    return (
            <div className="container mx-auto my-16">
                <div className="mx-auto max-w-md w-11/12 p-8 bg-gray-900 rounded-3xl shadow-lg">
                <div className="flex justify-center mb-8">
                    <img src="/assets/logos/logo_white.webp" alt="Logo" className="w-30 h-20" />
                </div>
                <h1 className="text-2xl font-semibold text-center text-white mt-8 mb-6">Iniciar sesión</h1>
                <form>
                    <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm text-white">Correo electrónico</label>
                    <input type="email" id="email" name="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" required />
                    </div>
                    <div className="mb-6">
                    <label htmlFor="password" className="block mb-2 text-sm text-white">Contraseña</label>
                    <input type="password" id="password" name="password" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" required />
                    <a href="#" className="block text-right text-xs text-cyan-600 mt-2">¿Olvidaste tu contraseña?</a>
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
