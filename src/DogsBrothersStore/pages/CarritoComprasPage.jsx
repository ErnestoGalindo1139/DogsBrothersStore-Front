import { TrashIcon } from '@heroicons/react/24/solid';
import { TablaCarritoCompras } from '../components/TablaCarritoCompras';


export const CarritoComprasPage = () => {

    return (
        <>
            <div className="w-3/4 mx-auto my-20">
                <TablaCarritoCompras />

                <button className="flex items-center mt-10 bg-red-600 hover:bg-red-700 text-white p-1.5 rounded">
                    <TrashIcon className="w-7" />
                    <span className="pl-0.5">Vaciar Carrito de Compras</span>
                </button>

            </div>
        </>
    )
}
