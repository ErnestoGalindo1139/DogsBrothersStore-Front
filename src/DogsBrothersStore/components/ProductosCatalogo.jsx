import { useEffect, useState } from "react"
import { obtenerProductos } from "../../helpers"
import { ProductsCardCatalogo } from "./ProductsCardCatalogo"

export const ProductosCatalogo = () => {

    const [productos, setProductos] = useState([])

    const getProducts = async () => {
        const productos = await obtenerProductos();
        setProductos(productos);
    }

    useEffect(() => {
        getProducts();

    }, [])

    console.log(productos);
    

    return (
        <div className="bg-white ml-14">
            <div className="my-10 lg:mx-auto">

                <div className="relative mt-8">
                    <div className="relative -mb-6 w-full overflow-x-auto pb-6">
                        <ul role="list" className="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                            {
                                productos.map((producto) => (
                                    <ProductsCardCatalogo key={producto.id_producto} producto={producto} />
                                    // <ProductsCard key={producto.id} producto={producto} showOnly={(index < 4 ? "lg" : (index < 6 ? "md" : "sm"))} />
                                ))
                                
                            }
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}
