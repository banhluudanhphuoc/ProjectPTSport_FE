import { memo, useState, useEffect } from "react";
import './style.scss';
import { Link } from "react-router-dom";
import logo from './logo192.png';
import { AiOutlineSearch, AiOutlineUser, AiOutlineShopping, BiUserCircle } from "react-icons/ai";
import { ROUTERS } from "utils/router";
import { CartProvider, useCart } from "react-use-cart";
import { Image } from "react-bootstrap";


const Header = () => {

    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
    } = useCart();


    return (

        <header class="header_area sticky-header">
            <div class="main_menu">
                <nav class="navbar navbar-expand-lg navbar-light main_box">
                    <div class="container">
                        <Link class="navbar-brand logo_h" to={''}><Image src={logo} width="80px" alt="" /></Link>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>

                        <div class="collapse navbar-collapse offset" id="navbarSupportedContent">
                            <ul class="nav navbar-nav menu_nav ml-auto ">
                                <li class="nav-item active"><a class="nav-link custom_menu" href="index.html">Home</a></li>
                                <li class="nav-item submenu dropdown">
                                    <Link className="nav-link dropdown-toggle custom_menu" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                        Shop
                                    </Link>
                                    <ul class="dropdown-menu">
                                        <li class="nav-item"><a class="nav-link custom_menu_sub" href="category.html">Shop Category</a></li>
                                        <li class="nav-item"><a class="nav-link custom_menu_sub" href="single-product.html">Product Details</a></li>
                                        <li class="nav-item"><a class="nav-link custom_menu_sub" href="checkout.html">Product Checkout</a></li>
                                        <li class="nav-item"><a class="nav-link custom_menu_sub" href="cart.html">Shopping Cart</a></li>
                                        <li class="nav-item"><a class="nav-link custom_menu_sub" href="confirmation.html">Confirmation</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item submenu dropdown">
                                    <Link className="nav-link dropdown-toggle custom_menu" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                        Blog
                                    </Link>
                                    <ul class="dropdown-menu">
                                        <li class="nav-item"><a class="nav-link custom_menu_sub" href="blog.html">Blog</a></li>
                                        <li class="nav-item"><a class="nav-link custom_menu_sub" href="single-blog.html">Blog Details</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item submenu dropdown">
                                    <Link className="nav-link dropdown-toggle custom_menu custom_menu" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                                        Pages
                                    </Link>
                                    <ul class="dropdown-menu">
                                        <li class="nav-item"><a class="nav-link custom_menu_sub" href="login.html">Login</a></li>
                                        <li class="nav-item"><a class="nav-link custom_menu_sub" href="tracking.html">Tracking</a></li>
                                        <li class="nav-item"><a class="nav-link custom_menu_sub" href="elements.html">Elements</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item"><a class="nav-link custom_menu" href="contact.html">Contact</a></li>
                            </ul>
                            <ul class="nav navbar-nav navbar-right">
                                <li class="nav-item"><Link className="cart custom_menu"><span class="ti-bag"></span></Link></li>
                                <li class="nav-item">
                                    <button class="search "><span class="lnr lnr-magnifier custom_menu" id="search"></span></button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div class="search_input" id="search_input_box">
                <div class="container">
                    <form class="d-flex justify-content-between">
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