import { useEffect, useState } from "react";
import { eliminarProducto, obtenerProductos, obtenerProductosActivos, obtenerProductosInactivos } from "../../helpers";

export const useHomePage = () => {
    const [productos, setProductos] = useState([]);

    const getAllProducts = async () => {
        const productos = await obtenerProductos();
        setProductos(productos);
    };

    const getActiveProducts = async () => {
        const productos = await obtenerProductosActivos();
        setProductos(productos);
    };

    const getInactiveProducts = async () => {
        const productos = await obtenerProductosInactivos();
        setProductos(productos);
    };
    
    const onEliminarProducto = async (id) => {
        const productoEliminado = await eliminarProducto(id);
        getAllProducts();
    };

    useEffect(() => {
        getAllProducts();
    }, []);

    return {
        productos,
        getAllProducts,
        getActiveProducts,
        getInactiveProducts,
        onEliminarProducto
    };
};
