import { NavLink } from "react-router-dom";
import { useHomePage } from "../hooks";

export const HomePageAdmin = () => {

    const { onEliminarProducto, productos } = useHomePage();

    return (
        // <!-- component -->
        <div className=" w-full overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
        <table className="w-full border-collapse bg-white text-center text-sm text-black">
            <thead className="bg-gray-50 font-bold text-lg">
            <tr>
                <th scope="col" className="px-6 py-4 ">Nombre del Producto</th>
                <th scope="col" className="px-6 py-4 ">Descripción</th>
                <th scope="col" className="px-6 py-4 ">Precio</th>
                <th scope="col" className="px-6 py-4 ">Cantidad</th>
                <th scope="col" className="px-6 py-4 ">Imagen</th>
                <th scope="col" className="px-6 py-4 ">Categoría</th>
                <th scope="col" className="px-6 py-4 ">Acciones</th>
            </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 border-t border-gray-100 text-lg">
                {
                    productos.map( producto => {
                        const { id_producto, nombre_producto, descripcion_producto, precio_producto, cantidad_producto, url_producto, id_categoria } = producto;

                        return (
                            <tr key={ id_producto } className="hover:bg-gray-50">
                                
                                <td className="px-6 py-4">{ nombre_producto }</td>
                                <td className="px-6 py-4">{ descripcion_producto }</td>
                                <td className="px-6 py-4">{ precio_producto }</td>
                                <td className="px-6 py-4">{ cantidad_producto }</td>
                                <td className="px-6 py-4 flex items-center justify-center"> <img className="w-24 h-24" src={`${url_producto}`} alt={nombre_producto} />  </td>
                                <td className="px-6 py-4">{ id_categoria }</td>
                                <td className="px-6 py-4">
                                <NavLink to={`editar-producto/${id_producto}`} className="text-teal-600 hover:text-teal-900 mr-5">
                                    Editar
                                </NavLink>
                                <NavLink to="/admin" className="text-red-600 hover:text-red-900 eliminar" onClick={ (e) => onEliminarProducto(e, id_producto) } >
                                    Eliminar
                                </NavLink>

                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        </div>
    )
}
