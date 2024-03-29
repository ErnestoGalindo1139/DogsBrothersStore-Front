import { useEffect, useState } from 'react';
import { obtenerProducto } from '../../helpers'
import { TrashIcon } from '@heroicons/react/24/outline';
import { useForm } from '../../hooks/useForm';
import { useNavigate } from 'react-router-dom';
import { Alert } from '@material-tailwind/react';

export const TablaCarritoCompras = () => {

    const navigate = useNavigate();

    const [productoInfo, setProductoInfo] = useState({});
    const [cantidadProducto, setCantidadProducto] = useState(1);
    const {cantidad, onInputChange} = useForm({
        cantidad: ''
    });

    const idProducto = localStorage.getItem('idProducto');
    console.log(idProducto);

    const obtenerProductoInfo = async () => {
        if(!!idProducto == false) return;
        const productoInfo = await obtenerProducto(idProducto);
        setProductoInfo(productoInfo);
    }

    const { id_producto, nombre_producto, precio_producto, url_producto, descripcion_producto, cantidad_producto } = productoInfo;

    const decrementarCantidad = () => {
        if(cantidadProducto == 1) return;
        setCantidadProducto(cantidadProducto - 1);
    }
    
    const aumentarCantidad = () => {
        if(cantidadProducto == cantidad_producto) return;
        // console.log(cantidad);
        setCantidadProducto(cantidadProducto + 1);
    }

    const onDeleteProducto = () => {
        const borrar = document.querySelector('.borrarProducto');
        borrar.parentElement.parentElement.remove();
        localStorage.removeItem('idProducto');
    }

    useEffect(() => {
        obtenerProductoInfo();
    }, [])

    return (
        <>
            <Alert color="red" className={`${!!idProducto == true ? 'hidden' : '' }`}>No existe ningun articulo en el carrito</Alert>
            <table className={`w-full ${!!idProducto == false ? 'hidden' : '' }`}>
                <thead className="bg-gray-200">
                    <tr>
                        <th className="w-2/12 border border-gray-400 py-3">Imagen</th>
                        <th className="w-4/12 border border-gray-400">Descripción</th>
                        <th className="w-1/12 border border-gray-400">Cantidad</th>
                        <th className="w-2/12 border border-gray-400">Precio Unitario</th>
                        <th className="w-2/12 border border-gray-400">Precio Total</th>
                        <th className="w-1/12 border border-gray-400">Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-gray-400"><img src={url_producto} /></td>
                        <td className="text-justify border border-gray-400 px-4">{nombre_producto} / {descripcion_producto}</td>
                        <td className="text-center border border-gray-400">
                            <div className="flex items-center justify-center mx-auto">
                                <button type="button" className="h-8 w-6 border border-gray-400 text-2xl" onClick={decrementarCantidad}>
                                    −
                                </button>
                                <input type="number" className="w-10 h-8 border border-gray-400 text-center" value={cantidadProducto} onChange={onInputChange}/>
                                <button className="h-8 w-6 text-2xl border border-gray-400" onClick={aumentarCantidad}>
                                    +
                                </button>
                            </div>
                        </td>
                        <td className="text-center border border-gray-400 text-blue-600 font-bold text-2xl">${precio_producto}</td>
                        <td className="text-center border border-gray-400 text-blue-600 font-bold text-2xl">${precio_producto}</td>
                        <td className="border border-gray-400">
                            <TrashIcon className="w-8 mx-auto text-red-600 cursor-pointer borrarProducto" id={id_producto} onClick={onDeleteProducto} />
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}
