import HomePage from "./pages/users/homePage";
import { ROUTERS } from "./utils/router";
import { Route, Routes, Navigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import React, { useEffect } from 'react';

import NotFound from "pages/users/notFound";
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
import OrderDetailCustomer from "pages/users/orderDetailCustomer";
import ForgotPassword from "pages/users/forgotPassword";
import ChangePassword from "pages/users/changePassword";
import WishList from "pages/users/wishList";
import EnterNewPassword from "pages/users/enterNewPassword";

import MasterLayoutAdmin from "pages/admin/theme/masterLayoutAdmin";
import NotFoundAdmin from "pages/admin/notFound";

import DashBoard from "pages/admin/dashBoard";
import LoginAdmin from "pages/admin/loginAdmin";

import CategoriesListAdmin from "pages/admin/categories/listCategories";
import EditCategoryAdmin from "pages/admin/categories/editCategory";
import CreateCategoryAdmin from "pages/admin/categories/createCategory";

import EditBrandAdmin from "pages/admin/brands/editBrand";
import BrandsListAdmin from "pages/admin/brands/listBrands";
import CreateBrandAdmin from "pages/admin/brands/createBrand";

import EditNewsAdmin from "pages/admin/news/editNews";
import CreateNewsAdmin from "pages/admin/news/createNews";
import ListNewsAdmin from "pages/admin/news/listNews";

import ListProductsAdmin from "pages/admin/products/listProducts";
import EditProductAdmin from "pages/admin/products/editProduct";
import CreateProductAdmin from "pages/admin/products/createProduct";

import CustomersListAdmin from "pages/admin/customers/listCustomers";
import CreateCustomerAdmin from "pages/admin/customers/createCustomer";
import EditCustomerAdmin from "pages/admin/customers/editCustomer";
import AccountSettings from "pages/admin/customers/accountSettings";

import OrdersListAdmin from "pages/admin/orders/listOrders";
import OrderDetailAdmin from "pages/admin/orders/orderDetails";
import ListOrdersCancelled from "pages/admin/orders/listOrdersCancelled";
import ListOrdersCompleted from "pages/admin/orders/listOrdersCompleted";
import ListOrdersDelivering from "pages/admin/orders/listOrdersDelivering";
import ListOrdersOrdered from "pages/admin/orders/listOrdersOrdered";
import ListOrdersPay from "pages/admin/orders/listOrdersPay";
import ListOrdersPending from "pages/admin/orders/listOrdersPending";

import CreateDiscountAdmin from "pages/admin/discount/createDiscount";
import DiscountListAdmin from "pages/admin/discount/listDiscount";


const admin_url = process.env.REACT_APP_ADMIN_URL;
const RouterCustom = () => {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);
    return (
        <Routes>
            {/* User Routes */}
            <Route path="/*" element={<UserRoutes />} />
            <Route path="/product-detail/:productID" element={<MasterLayout><ProductDetail /></MasterLayout>} />
            <Route path="/category-page/:categoryID" element={<MasterLayout><CategoryPage /></MasterLayout>} />
            <Route path="/brand-page/:brandID" element={<MasterLayout><CategoryPage /></MasterLayout>} />
            <Route path="/news-detail/:newID" element={<MasterLayout><BlogDetail /></MasterLayout>} />
            <Route path="/order-detail-customer/:orderID" element={<MasterLayout><OrderDetailCustomer /></MasterLayout>} />
            {/* Admin Routes */}
            <Route path={`${admin_url}/*`} element={<AdminRoutes />} />
            <Route path={`${admin_url}/admin-login`} element={<LoginAdmin />} />
            <Route path={`${admin_url}/product_edit/:productID`} element={<MasterLayoutAdmin><EditProductAdmin /></MasterLayoutAdmin>} />
            <Route path={`${admin_url}/category_edit/:categoryID`} element={<MasterLayoutAdmin><EditCategoryAdmin /></MasterLayoutAdmin>} />
            <Route path={`${admin_url}/brand_edit/:brandID`} element={<MasterLayoutAdmin><EditBrandAdmin /></MasterLayoutAdmin>} />
            <Route path={`${admin_url}/customer_edit/:customer`} element={<MasterLayoutAdmin><EditCustomerAdmin /></MasterLayoutAdmin>} />
            <Route path={`${admin_url}/news_edit/:blogId`} element={<MasterLayoutAdmin><EditNewsAdmin /></MasterLayoutAdmin>} />
            <Route path={`${admin_url}/order_detail_admin/:orderID`} element={<MasterLayoutAdmin><OrderDetailAdmin /></MasterLayoutAdmin>} />
            <Route path={`${admin_url}/account-settings/:userID`} element={<MasterLayoutAdmin><AccountSettings /></MasterLayoutAdmin>} />
        </Routes>
    );
};


const UserRoutes = () => {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);
    return (
        <MasterLayout>
            <Routes>
                <Route path={ROUTERS.USER.CHANGE_PASSWORD} element={<ChangePassword />} />
                <Route path={ROUTERS.USER.FORGOT_PASSWORD} element={<ForgotPassword />} />
                <Route path={ROUTERS.USER.VERIFY_EMAIL} element={<LoginUserPage />} />
                <Route path={ROUTERS.USER.ENTER_NEW_PASSWORD} element={<EnterNewPassword />} />
                <Route path={ROUTERS.USER.RESET_PASSWORD} element={<EnterNewPassword />} />
                <Route path={ROUTERS.USER.WISHLIST} element={<WishList />} />
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
                <Route path={ROUTERS.USER.BRAND_PAGE} element={<CategoryPage />} />
                <Route path={ROUTERS.USER.LOGIN_USER} element={<LoginUserPage />} />
                <Route path={ROUTERS.USER.REGISTER} element={<RegisterPage />} />
                <Route path={ROUTERS.USER.NOT_FOUND} element={<NotFound />} />
            </Routes>
        </MasterLayout>
    );
};

const AdminRoutes = () => {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);
    return (
        <MasterLayoutAdmin>
            <Routes>
                <Route path={ROUTERS.ADMIN.DISCOUNT_LIST} element={<DiscountListAdmin />} />
                <Route path={ROUTERS.ADMIN.DISCOUNT_CREATE} element={<CreateDiscountAdmin />} />

                <Route path={ROUTERS.ADMIN.NOT_FOUND_ADMIN} element={<NotFoundAdmin />} />
                <Route path={ROUTERS.ADMIN.DASHBOARD} element={<DashBoard />} />
                <Route path={ROUTERS.ADMIN.NEWS_LIST} element={<ListNewsAdmin />} />
                <Route path={ROUTERS.ADMIN.NEWS_CREATE} element={<CreateNewsAdmin />} />
                <Route path={ROUTERS.ADMIN.PRODUCTS_LIST} element={<ListProductsAdmin />} />
                <Route path={ROUTERS.ADMIN.PRODUCT_CREATE} element={<CreateProductAdmin />} />
                <Route path={ROUTERS.ADMIN.CATEGORIES_LIST} element={<CategoriesListAdmin />} />
                <Route path={ROUTERS.ADMIN.CUSTOMERS_LIST} element={<CustomersListAdmin />} />
                <Route path={ROUTERS.ADMIN.CUSTOMER_CREATE} element={<CreateCustomerAdmin />} />

                <Route path={ROUTERS.ADMIN.CATEGORY_CREATE} element={<CreateCategoryAdmin />} />
                <Route path={ROUTERS.ADMIN.ORDERS_LIST} element={<OrdersListAdmin />} />
                <Route path={ROUTERS.ADMIN.BRANDS_LIST} element={<BrandsListAdmin />} />
                <Route path={ROUTERS.ADMIN.BRAND_CREATE} element={<CreateBrandAdmin />} />
                <Route path={ROUTERS.ADMIN.ORDERS_LIST_CANCELLED} element={<ListOrdersCancelled />} />
                <Route path={ROUTERS.ADMIN.ORDERS_LIST_PENDING} element={<ListOrdersPending />} />
                <Route path={ROUTERS.ADMIN.ORDERS_LIST_COMPLETED} element={<ListOrdersCompleted />} />
                <Route path={ROUTERS.ADMIN.ORDERS_LIST_DELIVERING} element={<ListOrdersDelivering />} />
                <Route path={ROUTERS.ADMIN.ORDERS_LIST_ORDERED} element={<ListOrdersOrdered />} />
                <Route path={ROUTERS.ADMIN.ORDERS_LIST_PAY} element={<ListOrdersPay />} />
            </Routes>
        </MasterLayoutAdmin>

    );
};

export default RouterCustom;
