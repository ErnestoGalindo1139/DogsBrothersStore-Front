export const obtenerProductos = async() => {

    const url = 'http://localhost:4000/products';

    const respuesta = await fetch(url);
    const resultado = await respuesta.json();


    return resultado;
}
