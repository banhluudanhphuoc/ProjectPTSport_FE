import HomePage from "./pages/users/homePage";
import { ROUTERS } from "./utils/router";
import { Route, Routes } from "react-router-dom";
import MasterLayout from "./pages/users/theme/masterLayout";
import ProfilePage from "./pages/users/profilePage";
import ProductPage from "pages/users/productPage";
import CartPage from "pages/users/cartPage";
const renderUserRouter = () => {
    const userRouters = [{
        path: ROUTERS.USER.HOME,
        component: <HomePage />
    },
    {
        path: ROUTERS.USER.PROFILE,
        component: <ProfilePage />
    },
    {
        path: ROUTERS.USER.PRODUCT_DETAIL,
        component: <ProductPage />
    },
    {
        path: ROUTERS.USER.CART,
        component: <CartPage />
    },


    ];

    return (
        <MasterLayout>
            <Routes>
                {
                    userRouters.map((item, key) => (
                        <Route key={key} path={item.path} element={item.component} />
                    ))}
            </Routes>
        </MasterLayout>
    );
};

const RouterCustom = () => {
    return renderUserRouter();
};

export default RouterCustom;