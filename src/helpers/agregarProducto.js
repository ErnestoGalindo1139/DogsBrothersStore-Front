export const agregarProducto = async ( url, formState ) => {

    await fetch(url, {
        method: 'POST',
        body: JSON.stringify( formState ),
        headers: {
            'Content-Type': 'application/json'
        }
    });
}
