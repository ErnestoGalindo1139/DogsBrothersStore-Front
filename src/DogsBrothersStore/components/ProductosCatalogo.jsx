import { productos } from "../../data/productos"
import { ProductsCard } from "./ProductsCard"

export const ProductosCatalogo = () => {
    return (
        <div className="bg-white">
            <div className="my-10 lg:mx-auto">

                <div className="relative mt-8">
                    <div className="relative -mb-6 w-full overflow-x-auto pb-6">
                        <ul role="list" className="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                            {
                                productos.map((producto, index) => (
                                    <ProductsCard key={producto.id} producto={producto} showOnly={(index < 4 ? "lg" : (index < 6 ? "md" : "sm"))} />
                                ))
                                
                            }
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}
