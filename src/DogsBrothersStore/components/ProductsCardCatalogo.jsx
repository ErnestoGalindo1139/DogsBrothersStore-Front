export const ProductsCardCatalogo = ({ producto }) => {
    const { nombre_producto, precio_producto, url_producto, descripcion_producto } = producto;

    return (
        <li className="w-64 text-center lg:w-auto cardCatalogo">
            <div className="">
                <div className="overflow-hidden rounded-md">
                    <img
                        src={url_producto}
                        alt={nombre_producto}
                        className="group-hover:opacity-75 imgCatalogo"
                    />
                </div>
                <div className="mt-6 relative text-justify">
                    <h3 className="mt-1 font-semibold text-gray-900 hover:text-blue-600">
                    <a href="#" className="">
                        {`${nombre_producto} / ${descripcion_producto}`}
                    </a>
                    </h3>
                    <p className="mt-3 text-blue-900 font-bold">${precio_producto}</p>
                </div>
                
                    <p className="mt-2 text-white bg-green-700 pl-2 pr-2 pt-0.5 pb-0.5 w-40 font-bold rounded-md">✔ Con Existencia</p>
            </div>
            
        </li>
    );
};