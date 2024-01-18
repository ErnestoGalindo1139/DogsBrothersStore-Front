import { Navigate, Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { NosotrosPage } from "../pages/NosotrosPage"
import { ProductosPage } from "../pages/ProductosPage"
import { ComplexNavbar, FooterComponent } from "../components"
import { ContactoPage } from "../pages/ContactoPage"

export const DogBrothersStoreRoutes = () => {
    return (
        <>
            <ComplexNavbar />
                
            <Routes>
                <Route path="/" element={<HomePage />} />

                <Route path="nosotros" element={<NosotrosPage />} />

                <Route path="productos" element={<ProductosPage />} />

                <Route path="contacto" element={<ContactoPage />} />

                <Route path="/*" element={<Navigate to="/" />} />
            </Routes>

            <FooterComponent />
        </>
    )
}
