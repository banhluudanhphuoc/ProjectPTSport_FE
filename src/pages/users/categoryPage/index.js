import { memo, useState, useEffect } from "react";
import './style.scss';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Modal, Button, Image } from 'react-bootstrap';
import Banner from "../../users/theme/banner";
import { useTranslation } from "react-i18next";
import product1 from '../../../style/img/product/p6.jpg';
import { CartProvider, useCart } from "react-use-cart";
import RelatedProductArea from "../theme/relatedProductArea";
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
const CategoryPage = ({ type }) => {
    const { type: routeType } = useParams();
    const { t, i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState('VI');
    const handleLanguageChange = (newLanguage, lng) => {
        setCurrentLanguage(newLanguage)
        i18n.changeLanguage(lng);
    };
    const { addItem, updateItemQuantity } = useCart();
    const [showModal, setShowModal] = useState(false);
    const [quantity, setQuantity] = useState(1); // Khởi tạo số lượng ban đầu

    const navigate = useNavigate();
    const handleAddToCart = (item) => {
        // Xử lý thêm sản phẩm vào giỏ hàng ở đây
        addItem(item);
        // Hiển thị thông báo thành công
        NotificationManager.success(t('notification_add_product_to_cart_success'), t('notification_add_product_to_cart_success_title'), 3000, () => {
            navigate("/cart");
        });
    };
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

    const category = [
        {
            id: 1,
            name: "feature",
            tran: "menu_featured",
        },
        {
            id: 2,
            name: "clothes",
            tran: "menu_clothes",
        },
        {
            id: 3,
            name: "shoes",
            tran: "menu_shoes",
        },
        {
            id: 4,
            name: "accessories",
            tran: "menu_accessories",
        },
    ];

    const brand = [
        {
            id: 1,
            name: "Nike",
        },
        {
            id: 2,
            name: "Adidas",
        },
        {
            id: 3,
            name: "Puma",
        },
        {
            id: 4,
            name: "Fila",
        },
        {
            id: 5,
            name: "Champion",
        },
    ];

    return (
        <>
            <NotificationContainer />
            {type === 'category' ?
                <Banner pageTitle={t('pageTitle_category')} />
                :
                <Banner pageTitle={t('pageTitle_brand')} />}


            {/* <!-- End Banner Area-- > */}
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-lg-4 col-md-5">
                        <div className="sidebar-categories">

                            <div className="head">
                                {type === 'category' ? t('menu_categries') : t('menu_brands')}
                            </div>
                            {type === 'category' ? (
                                <ul className="main-categories">
                                    {category.map((item) => (
                                        <li className="main-nav-list">
                                            <Link>

                                                <span className="lnr lnr-arrow-right"></span>
                                                {t(item.tran)}
                                                <span className="number">(53)</span></Link>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <ul className="main-categories">
                                    {brand.map((item) => (
                                        <li className="main-nav-list">
                                            <Link>
                                                <span className="lnr lnr-arrow-right"></span>
                                                {item.name}
                                                <span className="number">({item.id})</span></Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                    <div className="col-xl-9 col-lg-8 col-md-7">

                        <div className="filter-bar d-flex flex-wrap align-items-center">
                            <div className="pagination">
                                <select class="nice-select">
                                    <option value="1">{t('sorting_default')}</option>
                                    <option value="2">{t('sorting_price_high')}</option>
                                    <option value="3">{t('sorting_price_low')}</option>
                                </select>
                            </div>
                            <div className="sorting mr-auto">

                            </div>
                            <div className="pagination">
                                <Link href="#" className="prev-arrow"><i className="fa fa-long-arrow-left" aria-hidden="true"></i></Link>
                                <Link href="#" className="active">1</Link>
                                <Link href="#">2</Link>
                                <Link href="#">3</Link>
                                <Link href="#" className="dot-dot"><i className="fa fa-ellipsis-h" aria-hidden="true"></i></Link>
                                <Link href="#">6</Link>
                                <Link href="#" className="next-arrow"><i className="fa fa-long-arrow-right" aria-hidden="true"></i></Link>
                            </div>
                        </div>
                        {/* <!-- End Filter Bar -->
                        <!-- Start Best Seller --> */}
                        <section className="lattest-product-area pb-40 category-list">
                            <div className="row">
                                {product.map((item) => (

                                    <div className="col-lg-4 col-md-6" key={item.product_id}>
                                        <div className="single-product">
                                            <img className="img-fluid" src={item.img_src} alt="" />
                                            <div className="product-details">
                                                <h6>{item.product_name}</h6>
                                                <div className="price">
                                                    <h6>${item.price}</h6>
                                                    <h6 className="l-through">${item.price}</h6>
                                                </div>
                                                <div className="prd-bottom">

                                                    <Link className="social-info" onClick={() => handleAddToCart(item)} href="#">
                                                        <span className="ti-bag"></span>
                                                        <p className="hover-text">{t('add_to_bag')}</p>
                                                    </Link>
                                                    <Link to={''} className="social-info">
                                                        <span className="lnr lnr-heart"></span>
                                                        <p className="hover-text">{t('wishlist')}</p>
                                                    </Link>
                                                    <Link to={''} className="social-info" onClick={() => setShowModal(item.product_id)}>
                                                        <span className="lnr lnr-eye" ></span>
                                                        <p className="hover-text" >{t('quick_view')}</p>
                                                    </Link>
                                                    <Link to='/product-detail' className="social-info">
                                                        <span className="lnr lnr-move"></span>
                                                        <p className="hover-text">{t('view_more')}</p>
                                                    </Link>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}


                            </div>
                        </section>


                    </div>
                </div>
                < RelatedProductArea />
            </div>

            {
                product.map((item) => (
                    <Modal show={showModal === item.product_id} onHide={() => setShowModal(false)} key={item.product_id}>
                        <Modal.Header >

                        </Modal.Header>
                        <Modal.Body className="set_width_modal" key={item.id}>
                            <div className="container relative">
                                <div className="product-quick-view">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6">
                                            <div className="quick-view-carousel">
                                                <img src={item.img_src} alt="" className="item" width={200} />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="quick-view-content">
                                                <div className="top">
                                                    <h3 className="head">{item.product_name}</h3>
                                                    <div className="price d-flex align-items-center">
                                                        <span className="lnr lnr-tag"></span>
                                                        <span className="ml-10">${item.price}</span>
                                                    </div>
                                                    <div className="price d-flex align-items-center">
                                                        <span className="lnr lnr-tag"></span>
                                                        <span className="ml-10 l-through">${item.price}</span>
                                                    </div>

                                                    <div className="category">{t('modal_category')}: <span>Household</span></div>
                                                    <div className="available">{t('modal_availibility')}: <span>In Stock</span></div>
                                                </div>
                                                <div className="middle">
                                                    <p >{item.description}</p>
                                                    <Link to='/product-detail' className="view-full">{t('modal_view_full')}<span className="lnr lnr-arrow-right"></span></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </Modal.Body>
                        <Modal.Footer>
                            <Button className="btn_add_to_card" onClick={() => handleAddToCart(item)}>
                                {t('add_to_bag')}
                            </Button>
                            <Button variant="secondary" onClick={() => setShowModal(false)}>
                                {t('close')}
                            </Button>

                        </Modal.Footer>
                    </Modal>

                ))
            }

        </>

    );
};

export default memo(CategoryPage);