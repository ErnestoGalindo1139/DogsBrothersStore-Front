import { Route, Routes } from "react-router-dom"
import { DogBrothersStoreRoutes } from "../DogsBrothersStore/routes/DogBrothersStoreRoutes"

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/*" element={<DogBrothersStoreRoutes />}></Route>
        </Routes>
    )
}
