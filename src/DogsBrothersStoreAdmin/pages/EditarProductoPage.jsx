import { useParams } from "react-router-dom";
import { FormProductos } from "../components"

export const EditarProductoPage = () => {

    // Obtiene los parámetros de la URL
    const { id } = useParams();

    return (
        <FormProductos modoEdicion={true} idProducto={id} />
    )
}
