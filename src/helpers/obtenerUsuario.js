export const obtenerUsuario = async( correo_electronico ) => {

    const url = `http://localhost:4000/users/${correo_electronico}`;

    const respuesta = await fetch(url);
    const resultado = respuesta.json();

    return resultado;
}
