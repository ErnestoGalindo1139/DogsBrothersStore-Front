import { useState, useEffect } from 'react';
import { agregarProducto, editarProducto, obtenerCategorias, obtenerProducto, subirImagenCloudinary } from '../../helpers';
import { useForm } from '../../hooks';

export const useProductosForm = (modoEdicion, idProducto) => {
    
    const { formState, setFormState, nombre_producto, precio_producto, cantidad_producto, descripcion_producto, id_categoria, onInputChange, onResetForm } = useForm({
        nombre_producto: '',
        precio_producto: '',
        cantidad_producto: '',
        descripcion_producto: '',
        url_producto: '',
        id_categoria: '',
    });
    const [url_Imagen, setUrl_Imagen] = useState("");
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        onObtenerDetallesProducto();
    }, [modoEdicion, idProducto]);

    useEffect(() => {
        const getCategories = async () => {
            const categorias = await obtenerCategorias();
            setCategorias(categorias);
        };

        getCategories();
    }, []);

    const onSubirImagen = async (e) => {

        if (url_Imagen) {
            setUrl_Imagen("");
        }

        const resultado = await subirImagenCloudinary(e.target.files[0])

        setUrl_Imagen(resultado.secure_url);
        setFormState({
            ...formState,
            url_producto: resultado.secure_url,
        })

    }

    const onEliminarImagen = () => {
        setUrl_Imagen("");
    }

    const onAgregarProducto = async (e) => {
        e.preventDefault();
        onResetForm();
        onEliminarImagen();

        try {

            const url = 'http://localhost:4000/products';

            if (modoEdicion) {
                editarProducto(`${url}/${idProducto}`, formState)
                // window.location.href = 'admin.html';
            } else {
                agregarProducto(url, formState)
            }

        } catch (error) {
            console.log(error);
        }
    }

    const onObtenerDetallesProducto = async () => {
        try {
            if (modoEdicion) {
                const producto = await obtenerProducto(idProducto);
                // Configurar los estados con los detalles del producto
                setFormState({
                    nombre_producto: producto.nombre_producto,
                    precio_producto: producto.precio_producto,
                    cantidad_producto: producto.cantidad_producto,
                    descripcion_producto: producto.descripcion_producto,
                    url_producto: producto.url_producto,
                    id_categoria: producto.id_categoria,
                });
                // Configurar el estado para la imagen
                setUrl_Imagen(producto.url_producto);
            }
        } catch (error) {
            console.error("Error al obtener detalles del producto:", error);
        }
    }

    return {
        formState,
        setFormState,
        nombre_producto,
        precio_producto,
        cantidad_producto,
        descripcion_producto,
        id_categoria,
        onInputChange,
        onResetForm,
        url_Imagen,
        categorias,
        onSubirImagen,
        onEliminarImagen,
        onAgregarProducto,
        onObtenerDetallesProducto
    };

};
