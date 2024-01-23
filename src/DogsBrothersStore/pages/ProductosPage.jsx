import CategoriasProductos from "../components/CategoriasProductos"
import { ProductosCatalogo } from "../components/ProductosCatalogo"

export const ProductosPage = () => {
    return (
        <>
            <div className="productosSeccion flex justify-between">
                {/* <div className="categorias"></div> */}
                <CategoriasProductos />
                <ProductosCatalogo />

            </div>
        </>
    )
}
