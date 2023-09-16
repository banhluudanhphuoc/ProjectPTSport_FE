import HomePage from "./pages/users/homePage";
import { ROUTERS } from "./utils/router";
import { Route, Routes, Outlet } from "react-router-dom";
import MasterLayout from "./pages/users/theme/masterLayout";
import ProfilePage from "./pages/users/profilePage";
import ProductPage from "./pages/users/productPage";
import CartPage from "./pages/users/cartPage";
import Dashboard from "pages/admin/dashBoard";

const UserRoutes = () => {
    return (
        <MasterLayout>
            <Routes>
                <Route path={ROUTERS.USER.HOME} element={<HomePage />} />
                <Route path={ROUTERS.USER.PROFILE} element={<ProfilePage />} />
                <Route path={ROUTERS.USER.PRODUCT_DETAIL} element={<ProductPage />} />
                <Route path={ROUTERS.USER.CART} element={<CartPage />} />
            </Routes>
        </MasterLayout>
    );
};

const AdminRoutes = () => {
    return (
        <Routes>
            <Route path={ROUTERS.ADMIN.DASHBOARD} element={<Dashboard />} />
        </Routes>
    );
};

const RouterCustom = () => {
    return (
        <Routes>
            <Route path="/admin/*" element={<AdminRoutes />} />
            <Route path="/*" element={<UserRoutes />} />
        </Routes>
    );
};

export default RouterCustom;
