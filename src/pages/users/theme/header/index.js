import { memo, useState, useEffect } from "react";
import './style.scss';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import logo from './logo192.png';
import { BiUserCircle } from "react-icons/bi";
import { ROUTERS } from "utils/router";
import { CartProvider, useCart } from "react-use-cart";
import { Image } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useAuth } from "context/AuthContext";
const Header = ({ isHome }) => {
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState('VI');
    const handleLanguageChange = (newLanguage, lng) => {
        setCurrentLanguage(newLanguage)
        i18n.changeLanguage(lng);
    };

    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
    } = useCart();

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const [activeMenuItem, setActiveMenuItem] = useState(null);

    const handleMainMenuClick = (mainMenuId) => {
        setActiveMenuItem(mainMenuId);
    };
    const { isLoggedIn } = useAuth();
    const { setIsLoggedIn } = useAuth();
    useEffect(() => {
        const savedToken = localStorage.getItem('token_login');
        if (savedToken) {
            setIsLoggedIn(true);
        }
    }, []);
    const handleLogout = () => {
        // Xóa token khỏi local storage hoặc thực hiện các bước đăng xuất cần thiết
        localStorage.removeItem('token_login');
        // Đặt isLoggedIn thành false
        setIsLoggedIn(false);
        navigate('/login-user');
    };

    return (

        <header className="header_area sticky-header">
            <div className="main_menu">
                <nav className="navbar navbar-expand-lg navbar-light main_box">
                    <div className="container">
                        <a className="navbar-brand logo_h" href='/' ><Image src={logo} width="80px" alt="" /></a>
                        <button
                            id="navbarSupportedContentButton"
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded={isMenuOpen ? 'true' : 'false'}
                            aria-label="Toggle navigation"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>

                        <div className={`collapse navbar-collapse offset ${isMenuOpen ? 'show' : ''}`} id="navbarSupportedContent">
                            <ul className="nav navbar-nav menu_nav ml-auto ">
                                <li className="nav-item">
                                    <a
                                        className={`nav-link custom_menu ${isHome ? "active-menu-item" : ""}`}
                                        href="/"
                                        onClick={() => handleMainMenuClick("home")}
                                    >
                                        {t('menu_home')}
                                    </a>
                                </li>
                                <li className="nav-item submenu dropdown">

                                    <Link
                                        to="/category-page"
                                        className={`nav-link dropdown-toggle custom_menu ${activeMenuItem === "category" ? "active-menu-item" : ""}`}
                                        onClick={() => handleMainMenuClick("category")}
                                        data-toggle="dropdown" role="button"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        {t('menu_categries')}
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item"><Link className="nav-link custom_menu_sub" to="">{t('menu_featured')}</Link></li>
                                        <li className="nav-item"><Link className="nav-link custom_menu_sub" to="">{t('menu_clothes')}</Link></li>
                                        <li className="nav-item"><Link className="nav-link custom_menu_sub" to="">{t('menu_shoes')}</Link></li>
                                        <li className="nav-item"><Link className="nav-link custom_menu_sub" to="">{t('menu_accessories')}</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item submenu dropdown" >
                                    <Link
                                        to="/brand-page"
                                        className={`nav-link dropdown-toggle custom_menu ${activeMenuItem === "brand" ? "active-menu-item" : ""}`}
                                        onClick={() => handleMainMenuClick("brand")}
                                        data-toggle="dropdown"
                                        role="button"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        {t('menu_brands')}
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item"><Link className="nav-link custom_menu_sub" to="">nike</Link></li>
                                        <li className="nav-item"><Link className="nav-link custom_menu_sub" to="">adidas</Link></li>
                                        <li className="nav-item"><Link className="nav-link custom_menu_sub" to="">puma</Link></li>
                                        <li className="nav-item"><Link className="nav-link custom_menu_sub" to="">fila</Link></li>
                                        <li className="nav-item"><Link className="nav-link custom_menu_sub" to="">Champion</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        to="/news"
                                        className={`nav-link dropdown-toggle custom_menu ${activeMenuItem === "news" ? "active-menu-item" : ""}`}
                                        onClick={() => handleMainMenuClick("news")}
                                    >
                                        {t('menu_blogs')}
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className={`nav-link  custom_menu ${activeMenuItem === "contact" ? "active-menu-item" : ""}`}
                                        onClick={() => handleMainMenuClick("contact")}
                                        to="/contact">
                                        {t('menu_contact')}
                                    </Link>
                                </li>

                                {isLoggedIn ? (
                                    <li className="nav-item nav-item submenu dropdown">
                                        <Link className={`nav-link custom_menu custom_icon_logged ${activeMenuItem === "logged" ? "active-menu-item" : ""}`}
                                            onClick={() => handleMainMenuClick("logged")}
                                            to="/profile-customer"
                                        >
                                            <BiUserCircle className="icon_logged" />
                                        </Link>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link
                                                    className="nav-link custom_menu_sub"
                                                    to="/profile-customer"
                                                    onClick={() => handleMainMenuClick("logged")}
                                                >
                                                    {t('menu_profile')}
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link
                                                    className="nav-link custom_menu_sub"
                                                    to=""
                                                    onClick={() => handleMainMenuClick("logged")}
                                                >
                                                    {t('menu_change_pass')}
                                                </Link>
                                            </li>
                                            <li className="nav-item"><Link className="nav-link custom_menu_sub" onClick={handleLogout}>{t('menu_logout')}</Link></li>
                                        </ul>
                                    </li>
                                ) : (
                                    <li className="nav-item ">
                                        <Link
                                            className={`nav-link custom_menu ${activeMenuItem === "login" ? "active-menu-item" : ""}`}
                                            onClick={() => handleMainMenuClick("login")}
                                            to="/login-user">
                                            {t('menu_login')}
                                        </Link>
                                    </li>
                                )}


                            </ul>
                            <ul className="nav navbar-nav navbar-right ">
                                <li className="nav-item">
                                    {totalUniqueItems > 0 &&
                                        <Link
                                            className="cart custom_menu"
                                            to="/cart"
                                            onClick={() => handleMainMenuClick("cart")}
                                        >
                                            <span className={`ti-bag icon-cart ${activeMenuItem === "cart" ? "active-menu-item" : ""}`}></span>
                                            <span className="cart-count">{totalUniqueItems}</span>
                                        </Link>
                                    }
                                </li>
                                <li className="nav-item">
                                    <button className="search "><span className="lnr lnr-magnifier custom_menu" id="search"></span></button>
                                </li>
                                <li className="nav-item">
                                    <button
                                        className={`language ${currentLanguage === 'VI' ? 'active' : ''}`}
                                        onClick={() => handleLanguageChange("VI", "VI")}
                                    >
                                        VI
                                    </button>
                                    <span className="mid-language">|</span>
                                    <button
                                        className={`language ${currentLanguage === 'EN' ? 'active' : ''}`}
                                        onClick={() => handleLanguageChange("EN", "EN")}
                                    >
                                        EN
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div >
            <div className="search_input" id="search_input_box">
                <div className="container">
                    <form className="d-flex justify-content-between" >
                        <input type="text" className="form-control" id="search_input" placeholder={t('search_here')} />
                        <button type="submit" className="btn"></button>
                        <span className="lnr lnr-cross" id="close_search" title="Close Search" ></span>
                    </form>
                </div>
            </div>
        </header >

    );
};

export default memo(Header);