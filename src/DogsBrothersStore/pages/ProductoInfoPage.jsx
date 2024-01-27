import { useNavigate, useParams } from "react-router-dom";
import { obtenerProducto } from "../../helpers";
import { useEffect, useState } from "react";
import { Typography } from "@material-tailwind/react";
import { useForm } from "../../hooks/useForm";

export const ProductoInfoPage = () => {

    const [productoInfo, setProductoInfo] = useState({});
    const [cantidadProducto, setCantidadProducto] = useState(1);
    const {cantidad, onInputChange} = useForm({
        cantidad: ''
    });

    const {id} = useParams();
    const navigate = useNavigate();
    
    const obtenerProductoInfo = async () => {
        const productoInfo = await obtenerProducto(id);
        setProductoInfo(productoInfo);
    }

    const { nombre_producto, precio_producto, url_producto, descripcion_producto, cantidad_producto} = productoInfo;
    // console.log(productoInfo);

    const decrementarCantidad = () => {
        if(cantidadProducto == 1) return;
        setCantidadProducto(cantidadProducto - 1);
    }
    
    const aumentarCantidad = () => {
        if(cantidadProducto == cantidad_producto) return;
        console.log(cantidad);
        setCantidadProducto(cantidadProducto + 1);
    }

    const onAgregrarAlCarrito = () => {
        localStorage.setItem('idProducto', id);
    }

    useEffect(() => {
        obtenerProductoInfo();

    }, [])


    return (
        <>
            <div className="flex flex-col xl:flex-row mx-auto w-3/4 gap-10 my-28 lg:items-center">
                <img src={url_producto} alt="nombre_producto" className="imagenProductoPage border border-gray-400 sm:h-auto mx-auto xl-mx-0"/>
                <div className="flex flex-col justify-center">
                    <Typography variant="h5">{nombre_producto} / {descripcion_producto}</Typography>
                    <p className="mt-2 font-bold text-gray-600">DISPONIBLES: <span className="text-green-600 font-bold ml-1">{cantidad_producto}</span></p>
                    <p className="mt-6">{descripcion_producto}</p>
                    <p className="border-t-2 mt-8 py-4 text-blue-800 font-bold text-4xl">${precio_producto}</p>

                    <div className="flex flex-col md:flex-row border-y-2">
                        <div className="flex items-center">
                            <p className="mt-2 font-bold text-gray-600 py-6">CANTIDAD:</p>
                            <button type="button" className="ml-4 h-8 w-14 border border-gray-400 text-2xl" onClick={decrementarCantidad}>
                                −
                            </button>
                            <input type="number" className="w-14 h-8 border border-gray-400 text-center" value={cantidadProducto} onChange={onInputChange}/>
                            <button className="h-8 w-14 text-2xl border border-gray-400" onClick={aumentarCantidad}>
                                +
                            </button>
                        </div>
                        
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold p-2 px-20 md:px-2 rounded-md md:ml-8 md:my-4  mx-auto md:mx-0 mb-6" onClick={onAgregrarAlCarrito}>
                            Agregar al carrito
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
