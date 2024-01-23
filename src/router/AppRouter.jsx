import { Route, Routes } from "react-router-dom"
import { DogBrothersStoreRoutes } from "../DogsBrothersStore/routes/DogBrothersStoreRoutes"
import { AdminRoutes } from "../DogsBrothersStoreAdmin/routes/AdminRoutes"

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/admin/*" element={<AdminRoutes />}></Route>
            <Route path="/*" element={<DogBrothersStoreRoutes />}></Route>
        </Routes>
    )
}
