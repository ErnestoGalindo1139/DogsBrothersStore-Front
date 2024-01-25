export const obtenerCategorias = async() => {

    const url = `http://localhost:4000/categories`;

    const respuesta = await fetch(url);
    const resultado = respuesta.json();

    return resultado;
}
