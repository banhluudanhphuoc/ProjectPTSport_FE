import { memo, useEffect, useState } from "react";
import './style.scss';
import { Link } from "react-router-dom";

import { Modal, Button, Image } from 'react-bootstrap';
import Cookies from 'js-cookie'; // Import thư viện js-cookie
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { RiAdminFill } from "react-icons/ri";
const HeaderAdmin = () => {
    const navigate = useNavigate();
    const api = process.env.REACT_APP_API_URL_AUTH;
    const adminToken = Cookies.get('adminToken');
    const [admin, setAdmin] = useState([]);
    const admin_url = process.env.REACT_APP_ADMIN_URL;

    useEffect(() => {


        const fetchAdmin = async () => {
            try {
                const response = await axios.get(api + '/me', {
                    headers: {
                        'Authorization': `Bearer ${adminToken}`,
                        'Content-Type': 'application/json',
                    }
                });

                // Xử lý phản hồi từ server (response.data)
                setAdmin(response.data);
            } catch (error) {
                // Xử lý lỗi
                console.error('Error fetching admin:', error);
            }
        };

        fetchAdmin();
    }, []);


    const handleLogout = async () => {
        try {
            // Gửi yêu cầu đến endpoint logout của API
            const response = await axios.get(
                api + '/logout',
                {},
                {
                    headers: {
                        'Authorization': `Bearer ${adminToken}`,
                    },
                }
            );
            // Kiểm tra xem logout có thành công hay không
            if (response.status === 200) {
                Cookies.remove('adminToken')
                navigate(admin_url + '/admin-login');
            } else {
                console.error('Logout failed:', response.data);
            }
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

    return (
        <>
            <nav
                className="layout-navbar  navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
                id="layout-navbar"
            >
                <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
                    <Link className="nav-item nav-link px-0 me-xl-4">
                        <i className="bx bx-menu bx-sm"></i>
                    </Link>
                </div>

                <div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse">

                    {/* <div className="navbar-nav align-items-center">
                        <div className="nav-item d-flex align-items-center">
                            <i className="bx bx-search fs-4 lh-0"></i>
                            <input
                                type="text"
                                className="form-control border-0 shadow-none"
                                placeholder="Search..."
                                aria-label="Search..."
                            />
                        </div>
                    </div> */}


                    <ul className="navbar-nav flex-row align-items-center ms-auto custom-avt-admin">


                        <li className="nav-item navbar-dropdown dropdown-user dropdown ">
                            <Link className="nav-link dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                <div className="avatar avatar-online custom-avt">
                                    <RiAdminFill />
                                    {/* <img src={admin.avatar} alt="" className="w-px-40 h-auto rounded-circle " /> */}
                                </div>
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li>
                                    <Link className="dropdown-item">
                                        <div className="d-flex">
                                            <div className="flex-shrink-0 me-3">
                                                <div className="avatar avatar-online custom-avt">
                                                    <RiAdminFill />
                                                    {/* <img src={admin.avatar} alt="" className="w-px-40 h-auto rounded-circle" /> */}
                                                </div>
                                            </div>
                                            <div className="flex-grow-1">
                                                <span className="fw-semibold d-block">{admin.name}</span>
                                                <small className="text-muted">{admin.email}</small>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                                <li>
                                    <div className="dropdown-divider"></div>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to={`${admin_url}/account-settings/${admin.userId}`}>
                                        <i className="bx bx-user me-2"></i>
                                        <span className="align-middle">My Profile</span>
                                    </Link>
                                </li>
                                {/* <li>
                                    <Link className="dropdown-item" href="#">
                                        <i className="bx bx-cog me-2"></i>
                                        <span className="align-middle">Settings</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" href="#">
                                        <span className="d-flex align-items-center align-middle">
                                            <i className="flex-shrink-0 bx bx-credit-card me-2"></i>
                                            <span className="flex-grow-1 align-middle">Billing</span>
                                            <span className="flex-shrink-0 badge badge-center rounded-pill bg-danger w-px-20 h-px-20">4</span>
                                        </span>
                                    </Link>
                                </li> */}
                                <li>
                                    <div className="dropdown-divider"></div>
                                </li>
                                <li>
                                    <Link className="dropdown-item" onClick={handleLogout}>
                                        <i className="bx bx-power-off me-2"></i>
                                        <span className="align-middle">Log Out</span>
                                    </Link>
                                </li>
                            </ul>
                        </li>

                    </ul>
                </div>
            </nav>
        </>
    );
}

export default memo(HeaderAdmin);