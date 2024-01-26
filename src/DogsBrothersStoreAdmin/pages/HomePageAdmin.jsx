import { NavLink } from "react-router-dom";
import { useHomePage } from "../hooks";
import {  Avatar, Button, Card, CardBody, CardFooter, CardHeader, IconButton, Input, Tab, Tabs, TabsHeader, Tooltip, Typography } from "@material-tailwind/react";
import { ArrowLeftIcon, ArrowRightIcon, ChevronUpDownIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { PencilIcon, TrashIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export const HomePageAdmin = () => {

    const { onEliminarProducto, productos, getActiveProducts, getInactiveProducts, getAllProducts } = useHomePage();
    const [searchTerm, setSearchTerm] = useState("");

    const [active, setActive] = useState(1);

    const getItemProps = (index) =>
        ({
            variant: active === index ? "filled" : "text",
            color: "gray",
            onClick: () => setActive(index),
            className: "rounded-full",
        });
    
    const next = () => {
        if (active === 5) return;
    
        setActive(active + 1);
    };
    
    const prev = () => {
        if (active === 1) return;
    
        setActive(active - 1);
    };

    const TABS = [
        {
            label: "Todos",
            value: "2",
        },
        {
            label: "Activos",
            value: "1",
        },
        {
            label: "Inactivos",
            value: "0",
        },
    ];
    
    const TABLE_HEAD = ["Nombre del Producto", "Descripción", "Precio", "Cantidad", "Imagen", "Categoría", "Acciones"];

    const filtrarProductos = productos.filter( (productoFiltrado) =>
        productoFiltrado.nombre_producto.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const getProductsByFilter = ( value ) => {
        console.log(value);
        if (Number(value) === 0 ) {
            getInactiveProducts();
        } else if(Number(value) === 1) {
            getActiveProducts();
        } else {
            getAllProducts();
        }

    }

    function highlightSidebarItem() {
        const btnAdmin = document.querySelector('#btnAdmin');
        const btnProductos = document.querySelector('#btnProductos');
        btnProductos.classList.add('bg-gradient-to-r', 'from-cyan-400', 'to-cyan-500','ml-0');
        btnProductos.firstChild.nextSibling.classList.add('text-white');
        btnAdmin.classList.remove('bg-gradient-to-r', 'from-cyan-400', 'to-cyan-500','ml-0');
        btnAdmin.firstChild.nextSibling.classList.remove('text-white');
    }

    return (
        // <!-- component -->
        <Card className="w-full overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
            <CardHeader floated={false} shadow={false} className="rounded-none">
                <div className="mb-8 flex items-center justify-between gap-8">
                    <div>
                        <Typography variant="h5" color="blue-gray"> Lista de Productos </Typography>
                        <Typography color="gray" className="mt-1 font-normal"> Ve información sobre todos los productos </Typography>
                    </div>
                    <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                        <NavLink to="agregar-producto" >
                            <Button className="flex items-center gap-3" size="lg" onClick={ highlightSidebarItem }>
                                <PlusCircleIcon strokeWidth={3} className="h-6 w-6" /> Agregar Producto
                            </Button>
                        </NavLink>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                    <Tabs value="2" className="w-full md:w-max">
                        <TabsHeader>
                            {
                                TABS.map(({ label, value }) => (
                                    <Tab key={value} value={value} onClick={ () => getProductsByFilter(value) }>
                                        &nbsp;&nbsp;{label}&nbsp;&nbsp;
                                    </Tab>
                                ))
                            }
                        </TabsHeader>
                    </Tabs>
                    <div className="w-full md:w-72">
                        <Input
                            label="Search"
                            value={searchTerm}
                            onChange={ (e) => setSearchTerm(e.target.value) }
                            icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                        />
                    </div>
                </div>
            </CardHeader>

            <CardBody className="px-0">
                <div className="mt-4 overflow-scroll">
                    <table className="w-full min-w-max table-auto ">
                        <thead>
                            <tr>
                                {
                                    TABLE_HEAD.map((head, index) => (
                                        <th
                                            key={head}
                                            className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                                        >
                                            <Typography
                                                variant="paragraph"
                                                color="black"
                                                className="flex items-center justify-between gap-2 font-bold text-center text-lg leading-none opacity-70"
                                                style={{ textAlign: 'center' }}
                                            >
                                                <span className="flex-grow">{head}</span>
                                                {index !== TABLE_HEAD.length - 1 && (
                                                    <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />
                                                )}
                                            </Typography>
                                        </th>
                                    ))
                                }
                            </tr>
                        </thead>
                        <tbody >
                            {
                                filtrarProductos.map(
                                    ( producto, index) => {
                                        const { id_producto, nombre_producto, descripcion_producto, precio_producto, cantidad_producto, url_producto, categoria_producto } = producto;
                                        const isLast = index === productos.length - 1;
                                        const classes = isLast 
                                            ? "p-4"
                                            : "p-4 border-b border-blue-gray-50";

                                        return (
                                            <tr key={id_producto} >
                                                <td className={`${classes} w-64`}>
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal text-lg"
                                                    >
                                                        { nombre_producto }
                                                    </Typography>
                                                </td>
                                                <td className={`${classes} w-[400px]`}>
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal text-lg"
                                                    >
                                                        { descripcion_producto }
                                                    </Typography>
                                                </td>
                                                <td className={`${classes} w-24`}>
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal text-lg"
                                                    >
                                                        { precio_producto }
                                                    </Typography>
                                                </td>
                                                <td className={`${classes} w-24`}>
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal text-lg"
                                                    >
                                                        {cantidad_producto}
                                                    </Typography>
                                                </td>
                                                <td className={`${classes} w-24`}>
                                                <Avatar
                                                        src={ url_producto }
                                                        size="sm"
                                                        alt={ nombre_producto }
                                                        variant="square"
                                                        className="w-24 h-24 object-contain p-1"
                                                    />
                                                </td>
                                                <td className={`${classes} w-32`}>
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal text-lg"
                                                    >
                                                        {categoria_producto}
                                                    </Typography>
                                                </td>
                                                <td className={`${classes} w-32 `}>
                                                    <div className="flex justify-center items-center gap-1">
                                                        <NavLink to={`editar-producto/${id_producto}`}>
                                                            <Tooltip content="Editar">
                                                                <IconButton variant="text">
                                                                    <PencilIcon className="h-6 w-6 text-teal-600 hover:text-teal-900"/>
                                                                </IconButton>
                                                            </Tooltip>
                                                        </NavLink>
                                                        
                                                        <NavLink to="/admin" onClick={ (e) => onEliminarProducto(e, id_producto) } >
                                                            <Tooltip content="Eliminar">
                                                                <IconButton variant="text">
                                                                    <TrashIcon className="h-6 w-6 text-red-600 hover:text-red-900 eliminar" color="red"/>
                                                                </IconButton>
                                                            </Tooltip>
                                                        </NavLink>
                                                    </div>


                                                </td>
                                            </tr>
                                        );
                                    }
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </CardBody>

            <CardFooter className="border-t border-blue-gray-50 p-4">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                    <Button
                        variant="text"
                        className="flex items-center gap-2 rounded-full mb-2 sm:mb-0"
                        onClick={prev}
                        disabled={active === 1}
                    >
                        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
                    </Button>
                    <div className="flex items-center gap-2">
                        <IconButton {...getItemProps(1)}>1</IconButton>
                        <IconButton {...getItemProps(2)}>2</IconButton>
                        <IconButton {...getItemProps(3)}>3</IconButton>
                        <IconButton {...getItemProps(4)}>4</IconButton>
                        <IconButton {...getItemProps(5)}>5</IconButton>
                    </div>
                    <Button
                        variant="text"
                        className="flex items-center gap-2 rounded-full"
                        onClick={next}
                        disabled={active === 5}
                    >
                        Next
                        <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
                    </Button>
                </div>
            </CardFooter>
        </Card>
    );
}
