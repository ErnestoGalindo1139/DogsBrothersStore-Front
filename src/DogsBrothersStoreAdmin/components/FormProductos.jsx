import { PhotoIcon } from "@heroicons/react/24/solid"
import { useProductosForm } from "../hooks";

export const FormProductos = ({ modoEdicion, idProducto }) => {
    
    const {
        nombre_producto,
        precio_producto,
        cantidad_producto,
        descripcion_producto,
        id_categoria,
        onInputChange,
        url_Imagen,
        categorias,
        onSubirImagen,
        onEliminarImagen,
        onAgregarProducto,
    } = useProductosForm(modoEdicion, idProducto);

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
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset shadow-blue-500 ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6">
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
                        
                        <div className="sm:col-span-2">
                            <label 
                                htmlFor="id_categoria" 
                                className="block text-sm font-semibold leading-6 text-black">Categoría
                            </label>
                            <div className="mt-2">
                                <select
                                    id="id_categoria"
                                    name="id_categoria"
                                    value={ !id_categoria ? 0 : id_categoria }
                                    onChange={ onInputChange }
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset shadow-blue-500 ring-blue-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"
                                >
                                    <option value="0" disabled>--Selecciona una opción--</option>
                                    {
                                        categorias.map( categoria => (
                                            <option key={categoria.id_categoria} value={categoria.id_categoria}>{categoria.nombre_categoria}</option>
                                        ))
                                    }
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
