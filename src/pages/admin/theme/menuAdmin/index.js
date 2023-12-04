import './style.scss';
import React, { useState, memo } from "react";
import { Link } from 'react-router-dom';
import '../../../../assets/admin/vendor/js/menu.js';
import { Icon } from '@iconify/react';
import { useLocation } from 'react-router-dom';
import LogoImg from './logo192.png';
import { useEffect } from "react";
import Cookies from 'js-cookie'; // Import thư viện js-cookie
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const MenuAdmin = () => {
    const [activeMainMenu, setActiveMainMenu] = useState(null);
    const [activeSubMenu, setActiveSubMenu] = useState(null);
    const location = useLocation();
    const admin_url = process.env.REACT_APP_ADMIN_URL;
    const handleMainMenuClick = (mainMenuId) => {
        setActiveMainMenu(prevActive => prevActive === mainMenuId ? null : mainMenuId);
    };
    const handleSubMenuClick = (subMenuId) => {
        setActiveSubMenu(subMenuId);
    };
    const navigate = useNavigate();
    const api = process.env.REACT_APP_API_URL_AUTH;
    const adminToken = Cookies.get('adminToken');
    const [user, setUser] = useState([]);
    useEffect(() => {


        const fetchUser = async () => {
            try {
                const response = await axios.get(`${api}/me`, {
                    headers: {
                        'Authorization': `Bearer ${adminToken}`,
                        'Content-Type': 'application/json',
                    }
                });

                // Xử lý phản hồi từ server (response.data)
                setUser(response.data);
            } catch (error) {
                // Xử lý lỗi
                //console.error('Error fetching admin:', error);
            }
        };

        fetchUser();
    }, []);

    return (
        <>

            <aside id="layout-menu" class="layout-menu menu-vertical menu bg-menu-theme">
                <div class="app-brand demo">
                    <Link to={`${admin_url}/dashboard`} class="app-brand-link">
                        <span class="app-brand-logo demo">
                            <img src={LogoImg} alt='' width={"100px"} onClick={() => handleMainMenuClick("dashboard")} />
                        </span>

                    </Link>

                    {/* <Link to="javascript:void(0);" class="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none">
                        <i class="bx bx-chevron-left bx-sm align-middle"></i>
                    </Link> */}
                </div>

                <div class="menu-inner-shadow"></div>

                <ul class="menu-inner py-1">
                    {/*dashboard*/}
                    <li className={`menu-item ${location.pathname === `${admin_url}/dashboard` ? 'active' : ''}`}>
                        <Link
                            to={`${admin_url}/dashboard`}
                            className={`menu-link`}
                            onClick={() => handleMainMenuClick("dashboard")}
                        >
                            <Icon icon="codicon:dashboard" className="menu-icon tf-icons" />
                            <div data-i18n="Dashboard">Dashboard</div>
                        </Link>
                    </li>



                    <li class="menu-header small text-uppercase">
                        <span class="menu-header-text">Khuyến mãi</span>
                    </li>
                    <li className={`menu-item ${activeMainMenu === "Discount" ? "open active" : ""}`}>
                        <Link
                            to="javascript:void(0);"
                            className={`menu-link menu-toggle`}
                            onClick={() => handleMainMenuClick("Discount")}
                        >
                            <Icon icon="mdi:discount-outline" className="menu-icon tf-icons" />
                            <div data-i18n="Discount">Khuyến mãi</div>
                        </Link>
                        <ul className="menu-sub">
                            <li className={`menu-item ${location.pathname === `${admin_url}/discounts_list` ? 'active' : ''}`}>
                                {/* <li className={`menu-item ${activeSubMenu === "list-product" ? "active" : ""}`}> */}
                                <Link to={`${admin_url}/discounts_list`} className="menu-link" onClick={() => handleSubMenuClick("list-discount")}>
                                    <div data-i18n="Without menu">Các mức khuyến mãi</div>
                                </Link>
                            </li>
                            <li className={`menu-item ${activeSubMenu === "create-discount" ? "active" : ""}`}>
                                <Link to={`${admin_url}/discount_create`} className="menu-link" onClick={() => handleSubMenuClick("create-discount")}>
                                    <div data-i18n="Without menu">Thêm mức khuyến mãi mới</div>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    {/*product*/}
                    <li class="menu-header small text-uppercase">
                        <span class="menu-header-text">Sản phẩm & Đơn hàng</span>
                    </li>
                    <li className={`menu-item ${activeMainMenu === "Product" ? "open active" : ""}`}>
                        <Link
                            to="javascript:void(0);"
                            className={`menu-link menu-toggle`}
                            onClick={() => handleMainMenuClick("Product")}
                        >
                            <Icon icon="ri:product-hunt-fill" className="menu-icon tf-icons" />
                            <div data-i18n="Products">Sản phẩm</div>
                        </Link>
                        <ul className="menu-sub">
                            <li className={`menu-item ${location.pathname === `${admin_url}/products_list` ? 'active' : ''}`}>
                                {/* <li className={`menu-item ${activeSubMenu === "list-product" ? "active" : ""}`}> */}
                                <Link to={`${admin_url}/products_list`} className="menu-link" onClick={() => handleSubMenuClick("list-product")}>
                                    <div data-i18n="Without menu">Danh sách sản phẩm</div>
                                </Link>
                            </li>
                            <li className={`menu-item ${activeSubMenu === "create-product" ? "active" : ""}`}>
                                <Link to={`${admin_url}/product_create`} className="menu-link" onClick={() => handleSubMenuClick("create-product")}>
                                    <div data-i18n="Without menu">Thêm mới sản phẩm</div>
                                </Link>
                            </li>
                        </ul>
                    </li>





                    <li className={`menu-item ${activeMainMenu === "order" ? "open active" : ""}`}>
                        <Link
                            to="javascript:void(0);"
                            className={`menu-link menu-toggle`}
                            onClick={() => handleMainMenuClick("order")}
                        >
                            <Icon icon="tdesign:order-descending" className="menu-icon tf-icons" />
                            <div data-i18n="orders">Đơn hàng</div>
                        </Link>
                        <ul className="menu-sub">
                            <li className={`menu-item ${activeSubMenu === "list-order" ? "active" : ""}`}>
                                <Link to={`${admin_url}/orders_list_admin`} className="menu-link" onClick={() => handleSubMenuClick("list-order")}>
                                    <div data-i18n="Without menu">Tất cả đơn hàng</div>
                                </Link>
                            </li>
                            {/* <li className={`menu-item ${activeSubMenu === "ordered" ? "active" : ""}`}>
                                <Link to={`${admin_url}/orders_list_admin_ordered`} className="menu-link" onClick={() => handleSubMenuClick("ordered")}>
                                    <div data-i18n="Without menu">Đơn hàng đã đặt hàng</div>
                                </Link>
                            </li>
                            <li className={`menu-item ${activeSubMenu === "order-pending" ? "active" : ""}`}>
                                <Link to={`${admin_url}/orders_list_admin_pending`} className="menu-link" onClick={() => handleSubMenuClick("order-pending")}>
                                    <div data-i18n="Without menu">Đơn hàng đang xử lý</div>
                                </Link>
                            </li>
                            <li className={`menu-item ${activeSubMenu === "order-pay" ? "active" : ""}`}>
                                <Link to={`${admin_url}/orders_list_admin_pay`} className="menu-link" onClick={() => handleSubMenuClick("order-pay")}>
                                    <div data-i18n="Without menu">Đơn hàng đang đợi thanh toán</div>
                                </Link>
                            </li>
                            <li className={`menu-item ${activeSubMenu === "order-delivering" ? "active" : ""}`}>
                                <Link to={`${admin_url}/orders_list_admin_delivering`} className="menu-link" onClick={() => handleSubMenuClick("order-delivering")}>
                                    <div data-i18n="Without menu">Đơn hàng đang giao</div>
                                </Link>
                            </li>
                            <li className={`menu-item ${activeSubMenu === "order-completed" ? "active" : ""}`}>
                                <Link to={`${admin_url}/orders_list_admin_completed`} className="menu-link" onClick={() => handleSubMenuClick("order-completed")}>
                                    <div data-i18n="Without menu">Đơn hàng đã hoàn thành</div>
                                </Link>
                            </li>
                            <li className={`menu-item ${activeSubMenu === "order-cancelled" ? "active" : ""}`}>
                                <Link to={`${admin_url}/orders_list_admin_cancelled`} className="menu-link" onClick={() => handleSubMenuClick("order-cancelled")}>
                                    <div data-i18n="Without menu">Đơn hàng bị hủy</div>
                                </Link>
                            </li> */}

                        </ul>
                    </li>

                    {/*CATRGORIES & BRANDS*/}
                    <li class="menu-header small text-uppercase">
                        <span class="menu-header-text">Danh mục & Thương hiệu</span>
                    </li>
                    <li className={`menu-item ${activeMainMenu === "categories" ? "open active" : ""}`}>
                        <Link

                            className={`menu-link menu-toggle`}
                            onClick={() => handleMainMenuClick("categories")}
                        >
                            <Icon icon="iconamoon:category-fill" className="menu-icon tf-icons" />
                            <div data-i18n="Categories">Danh mục</div>
                        </Link>
                        <ul className="menu-sub">
                            <li className={`menu-item ${activeSubMenu === "list-categories" ? "active" : ""}`}>
                                <Link to={`${admin_url}/categories_list`} className="menu-link" onClick={() => handleSubMenuClick("list-categories")}>
                                    <div data-i18n="Without menu">Danh sách danh mục</div>
                                </Link>
                            </li>
                            <li className={`menu-item ${activeSubMenu === "create-category" ? "active" : ""}`}>
                                <Link to={`${admin_url}/category_create`} className="menu-link" onClick={() => handleSubMenuClick("create-category")}>
                                    <div data-i18n="Without menu">Thêm mới danh mục</div>
                                </Link>
                            </li>

                        </ul>
                    </li>
                    <li className={`menu-item ${activeMainMenu === "brands" ? "open active" : ""}`}>
                        <Link

                            className={`menu-link menu-toggle`}
                            onClick={() => handleMainMenuClick("brands")}
                        >
                            <Icon icon="tabler:brand-itch" className="menu-icon tf-icons" />
                            <div data-i18n="Brands">Thương hiệu</div>
                        </Link>
                        <ul className="menu-sub">
                            <li className={`menu-item ${activeSubMenu === "list-brands" ? "active" : ""}`}>
                                <Link to={`${admin_url}/brands_list`} className="menu-link" onClick={() => handleSubMenuClick("list-brands")}>
                                    <div data-i18n="Brands List">Danh sách thương hiệu</div>
                                </Link>
                            </li>

                            <li className={`menu-item ${activeSubMenu === "create-brand" ? "active" : ""}`}>
                                <Link to={`${admin_url}/brand_create`} className="menu-link" onClick={() => handleSubMenuClick("create-brand")}>
                                    <div data-i18n="Brands List">Thêm mới thương hiệu</div>
                                </Link>
                            </li>
                        </ul>
                    </li>


                    {/*news*/}
                    <li class="menu-header small text-uppercase">
                        <span class="menu-header-text">Tin tức</span>
                    </li>
                    <li className={`menu-item ${activeMainMenu === "news" ? "open active" : ""}`}>
                        <Link

                            className={`menu-link menu-toggle`}
                            onClick={() => handleMainMenuClick("news")}
                        >
                            <Icon icon="fluent:news-20-filled" className="menu-icon tf-icons" />
                            <div data-i18n="News">Tin tức</div>
                        </Link>
                        <ul className="menu-sub">
                            <li className={`menu-item ${activeSubMenu === "list-news" ? "active" : ""}`}>
                                <Link to={`${admin_url}/news_list`} className="menu-link" onClick={() => handleSubMenuClick("list-news")}>
                                    <div data-i18n="Without menu">Danh sách tin tức</div>
                                </Link>
                            </li>
                            <li className={`menu-item ${activeSubMenu === "create-news" ? "active" : ""}`}>
                                <Link to={`${admin_url}/news_create`} className="menu-link" onClick={() => handleSubMenuClick("create-news")}>
                                    <div data-i18n="Without menu">Thêm mới tin tức</div>
                                </Link>
                            </li>

                        </ul>
                    </li>

                    {/*users & account*/}
                    <li class="menu-header small text-uppercase">
                        <span class="menu-header-text">users & account</span>
                    </li>
                    <li className={`menu-item ${activeMainMenu === "users" ? "open active" : ""}`}>
                        <Link
                            className={`menu-link menu-toggle`}
                            onClick={() => handleMainMenuClick("users")}
                        >
                            <Icon icon="bx:user" className="menu-icon tf-icons" />
                            <div data-i18n="Users">Users</div>
                        </Link>
                        <ul className="menu-sub">
                            <li className={`menu-item ${activeSubMenu === "customers_list" ? "active" : ""}`}>
                                <Link to={`${admin_url}/customers_list`} className="menu-link" onClick={() => handleSubMenuClick("customers_list")}>
                                    <div data-i18n="User List">Danh sách khách hàng</div>
                                </Link>
                            </li>

                        </ul>
                    </li>
                    <li className={`menu-item ${activeMainMenu === "account" ? "open active" : ""}`}>
                        <Link
                            className={`menu-link menu-toggle`}
                            onClick={() => handleMainMenuClick("account")}
                        >
                            <Icon icon="ri:account-box-fill" className="menu-icon tf-icons" />
                            <div data-i18n="Account">Tài khoản</div>
                        </Link>
                        <ul className="menu-sub">
                            <li className={`menu-item ${activeSubMenu === "account-settings" ? "active" : ""}`}>
                                <Link to={`${admin_url}/account-settings/${user.userId}`} className="menu-link" onClick={() => handleSubMenuClick("account-settings")}>
                                    <div data-i18n="Account Settings">Cài đặt tài khoản</div>
                                </Link>
                            </li>

                        </ul>
                    </li>

                </ul>
            </aside >
        </>
    );
};

export default memo(MenuAdmin);