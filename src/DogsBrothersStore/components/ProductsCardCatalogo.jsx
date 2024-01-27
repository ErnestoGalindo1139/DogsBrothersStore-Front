import { ShoppingCartIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

export const ProductsCardCatalogo = ({ producto }) => {
    const { id_producto, nombre_producto, precio_producto, url_producto, descripcion_producto } = producto;

    return (
        <li className="w-64 lg:w-full h-[35rem]">
            <div className="">
                <div className="overflow-hidden rounded-md">
                    <img
                        src={url_producto}
                        alt={nombre_producto}
                        className="group-hover:opacity-75 imgCatalogo"
                    />
                </div>
                <div className="mt-6">
                    <h3 className="mt-1 font-semibold text-gray-900 hover:text-blue-600 text-justify">
                        <Link to={`/producto/${id_producto}`}>
                            {`${nombre_producto} / ${descripcion_producto}`}
                        </Link>
                    </h3>
                    <p className="mt-3 text-blue-900 font-bold">${precio_producto}</p>
                </div>
                
                    <p className="mt-2 text-white bg-green-700 pl-2 pr-2 pt-0.5 pb-0.5 w-40 font-bold rounded-md">✔ Con Existencia</p>
                    <button className="text-white font-bold rounded-md mt-2 flex">
                        <ShoppingCartIcon className="text-white w-8 h-9 bg-blue-500 hover:bg-blue-700 p-1.5 rounded-s" /> 
                        <p className="px-2 bg-gray-500 hover:bg-gray-600 my-auto p-1.5 rounded-e">Agregar</p>
                    </button>
                    
            </div>
            
        </li>
    );
};