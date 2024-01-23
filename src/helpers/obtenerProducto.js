export const obtenerProducto = async( id ) => {

    const url = `http://localhost:4000/products/${id}`;

    const respuesta = await fetch(url);
    const resultado = respuesta.json();

    return resultado;
}
