import { productos } from "../../data/productos"
import { ProductsCard } from "./ProductsCard"

export const ProductsGroup = () => {


    return (
        <div className="bg-white">
            <div className="py-16 sm:py-24 lg:mx-auto lg:max-w-7xl lg:px-8">
                <div className="flex items-center justify-between px-4 sm:px-6 lg:px-0">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Promociones</h2>
                    <a href="#" className="hidden text-sm font-semibold text-blue-600 hover:text-cyan-500 sm:block">
                        Search more
                        <span aria-hidden="true"> &rarr;</span>
                    </a>
                </div>

                <div className="relative mt-8">
                    <div className="relative -mb-6 w-full overflow-x-auto pb-6">
                        <ul role="list" className="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {
                                productos.map((producto, index) => (
                                <ProductsCard key={producto.id} producto={producto} showOnly={(index < 4 ? "lg" : (index < 6 ? "md" : "sm"))} />
                                ))
                            }
                        </ul>
                    </div>
                </div>

                <div className="mt-12 flex px-4 sm:hidden">
                    <a href="#" className="text-sm font-semibold text-blue-600 hover:text-cyan-500">
                        Search more
                        <span aria-hidden="true"> &rarr;</span>
                    </a>
                </div>
            </div>
        </div>
    )
}
