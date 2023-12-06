import { memo, useEffect, useState } from "react";
import RelatedProductArea from "../theme/relatedProductArea";
import './style.scss';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import ProductItem from "components/user/items/ProductItem";
import ProductModal from "components/user/modal/ProductModal";
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import bannerImg2 from '../../../style/img/banner/banner2.png';
import bannerImg3 from '../../../style/img/banner/banner3.png';
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

import axios from 'axios';
import Cookies from 'js-cookie';
import brand1 from '../../../style/img/brand/1.png';
import brand2 from '../../../style/img/brand/2.png';
import brand3 from '../../../style/img/brand/3.png';
import brand4 from '../../../style/img/brand/4.png';
import brand5 from '../../../style/img/brand/5.png';

import { NotificationContainer, NotificationManager } from 'react-notifications';
import { useNavigate } from 'react-router-dom';

import { useTranslation } from "react-i18next";
import 'react-notifications/lib/notifications.css';
import { useCart } from "react-use-cart";

import MyChatComponent from 'components/user/facebook/chat';
// import MyChatComponent from 'components/user/chat';

const HomePage = () => {

    const { addItem, items } = useCart();
    const userToken = Cookies.get('userToken');
    const { t, i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState('VI');
    const handleLanguageChange = (newLanguage, lng) => {
        setCurrentLanguage(newLanguage)
        i18n.changeLanguage(lng);
    };

    const [showModal, setShowModal] = useState(false);
    const [products, setProducts] = useState([]);
    const api = process.env.REACT_APP_API_URL;
    const navigate = useNavigate();
    const nike = process.env.REACT_APP_BRAND_NIKE;
    const puma = process.env.REACT_APP_BRAND_PUMA;
    const adidas = process.env.REACT_APP_BRAND_ADIDAS;
    const fila = process.env.REACT_APP_BRAND_FILA;
    const champion = process.env.REACT_APP_BRAND_CHAMPION;
    const clothes = process.env.REACT_APP_CATEGORY_CLOTHES;
    const shoes = process.env.REACT_APP_CATEGORY_SHOES;
    const equiment = process.env.REACT_APP_CATEGORY_EQUIMENT;

    const auth = process.env.REACT_APP_API_URL_AUTH;

    const [cart, setCart] = useState([]);
    const addToCart = (cartItem, cartItem2) => {
        fetch(api + `/cart/${user.userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(cartItem),
        })
            .then((response) => response.json())
            .then((data) => {
                setCart(data.itemList);
            })
            .catch((error) => {
                console.error('Error adding to cart:', error);
            });
        addItem(cartItem2);
    };


    const handleAddToCart = (item) => {
        if (!userToken) {
            NotificationManager.error(t('message_fail_add_to_cart'), t('message_failed'));
        } else {
            const productInCart = items.find(cartItem => cartItem.id === item.id);
            if (productInCart) {
                if (productInCart.quantity + 1 > item.totalQuantity) {
                    NotificationManager.error(t('message_total_quantity'));
                } else {
                    const cartItem2 = {
                        id: item.id,
                        productName: item.name,
                        sizeID: 2,
                        colorID: 2,
                        image: item.listImage[0].path,
                        quantity: 1,
                        price: item.discountedPrice,
                        totalPrice: item.discountedPrice,
                        //discountedPrice: item.discountedPrice,
                    };
                    const cartItem = {
                        productID: item.id, // ID thực của sản phẩm
                        productName: item.name,
                        sizeID: 2,
                        colorID: 2,
                        //image: item.listImage[0].path,
                        quantity: 1,
                        //price: item.price,
                        //totalPrice: item.price,
                        //discountedPrice: item.discountedPrice,
                    };
                    addToCart(cartItem, cartItem2);

                    // Hiển thị thông báo thành công
                    NotificationManager.success(t('notification_add_product_to_cart_success'), t('notification_add_product_to_cart_success_title'), 3000, () => {
                        navigate("/cart");
                    });
                }
            } else {
                const cartItem2 = {
                    id: item.id,
                    productName: item.name,
                    sizeID: 2,
                    colorID: 2,
                    image: item.listImage[0].path,
                    quantity: 1,
                    price: item.discountedPrice,
                    totalPrice: item.discountedPrice,
                    //discountedPrice: item.discountedPrice,
                };
                const cartItem = {
                    productID: item.id, // ID thực của sản phẩm
                    productName: item.name,
                    sizeID: 2,
                    colorID: 2,
                    //image: item.listImage[0].path,
                    quantity: 1,
                    //price: item.price,
                    //totalPrice: item.price,
                    //discountedPrice: item.discountedPrice,
                };
                addToCart(cartItem, cartItem2);

                // Hiển thị thông báo thành công
                NotificationManager.success(t('notification_add_product_to_cart_success'), t('notification_add_product_to_cart_success_title'), 3000, () => {
                    navigate("/cart");
                });
            }


        }
    };


    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(api + '/products', { maxRedirects: 5 });
                // console.log(response);
                // console.log(response.status);
                // Lấy 8 sản phẩm đầu tiên từ mảng contents
                const contents = response.data.contents;

                // Check if contents is defined and not empty
                if (contents && contents.length > 0) {
                    const first8Products = contents.slice(0, 8);
                    setProducts(first8Products);
                } else {
                    // Handle the case where contents is undefined or empty
                    console.error('No products available in the respons');
                }

            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchProducts();
        console.log(products);
    }, [api, products]);

    const [user, setUser] = useState([]);
    const [productsWishList, setProductsWishList] = useState([]);

    const isProductInWishlist = (wishlist, productId) => {
        return wishlist.some(product => product.id === productId);
    };


    useEffect(() => {
        const userToken = Cookies.get('userToken');

        const fetchMe = async () => {
            try {
                const response = await axios.get(auth + '/me', {
                    headers: {
                        'Authorization': `Bearer ${userToken}`,
                        'Content-Type': 'application/json',
                    }
                });

                setUser(response.data);

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

                setProductsWishList(response.data.productDtos);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchMe();
    }, [api, auth]);

    // const FACEBOOK_APP_ID = process.env.FACEBOOK_APP_ID;
    // const FACEBOOK_PAGE_ID = process.env.FACEBOOK_PAGE_ID;
    // const FACEBOOK_REF_STRING = process.env.FACEBOOK_REF_STRING;

    return (<>


        {/* <MyChatComponent
            pageId={FACEBOOK_PAGE_ID}
            appId={FACEBOOK_APP_ID}
            htmlRef={FACEBOOK_REF_STRING}
        /> */}

        <MyChatComponent />

        <NotificationContainer />
        <section className="banner-area d-block">
            <div className="container d-block ">
                <div className="row fullscreen align-items-center justify-content-start">
                    <div className="col-lg-12">
                        <div className="active-banner-slider owl-carousel mt-5">
                            {/* <!-- single-slide --> */}
                            <div className="row single-slide align-items-center d-flex">
                                <div className="col-lg-5 col-md-5">
                                    <div className="banner-content">
                                        <h1>{t('banner_title1')}</h1>
                                        <p> {t('banner_content1')}</p>
                                    </div>
                                </div>
                                <div className="col-lg-7 col-md-7 col-xs-7">
                                    <div className="banner-img">
                                        <img className="img-fluid" src={bannerImg2} alt='' />
                                    </div>
                                </div>
                            </div>
                            {/* <!-- single-slide --> */}
                            <div className="row single-slide align-items-center d-flex">
                                <div className="col-lg-5 col-md-5">
                                    <div className="banner-content">
                                        <h1>{t('banner_title2')}</h1>
                                        <p> {t('banner_content2')}</p>

                                    </div>
                                </div>
                                <div className="col-lg-7 col-md-7">
                                    <div className="banner-img">
                                        <img className="img-fluid" src={bannerImg3} alt='' />
                                    </div>
                                </div>
                            </div>
                            <div className="row single-slide align-items-center d-flex">
                                <div className="col-lg-5 col-md-5">
                                    <div className="banner-content">
                                        <h1>{t('banner_title3')}</h1>
                                        <p> {t('banner_content3')}</p>

                                    </div>
                                </div>
                                <div className="col-lg-7 col-md-7">
                                    <div className="banner-img">
                                        <img className="img-fluid" src={bannerImg4} alt='hello' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* <!-- Start brand Area --> */}
        <section className="brand-area section_gap" >
            <div className="container">
                <div className="row">
                    <Link className="col single-img" to={'/brand-page/' + nike}>
                        <img className="img-fluid d-block mx-auto" src={brand1} alt="" />
                    </Link>
                    <Link className="col single-img" to={'/brand-page/' + adidas}>
                        <img className="img-fluid d-block mx-auto" src={brand2} alt="" />
                    </Link>
                    <Link className="col single-img" to={'/brand-page/' + puma}>
                        <img className="img-fluid d-block mx-auto" src={brand3} alt="" />
                    </Link>
                    <Link className="col single-img" to={'/brand-page/' + fila}>
                        <img className="img-fluid d-block mx-auto" src={brand4} alt="" />
                    </Link>
                    <Link className="col single-img" to={'/brand-page/' + champion}>
                        <img className="img-fluid d-block mx-auto" src={brand5} alt="" />
                    </Link>
                </div>
            </div>
        </section>


        <section className="category-area">
            <Container>
                <Row className='justify-content-center'>
                    <div className='col-lg-8 col-md-12' >
                        <Row>
                            <div className='col-lg-8 col-md-8 '>
                                <div className="single-deal">
                                    <div className="overlay"></div>
                                    <img className="img-fluid w-100 category_home_custom" src={category1} alt="" />
                                    <Link className="img-pop-up" to={"/category-page"}>
                                        <div className="deal-details">
                                            <h6 className="deal-title">{t('category_featured')}</h6>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-4 '>
                                <div className="single-deal">
                                    <div className="overlay"></div>
                                    <img className="img-fluid w-100 category_home_custom" src={category3} alt="" />
                                    <Link className="img-pop-up" to={"/category-page/" + shoes}>
                                        <div className="deal-details">
                                            <h6 className="deal-title">{t('category_shoes')}</h6>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-4'>
                                <div className="single-deal">
                                    <div className="overlay"></div>
                                    <img className="img-fluid w-100 category_home_custom" src={category4} alt="" />
                                    <Link className="img-pop-up" to={"/category-page/" + equiment}>
                                        <div className="deal-details">
                                            <h6 className="deal-title">{t('category_accessories')}</h6>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className='col-lg-8 col-md-8'>
                                <div className="single-deal">
                                    <div className="overlay"></div>
                                    <img className="img-fluid w-100 category_home_custom" src={category2} alt="" />
                                    <Link className="img-pop-up" to={"/category-page/" + clothes}>
                                        <div className="deal-details">
                                            <h6 className="deal-title">{t('category_clothes')}</h6>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </Row>
                    </div>
                    <div className='col-lg-4 col-md-6'>
                        <div className="single-deal">
                            <div className="overlay"></div>
                            <img className="img-fluid w-100 category_home_custom_1" src={category5} alt="" />
                            <Link className="img-pop-up" to={"#"}>
                                <div className="deal-details">
                                    <h6 className="deal-title">{t('category_sale')}</h6>
                                </div>
                            </Link>
                        </div>
                    </div>
                </Row>
            </Container>
        </section>
        {/* <!-- End category Area -->

        <!-- start product Area --> */}
        {/* <section className="owl-carousel active-product-area section_gap" > */}
        <section>
            {/*  <!-- single product slide -->  */}
            <div className="single-product-slider" >
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 text-center">
                            <div className="section-title">
                                <h1>{t('lastest_product')}</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {products.map((item) => (
                            <ProductItem
                                product={item}
                                handleAddToCart={handleAddToCart}
                                t={t}
                                setShowModal={setShowModal} // Truyền setShowModal xuống
                                isInWishlist={isProductInWishlist(productsWishList, item.id)}
                                userId={user.userId}
                                key={item.id}

                            />
                        ))}

                    </div>
                </div>
            </div>
            {/* <!-- single product slide --> */}
            {/* <div className="single-product-slider" >
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 text-center">
                            <div className="section-title">
                                <h1>{t('comming_product')}</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {products.map((item) => (
                            <ProductItem
                                product={item}
                                handleAddToCart={handleAddToCart}
                                t={t}
                                setShowModal={setShowModal} // Truyền setShowModal xuống
                                key={item.product_id}
                            />
                        ))}
                    </div>
                </div>
            </div> */}
        </section>





        <section className="features-area section_gap">
            <div className="container">
                <div className="row features-inner">
                    {/* <!-- single features --> */}
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="single-features">
                            <div className="f-icon">
                                <img src={FreeDeliveryImg} alt='' />
                            </div>
                            <h6>{t('free_delivery_title')}</h6>
                            <p>{t('free_delivery')}</p>
                        </div>
                    </div>
                    {/* <!-- single features --> */}
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="single-features">
                            <div className="f-icon">
                                <img src={ReturnPolicyImg} alt='' />
                            </div>
                            <h6>{t('return_policy_title')}</h6>
                            <p>{t('return_policy')}</p>
                        </div>
                    </div>
                    {/* <!-- single features --> */}
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="single-features">
                            <div className="f-icon">
                                <img src={SupportImg} alt='' />
                            </div>
                            <h6>{t('24/7_support_title')}</h6>
                            <p>{t('24/7_support')}</p>
                        </div>
                    </div>
                    {/* <!-- single features --> */}
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="single-features">
                            <div className="f-icon">
                                <img src={SecurePaymentImg} alt='' />
                            </div>
                            <h6>{t('secure_payment_title')}</h6>
                            <p>{t('secure_payment')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <RelatedProductArea />

        {products.map((item) => (
            <ProductModal
                product={item}
                showModal={showModal === item.id}
                setShowModal={setShowModal}
                handleAddToCart={handleAddToCart}
                t={t}
                key={item.id}

            />
        ))}


    </>);
};




export default memo(HomePage);