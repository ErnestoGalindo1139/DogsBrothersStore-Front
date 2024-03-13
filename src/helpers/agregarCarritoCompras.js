export const agregarCarritoCompras = async (id) => {

    try {

        const url = 'http://localhost:4000/carritoCompras';

        await fetch(url, {
            method: 'POST',
            body: JSON.stringify( id ),
            headers: {
                'Content-Type': 'application/json'
            }
        });

    } catch (error) {
        console.log(error);
    }

}