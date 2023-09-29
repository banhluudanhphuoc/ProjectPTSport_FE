import { memo, useState, useEffect } from "react";
import './style.scss';
import { Link } from "react-router-dom";
import logo from './logo192.png';
import { AiOutlineSearch, AiOutlineUser, AiOutlineShopping, BiUserCircle } from "react-icons/ai";
import { ROUTERS } from "utils/router";
import { CartProvider, useCart } from "react-use-cart";
import { Image } from "react-bootstrap";
import { useTranslation } from "react-i18next";
const Header = () => {
    const { t, i18n } = useTranslation();
    // const changeLanguage = lng => {
    //     i18n.changeLanguage(lng);
    // };
    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
    } = useCart();

    const [currentLanguage, setCurrentLanguage] = useState('VI');

    const handleLanguageChange = (newLanguage, lng) => {
        setCurrentLanguage(newLanguage)
        i18n.changeLanguage(lng);
    };


    return (

        <header class="header_area sticky-header">
            <div class="main_menu">
                <nav class="navbar navbar-expand-lg navbar-light main_box">
                    <div class="container">
                        <a class="navbar-brand logo_h" href='/' ><Image src={logo} width="80px" alt="" /></a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>

                        <div class="collapse navbar-collapse offset" id="navbarSupportedContent">
                            <ul class="nav navbar-nav menu_nav ml-auto ">

                                <li class="nav-item active"><a class="nav-link custom_menu" href="/">{t('menu_home')}</a></li>
                                <li class="nav-item submenu dropdown">
                                    <Link to="/category-page" className="nav-link dropdown-toggle custom_menu" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                        {t('menu_categries')}
                                    </Link>
                                    <ul class="dropdown-menu">
                                        <li class="nav-item"><Link class="nav-link custom_menu_sub" to="">{t('menu_featured')}</Link></li>
                                        <li class="nav-item"><Link class="nav-link custom_menu_sub" to="">{t('menu_clothes')}</Link></li>
                                        <li class="nav-item"><Link class="nav-link custom_menu_sub" to="">{t('menu_shoes')}</Link></li>
                                        <li class="nav-item"><Link class="nav-link custom_menu_sub" to="">{t('menu_accessories')}</Link></li>
                                    </ul>
                                </li>
                                <li class="nav-item submenu dropdown">
                                    <Link to="/category-page" className="nav-link dropdown-toggle custom_menu" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                        {t('menu_brands')}
                                    </Link>
                                    <ul class="dropdown-menu">
                                        <li class="nav-item"><Link class="nav-link custom_menu_sub" to="">nike</Link></li>
                                        <li class="nav-item"><Link class="nav-link custom_menu_sub" to="">adidas</Link></li>
                                        <li class="nav-item"><Link class="nav-link custom_menu_sub" to="">puma</Link></li>
                                        <li class="nav-item"><Link class="nav-link custom_menu_sub" to="">fila</Link></li>
                                        <li class="nav-item"><Link class="nav-link custom_menu_sub" to="">Champion</Link></li>
                                    </ul>
                                </li>
                                <li class="nav-item submenu dropdown">
                                    <Link to="/blogs" className="nav-link dropdown-toggle custom_menu" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                        Blog
                                    </Link>
                                </li>
                                <li class="nav-item"><Link class="nav-link custom_menu" to="/contact">{t('menu_contact')}</Link></li>
                                <li class="nav-item"><Link class="nav-link custom_menu" to="/login-user">{t('menu_login')}</Link></li>
                            </ul>
                            <ul class="nav navbar-nav navbar-right ">
                                <li class="nav-item">
                                    <Link className="cart custom_menu" to="/cart">
                                        <span class="ti-bag icon-cart"></span>
                                        {totalUniqueItems > 0 && <span className="cart-count">{totalUniqueItems}</span>}
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <button class="search "><span class="lnr lnr-magnifier custom_menu" id="search"></span></button>
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
            </div>
            <div class="search_input" id="search_input_box">
                <div class="container">
                    <form class="d-flex justify-content-between" >
                        <input type="text" class="form-control" id="search_input" placeholder="Search Here" />
                        <button type="submit" class="btn"></button>
                        <span class="lnr lnr-cross" id="close_search" title="Close Search" ></span>
                    </form>
                </div>
            </div>
        </header>

    );
};

export default memo(Header);