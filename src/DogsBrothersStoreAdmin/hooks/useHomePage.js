import { useEffect, useState } from "react";
import { eliminarProducto, obtenerProductos } from "../../helpers";

export const useHomePage = () => {
    const [productos, setProductos] = useState([]);

    const getProducts = async () => {
        const productos = await obtenerProductos();
        setProductos(productos);
    };
    
    const onEliminarProducto = async (id) => {
        const productoEliminado = await eliminarProducto(id);
        getProducts();
    };

    useEffect(() => {
        getProducts();
    }, []);

    return {
        productos,
        getProducts,
        onEliminarProducto
    };
};
