import {
    Box,
    Button,
    Card,
    Grid,
    Image,
    Text,
    Avatar,
    CloseButton
} from '@mantine/core';
import Modal from 'react-modal';
import { memo } from "react";
import './style.scss';
import React, { useState, useEffect } from 'react';
import RelatedProductArea from "../theme/relatedProductArea";
import { Link } from 'react-router-dom';
import { AiFillEye, AiOutlineShopping } from "react-icons/ai";
import { CartProvider, useCart } from "react-use-cart";

import bannerImg from '../../../style/img/banner/banner-img.png';
import FreeDeliveryImg from '../../../style/img/features/f-icon1.png';
import ReturnPolicyImg from '../../../style/img/features/f-icon2.png';
import SupportImg from '../../../style/img/features/f-icon3.png';
import SecurePaymentImg from '../../../style/img/features/f-icon4.png';

import category1 from '../../../style/img/category/c1.jpg';
import category2 from '../../../style/img/category/c2.jpg';
import category3 from '../../../style/img/category/c3.jpg';
import category4 from '../../../style/img/category/c4.jpg';
import category5 from '../../../style/img/category/c5.jpg';

import product1 from '../../../style/img/product/p6.jpg';

import brand1 from '../../../style/img/brand/1.png';
import brand2 from '../../../style/img/brand/2.png';
import brand3 from '../../../style/img/brand/3.png';
import brand4 from '../../../style/img/brand/4.png';
import brand5 from '../../../style/img/brand/5.png';

import r1 from '../../../style/img/r1.jpg';

const HomePage = () => {
    const { addItem } = useCart();


    return (<>
        <section class="banner-area">
            <div class="container">
                <div class="row fullscreen align-items-center justify-content-start">
                    <div class="col-lg-12">
                        <div class="active-banner-slider owl-carousel">
                            {/* <!-- single-slide --> */}
                            <div class="row single-slide align-items-center d-flex">
                                <div class="col-lg-5 col-md-6">
                                    <div class="banner-content">
                                        <h1>Nike New  Collection!</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                            incididunt ut labore et
                                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                                        <div class="add-bag d-flex align-items-center">
                                            <a class="add-btn" href=""><span class="lnr lnr-cross"></span></a>
                                            <span class="add-text text-uppercase">Add to Bag</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-7">
                                    <div class="banner-img">
                                        <Image class="img-fluid" src={bannerImg} alt='' />
                                    </div>
                                </div>
                            </div>
                            {/* <!-- single-slide --> */}
                            <div class="row single-slide">
                                <div class="col-lg-5">
                                    <div class="banner-content">
                                        <h1>Nike New Collection!</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                            incididunt ut labore et
                                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                                        <div class="add-bag d-flex align-items-center">
                                            <a class="add-btn" href=""><span class="lnr lnr-cross"></span></a>
                                            <span class="add-text text-uppercase">Add to Bag</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-7">
                                    <div class="banner-img">
                                        <Image class="img-fluid" src={bannerImg} alt='' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- End banner Area -->

        <!-- start features Area --> */}
        <section class="features-area section_gap">
            <div class="container">
                <div class="row features-inner">
                    {/* <!-- single features --> */}
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="single-features">
                            <div class="f-icon">
                                <img src={FreeDeliveryImg} alt='' />
                            </div>
                            <h6>Free Delivery</h6>
                            <p>Free Shipping on all order</p>
                        </div>
                    </div>
                    {/* <!-- single features --> */}
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="single-features">
                            <div class="f-icon">
                                <img src={ReturnPolicyImg} alt='' />
                            </div>
                            <h6>Return Policy</h6>
                            <p>Free Shipping on all order</p>
                        </div>
                    </div>
                    {/* <!-- single features --> */}
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="single-features">
                            <div class="f-icon">
                                <img src={SupportImg} alt='' />
                            </div>
                            <h6>24/7 Support</h6>
                            <p>Free Shipping on all order</p>
                        </div>
                    </div>
                    {/* <!-- single features --> */}
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="single-features">
                            <div class="f-icon">
                                <img src={SecurePaymentImg} alt='' />
                            </div>
                            <h6>Secure Payment</h6>
                            <p>Free Shipping on all order</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- end features Area -->

        <!-- Start category Area --> */}
        <section class="category-area">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8 col-md-12">
                        <div class="row">
                            <div class="col-lg-8 col-md-8">
                                <div class="single-deal">
                                    <div class="overlay"></div>
                                    <Image class="img-fluid w-100" src={category1} alt="" />
                                    <Link class="img-pop-up" target="_blank" to={"#"}>
                                        <div class="deal-details">
                                            <h6 class="deal-title">Sneaker for Sports</h6>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-4">
                                <div class="single-deal">
                                    <div class="overlay"></div>
                                    <Image class="img-fluid w-100" src={category2} alt="" />
                                    <Link class="img-pop-up" target="_blank" to={"#"}>
                                        <div class="deal-details">
                                            <h6 class="deal-title">Sneaker for Sports</h6>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-4">
                                <div class="single-deal">
                                    <div class="overlay"></div>
                                    <Image class="img-fluid w-100" src={category3} alt="" />
                                    <Link class="img-pop-up" target="_blank" to={"#"}>
                                        <div class="deal-details">
                                            <h6 class="deal-title">Sneaker for Sports</h6>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div class="col-lg-8 col-md-8">
                                <div class="single-deal">
                                    <div class="overlay"></div>
                                    <Image class="img-fluid w-100" src={category4} alt="" />
                                    <Link class="img-pop-up" target="_blank" to={"#"}>
                                        <div class="deal-details">
                                            <h6 class="deal-title">Sneaker for Sports</h6>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="single-deal">
                            <div class="overlay"></div>
                            <Image class="img-fluid w-100" src={category5} alt="" />
                            <Link class="img-pop-up" target="_blank" to={"#"}>
                                <div class="deal-details">
                                    <h6 class="deal-title">Sneaker for Sports</h6>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- End category Area -->

        <!-- start product Area --> */}
        <section class="owl-carousel active-product-area section_gap">
            {/*  <!-- single product slide -->  */}
            <div class="single-product-slider">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-6 text-center">
                            <div class="section-title">
                                <h1>Lastest Products</h1>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        {/* <!-- single product --> */}
                        <div class="col-lg-3 col-md-6">
                            <div class="single-product">
                                <Image class="img-fluid" src={product1} alt="" />
                                <div class="product-details">
                                    <h6>addidas New Hammer sole
                                        for Sports person
                                    </h6>
                                    <div class="price">
                                        <h6>$150.00</h6>
                                        <h6 class="l-through">$210.00</h6>
                                    </div>
                                    <div class="prd-bottom">
                                        <Link to={''} class="social-info">
                                            <span class="ti-bag"></span>
                                            <p class="hover-text">Add to bag</p>
                                        </Link>
                                        <Link to={''} class="social-info">
                                            <span class="lnr lnr-heart"></span>
                                            <p class="hover-text">Wishlist</p>
                                        </Link>
                                        <Link to={''} class="social-info">
                                            <span class="lnr lnr-move"></span>
                                            <p class="hover-text">view more</p>
                                        </Link>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* <!-- single product slide --> */}
            <div class="single-product-slider">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-6 text-center">
                            <div class="section-title">
                                <h1>Coming Products</h1>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        {/* <!-- single product --> */}
                        <div class="col-lg-3 col-md-6">
                            <div class="single-product">
                                <Image class="img-fluid" src={product1} alt="" />
                                <div class="product-details">
                                    <h6>addidas New Hammer sole
                                        for Sports person
                                    </h6>
                                    <div class="price">
                                        <h6>$150.00</h6>
                                        <h6 class="l-through">$210.00</h6>
                                    </div>
                                    <div class="prd-bottom">
                                        <Link to={''} class="social-info">
                                            <span class="ti-bag"></span>
                                            <p class="hover-text">Add to bag</p>
                                        </Link>
                                        <Link to={''} class="social-info">
                                            <span class="lnr lnr-heart"></span>
                                            <p class="hover-text">Wishlist</p>
                                        </Link>
                                        <Link to={''} class="social-info">
                                            <span class="lnr lnr-move"></span>
                                            <p class="hover-text">view more</p>
                                        </Link>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        {/* <!-- Start brand Area --> */}
        <section class="brand-area section_gap">
            <div class="container">
                <div class="row">
                    <Link class="col single-img" to={''}>
                        <img class="img-fluid d-block mx-auto" src={brand1} alt="" />
                    </Link>
                    <Link class="col single-img" to={''}>
                        <img class="img-fluid d-block mx-auto" src={brand2} alt="" />
                    </Link>
                    <Link class="col single-img" to={''}>
                        <img class="img-fluid d-block mx-auto" src={brand3} alt="" />
                    </Link>
                    <Link class="col single-img" to={''}>
                        <img class="img-fluid d-block mx-auto" src={brand4} alt="" />
                    </Link>
                    <Link class="col single-img" to={''}>
                        <img class="img-fluid d-block mx-auto" src={brand5} alt="" />
                    </Link>
                </div>
            </div>
        </section>
        {/* <!-- End brand Area --> */}
        <RelatedProductArea />

    </>);
};

export default memo(HomePage);