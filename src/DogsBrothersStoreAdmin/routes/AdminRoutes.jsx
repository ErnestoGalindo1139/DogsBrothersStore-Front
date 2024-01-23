import { Navigate, Route, Routes } from "react-router-dom"
import { NavbarAdmin, SideBar } from "../components"
import { HomePageAdmin, NuevoProductoPage } from "../pages"
import { FooterComponent } from "../../DogsBrothersStore/components"
import { EditarProductoPage } from "../pages/EditarProductoPage"


export const AdminRoutes = () => {
    return (
        <>
            <NavbarAdmin />
            
            <div className="flex">
                <SideBar />
                    
                <Routes>
                    <Route path="/" element={<HomePageAdmin />} />
                    <Route path="/agregar-producto" element={<NuevoProductoPage />} />
                    <Route path="/editar-producto/:id" element={<EditarProductoPage />} />

                    <Route path="/*" element={<Navigate to="/admin" />} />
                </Routes>
            </div>

            <FooterComponent />
        </>
    )
}
