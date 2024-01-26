export const obtenerProductosActivos = async () => {

    const url = `http://localhost:4000/active-products`;

    const respuesta = await fetch(url);
    const resultado = await respuesta.json();


    return resultado;
}
