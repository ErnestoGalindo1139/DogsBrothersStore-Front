import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { Alert } from "@material-tailwind/react";


export const MostrarAlerta = () => {
    
    return (
        <Alert
            className="text-red-700 border-red-400 border mt-8 bg-red-50"
            variant="filled"
            icon={<ExclamationTriangleIcon className="w-6 h-6" color="red"/>}
            
        >
            Hubo un problema al iniciar Sesión
        </Alert>
    );
}
