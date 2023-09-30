
import { Modal, Button, Image } from 'react-bootstrap';
import { memo } from "react";
import './style.scss';
import React, { useState, useEffect } from 'react';
import RelatedProductArea from "../theme/relatedProductArea";
import { Link } from 'react-router-dom';
import { CartProvider, useCart } from "react-use-cart";
import { Container, Col, Row } from 'react-bootstrap';


import bannerImg3 from '../../../style/img/banner/banner3.png';
import bannerImg2 from '../../../style/img/banner/banner2.png';
import bannerImg4 from '../../../style/img/banner/banner4.png';

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

import { useTranslation } from "react-i18next";
const HomePage = () => {
    const { t, i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState('VI');
    const handleLanguageChange = (newLanguage, lng) => {
        setCurrentLanguage(newLanguage)
        i18n.changeLanguage(lng);
    };
    const { addItem, updateItemQuantity } = useCart();
    const [showModal, setShowModal] = useState(false);
    const [quantity, setQuantity] = useState(1); // Khởi tạo số lượng ban đầu

    const product = [
        {
            id: "1",
            product_id: 1,
            status: 1,
            description: 'ok1',
            inventory: 1,
            product_name: 'giay nike',
            price: 10,
            category_id: 1,
            manufacturer_id: 1,
            img_src: product1,
        },
        {
            id: 2,
            product_id: 2,
            status: 2,
            description: 'ok2',
            inventory: 2,
            product_name: 'giay nike 2',
            price: 20,
            category_id: 2,
            manufacturer_id: 2,
            img_src: product1,
        },
        {
            id: 3,
            product_id: 3,
            status: 3,
            description: 'ok3',
            inventory: 3,
            product_name: 'giay nike 3',
            price: 103,
            category_id: 3,
            manufacturer_id: 3,
            img_src: product1,
        },

    ];

    return (<>
        <section class="banner-area d-block">
            <div class="container d-block">
                <div class="row fullscreen align-items-center justify-content-start">
                    <div class="col-lg-12">
                        <div class="active-banner-slider owl-carousel">
                            {/* <!-- single-slide --> */}
                            <div class="row single-slide align-items-center d-flex">
                                <div class="col-lg-5 col-md-6">
                                    <div class="banner-content">
                                        <h1>{t('banner_title1')}</h1>
                                        <p> {t('banner_content1')}</p>

                                    </div>
                                </div>
                                <div class="col-lg-7">
                                    <div class="banner-img">
                                        <img class="img-fluid" src={bannerImg2} alt='' />
                                    </div>
                                </div>
                            </div>
                            {/* <!-- single-slide --> */}
                            <div class="row single-slide align-items-center d-flex">
                                <div class="col-lg-5 col-md-6">
                                    <div class="banner-content">
                                        <h1>{t('banner_title2')}</h1>
                                        <p> {t('banner_content2')}</p>

                                    </div>
                                </div>
                                <div class="col-lg-7">
                                    <div class="banner-img">
                                        <img class="img-fluid" src={bannerImg3} alt='' />
                                    </div>
                                </div>
                            </div>
                            <div class="row single-slide align-items-center d-flex">
                                <div class="col-lg-5 col-md-6">
                                    <div class="banner-content">
                                        <h1>{t('banner_title3')}</h1>
                                        <p> {t('banner_content3')}</p>

                                    </div>
                                </div>
                                <div class="col-lg-7">
                                    <div class="banner-img">
                                        <img class="img-fluid" src={bannerImg4} alt='' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="features-area section_gap">
            <div class="container">
                <div class="row features-inner">
                    {/* <!-- single features --> */}
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="single-features">
                            <div class="f-icon">
                                <img src={FreeDeliveryImg} alt='' />
                            </div>
                            <h6>{t('free_delivery_title')}</h6>
                            <p>{t('free_delivery')}</p>
                        </div>
                    </div>
                    {/* <!-- single features --> */}
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="single-features">
                            <div class="f-icon">
                                <img src={ReturnPolicyImg} alt='' />
                            </div>
                            <h6>{t('return_policy_title')}</h6>
                            <p>{t('return_policy')}</p>
                        </div>
                    </div>
                    {/* <!-- single features --> */}
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="single-features">
                            <div class="f-icon">
                                <img src={SupportImg} alt='' />
                            </div>
                            <h6>{t('24/7_support_title')}</h6>
                            <p>{t('24/7_support')}</p>
                        </div>
                    </div>
                    {/* <!-- single features --> */}
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="single-features">
                            <div class="f-icon">
                                <img src={SecurePaymentImg} alt='' />
                            </div>
                            <h6>{t('secure_payment_title')}</h6>
                            <p>{t('secure_payment')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- end features Area -->

        <!-- Start category Area --> */}
        <section class="category-area">
            <Container>
                <Row className='justify-content-center'>
                    <div className='col-lg-8 col-md-12' >
                        <Row>
                            <div className='col-lg-8 col-md-8'>
                                <div class="single-deal">
                                    <div class="overlay"></div>
                                    <img class="img-fluid w-100" src={category1} alt="" />
                                    <Link class="img-pop-up" target="_blank" to={"#"}>
                                        <div class="deal-details">
                                            <h6 class="deal-title">{t('category_featured')}</h6>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-4'>
                                <div class="single-deal">
                                    <div class="overlay"></div>
                                    <img class="img-fluid w-100" src={category2} alt="" />
                                    <Link class="img-pop-up" target="_blank" to={"#"}>
                                        <div class="deal-details">
                                            <h6 class="deal-title">{t('category_clothes')}</h6>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-4'>
                                <div class="single-deal">
                                    <div class="overlay"></div>
                                    <img class="img-fluid w-100" src={category3} alt="" />
                                    <Link class="img-pop-up" target="_blank" to={"#"}>
                                        <div class="deal-details">
                                            <h6 class="deal-title">{t('category_accessories')}</h6>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className='col-lg-8 col-md-8'>
                                <div class="single-deal">
                                    <div class="overlay"></div>
                                    <img class="img-fluid w-100" src={category4} alt="" />
                                    <Link class="img-pop-up" target="_blank" to={"#"}>
                                        <div class="deal-details">
                                            <h6 class="deal-title">{t('category_shoes')}</h6>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </Row>
                    </div>
                    <div className='col-lg-4 col-md-6'>
                        <div class="single-deal">
                            <div class="overlay"></div>
                            <img class="img-fluid w-100" src={category5} alt="" />
                            <Link class="img-pop-up" target="_blank" to={"#"}>
                                <div class="deal-details">
                                    <h6 class="deal-title">{t('category_sale')}</h6>
                                </div>
                            </Link>
                        </div>
                    </div>
                </Row>
            </Container>
        </section >
        {/* <!-- End category Area -->

        <!-- start product Area --> */}
        < section class="owl-carousel active-product-area section_gap" >
            {/*  <!-- single product slide -->  */}
            < div class="single-product-slider" >
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-6 text-center">
                            <div class="section-title">
                                <h1>{t('lastest_product')}</h1>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        {product.map((item) => (

                            < div class="col-lg-3 col-md-6" key={item.product_id}>
                                <div class="single-product" >
                                    <img class="img-fluid" src={item.img_src} alt="" />
                                    <div class="product-details">
                                        <h6>{item.product_name}</h6>
                                        <div class="price">
                                            <h6>${item.price}</h6>
                                            <h6 class="l-through">${item.price}</h6>
                                        </div>
                                        <div class="prd-bottom">
                                            <Link class="social-info" onClick={() => addItem(item)} href="#">
                                                <span class="ti-bag"></span>
                                                <p class="hover-text">{t('add_to_bag')}</p>
                                            </Link>
                                            <Link to={''} class="social-info">
                                                <span class="lnr lnr-heart"></span>
                                                <p class="hover-text">{t('wishlist')}</p>
                                            </Link>
                                            <Link to={''} className="social-info" onClick={() => setShowModal(item.product_id)}>
                                                <span className="lnr lnr-eye" ></span>
                                                <p className="hover-text" >
                                                    {t('quick_view')}
                                                </p>
                                            </Link>
                                            <Link to='/product-detail' class="social-info">
                                                <span class="lnr lnr-move"></span>
                                                <p class="hover-text">{t('view_more')}</p>
                                            </Link>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div >
            {/* <!-- single product slide --> */}
            < div class="single-product-slider" >
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-6 text-center">
                            <div class="section-title">
                                <h1>{t('comming_product')}</h1>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        {product.map((item) => (

                            < div class="col-lg-3 col-md-6" key={item.product_id}>
                                <div class="single-product" >
                                    <img class="img-fluid" src={item.img_src} alt="" />
                                    <div class="product-details">
                                        <h6>{item.product_name}</h6>
                                        <div class="price">
                                            <h6>${item.price}</h6>
                                            <h6 class="l-through">${item.price}</h6>
                                        </div>
                                        <div class="prd-bottom">
                                            <Link class="social-info" onClick={() => addItem(item)} href="#">
                                                <span class="ti-bag"></span>
                                                <p class="hover-text">{t('add_to_bag')}</p>
                                            </Link>
                                            <Link to={''} class="social-info">
                                                <span class="lnr lnr-heart"></span>
                                                <p class="hover-text">{t('wishlist')}</p>
                                            </Link>
                                            <Link to={''} className="social-info" onClick={() => setShowModal(item.product_id)}>
                                                <span className="lnr lnr-eye" ></span>
                                                <p className="hover-text" >
                                                    {t('quick_view')}
                                                </p>
                                            </Link>
                                            <Link to='/product-detail' class="social-info">
                                                <span class="lnr lnr-move"></span>
                                                <p class="hover-text">{t('view_more')}</p>
                                            </Link>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div >
        </section >


        {/* <!-- Start brand Area --> */}
        < section class="brand-area section_gap" >
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
        </section >
        < RelatedProductArea />
        {product.map((item) => (
            <Modal show={showModal === item.product_id} onHide={() => setShowModal(false)} key={item.product_id}>
                <Modal.Header >

                </Modal.Header>
                <Modal.Body className="set_width_modal" key={item.id}>
                    <div class="container relative">
                        <div class="product-quick-view">
                            <div class="row align-items-center">
                                <div class="col-lg-6">
                                    <div class="quick-view-carousel">
                                        <img src={item.img_src} alt="" class="item" width={200} />
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="quick-view-content">
                                        <div class="top">
                                            <h3 class="head">{item.product_name}</h3>
                                            <div class="price d-flex align-items-center">
                                                <span class="lnr lnr-tag"></span>
                                                <span class="ml-10">${item.price}</span>
                                            </div>
                                            <div class="price d-flex align-items-center">
                                                <span class="lnr lnr-tag"></span>
                                                <span class="ml-10 l-through">${item.price}</span>
                                            </div>

                                            <div class="category">Category: <span>Household</span></div>
                                            <div class="available">Availibility: <span>In Stock</span></div>
                                        </div>
                                        <div class="middle">
                                            <p >{item.description}</p>
                                            <Link to='/product-detail' class="view-full">View full Details <span class="lnr lnr-arrow-right"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button className="btn_add_to_card" onClick={() => addItem(item)}>
                        {t('add_to_bag')}
                    </Button>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        {t('close')}
                    </Button>

                </Modal.Footer>
            </Modal>

        ))}


    </>);
};

export default memo(HomePage);