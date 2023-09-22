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
import CreatePosterAdmin from "pages/admin/posts/createPost";
import EditPosterAdmin from "pages/admin/posts/editPost";

import CategoriesListAdmin from "pages/admin/categories/listCategories";
import EditCategoryAdmin from "pages/admin/categories/editCategory";
import CreateCategoryAdmin from "pages/admin/categories/createCategory";

import ListProductsAdmin from "pages/admin/products/listProducts";
import EditProductAdmin from "pages/admin/products/editProduct";
import CreateProductAdmin from "pages/admin/products/createProduct";

import CustomersListAdmin from "pages/admin/customers/listCustomers";
import CreateCustomerAdmin from "pages/admin/customers/createCustomer";
import EditCustomerAdmin from "pages/admin/customers/editCustomer";

import OrdersListAdmin from "pages/admin/orders/listOrders";
import OrderDetailAdmin from "pages/admin/orders/orderDetails";
const RouterCustom = () => {
    return (
        <Routes>
            {/* User Routes */}
            <Route path="/*" element={<UserRoutes />} />
            {/* Admin Routes */}
            <Route path="/admin/*" element={<AdminRoutes />} />
            <Route path="/admin/admin-login" element={<LoginAdmin />} />
            <Route path="/admin/product_edit/:product" element={<MasterLayoutAdmin><EditProductAdmin /></MasterLayoutAdmin>} />
            <Route path="/admin/category_edit/:category" element={<MasterLayoutAdmin><EditCategoryAdmin /></MasterLayoutAdmin>} />
            <Route path="/admin/customer_edit/:customer" element={<MasterLayoutAdmin><EditCustomerAdmin /></MasterLayoutAdmin>} />
            <Route path="/admin/poster_edit/:poster" element={<MasterLayoutAdmin><EditPosterAdmin /></MasterLayoutAdmin>} />
            <Route path="/admin/order_detail_admin/:order" element={<MasterLayoutAdmin><OrderDetailAdmin /></MasterLayoutAdmin>} />
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
                <Route path={ROUTERS.ADMIN.POSTER_CREATE} element={<CreatePosterAdmin />} />
                <Route path={ROUTERS.ADMIN.PRODUCTS_LIST} element={<ListProductsAdmin />} />
                <Route path={ROUTERS.ADMIN.PRODUCT_CREATE} element={<CreateProductAdmin />} />
                <Route path={ROUTERS.ADMIN.CATEGORIES_LIST} element={<CategoriesListAdmin />} />
                <Route path={ROUTERS.ADMIN.CUSTOMERS_LIST} element={<CustomersListAdmin />} />
                <Route path={ROUTERS.ADMIN.CUSTOMER_CREATE} element={<CreateCustomerAdmin />} />
                <Route path={ROUTERS.ADMIN.CATEGORY_CREATE} element={<CreateCategoryAdmin />} />
                <Route path={ROUTERS.ADMIN.ORDERS_LIST} element={<OrdersListAdmin />} />
            </Routes>
        </MasterLayoutAdmin>

    );
};

export default RouterCustom;
