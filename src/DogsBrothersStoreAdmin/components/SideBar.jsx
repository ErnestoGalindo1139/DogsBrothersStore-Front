import { ArrowsRightLeftIcon, CheckCircleIcon, HomeIcon, PowerIcon, ShoppingCartIcon, UsersIcon } from "@heroicons/react/24/solid"
import { NavLink } from "react-router-dom";

export const SideBar = () => {

    

    function highlightSidebarItem(e) {
        const element = e.target.closest('button');
        
        const buttons = document.querySelectorAll("#sidebar button");
        buttons.forEach(btn => {
            btn.classList.remove('bg-gradient-to-r', 'from-cyan-400', 'to-cyan-500', 'text-white', 'ml-0');
            btn.firstChild.nextSibling.classList.remove('text-white');
        });
        element.classList.add('bg-gradient-to-r', 'from-cyan-400', 'to-cyan-500','ml-0');
        element.firstChild.nextSibling.classList.add('text-white');

    }

    
    return (
        <div id="sidebar" className=" bg-white rounded-none border-none transition-all duration-200 ease-in-out overflow-hidden">
            {/* <!-- Items --> */}
            <div className="p-2 space-y-4">
                {/* <!-- Inicio --> */}
                <NavLink to="/admin" className="text-decoration-none">
                    <button id="btnAdmin" className="w-full relative xl:px-3 py-3 flex items-center space-x-4 justify-start text-black rounded-lg group" onClick={ highlightSidebarItem } >
                        <HomeIcon className="w-6 h-6 " />
                        <span className="font-medium transition-all duration-200 opacity-0 hidden">Inicio</span>
                    </button>
                </NavLink>
                

                {/* <!-- Productos --> */}
                <NavLink to="agregar-producto" className="text-decoration-none" >
                    <button id="btnProductos" className="w-full relative xl:px-3 py-3 flex items-center space-x-4 justify-start text-black rounded-lg group" onClick={ highlightSidebarItem } >
                        <CheckCircleIcon className="w-6 h-6 " />
                        <span className="font-medium transition-all duration-200 opacity-0 hidden">Productos</span>
                    </button>
                </NavLink>

                {/* <!-- Usuarios --> */}
                <NavLink to="usuarios" className="text-decoration-none" >
                    <button className="w-full relative xl:px-3 py-3 flex items-center space-x-4 justify-start text-black rounded-lg group" onClick={ highlightSidebarItem } >
                        <UsersIcon className="w-6 h-6 " />
                        <span className="font-medium transition-all duration-200 opacity-0 hidden">Usuarios</span>
                    </button>
                </NavLink>

                {/* <!-- Comercios --> */}
                <NavLink to="comercios" className="text-decoration-none" >
                    <button className="w-full relative xl:px-3 py-3 flex items-center space-x-4 justify-start text-black rounded-lg group" onClick={ highlightSidebarItem } >
                        <ShoppingCartIcon className="w-6 h-6 " />
                        <span className="font-medium transition-all duration-200 opacity-0 hidden">Comercios</span>
                    </button>
                </NavLink>

                {/* <!-- Transacciones --> */}
                {/* <NavLink to="transacciones" className="text-decoration-none" >
                    <button className="w-full relative xl:px-3 py-3 flex items-center space-x-4 justify-start text-black rounded-lg group" onClick={ highlightSidebarItem } >
                        <ArrowsRightLeftIcon className="w-6 h-6 " />
                        <span className="font-medium transition-all duration-200 opacity-0 hidden">Transacciones</span>
                    </button>
                </NavLink> */}

                {/* <!-- Cerrar sesión --> */}
                <NavLink to="login" className="text-decoration-none" >
                    <button className="w-full relative xl:px-3 py-3 flex items-center space-x-4 justify-start text-black rounded-lg group" onClick={ highlightSidebarItem } >
                        <PowerIcon className="w-6 h-6 " />
                        <span className="font-medium transition-all duration-200 opacity-0 hidden">Salir</span>
                    </button>
                </NavLink>
            </div>
        </div>
    )
}
