import { lazy } from 'react';
import { Route, Routes, Navigate } from "react-router-dom";

const Home = lazy(() => import("../pages/Home"));

const NavigationRoutes = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />}></Route>

            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}

export default NavigationRoutes;
