import { memo } from "react";
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import "./style.scss";
import { Tab, Nav, Container, Row, Col } from 'react-bootstrap';
import {
    AiOutlineEdit,
    AiOutlineDelete,
    AiOutlineProfile,
    AiOutlineNotification,
    AiTwotoneEye,
    AiTwotoneStar,
    AiFillCheckCircle,
    AiOutlineUser,
    AiOutlineCheckCircle,
    AiOutlineCloseCircle,
    AiOutlineClockCircle,
    AiOutlineLike,
    AiFillCreditCard,
    AiOutlineRocket,
} from "react-icons/ai";
import ImgReview1 from '../../../style/img/product/review-1.png';
import Cookies from 'js-cookie';
import SizeChart from '../../../assets/users/size-charts/giay-nam.png';
import { Link } from "react-router-dom";
import Banner from "../../users/theme/banner";
import { useTranslation } from "react-i18next";
import axios from 'axios';
const ProfileCustomer = () => {
    const api = process.env.REACT_APP_API_URL;
    const { t, i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState('VI');
    const handleLanguageChange = (newLanguage, lng) => {
        setCurrentLanguage(newLanguage)
        i18n.changeLanguage(lng);
    };
    const navigate = useNavigate();
    const auth = process.env.REACT_APP_API_URL_AUTH;
    const [user, setUser] = useState([]);
    const [order, setOrder] = useState([]);
    const userToken = Cookies.get('userToken');
    const [products, setProducts] = useState([]);
    const awaitConfirmOrder = process.env.REACT_APP_ID_AWAIT_CONFIRM_ORDER;
    const confirmOrder = process.env.REACT_APP_ID_CONFIRM_ORDER;
    const prepareOrder = process.env.REACT_APP_ID_PREPARE_ORDER;
    const deliveringOrder = process.env.REACT_APP_ID_DELIVERING_ORDER;
    const doneOrder = process.env.REACT_APP_ID_DONE_ORDER;
    const cancelOrder = process.env.REACT_APP_ID_CANCEL_ORDER;
    const hasPayOrder = process.env.REACT_APP_ID_HAS_PAY_ORDER;
    useEffect(() => {
        if (!userToken) {
            navigate('/login-user');
        }
        const fetchMe = async () => {
            try {
                const response = await axios.get(auth + '/me', {
                    headers: {
                        'Authorization': `Bearer ${userToken}`,
                        'Content-Type': 'application/json',
                    }
                });

                setUser(response.data);
                fetchOrder(response.data.userId);
            } catch (error) {
                // Xử lý lỗi
                //console.error('Error fetching Brand:', error);
            }
        };

        const fetchOrder = async (userId) => {
            try {
                const response = await axios.get(api + '/orders/' + userId, {
                    headers: {
                        'Authorization': `Bearer ${userToken}`,
                        'Content-Type': 'application/json',
                    }
                });
                const sortedOrders = response.data.sort((a, b) => {
                    // Sort by orderStatusID in ascending order
                    const orderStatusComparison = a.orderStatusID - b.orderStatusID;

                    // If orderStatusID is the same, sort by a timestamp property (e.g., createdAt)
                    if (orderStatusComparison === 0) {
                        // Assuming orders have a property like 'createdAt' for timestamp
                        return new Date(b.id) - new Date(a.id);
                    }

                    return orderStatusComparison;
                });

                setOrder(sortedOrders);


            } catch (error) {
                // Xử lý lỗi
                //console.error('Error fetching Brand:', error);
            }
        };


        fetchMe();

    }, [api, auth, userToken]);
    function formatCurrency(amount) {
        // Sử dụng NumberFormat để định dạng số
        const formatter = new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
        });

        // Áp dụng định dạng và trả về chuỗi đã định dạng
        return formatter.format(amount);
    }



    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(api + '/products');

                setProducts(response.data.contents);
            } catch (error) {
                //console.error('Error fetching products:', error);
            }
        };
        fetchProducts();

    }, [api]);




    const getOrderStatusClass = (orderStatusID) => {
        switch (orderStatusID) {
            case parseInt(awaitConfirmOrder):
                return "await-confirm"; // hoặc một class khác tương ứng
            case parseInt(hasPayOrder):
                return "has-pay"; // hoặc một class khác tương ứng
            case parseInt(confirmOrder):
                return "confirm"; // hoặc một class khác tương ứng
            case parseInt(prepareOrder):
                return "prepare"; // hoặc một class khác tương ứng
            case parseInt(deliveringOrder):
                return "delivering"; // hoặc một class khác tương ứng
            case parseInt(doneOrder):
                return "done"; // hoặc một class khác tương ứng
            case parseInt(cancelOrder):
                return "cancel"; // hoặc một class khác tương ứng
            default:
                return "default"; // hoặc một class khác tương ứng
        }
    };
    return <>
        <Banner pageTitle={t('pageTitle_customer_profile')} />
        <div className="container">
            <div className="row  mt-5">
                <div className="title-profile-customer d-flex">
                    <h3 >{t('profile_title')} : {user.name}</h3>
                    {/* <p mt="sm" ml="sm">{t('profile_phone')}: 0123456789</p> */}
                    <Link to={"/profile-customer-edit"} className="button_edit_profile_customer btn btn-primary" mt="sm" ml="sm">
                        <AiOutlineEdit /> {t('profile_edit')}
                    </Link>
                </div>
            </div>
            <div className="profile_customer">
                <Tab.Container id="my-tabs" defaultActiveKey="my_order" >
                    <Nav variant="tabs">
                        <Nav.Item >
                            <Nav.Link eventKey="my_order" ><AiOutlineProfile className="icon_profile" />{t('profile_my_order')}</Nav.Link>
                        </Nav.Item>
                        <Nav.Item >
                            <Nav.Link eventKey="my_notice" ><AiOutlineNotification className="icon_profile" />{t('profile_my_notice')}</Nav.Link>
                        </Nav.Item>
                        <Nav.Item >
                            <Nav.Link eventKey="my_viewed" > <AiTwotoneEye className="icon_profile" />{t('profile_my_viewed')}</Nav.Link>
                        </Nav.Item>
                        <Nav.Item >
                            <Nav.Link eventKey="review" ><AiTwotoneStar className="icon_profile" /> {t('profile_my_review')}</Nav.Link>
                        </Nav.Item>
                        <Nav.Item >
                            <Nav.Link eventKey="my_history" > <AiFillCheckCircle className="icon_profile" />{t('profile_my_history')}</Nav.Link>
                        </Nav.Item>
                    </Nav>

                    <Tab.Content>
                        <Tab.Pane eventKey="my_order">
                            <div className="container mt-2 mb-2">
                                {
                                    order.map((item) => (
                                        <div className="col-md-12" key={item.id}>
                                            <div className="profile_customer_right_orders">
                                                <div className={`profile_customer_right_orders_top ${getOrderStatusClass(item.orderStatusID)}`}>
                                                    <div>
                                                        <span>{item.code}</span>
                                                    </div>
                                                    <div className="profile_customer_right_orders_status">
                                                        {item.orderStatus.name}
                                                    </div>
                                                </div>
                                                <div className="profile_customer_right_orders_mid">
                                                    {/* <div>
                                                        <img alt="" src={ImgReview1} className="profile_customer_right_orders_image" width="100px" />
                                                    </div> */}
                                                    {item.orderProducts.map((product) => {
                                                        // Tìm sản phẩm tương ứng trong danh sách products
                                                        const matchedProduct = products.find(p => p.id === product.productID);

                                                        // Kiểm tra xem sản phẩm có tồn tại không
                                                        if (matchedProduct) {
                                                            return (
                                                                <div className="profile_customer_right_orders_mid_info" key={product.id}>
                                                                    <div>
                                                                        {/* Hiển thị tên sản phẩm */}
                                                                        <Link to={`/product-detail/${matchedProduct.id}`}>{t('profile_product_name')} : {matchedProduct.name}</Link>
                                                                    </div>
                                                                    <div>
                                                                        <span>{t('profile_product_quantity')} : {product.quantity} - </span>
                                                                        <span>{t('profile_product_price')} : {formatCurrency(product.totalPrice)}</span>
                                                                    </div>
                                                                </div>
                                                            );
                                                        }
                                                    })}

                                                </div>
                                                <div className="profile_customer_right_orders_bottom" >
                                                    <Link to={'/order-detail-customer/' + item.id}>{t('profile_view_order_detail')}</Link>
                                                    <span>{t('profile_order_total')} : {formatCurrency(item.totalPrice)}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }



                            </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="my_notice">
                            <div className="container mt-5 mb-5 ">
                                <div class="table-responsive">
                                    {/* <img src={SizeChart} alt="" /> */}
                                </div>
                            </div>

                        </Tab.Pane>
                        <Tab.Pane eventKey="my_viewed">
                            <div className="container mt-5 mb-5 ">
                                <div class="table-responsive">
                                    {/* <img src={SizeChart} alt="" /> */}
                                </div>
                            </div>

                        </Tab.Pane>
                        <Tab.Pane eventKey="review">
                            <div className="container mt-5 mb-5 ">
                                <div class="table-responsive">
                                    {/* <img src={SizeChart} alt="" /> */}
                                </div>
                            </div>

                        </Tab.Pane>

                        <Tab.Pane eventKey="my_history">
                            <div className="container mt-5 mb-5 ">
                                <div class="table-responsive">
                                    {/* <img src={SizeChart} alt="" /> */}
                                </div>
                            </div>

                        </Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
            </div>



        </div>
    </>
};

export default memo(ProfileCustomer);