import { useNavigate, useParams } from "react-router-dom";
import { obtenerProducto } from "../../helpers";
import { useEffect, useState } from "react";
import { Typography } from "@material-tailwind/react";

export const ProductoInfoPage = () => {

    const [productoInfo, setProductoInfo] = useState({})

    const {id} = useParams();
    const navigate = useNavigate();
    
    const obtenerProductoInfo = async () => {
        const productoInfo = await obtenerProducto(id);
        setProductoInfo(productoInfo);
    }

    useEffect(() => {
        obtenerProductoInfo();

    }, [])

    const { nombre_producto, precio_producto, url_producto, descripcion_producto, cantidad_producto} = productoInfo;
    console.log(productoInfo);

    return (
        <>
            <div className="flex mx-auto w-3/4 gap-10 my-28">
                <img src={url_producto} alt="nombre_producto" className="imagenProductoPage border border-gray-400" />
                <div className="flex flex-col justify-center">
                    <Typography variant="h5">{nombre_producto} / {descripcion_producto}</Typography>
                    <p className="mt-2 font-bold text-gray-600">DISPONIBLES: <span className="text-green-600 font-bold ml-1">{cantidad_producto}</span></p>
                    <p className="mt-6">{descripcion_producto}</p>
                    <p className="border-t-2 mt-8 py-4 text-blue-800 font-bold text-4xl">${precio_producto}</p>

                    <div className="flex items-center border-y-2">
                        <p className="mt-2 font-bold text-gray-600 py-6">CANTIDAD:</p>
                        <button type="button" className="ml-4 h-8 w-14 border border-gray-400 text-2xl">
                            −
                        </button>
                        <input type="number" className="w-14 h-8 border border-gray-400 text-center" value={1} />
                        <button className="h-8 w-14 text-2xl border border-gray-400">
                            +
                        </button>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold p-2 rounded-md ml-8">
                            Agregar al carrito
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
