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
    const { t, i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState('VI');
    const handleLanguageChange = (newLanguage, lng) => {
        setCurrentLanguage(newLanguage)
        i18n.changeLanguage(lng);
    };
    const navigate = useNavigate();
    const auth = process.env.REACT_APP_API_URL_AUTH;
    const [user, setUser] = useState([]);
    useEffect(() => {
        const userToken = Cookies.get('userToken');
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
            } catch (error) {
                // Xử lý lỗi
                console.error('Error fetching Brand:', error);
            }
        };

        fetchMe();
    }, [navigate]);


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
                                <div className="col-md-12">
                                    <div className="profile_customer_right_orders">
                                        <div className="profile_customer_right_orders_top success">
                                            <div>
                                                <span>{t('profile_order')}<span> #123123123</span></span>
                                            </div>
                                            <div className="profile_customer_right_orders_status">
                                                <AiOutlineClockCircle className="mr-1" />
                                                {t('profile_order_pending')}
                                            </div>
                                        </div>
                                        <div className="profile_customer_right_orders_mid">
                                            <div>
                                                <img alt="" src={ImgReview1} className="profile_customer_right_orders_image" width="100px" />
                                            </div>
                                            <div className="profile_customer_right_orders_mid_info">
                                                <div>
                                                    <Link>  {t('profile_product_name')} </Link>
                                                </div>
                                                <div>
                                                    <span> {t('profile_product_price')}</span>
                                                    <span> {t('profile_product_quantity')} : 1</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="profile_customer_right_orders_bottom" >
                                            <Link >{t('profile_view_order_detail')}</Link>
                                            <span>{t('profile_order_total')} : 123123</span>
                                        </div>
                                    </div>
                                </div>



                                <div className="profile_customer_right_orders">
                                    <div className="profile_customer_right_orders_top">
                                        <div>
                                            <span>Đơn hàng<span> #123123123</span></span>
                                        </div>
                                        <div className="profile_customer_right_orders_status">

                                            <AiOutlineCheckCircle />

                                            Đơn hàng hoàn tất
                                        </div>
                                    </div>
                                    <div className="profile_customer_right_orders_mid">
                                        <div>
                                            <img mt="sm" alt="" src={ImgReview1} className="profile_customer_right_orders_image" />
                                        </div>
                                        <div className="profile_customer_right_orders_mid_info">
                                            <div>
                                                <Link> Tên sản phẩm </Link>
                                            </div>
                                            <div>
                                                <span>Giá</span>
                                                <span>Số lượng : 1</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="profile_customer_right_orders_bottom" >
                                        <Link >Xem chi tiết đơn hàng</Link>
                                        <span>Tổng tiền : 123123</span>
                                    </div>
                                </div>


                                <div className="profile_customer_right_orders">
                                    <div className="profile_customer_right_orders_top">
                                        <div>
                                            <span>Đơn hàng<span> #123123123</span></span>
                                        </div>
                                        <div className="profile_customer_right_orders_status">

                                            <AiOutlineCloseCircle />

                                            Đơn hàng bị hủy
                                        </div>
                                    </div>
                                    <div className="profile_customer_right_orders_mid">
                                        <div>
                                            <img mt="sm" alt="" src="" className="profile_customer_right_orders_image" />
                                        </div>
                                        <div>
                                            <div>
                                                <Link> Tên sản phẩm </Link>
                                            </div>
                                            <div>
                                                <span>Giá</span>
                                                <span>Số lượng : 1</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="profile_customer_right_orders_bottom">
                                        <Link>Xem chi tiết đơn hàng</Link>
                                        <span>Tổng tiền : 123123</span>
                                    </div>
                                </div>


                                <div className="profile_customer_right_orders">
                                    <div className="profile_customer_right_orders_top">
                                        <div>
                                            <span>Đơn hàng<span> #123123123</span></span>
                                        </div>
                                        <div className="profile_customer_right_orders_status">

                                            <AiOutlineLike />

                                            Đã đặt hàng
                                        </div>
                                    </div>
                                    <div className="profile_customer_right_orders_mid">
                                        <div>
                                            <img mt="sm" alt="" src="" className="profile_customer_right_orders_image" />
                                        </div>
                                        <div>
                                            <div>
                                                <Link> Tên sản phẩm </Link>
                                            </div>
                                            <div>
                                                <span>Giá</span>
                                                <span>Số lượng : 1</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="profile_customer_right_orders_bottom">
                                        <Link>Xem chi tiết đơn hàng</Link>
                                        <span>Tổng tiền : 123123</span>
                                    </div>
                                </div>


                                <div className="profile_customer_right_orders">
                                    <div className="profile_customer_right_orders_top">
                                        <div>
                                            <span>Đơn hàng<span> #123123123</span></span>
                                        </div>
                                        <div className="profile_customer_right_orders_status">

                                            <AiFillCreditCard />

                                            Chờ thanh toán
                                        </div>
                                    </div>
                                    <div className="profile_customer_right_orders_mid">
                                        <div>
                                            <img mt="sm" alt="" src="" className="profile_customer_right_orders_image" />
                                        </div>
                                        <div>
                                            <div>
                                                <Link> Tên sản phẩm </Link>
                                            </div>
                                            <div>
                                                <span>Giá</span>
                                                <span>Số lượng : 1</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="profile_customer_right_orders_bottom">
                                        <Link>Xem chi tiết đơn hàng</Link>
                                        <span>Tổng tiền : 123123</span>
                                    </div>
                                </div>

                                <div className="profile_customer_right_orders">
                                    <div className="profile_customer_right_orders_top">
                                        <div>
                                            <span>Đơn hàng<span> #123123123</span></span>
                                        </div>
                                        <div className="profile_customer_right_orders_status">

                                            <AiOutlineRocket />

                                            Đang giao hàng
                                        </div>
                                    </div>
                                    <div className="profile_customer_right_orders_mid">
                                        <div>
                                            <img mt="sm" alt="" src="" className="profile_customer_right_orders_image" />
                                        </div>
                                        <div>
                                            <div>
                                                <Link> Tên sản phẩm </Link>
                                            </div>
                                            <div>
                                                <span>Giá</span>
                                                <span>Số lượng : 1</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="profile_customer_right_orders_bottom">
                                        <Link>Xem chi tiết đơn hàng</Link>
                                        <span>Tổng tiền : 123123</span>
                                    </div>
                                </div>
                            </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="my_notice">
                            <div className="container mt-5 mb-5 ">
                                <div class="table-responsive">
                                    <img src={SizeChart} alt="" />
                                </div>
                            </div>

                        </Tab.Pane>
                        <Tab.Pane eventKey="my_viewed">
                            <div className="container mt-5 mb-5 ">
                                <div class="table-responsive">
                                    <img src={SizeChart} alt="" />
                                </div>
                            </div>

                        </Tab.Pane>
                        <Tab.Pane eventKey="review">
                            <div className="container mt-5 mb-5 ">
                                <div class="table-responsive">
                                    <img src={SizeChart} alt="" />
                                </div>
                            </div>

                        </Tab.Pane>

                        <Tab.Pane eventKey="my_history">
                            <div className="container mt-5 mb-5 ">
                                <div class="table-responsive">
                                    <img src={SizeChart} alt="" />
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