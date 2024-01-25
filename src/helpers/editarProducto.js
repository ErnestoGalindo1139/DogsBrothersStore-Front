export const editarProducto = async ( url, producto ) => {

    await fetch(url, {
        method: 'PUT',
        body: JSON.stringify(producto),
        headers: {
            'Content-Type': 'application/json'
        }
    });
}
