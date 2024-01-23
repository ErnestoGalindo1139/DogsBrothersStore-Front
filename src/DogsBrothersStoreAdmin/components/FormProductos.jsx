import { PhotoIcon } from "@heroicons/react/24/solid"
import { useForm } from "../../hooks"
import { useEffect, useState } from "react";
import { obtenerProducto } from "../../helpers";

export const FormProductos = ({ modoEdicion, idProducto }) => {
    const { formState, setFormState, nombre_producto, precio_producto, cantidad_producto, descripcion_producto, id_categoria, onInputChange, onResetForm } = useForm({
        nombre_producto: '',
        precio_producto: '',
        cantidad_producto: '',
        descripcion_producto: '',
        url_producto: '',
        id_categoria: '',
    });
    const [url_Imagen, setUrl_Imagen] = useState("");

    useEffect(() => {
        onObtenerDetallesProducto();
    }, [modoEdicion, idProducto]);

    const onSubirImagen = async (e) => {

        if (url_Imagen) {
            setUrl_Imagen("");
        }

        const file = e.target.files[0];
        const data = new FormData();
        const cloudName = 'dd5nsh5uu';

        data.append('file', file);
        data.append('upload_preset', 'reactjs');

        const respuesta = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
            method: 'POST',
            body: data
        });
        const resultado = await respuesta.json();
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
                try {

                    await fetch(`${url}/${idProducto}`, {
                        method: 'PUT',
                        body: JSON.stringify(formState),
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    });

                    // window.location.href = 'admin.html';
                } catch (error) {
                    console.log(error);
                }

            } else {
                    
                // Enviar Datos al servidor - POST
                await fetch(url, {
                    method: 'POST',
                    body: JSON.stringify( formState ),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

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

    return (
        <div className=" bg-white w-full lg:w-full transition-all duration-200 ease-in-out">
            
            {/* <!-- component --> */}
            <div className="isolate bg-gray-200 px-6 py-12">


                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Productos </h2>
                    <p className="my-2 text-lg leading-8 text-gray-600"> Agregue los productos a vender </p>
                </div>

                <form 
                    method="POST" 
                    className="mx-auto max-w-screen-lg"
                    onSubmit={ onAgregarProducto }
                >

                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        <div>
                            <label 
                                htmlFor="nombre_producto" 
                                className="block text-sm font-semibold leading-6 text-black">Nombre
                            </label>
                            <div className="mt-2.5">
                                <input 
                                    type="text" 
                                    name="nombre_producto" 
                                    id="nombre_producto" 
                                    value={ nombre_producto }
                                    onChange={ onInputChange }
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm shadow-blue-500 ring-1 ring-inset ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6" 
                                />
                            </div>
                        </div>

                        <div>
                            <label 
                                htmlFor="precio_producto" 
                                className="block text-sm font-semibold leading-6 text-black">Precio
                            </label>
                            <div className="mt-2.5">
                                <input 
                                    type="number" 
                                    name="precio_producto" 
                                    id="precio_producto" 
                                    value={ precio_producto }
                                    onChange={ onInputChange }
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset shadow-blue-500 ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6" 
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-2">
                            <label 
                                htmlFor="cantidad_producto" 
                                className="block text-sm font-semibold leading-6 text-black">Cantidad
                            </label>
                            <div className="mt-2.5">
                                <input 
                                    type="number" 
                                    name="cantidad_producto" id="cantidad_producto" 
                                    value={ cantidad_producto }
                                    onChange={ onInputChange }
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset shadow-blue-500 ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6" 
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-2">
                            <label 
                                htmlFor="descripcion_producto" 
                                className="block text-sm font-semibold leading-6 text-black">Descripción
                            </label>
                            <div className="mt-2.5">
                                <textarea 
                                    name="descripcion_producto" 
                                    id="descripcion_producto" 
                                    value={ descripcion_producto }
                                    onChange={ onInputChange }
                                    rows="4" 
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                </textarea>
                            </div>
                        </div>

                        <div className="sm:col-span-2">
                            {url_Imagen ? (
                                // Mostrar cuando hay una imagen cargada
                                <div className="mt-2.5 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                    <div className="text-center flex flex-col justify-center items-center">
                                        <img src={url_Imagen} className="w-32 h-32" alt="Producto" />
                                        <div className="mt-4 flex text-sm leading-6 text-gray-600 items-center">
                                            <button 
                                                onClick={onEliminarImagen} 
                                                className="bg-red-500 text-white px-4 py-2 rounded-md mr-2">Eliminar
                                            </button>
                                            <label
                                                htmlFor="imagen_product"
                                                className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                                                <span className="mx-1 sm:mx-2">Subir otra imagen</span>
                                                <input
                                                    id="imagen_product"
                                                    name="imagen_product"
                                                    onChange={onSubirImagen}
                                                    type="file"
                                                    className="input-file"
                                                />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                // Mostrar cuando no hay archivos cargados
                                <div className="mt-2.5 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                    <div className="text-center flex flex-col justify-center items-center">
                                        <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                                        <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                            <label
                                                htmlFor="imagen_product"
                                                className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                                                <span>Upload a file</span>
                                                <input
                                                    id="imagen_product"
                                                    name="imagen_product"
                                                    onChange={onSubirImagen}
                                                    type="file"
                                                    className="sr-only"
                                                />
                                            </label>
                                            <p className="pl-1">or drag and drop</p>
                                        </div>
                                        <p className="text-xs leading-5 text-black">PNG, JPG, GIF up to 10MB</p>
                                    </div>
                                </div>
                            )}
                        </div>
                        
                        <div className="sm:col-span-3">
                            <label 
                                htmlFor="id_categoria" 
                                className="block text-sm font-semibold leading-6 text-black">Categoría
                            </label>
                            <div className="mt-2">
                                <select
                                    id="id_categoria"
                                    name="id_categoria"
                                    value={ id_categoria }
                                    onChange={ onInputChange }
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset shadow-blue-500 ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
                                >
                                    <option value="" disabled selected>--Selecciona una opción--</option>
                                    <option value="1">Laptops</option>
                                    <option value="2">Celulares</option>
                                </select>
                            </div>
                        </div>

                    </div>

                    <div className="mt-10">
                        <button 
                            type="submit" 
                            className="block w-full rounded-md bg-cyan-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Agregar Producto
                        </button>
                    </div>

                </form>

            </div>

        </div>
    )
}
