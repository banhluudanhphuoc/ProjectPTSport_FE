import HomePage from "./pages/users/homePage";
import { ROUTERS } from "./utils/router";
import { Route, Routes } from "react-router-dom";


import MasterLayout from "./pages/users/theme/masterLayout";
import ProfilePage from "./pages/users/profilePage";
import ProductDetail from "./pages/users/productDetail";
import CartPage from "./pages/users/cartPage";
import ProductPage from "pages/users/productPage";
import CheckoutPage from "pages/users/checkoutPage";
import LoginUserPage from "pages/users/loginPage";
import RegisterPage from "pages/users/registerPage";

import MasterLayoutAdmin from "pages/admin/theme/masterLayoutAdmin";
import DashBoard from "pages/admin/dashBoard";
import LoginAdmin from "pages/admin/loginAdmin";
import PostersListAdmin from "pages/admin/posts/listPost";
import CategoriesListAdmin from "pages/admin/categories/listCategories";
import ListProductsAdmin from "pages/admin/products/listProducts";
import EditProductAdmin from "pages/admin/products/editProduct";
import CreateProductAdmin from "pages/admin/products/createProduct";
const RouterCustom = () => {
    return (
        <Routes>
            {/* User Routes */}
            <Route path="/*" element={<UserRoutes />} />
            {/* Admin Routes */}
            <Route path="/admin/*" element={<AdminRoutes />} />
            <Route path="/admin/admin-login" element={<LoginAdmin />} />
            <Route path="/admin/product_edit/:product" element={<MasterLayoutAdmin><EditProductAdmin /></MasterLayoutAdmin>} />
            {/* Product Detail, Product Page, Checkout */}
            <Route path="/product-detail/:product" element={<MasterLayout><ProductDetail /></MasterLayout>} />
            <Route path="/product-page/:category" element={<MasterLayout><ProductPage /></MasterLayout>} />
            <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
    );
};

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
        <MasterLayoutAdmin>
            <Routes>
                <Route path={ROUTERS.ADMIN.DASHBOARD} element={<DashBoard />} />
                <Route path={ROUTERS.ADMIN.POSTERS_LIST} element={<PostersListAdmin />} />
                <Route path={ROUTERS.ADMIN.PRODUCTS_LIST} element={<ListProductsAdmin />} />
                <Route path={ROUTERS.ADMIN.PRODUCT_CREATE} element={<CreateProductAdmin />} />
                <Route path={ROUTERS.ADMIN.CATEGORIES_LIST} element={<CategoriesListAdmin />} />
            </Routes>
        </MasterLayoutAdmin>

    );
};

export default RouterCustom;
