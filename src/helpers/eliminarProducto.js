export const eliminarProducto = async ( id ) => {

    const url = `http://localhost:4000/products`;

    try {
        const respuesta = await fetch(`${url}/${id}`, {
            method: 'DELETE'
        })
        if (respuesta.ok) {
            return { success: true, message: 'Eliminación exitosa' };
        } else {
            throw new Error(`Error al realizar la solicitud DELETE. Estado: ${respuesta.status}`);
        }
    } catch (error) {
        console.log(error);
    }

}
