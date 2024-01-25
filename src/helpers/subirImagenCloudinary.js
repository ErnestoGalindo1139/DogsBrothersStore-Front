export const subirImagenCloudinary = async ( imagen ) => {

    const file = imagen;
    const data = new FormData();
    const cloudName = 'domdbvf3k';

    data.append('file', file);
    data.append('upload_preset', 'dogsbrotherstore');

    const respuesta = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
        method: 'POST',
        body: data
    });
    const resultado = await respuesta.json();

    return resultado;
}
