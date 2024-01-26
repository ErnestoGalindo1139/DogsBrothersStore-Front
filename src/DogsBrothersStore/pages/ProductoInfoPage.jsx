import { useNavigate, useParams } from "react-router-dom";
import { obtenerProducto } from "../../helpers";

export const ProductoInfoPage = () => {

    const {id} = useParams();
    const navigate = useNavigate();
    
    const bla = async () => {
        const url = `http://localhost:4000/products/${6}`;
        const respuesta = await fetch(url);
        const resultado = respuesta.json();
        return resultado;
    }

    console.log(bla());
    
    const { id_producto, nombre_producto, precio_producto, url_producto, descripcion_producto } = obtenerProducto(id);


    return (
        <>
            <div>
                <img src={url_producto} alt="nombre_producto" />
            </div>
        </>
    )
}
