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
                        <span class="menu-header-text">products</span>
                    </li>
                    <li className={`menu-item ${activeMainMenu === "Product" ? "open active" : ""}`}>
                        <Link
                            to="javascript:void(0);"
                            className={`menu-link menu-toggle`}
                            onClick={() => handleMainMenuClick("Product")}
                        >
                            <Icon icon="ri:product-hunt-fill" className="menu-icon tf-icons" />
                            <div data-i18n="Products">Products</div>
                        </Link>
                        <ul className="menu-sub">
                            <li className={`menu-item ${activeSubMenu === "list-product" ? "active" : ""}`}>
                                <Link to="/admin/products_list" className="menu-link" onClick={() => handleSubMenuClick("list-product")}>
                                    <div data-i18n="Without menu">Products List</div>
                                </Link>
                            </li>

                        </ul>
                    </li>
                    {/*CATRGORIES & BRANDS*/}
                    <li class="menu-header small text-uppercase">
                        <span class="menu-header-text">CATRGORIES & BRANDS</span>
                    </li>
                    <li className={`menu-item ${activeMainMenu === "categories" ? "open active" : ""}`}>
                        <Link
                            to="javascript:void(0);"
                            className={`menu-link menu-toggle`}
                            onClick={() => handleMainMenuClick("categories")}
                        >
                            <Icon icon="iconamoon:category-fill" className="menu-icon tf-icons" />
                            <div data-i18n="Categories">Categories</div>
                        </Link>
                        <ul className="menu-sub">
                            <li className={`menu-item ${activeSubMenu === "list-categories" ? "active" : ""}`}>
                                <Link to="/admin/categories_list" className="menu-link" onClick={() => handleSubMenuClick("list-categories")}>
                                    <div data-i18n="Without menu">Categories List</div>
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
                            <Icon icon="tabler:brand-cake" className="menu-icon tf-icons" />
                            <div data-i18n="Brands">Brands</div>
                        </Link>
                        <ul className="menu-sub">
                            <li className={`menu-item ${activeSubMenu === "list-brands" ? "active" : ""}`}>
                                <Link to="/admin/brands-list" className="menu-link" onClick={() => handleSubMenuClick("list-brands")}>
                                    <div data-i18n="Brands List">Brands List</div>
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
                                    <div data-i18n="User List">User List</div>
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
                            <div data-i18n="Account">Account</div>
                        </Link>
                        <ul className="menu-sub">
                            <li className={`menu-item ${activeSubMenu === "account-settings" ? "active" : ""}`}>
                                <Link to="/admin/account-settings" className="menu-link" onClick={() => handleSubMenuClick("account-settings")}>
                                    <div data-i18n="Account Settings">Account Settings</div>
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