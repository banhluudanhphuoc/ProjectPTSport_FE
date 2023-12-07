import { memo, useState, useEffect, useRef } from "react";
import './style.scss';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import logo from './logo192.png';
import { BiUserCircle } from "react-icons/bi";
import { ROUTERS } from "utils/router";
import { Image } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Cookies from 'js-cookie';
import axios from 'axios';
import { IoHeartCircle } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { CartProvider, useCart } from "react-use-cart";
const Header = ({ isHome }) => {

    const {
        emptyCart,
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
    } = useCart();
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState('VI');
    const handleLanguageChange = (newLanguage, lng) => {
        setCurrentLanguage(newLanguage)
        i18n.changeLanguage(lng);
    };
    const [isSearchVisible, setIsSearchVisible] = useState(false);

    const toggleSearch = () => {
        setIsSearchVisible(!isSearchVisible);
    };


    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const [activeMenuItem, setActiveMenuItem] = useState(null);

    const handleMainMenuClick = (mainMenuId) => {
        setActiveMenuItem(mainMenuId);
    };


    const userToken = Cookies.get('userToken');
    const auth = process.env.REACT_APP_API_URL_AUTH;
    const api = process.env.REACT_APP_API_URL;


    const handleLogout = async () => {

        try {
            // if (totalItemOnCart) {
            //     const response2 = await axios.delete(api + "/cart/delete-cart/" + user.userId, {
            //         headers: {
            //             'Authorization': `Bearer ${userToken}`,
            //         },
            //     });
            // }


            // Gửi yêu cầu đến endpoint logout của API
            const response = await axios.get(
                auth + '/logout',
                {
                    headers: {
                        'Authorization': `Bearer ${userToken}`,
                    },
                }
            );

            if (response.status === 200) {
                Cookies.remove('userToken');
                window.location.href = '/login-user';
                //  emptyCart();
            } else {
                console.error('Logout failed:', response.data);
            }
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };
    const [categories, setCategories] = useState([]);
    const [brands, setBrands] = useState([]);



    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await axios.get(api + `/search/${searchTerm}`);
                setSearchResults(response.data);
            } catch (error) {
                console.error('Error fetching search results:', error);
            }
        };


        if (searchTerm.trim() !== '') {
            fetchData();
        } else {
            setSearchResults([]);
        }
    }, []);
    function formatCurrency(amount) {
        // Sử dụng NumberFormat để định dạng số
        const formatter = new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
        });

        // Áp dụng định dạng và trả về chuỗi đã định dạng
        return formatter.format(amount);
    }

    const [user, setUser] = useState([]);
    const [productsWishListCount, setProductsWishListCount] = useState([]);
    const [totalItemOnCart, setTotalItemOnCart] = useState([]);
    useEffect(() => {
        const userToken = Cookies.get('userToken');
        const fetchCategories = async () => {
            try {
                const response = await axios.get(api + '/categories');

                // Xử lý phản hồi từ server (response.data)
                setCategories(response.data);
            } catch (error) {
                // Xử lý lỗi
                console.error('Error fetching categories:', error);
            }
        };
        const fetchBrands = async () => {
            try {
                const response = await axios.get(api + '/catalogs');

                // Xử lý phản hồi từ server (response.data)
                setBrands(response.data);
            } catch (error) {
                // Xử lý lỗi
                console.error('Error fetching categories:', error);
            }
        };
        fetchBrands();
        fetchCategories();

        if (userToken) {
            const fetchMe = async () => {
                try {
                    const response = await axios.get(auth + '/me', {
                        headers: {
                            'Authorization': `Bearer ${userToken}`,
                            'Content-Type': 'application/json',
                        }
                    });

                    setUser(response.data);

                    // Call fetchProducts after setUser
                    fetchProductsWishList(response.data.userId);
                } catch (error) {
                    console.error('Error fetching Brand:', error);
                }
            };

            const fetchProductsWishList = async (userId) => {
                try {
                    const response = await axios.get(api + '/wish-list/' + userId, {
                        headers: {
                            'Authorization': `Bearer ${userToken}`,
                            'Content-Type': 'application/json',
                        }
                    });

                    setProductsWishListCount(response.data.productDtos.length);
                } catch (error) {
                    console.error('Error fetching products:', error);
                }
            };



            fetchMe();
        }

    }, [api, auth]);





    return (

        <header className="header_area sticky-header">
            <div className="main_menu">
                <nav className="navbar navbar-expand-lg navbar-light main_box">
                    <div className="container">
                        <a className="navbar-brand logo_h " href='/' ><Image src={logo} width="80px" alt="" /></a>
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
                            <ul className="nav navbar-nav menu_nav ml-auto">
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
                                        data-toggle="dropdown"
                                        role="button"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        {t('menu_categries')}
                                    </Link>
                                    <ul className="dropdown-menu">
                                        {categories.map(category => (
                                            <li className="nav-item"><Link className="nav-link custom_menu_sub" to={`/category-page/` + category.categoryID}>{category.categoryName}</Link></li>
                                        ))}


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
                                        {brands.map(brand => (
                                            <li className="nav-item"><Link className="nav-link custom_menu_sub" to={`/brand-page/` + brand.catalogId}>{brand.catalogName}</Link></li>
                                        ))}
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

                                <li className="nav-item submenu dropdown">
                                    {userToken ? (
                                        // If the user is logged in, render the dropdown menu
                                        <>
                                            <Link
                                                className={`nav-link custom_menu dropdown-toggle custom_icon_logged ${activeMenuItem === "logged" ? "active-menu-item" : ""}`}
                                                onClick={() => handleMainMenuClick("logged")}
                                                data-toggle="dropdown"
                                                role="button"
                                                aria-haspopup="true"
                                                aria-expanded="false"
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
                                                        to="/change-password"
                                                        onClick={() => handleMainMenuClick("logged")}
                                                    >
                                                        {t('menu_change_pass')}
                                                    </Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link
                                                        className="nav-link custom_menu_sub"
                                                        onClick={handleLogout}
                                                    >
                                                        {t('menu_logout')}
                                                    </Link>
                                                </li>
                                            </ul>
                                        </>
                                    ) : (
                                        // If the user is not logged in, render the login link
                                        <Link
                                            className={`nav-link custom_menu ${activeMenuItem === "login" ? "active-menu-item" : ""}`}
                                            onClick={() => handleMainMenuClick("login")}
                                            to="/login-user"
                                        >
                                            {t('menu_login')}
                                        </Link>
                                    )}
                                </li>

                                <li className="nav-item">
                                    {userToken && productsWishListCount > 0 &&
                                        <Link
                                            className={`nav-link  custom_menu ${activeMenuItem === "wish-list" ? "active-menu-item" : ""}`}
                                            onClick={() => handleMainMenuClick("wish-list")}
                                            to="/wish-list">
                                            <span className={`icon-wish-list ${activeMenuItem === "wish-list" ? "active-menu-item" : ""}`}><IoHeartCircle /></span>
                                            <span className="star-count">{productsWishListCount}</span>
                                        </Link>
                                    }
                                </li>


                                <li className="nav-item submenu dropdown">
                                    {userToken && totalUniqueItems > 0 &&
                                        <Link
                                            className="cart custom_menu"
                                            to="/cart"
                                            onClick={() => handleMainMenuClick("cart")}
                                        >
                                            <span className={`icon-cart ${activeMenuItem === "cart" ? "active-menu-item" : ""}`}><FaShoppingCart /></span>
                                            <span className="cart-count">{totalUniqueItems}</span>
                                        </Link>
                                    }
                                </li>
                                <li className="nav-item">
                                    <button className="search" onClick={toggleSearch}><span className="lnr lnr-magnifier custom_menu" id="search"></span></button>
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
                            {/* <ul className="nav navbar-nav navbar-right">


                            </ul> */}
                        </div>
                    </div>
                </nav>
            </div >
            {isSearchVisible && (
                <div className="search_input" id="search_input_box">
                    <div className="container">
                        <form className="d-flex justify-content-between">
                            <input
                                type="text"
                                className="form-control"
                                id="search_input"
                                placeholder={t('search_here')}
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <span
                                className="lnr lnr-cross"
                                id="close_search"
                                title="Close Search"
                                onClick={toggleSearch}
                            ></span>
                        </form>


                        {searchResults && searchResults.length > 0 ? (
                            <div className="search-results">
                                <div className="scrollable-results">
                                    <div className="row">
                                        {searchResults.map((result) => (
                                            <div className="col-lg-4 col-md-4 col-sm-6" key={result.id}>
                                                <div className="single-related-product d-flex single-result-search-item">
                                                    <Link to={'/product-detail/' + result.id} onClick={toggleSearch}><img src={result.listImage[0].path} alt="" width={"100px"} /></Link>
                                                    <div className="desc">
                                                        <Link className="title" to={'/product-detail/' + result.id}>
                                                            {result.name}
                                                        </Link>
                                                        <div className="price">
                                                            <h6>{formatCurrency(result.price)}</h6>
                                                            {/* <h6 className="l-through">$210.00</h6> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        ))}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="search-results">{t('search_result_found')}</div>
                        )}
                    </div>
                </div>
            )}

        </header >

    );
};

export default memo(Header);