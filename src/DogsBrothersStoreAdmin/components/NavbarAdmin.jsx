import { Bars3Icon, BellIcon, UserIcon } from "@heroicons/react/24/solid"
import { NavLink } from "react-router-dom";

export const NavbarAdmin = () => {

    function expandSidebar() {
        const sidebar = document.getElementById('sidebar');
        // const mainContent = document.querySelector('.ml-16');
        const logo = document.querySelector('#logo');

        if (sidebar.style.width === '16rem') {
            sidebar.style.width = '4rem';
            // mainContent.style.marginLeft = '4rem';
            logo.style.marginLeft = '5rem';
            sidebar.classList.remove('text-left');
            sidebar.classList.add('text-center', 'px-0');
        } else {
            sidebar.style.width = '16rem';
            // mainContent.style.marginLeft = '12rem';
            logo.style.marginLeft = '16rem';
            sidebar.classList.add('text-left');
            sidebar.classList.remove('text-center', 'px-0');
        }

        const labels = sidebar.querySelectorAll('span');
        labels.forEach( label => {
            label.classList.toggle('opacity-0')
            label.classList.toggle('hidden')
        })

    }
    
    return (
        <nav className="bg-white border-b border-gray-300 py-3">
            <div className="flex justify-between items-center px-6">
                {/* <!-- Ícono de Menú (cyan) --> */}
                <button id="menu-button" onClick={expandSidebar}>
                    <Bars3Icon className="w-6 h-6" color="blue" />
                </button>
                {/* <!-- Logo (centrado) --> */}
                <NavLink to="/admin" className="text-decoration-none" >
                    <div className="sm:ml-20" id="logo">
                        <img src="/assets/logos/logo_black.png" alt="logo" className="h-16 w-16" />
                    </div>
                </NavLink>
                {/* <!-- Ícono de Notificación y Perfil --> */}
                <div className="space-x-4">
                    <button>
                        <BellIcon className="w-6 h-6" />
                    </button>
                    {/* <!-- Botón de Perfil --> */}
                    <button>
                        <UserIcon className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </nav>
    )
}
