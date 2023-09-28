import HomePage from "./pages/users/homePage";
import { ROUTERS } from "./utils/router";
import { Route, Routes } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import React, { useEffect } from 'react';

import MasterLayout from "./pages/users/theme/masterLayout";
import ProfilePage from "./pages/users/profilePage";
import ProductDetail from "./pages/users/productDetail";
import CartPage from "./pages/users/cartPage";
import CategoryPage from "pages/users/categoryPage";
import CheckoutPage from "pages/users/checkoutPage";
import LoginUserPage from "pages/users/loginPage";
import RegisterPage from "pages/users/registerPage";
import ConfirmPhoneNumber from "pages/users/confirmPhoneNumber";
import ProfileCustomer from "pages/users/profileCustomer";
import ProfileCustomerEdit from "pages/users/profileCustomerEdit";
import Confirmation from "pages/users/confirmation";
import ContactPage from "pages/users/contactPage";
import BlogsPage from "pages/users/blogsPage";
import BlogDetail from "pages/users/blogDetail";

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
import AccountSettings from "pages/admin/customers/accountSettings";

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
            {/* <Route path="/product-detail/:product" element={<MasterLayout><ProductDetail /></MasterLayout>} /> */}
            {/* <Route path="/category-page/:category" element={<MasterLayout><CategoryPage /></MasterLayout>} /> */}

        </Routes>
    );
};

const UserRoutes = () => {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0); // Cuộn lên đầu trang khi chuyển trang
    }, [location.pathname]);
    return (
        <MasterLayout>
            <Routes>
                <Route path={ROUTERS.USER.BLOG_DETAIL} element={<BlogDetail />} />
                <Route path={ROUTERS.USER.BLOGS_PAGE} element={<BlogsPage />} />
                <Route path={ROUTERS.USER.CONTACT_PAGE} element={<ContactPage />} />
                <Route path={ROUTERS.USER.CONFIRMATION_PAGE} element={<Confirmation />} />
                <Route path={ROUTERS.USER.CHECKOUT_PAGE} element={<CheckoutPage />} />
                <Route path={ROUTERS.USER.PROFILE_CUSTOMER_EDIT} element={<ProfileCustomerEdit />} />
                <Route path={ROUTERS.USER.PROFILE_CUSTOMER} element={<ProfileCustomer />} />
                <Route path={ROUTERS.USER.CONFIRM_PHONE_NUMBER} element={<ConfirmPhoneNumber />} />
                <Route path={ROUTERS.USER.HOME} element={<HomePage />} />
                <Route path={ROUTERS.USER.PROFILE} element={<ProfilePage />} />
                <Route path={ROUTERS.USER.PRODUCT_DETAIL} element={<ProductDetail />} />
                <Route path={ROUTERS.USER.CART} element={<CartPage />} />
                <Route path={ROUTERS.USER.CATEGORY_PAGE} element={<CategoryPage />} />
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
                <Route path={ROUTERS.ADMIN.ACCOUNT_SETTINGS} element={<AccountSettings />} />
                <Route path={ROUTERS.ADMIN.CATEGORY_CREATE} element={<CreateCategoryAdmin />} />
                <Route path={ROUTERS.ADMIN.ORDERS_LIST} element={<OrdersListAdmin />} />
            </Routes>
        </MasterLayoutAdmin>

    );
};

export default RouterCustom;
