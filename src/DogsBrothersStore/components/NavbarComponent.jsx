import React from "react";
import { NavLink } from "react-router-dom";
import {
    Navbar,
    Collapse,
    Typography,
    Button,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Avatar,
    IconButton,
} from "@material-tailwind/react";
import {
    CubeTransparentIcon,
    UserCircleIcon,
    CodeBracketSquareIcon,
    ChevronDownIcon,
    Cog6ToothIcon,
    InboxArrowDownIcon,
    LifebuoyIcon,
    PowerIcon,
    Bars2Icon,
    QuestionMarkCircleIcon,
    DevicePhoneMobileIcon,
    CurrencyDollarIcon,
    ArchiveBoxArrowDownIcon
} from "@heroicons/react/24/solid";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

// profile menu component
const profileMenuItems = [
    {
        label: "My Profile",
        icon: UserCircleIcon,
    },
    {
        label: "Edit Profile",
        icon: Cog6ToothIcon,
    },
    {
        label: "Inbox",
        icon: InboxArrowDownIcon,
    },
    {
        label: "Help",
        icon: LifebuoyIcon,
    },
    {
        label: "Sign Out",
        icon: PowerIcon,
    },
];

function ProfileMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
            <MenuHandler>
                
                <Button
                variant="text"
                color="blue-gray"
                className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
                >
                <Avatar
                    variant="circular"
                    size="sm"
                    alt="tania andrew"
                    className="border border-gray-900 p-0.5"
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                />
                <ChevronDownIcon
                    strokeWidth={2.5}
                    className={`h-3 w-3 transition-transform ${
                    isMenuOpen ? "rotate-180" : ""
                    }`}
                />
                </Button>
            </MenuHandler>

            <NavLink to="carrito-de-compras" className="text-decoration-none flex items-center text-white">
                <span>0</span>
                <ShoppingCartIcon className="w-8" /> 
                {/* <span class="material-symbols-outlined text-white text-3xl">
                    shopping_cart
                </span> */}
            </NavLink>

            <MenuList className="p-1">
                {
                    profileMenuItems.map(({ label, icon }, key) => {
                    const isLastItem = key === profileMenuItems.length - 1;
                    return (
                        <MenuItem
                            key={label}
                            onClick={closeMenu}
                            className={`flex items-center gap-2 rounded ${
                                isLastItem
                                ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                                : ""
                            }`}
                        >
                            {
                                React.createElement(icon, {
                                    className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                                    strokeWidth: 2,
                                })
                            }
                            <Typography
                                as="span"
                                variant="small"
                                className="font-normal"
                                color={isLastItem ? "red" : "inherit"}
                            >
                                {label}
                            </Typography>
                        </MenuItem>
                    );
                })}
            </MenuList>
        </Menu>
    );
}

// nav list menu
const navListItems = [
    {
        label: "Empresa",
        icon: UserCircleIcon,
        to: "/nosotros",
    },
    {
        label: "Productos",
        icon: CurrencyDollarIcon,
        to: "/productos",
    },
    {
        label: "Devoluciones",
        icon: ArchiveBoxArrowDownIcon,
        to: "/devolucion",
    },
    {
        label: "Contacto",
        icon: DevicePhoneMobileIcon,
        to: "/contacto",
    },
    {
        label: "Ayuda",
        icon: QuestionMarkCircleIcon,
        to: "/preguntas-frecuentes",
    },
];

const scrollToTop = (e) => {
    window.scrollTo({ top: 0 });
    if (e.target.classList.contains('focus:bg-blue-gray-50')) {
        e.target.classList.remove('focus:bg-blue-gray-50');
    }
};

function NavList({ cerrarMenu = () => {} }) {

    return (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
        {
            navListItems.map(({ label, icon, to }, key) => (
            
                <NavLink key={label} to={to} className="text-decoration-none" onClick={ (e) => {scrollToTop(e), cerrarMenu()} }>
                    <MenuItem className="flex items-center gap-2 lg:rounded-full">
                        {React.createElement(icon, { className: "h-[18px] w-[18px] text-white" })}{" "}
                        <span className="text-white"> {label}</span>
                    </MenuItem>
                </NavLink>
            ))
        }
        </ul>
    );
}

export function ComplexNavbar() {
    const [isNavOpen, setIsNavOpen] = React.useState(false);

    const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

    React.useEffect(() => {
        window.addEventListener("resize", () => {
            window.innerWidth >= 960 && setIsNavOpen(false)
        });
    }, []);

    return (
        <Navbar className="max-w-full p-2 navBarBg sticky top-0 z-[100]">
            <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
                <div className="flex items-center"> {/* Contenedor izquierdo */}
                    <NavLink to="/" className="text-decoration-none">
                        <img className="w-10" src="./assets/logos/logo_white.webp" alt="" />
                    </NavLink>
                    <NavLink to="/" className="text-decoration-none hidden sm:block" onClick={ scrollToTop }>
                        <Typography
                            as="span"
                            variant="paragraph"
                            className="mr-4 ml-2 cursor-pointer py-1.5 font-medium text-white"
                        >
                            Dogs Brothers Store
                        </Typography>
                    </NavLink>
                </div>
                <div className="hidden lg:flex flex-grow justify-center"> {/* Contenedor central */}
                    <NavList />
                </div>
                <div className="flex items-center space-x-4"> {/* Contenedor derecho */}
                    <NavLink to="login" className="text-decoration-none" >
                        <Button size="sm" variant="text">
                            <span className="text-white">Iniciar Sesión</span>
                        </Button>
                    </NavLink>
                    <ProfileMenu />
                    <IconButton
                        size="sm"
                        color="white"
                        variant="text"
                        onClick={ toggleIsNavOpen }
                        className="lg:hidden"
                    >
                        <Bars2Icon className="h-6 w-6" />
                    </IconButton>
                </div>
            </div>
            <Collapse open = { isNavOpen } >
                <NavList cerrarMenu = { toggleIsNavOpen }/>
            </Collapse>
        </Navbar>
    );
}