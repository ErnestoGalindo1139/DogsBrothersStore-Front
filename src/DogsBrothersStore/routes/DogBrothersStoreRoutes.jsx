import { Navigate, Route, Routes } from "react-router-dom"
import { ComplexNavbar, FooterComponent } from "../components"
import { ContactoPage, DevolucionPage, HomePage, NosotrosPage, PreguntasFrecuentesPage, ProductosPage, LoginPage } from "../pages"
import { HomePageAdmin } from "../../DogsBrothersStoreAdmin/pages"
import { ProductoInfoPage } from "../pages/ProductoInfoPage"
import { CarritoComprasPage } from "../pages/CarritoComprasPage"

export const DogBrothersStoreRoutes = () => {
    return (
        <>
            <ComplexNavbar />
                
            <Routes>
                <Route path="/" element={<HomePage />} />

                <Route path="nosotros" element={<NosotrosPage />} />

                <Route path="productos" element={<ProductosPage />} />
                
                <Route path="producto/:id" element={<ProductoInfoPage />} />

                <Route path="contacto" element={<ContactoPage />} />

                <Route path="devolucion" element={<DevolucionPage />} />

                <Route path="preguntas-frecuentes" element={<PreguntasFrecuentesPage />} />

                <Route path="carrito-de-compras" element={<CarritoComprasPage />} />

                <Route path="login" element={<LoginPage />} />

                <Route path="/admin" element={<HomePageAdmin />} />

                <Route path="/*" element={<Navigate to="/" />} />
            </Routes>

            <FooterComponent />
        </>
    )
}
