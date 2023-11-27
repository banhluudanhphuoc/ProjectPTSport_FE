import { memo } from "react";
import MenuAdmin from "../menuAdmin";
import HeaderAdmin from "../headerAdmin";
import FooterAdmin from "../footerAdmin";
import Cookies from 'js-cookie'; // Import thư viện js-cookie

import '../../../../assets/admin/vendor/css/core.css';
import '../../../../assets/admin/vendor/css/theme-default.css';
import '../../../../assets/admin/css/demo.css';
import '../../../../assets/admin/vendor/libs/perfect-scrollbar/perfect-scrollbar.css';
import '../../../../assets/admin/vendor/libs/apex-charts/apex-charts.css';
import '../../../../assets/admin/vendor/js/helpers.js';
import '../../../../assets/admin/js/config.js';
import '../../../../assets/admin/vendor/libs/popper/popper.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '../../../../assets/admin/vendor/libs/perfect-scrollbar/perfect-scrollbar.js';
import '../../../../assets/admin/vendor/js/menu.js';
import '../../../../assets/admin/vendor/libs/apex-charts/apexcharts.js';
//import '../../../../assets/admin/js/main.js';
// import { useAuthAdmin } from "context/AuthContextAdmin";
import { Route, Navigate } from 'react-router-dom';

const MasterLayoutAdmin = ({ children, ...props }) => {
    const admin_url = process.env.REACT_APP_ADMIN_URL;
    const adminToken = Cookies.get('adminToken');

    if (!adminToken) {
        // Nếu không có adminToken, chuyển hướng đến trang đăng nhập
        return <Navigate to={`${admin_url}/admin-login`} />;
    }

    return (
        <div {...props}>
            <div className="layout-wrapper layout-content-navbar">
                <div className="layout-container">
                    <MenuAdmin />
                    <div className="layout-page">
                        <HeaderAdmin />
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(MasterLayoutAdmin);
