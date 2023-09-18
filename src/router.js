import HomePage from "./pages/users/homePage";
import { ROUTERS } from "./utils/router";
import { Route, Routes, Outlet } from "react-router-dom";
import MasterLayout from "./pages/users/theme/masterLayout";
import ProfilePage from "./pages/users/profilePage";
import ProductDetail from "./pages/users/productDetail";
import CartPage from "./pages/users/cartPage";
import Dashboard from "pages/admin/dashBoard";
import ProductPage from "pages/users/productPage";
import CheckoutPage from "pages/users/checkoutPage";
import LoginUserPage from "pages/users/loginPage";
import RegisterPage from "pages/users/registerPage";
import AdminLogin from "pages/admin/loginAdmin";
const UserRoutes = () => {
    return (
        <MasterLayout>
            <Routes>
                <Route path={ROUTERS.USER.HOME} element={<HomePage />} />
                <Route path={ROUTERS.USER.PROFILE} element={<ProfilePage />} />
                <Route path={ROUTERS.USER.PRODUCT_DETAIL} element={<HomePage />} />
                <Route path={ROUTERS.USER.CART} element={<CartPage />} />
                <Route path={ROUTERS.USER.PRODUCT_PAGE} element={<ProductPage />} />
                <Route path={ROUTERS.USER.LOGIN_USER} element={<LoginUserPage />} />
                <Route path={ROUTERS.USER.REGISTER} element={<RegisterPage />} />
            </Routes>
        </MasterLayout>
    );
};

const AdminRoutes = () => {
    return (
        <Routes>
            <Route path={ROUTERS.ADMIN.DASHBOARD} element={<Dashboard />} />
            <Route path={ROUTERS.ADMIN.LOGIN} element={<AdminLogin />} />
        </Routes>
    );
};

const RouterCustom = () => {
    return (
        <Routes>
            <Route path="/admin/*" element={<AdminRoutes />} />
            <Route path="/*" element={<UserRoutes />} />
            <Route path="/product-detail/:product" element={<MasterLayout><ProductDetail /></MasterLayout>} />
            <Route path="/product-page/:category" element={<MasterLayout><ProductPage /></MasterLayout>} />
            <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
    );
};

export default RouterCustom;
