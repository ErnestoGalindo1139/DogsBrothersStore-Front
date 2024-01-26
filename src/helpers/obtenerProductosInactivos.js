export const obtenerProductosInactivos = async () => {

    const url = `http://localhost:4000/inactive-products`;

    const respuesta = await fetch(url);
    const resultado = await respuesta.json();


    return resultado;
}
