import { Navigate, Route, Routes } from "react-router-dom"
import { ComplexNavbar, FooterComponent } from "../components"
import { ContactoPage, DevolucionPage, HomePage, NosotrosPage, PreguntasFrecuentesPage, ProductosPage } from "../pages"

export const DogBrothersStoreRoutes = () => {
    return (
        <>
            <ComplexNavbar />
                
            <Routes>
                <Route path="/" element={<HomePage />} />

                <Route path="nosotros" element={<NosotrosPage />} />

                <Route path="productos" element={<ProductosPage />} />

                <Route path="contacto" element={<ContactoPage />} />

                <Route path="devolucion" element={<DevolucionPage />} />

                <Route path="preguntas-frecuentes" element={<PreguntasFrecuentesPage />} />

                <Route path="/*" element={<Navigate to="/" />} />
            </Routes>

            <FooterComponent />
        </>
    )
}
