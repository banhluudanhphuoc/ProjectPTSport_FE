import './style.scss';
import React, { useState, memo } from "react";
import { Link } from 'react-router-dom';
import '../../../../assets/admin/vendor/js/menu.js';
import { Icon } from '@iconify/react';

import LogoImg from './logo192.png';
const MenuAdmin = () => {
    const [activeMainMenu, setActiveMainMenu] = useState(null);
    const [activeSubMenu, setActiveSubMenu] = useState(null);

    const handleMainMenuClick = (mainMenuId) => {
        setActiveMainMenu(prevActive => prevActive === mainMenuId ? null : mainMenuId);
    };
    const handleSubMenuClick = (subMenuId) => {
        setActiveSubMenu(subMenuId);
    };


    return (
        <>

            <aside id="layout-menu" class="layout-menu menu-vertical menu bg-menu-theme">
                <div class="app-brand demo">
                    <Link to="javascript:void(0);" class="app-brand-link">
                        <span class="app-brand-logo demo">
                            <img src={LogoImg} alt='' width={"100px"} />
                        </span>

                    </Link>

                    <Link to="javascript:void(0);" class="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none">
                        <i class="bx bx-chevron-left bx-sm align-middle"></i>
                    </Link>
                </div>

                <div class="menu-inner-shadow"></div>

                <ul class="menu-inner py-1">
                    {/*dashboard*/}
                    <li className={`menu-item ${activeMainMenu === "dashboard" ? "open active" : ""}`}>
                        <Link
                            to="/admin/dashboard"
                            className={`menu-link`}
                            onClick={() => handleMainMenuClick("dashboard")}
                        >
                            <Icon icon="codicon:dashboard" className="menu-icon tf-icons" />
                            <div data-i18n="Dashboard">Dashboard</div>
                        </Link>
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
                            <li className={`menu-item ${activeSubMenu === "list-product" ? "active" : ""}`}>
                                <Link to="/admin/products_list" className="menu-link" onClick={() => handleSubMenuClick("list-product")}>
                                    <div data-i18n="Without menu">Danh sách sản phẩm</div>
                                </Link>
                            </li>
                            <li className={`menu-item ${activeSubMenu === "create-product" ? "active" : ""}`}>
                                <Link to="/admin/product_create" className="menu-link" onClick={() => handleSubMenuClick("create-product")}>
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
                                <Link to="/admin/orders_list_admin" className="menu-link" onClick={() => handleSubMenuClick("list-order")}>
                                    <div data-i18n="Without menu">Tất cả đơn hàng</div>
                                </Link>
                            </li>
                            <li className={`menu-item ${activeSubMenu === "ordered" ? "active" : ""}`}>
                                <Link to="/admin/orders_list_admin_ordered" className="menu-link" onClick={() => handleSubMenuClick("ordered")}>
                                    <div data-i18n="Without menu">Đơn hàng đã đặt hàng</div>
                                </Link>
                            </li>
                            <li className={`menu-item ${activeSubMenu === "order-pending" ? "active" : ""}`}>
                                <Link to="/admin/orders_list_admin_pending" className="menu-link" onClick={() => handleSubMenuClick("order-pending")}>
                                    <div data-i18n="Without menu">Đơn hàng đang xử lý</div>
                                </Link>
                            </li>
                            <li className={`menu-item ${activeSubMenu === "order-pay" ? "active" : ""}`}>
                                <Link to="/admin/orders_list_admin_pay" className="menu-link" onClick={() => handleSubMenuClick("order-pay")}>
                                    <div data-i18n="Without menu">Đơn hàng đang đợi thanh toán</div>
                                </Link>
                            </li>
                            <li className={`menu-item ${activeSubMenu === "order-delivering" ? "active" : ""}`}>
                                <Link to="/admin/orders_list_admin_delivering" className="menu-link" onClick={() => handleSubMenuClick("order-delivering")}>
                                    <div data-i18n="Without menu">Đơn hàng đang giao</div>
                                </Link>
                            </li>
                            <li className={`menu-item ${activeSubMenu === "order-completed" ? "active" : ""}`}>
                                <Link to="/admin/orders_list_admin_completed" className="menu-link" onClick={() => handleSubMenuClick("order-completed")}>
                                    <div data-i18n="Without menu">Đơn hàng đã hoàn thành</div>
                                </Link>
                            </li>
                            <li className={`menu-item ${activeSubMenu === "order-cancelled" ? "active" : ""}`}>
                                <Link to="/admin/orders_list_admin_cancelled" className="menu-link" onClick={() => handleSubMenuClick("order-cancelled")}>
                                    <div data-i18n="Without menu">Đơn hàng bị hủy</div>
                                </Link>
                            </li>

                        </ul>
                    </li>

                    {/*CATRGORIES & BRANDS*/}
                    <li class="menu-header small text-uppercase">
                        <span class="menu-header-text">Danh mục & Thương hiệu</span>
                    </li>
                    <li className={`menu-item ${activeMainMenu === "categories" ? "open active" : ""}`}>
                        <Link
                            to="javascript:void(0);"
                            className={`menu-link menu-toggle`}
                            onClick={() => handleMainMenuClick("categories")}
                        >
                            <Icon icon="iconamoon:category-fill" className="menu-icon tf-icons" />
                            <div data-i18n="Categories">Danh mục</div>
                        </Link>
                        <ul className="menu-sub">
                            <li className={`menu-item ${activeSubMenu === "list-categories" ? "active" : ""}`}>
                                <Link to="/admin/categories_list" className="menu-link" onClick={() => handleSubMenuClick("list-categories")}>
                                    <div data-i18n="Without menu">Danh sách danh mục</div>
                                </Link>
                            </li>
                            <li className={`menu-item ${activeSubMenu === "create-category" ? "active" : ""}`}>
                                <Link to="/admin/category_create" className="menu-link" onClick={() => handleSubMenuClick("create-category")}>
                                    <div data-i18n="Without menu">Thêm mới danh mục</div>
                                </Link>
                            </li>

                        </ul>
                    </li>
                    <li className={`menu-item ${activeMainMenu === "brands" ? "open active" : ""}`}>
                        <Link
                            to="javascript:void(0);"
                            className={`menu-link menu-toggle`}
                            onClick={() => handleMainMenuClick("brands")}
                        >
                            <Icon icon="tabler:brand-itch" className="menu-icon tf-icons" />
                            <div data-i18n="Brands">Thương hiệu</div>
                        </Link>
                        <ul className="menu-sub">
                            <li className={`menu-item ${activeSubMenu === "list-brands" ? "active" : ""}`}>
                                <Link to="/admin/brands_list" className="menu-link" onClick={() => handleSubMenuClick("list-brands")}>
                                    <div data-i18n="Brands List">Danh sách thương hiệu</div>
                                </Link>
                            </li>

                            <li className={`menu-item ${activeSubMenu === "create-brand" ? "active" : ""}`}>
                                <Link to="/admin/brand_create" className="menu-link" onClick={() => handleSubMenuClick("create-brand")}>
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
                            to="javascript:void(0);"
                            className={`menu-link menu-toggle`}
                            onClick={() => handleMainMenuClick("news")}
                        >
                            <Icon icon="fluent:news-20-filled" className="menu-icon tf-icons" />
                            <div data-i18n="News">Tin tức</div>
                        </Link>
                        <ul className="menu-sub">
                            <li className={`menu-item ${activeSubMenu === "list-news" ? "active" : ""}`}>
                                <Link to="/admin/news_list" className="menu-link" onClick={() => handleSubMenuClick("list-news")}>
                                    <div data-i18n="Without menu">Danh sách tin tức</div>
                                </Link>
                            </li>
                            <li className={`menu-item ${activeSubMenu === "create-news" ? "active" : ""}`}>
                                <Link to="/admin/news_create" className="menu-link" onClick={() => handleSubMenuClick("create-news")}>
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
                            to="javascript:void(0);"
                            className={`menu-link menu-toggle`}
                            onClick={() => handleMainMenuClick("users")}
                        >
                            <Icon icon="bx:user" className="menu-icon tf-icons" />
                            <div data-i18n="Users">Users</div>
                        </Link>
                        <ul className="menu-sub">
                            <li className={`menu-item ${activeSubMenu === "customers_list" ? "active" : ""}`}>
                                <Link to="/admin/customers_list" className="menu-link" onClick={() => handleSubMenuClick("customers_list")}>
                                    <div data-i18n="User List">Danh sách khách hàng</div>
                                </Link>
                            </li>

                        </ul>
                    </li>
                    <li className={`menu-item ${activeMainMenu === "account" ? "open active" : ""}`}>
                        <Link
                            to="javascript:void(0);"
                            className={`menu-link menu-toggle`}
                            onClick={() => handleMainMenuClick("account")}
                        >
                            <Icon icon="ri:account-box-fill" className="menu-icon tf-icons" />
                            <div data-i18n="Account">Tài khoản</div>
                        </Link>
                        <ul className="menu-sub">
                            <li className={`menu-item ${activeSubMenu === "account-settings" ? "active" : ""}`}>
                                <Link to="/admin/account-settings" className="menu-link" onClick={() => handleSubMenuClick("account-settings")}>
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