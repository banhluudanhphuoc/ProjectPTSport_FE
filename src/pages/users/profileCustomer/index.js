import axios from 'axios';
import Cookies from 'js-cookie';
import { memo, useEffect, useState } from "react";
import { Nav, Tab } from 'react-bootstrap';
import { useTranslation } from "react-i18next";
import {
    AiFillCheckCircle, AiOutlineEdit, AiOutlineNotification, AiOutlineProfile, AiTwotoneEye,
    AiTwotoneStar
} from "react-icons/ai";
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { Link, useNavigate } from 'react-router-dom';
import Banner from "../../users/theme/banner";
import "./style.scss";
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
    const [notification, setNotification] = useState([]);
    const userToken = Cookies.get('userToken');
    const [products, setProducts] = useState([]);
    const awaitConfirmOrder = process.env.REACT_APP_ID_AWAIT_CONFIRM_ORDER;
    const confirmOrder = process.env.REACT_APP_ID_CONFIRM_ORDER;
    const prepareOrder = process.env.REACT_APP_ID_PREPARE_ORDER;
    const deliveringOrder = process.env.REACT_APP_ID_DELIVERING_ORDER;
    const doneOrder = process.env.REACT_APP_ID_DONE_ORDER;
    const cancelOrder = process.env.REACT_APP_ID_CANCEL_ORDER;
    const hasPayOrder = process.env.REACT_APP_ID_HAS_PAY_ORDER;
    const [sizes, setSizes] = useState();

    useEffect(() => {
        const fetchSizes = async () => {
            try {
                const response = await axios.get(`${api}/sizes`);
                setSizes(response.data);

            } catch (error) {
                console.error('Error fetching size:', error);
            }
        };

        fetchSizes();
    }, [api]);
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
                fetchNotification(response.data.userId);
            } catch (error) {
                // Xử lý lỗi
                console.error('Error fetching Brand:', error);
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
                console.error('Error fetching Brand:', error);
            }
        };
        const fetchNotification = async (userId) => {
            try {
                const response = await axios.get(api + '/notifications/user/' + userId);
                setNotification(response.data);

            } catch (error) {
                // Xử lý lỗi
                console.error('Error fetching Brand:', error);
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
                console.error('Error fetching products:', error);
            }
        };
        fetchProducts();

    }, [api]);

    useEffect(() => {
        if (notification && notification.length > 0) {
            NotificationManager.info(t('message_have_a_done_order'),
                "", 2000
            );
        }

    }, [notification, t]);


    const handleSeeDetail = async (notificationId) => {
        try {
            await axios.delete(api + `/notifications/delete?id=${notificationId}`);
        } catch (error) {

        }

    };


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
        <NotificationContainer />
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
                                                        const matchedProduct = products.find(p => p.id === product.productID);

                                                        const findSizeName = (sizeID) => {
                                                            const foundSize = sizes.find(sizefind => sizefind.id === sizeID);
                                                            return foundSize ? foundSize.name : null;
                                                        };

                                                        const sizeName = findSizeName(product.sizeID);

                                                        if (matchedProduct) {
                                                            return (
                                                                <div className="profile_customer_right_orders_mid_info" key={product.id}>
                                                                    <div>
                                                                        <Link to={`/product-detail/${matchedProduct.id}`}>{t('profile_product_name')} : <b>{matchedProduct.name}</b></Link>
                                                                    </div>
                                                                    <div>
                                                                        <span>{t('size')} : <b>{sizeName}</b> - </span>
                                                                        <span>{t('profile_product_quantity')} : <b>{product.quantity}</b> - </span>
                                                                        <span>{t('profile_product_price')} : <b>{formatCurrency(product.totalPrice)}</b></span>
                                                                    </div>
                                                                </div>
                                                            );
                                                        }
                                                    })}



                                                </div>
                                                <div className="profile_customer_right_orders_bottom" >
                                                    <Link to={'/order-detail-customer/' + item.id}>{t('profile_view_order_detail')}</Link>
                                                    <span>{t('profile_order_total')} : <b>{formatCurrency(item.totalPrice)}</b></span>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }



                            </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="my_notice">
                            <div className="container mt-3 mb-3 ">

                                <div class="section-top-border">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            {notification && notification.length > 0 ? (


                                                notification.map((item, index) => (
                                                    <blockquote className="generic-blockquote">
                                                        <span key={index}>
                                                            {item.description} - <Link to={'/order-detail-customer/' + item.orderId} onClick={() => handleSeeDetail(item.notificationId)}>{t('see_detail_notification')}</Link>
                                                        </span>
                                                    </blockquote>
                                                ))
                                            ) : (
                                                <span>{t('no_notifications')}</span>


                                            )}

                                        </div>
                                    </div>
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