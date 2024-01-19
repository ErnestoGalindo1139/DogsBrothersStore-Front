import { datosRating } from "../../data/datosRating";

export const Rating = () => {

    const obtenerClases = (cantidad) => {
        const claseCantidad = cantidad > 8 ? 'clase-cantidad-alta' : 'clase-cantidad-baja';
        const claseColor = cantidad > 8 ? 'bg-green-50 text-green-500' : 'bg-red-50 text-red-500';
        return `${claseCantidad} ${claseColor}`;
    };

    return (
        <div className="mx-auto my-16  w-4/5">
            <section
                className="w-full p-6 rounded-lg shadow-lg shadow-gray-300 bg-white"
            >
                <header className="flex items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 shrink-0 w-6 h-6 text-gray-500"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M4 19l16 0"></path>
                        <path d="M4 15l4 -6l4 2l4 -5l4 4"></path>
                    </svg>
                    <h3 className="font-medium text-lg">Puntuaciones de nuestros Clientes</h3>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-2 shrink-0 w-6 h-6 text-gray-500"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                        <path d="M12 9h.01"></path>
                        <path d="M11 12h1v4h1"></path>
                    </svg>
                </header>

                <section className="py-4 grid md:grid-cols-2 gap-x-6">
                    {
                        datosRating.map( dato => (
                            <div key={dato.id} className="flex items-center py-3">
                                <span
                                    className="w-8 h-8 shrink-0 mr-4 rounded-full bg-brown-50 flex items-center justify-center"
                                >
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        fill="none" 
                                        viewBox="0 0 24 24" 
                                        strokeWidth="1.5" 
                                        stroke="currentColor" 
                                        className="w-6 h-6"
                                    >
                                        <path 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            d={ dato.path } 
                                        />
                                    </svg>
                                </span>
                                <div className="space-y-3 flex-1">
                                    <div className="flex items-center">
                                        <h4 className="font-medium text-sm mr-auto text-gray-700 flex items-center" >
                                            { dato.descripcion }
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="ml-2 shrink-0 w-5 h-5 text-gray-500"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                strokeWidth="2"
                                                stroke="currentColor"
                                                fill="none"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                                                <path d="M12 9h.01"></path>
                                                <path d="M11 12h1v4h1"></path>
                                            </svg>
                                        </h4>
                                        <span className={`px-2 py-1 rounded-lg ${obtenerClases(dato.cantidad)} text-xs`}>
                                            { dato.cantidad } / 10
                                        </span>
                                    </div>

                                    <div className="overflow-hidden bg-blue-50 h-1.5 rounded-full w-full">
                                        <span
                                            className="h-full bg-blue-500 w-full block rounded-full"
                                            style={{width: `${(dato.cantidad / 10) * 100}%`}}
                                        ></span>
                                    </div>
                                </div>
                            </div>
                        ))

                    }
                </section>
            </section>
        </div>
    )
}

