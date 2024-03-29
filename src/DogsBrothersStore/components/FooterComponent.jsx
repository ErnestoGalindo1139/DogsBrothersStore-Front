import { Typography } from "@material-tailwind/react";

export function FooterComponent() {
    return (
        <footer className="w-full bg-white p-8 navBarBg">
        <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12text-center md:justify-between">
            <img src="./assets/logos/logo_white.webp" alt="logo" className="w-20" />
            <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
            <li>
                <Typography
                as="a"
                href="#"
                color="white"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                >
                Empresa
                </Typography>
            </li>
            <li>
                <Typography
                as="a"
                href="#"
                color="white"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                >
                Productos
                </Typography>
            </li>
            <li>
                <Typography
                as="a"
                href="#"
                color="white"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                >
                Devoluciones
                </Typography>
            </li>
            <li>
                <Typography
                as="a"
                href="#"
                color="white"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                >
                Contacto
                </Typography>
            </li>
            </ul>
        </div>
        <hr className="my-8 border-blue-gray-50" />
        <Typography color="white"className="text-center font-normal">
            &copy; 2024 Dogs Brothers Store
        </Typography>
        </footer>
    );
}