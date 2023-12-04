import React, { useState, useEffect, memo } from 'react';
import { CartProvider, useCart } from "react-use-cart";
import './style.scss';
import { Link, useNavigate, useParams, useLocation } from 'react-router-dom';
import Banner from "../../users/theme/banner";
import Cookies from 'js-cookie';
import { useTranslation } from "react-i18next";
import axios from 'axios';
const Confirmation = () => {
    const { t, i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState('VI');
    const handleLanguageChange = (newLanguage, lng) => {
        setCurrentLanguage(newLanguage)
        i18n.changeLanguage(lng);
    };
    const navigate = useNavigate();

    const userToken = Cookies.get('userToken');
    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
        cartTotal,
        emptyCart,
        clearCartMetadata
    } = useCart();
    const api = process.env.REACT_APP_API_URL;
    const url = process.env.REACT_APP_URL;
    const auth = process.env.REACT_APP_API_URL_AUTH;
    const [user, setUser] = useState([]);
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const vnp_ResponseCode = searchParams.get('vnp_ResponseCode');
    const vnp_OrderInfo = searchParams.get('vnp_OrderInfo');
    const vnp_Amount = searchParams.get('vnp_Amount');
    const [dataFetched, setDataFetched] = useState(false);
    const params = {};
    for (const [key, value] of searchParams) {
        params[key] = value;
    }
    const queryString = new URLSearchParams(params).toString();
    useEffect(() => {
        const userID = Cookies.get('userID');
        const customerName = Cookies.get('customerName');
        const customerAddress = Cookies.get('customerAddress');
        const customerEmail = Cookies.get('customerEmail');
        const customerPhone = Cookies.get('customerPhone');
        const fetchData = async () => {
            console.log(queryString);
            try {
                const userToken = Cookies.get('userToken');
                if (!userToken) {
                    navigate('/login-user');
                }



                // Make sure to replace the URL and payload with your actual API endpoint and data
                const response = await axios.post(
                    `${api}/payment/submit-order`,
                    {
                        orderDto: {
                            code: vnp_OrderInfo,
                            userID: userID,
                            customerName: customerName,
                            customerAddress: customerAddress,
                            customerEmail: customerEmail,
                            customerPhone: customerPhone,
                            totalPrice: vnp_Amount,
                            paymentMethodID: 2,
                        },
                        "string": queryString,
                    },
                    {
                        headers: {
                            'Authorization': `Bearer ${userToken}`,
                            'Content-Type': 'application/json',
                        },
                    }
                );

                // Perform any actions after the API call, e.g., emptying the cart
                emptyCart();
                setDataFetched(true);

                Cookies.remove('userID');
                Cookies.remove('customerName');
                Cookies.remove('customerAddress');
                Cookies.remove('customerEmail');
                Cookies.remove('customerPhone');

            } catch (error) {
                console.error('Error fetching data:', error);
                // Handle errors as needed
            }
        };
        if (vnp_ResponseCode === '00') {
            fetchData();
            window.opener.postMessage('paymentConfirmed', '*');

        } else if (vnp_ResponseCode === '07' || vnp_ResponseCode === '09' || vnp_ResponseCode === '10' || vnp_ResponseCode === '11' || vnp_ResponseCode === '12' || vnp_ResponseCode === '13' || vnp_ResponseCode === '24' || vnp_ResponseCode === '51' || vnp_ResponseCode === '65' || vnp_ResponseCode === '75' || vnp_ResponseCode === '79' || vnp_ResponseCode === '99') {
            window.location.href = "/";
        }
        if (dataFetched) {
            setDataFetched(false);
            setTimeout(function () {
                window.location.reload();
            }, 500);
        }

    }, [api, navigate, emptyCart, vnp_ResponseCode, dataFetched, queryString, vnp_Amount, vnp_OrderInfo, url]);




    return <>

        <Banner pageTitle={t('pageTitle_confirmation')} />
        <section class="order_details section_gap">
            <div class="container">

                <div className="row">
                    <h3 class="title_confirmation">{t('confirmation_thank')}</h3>
                    <div className="col-md-12 custom_button_see_status_order">
                        <Link to={'/profile-customer'} className="btn btn-primary">
                            {t('confirmation_see_status_order')}
                        </Link>
                    </div>
                </div>
                {/* <div class="row order_d_inner">
                    <div class="col-lg-6">
                        <div class="details_item">
                            <h4>{t('confirmation_order_info')}</h4>
                            <ul class="list">
                                <li><Link href="#" className="custom_the_a"><span>{t('confirmation_order_number')}</span> : 60235</Link></li>
                                <li><Link href="#" className="custom_the_a"><span>{t('confirmation_date')}</span> : Los Angeles</Link></li>
                                <li><Link href="#" className="custom_the_a"><span>{t('confirmation_total')}</span> : USD 2210</Link></li>
                                <li><Link href="#" className="custom_the_a"><span>{t('confirmation_method')}</span> : Check payments</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-lg-6">
                        <div class="details_item">
                            <h4>{t('confirmation_shipping_address')}</h4>
                            <span>{t('confirmation_address')}</span> :
                        </div >
                    </div >
                </div >
                <div class="order_details_table">
                    <h2>{t('confirmation_order_detail')}</h2>
                    <div class="table-responsive">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">{t('confirmation_product')}</th>
                                    <th scope="col">{t('confirmation_product')}</th>
                                    <th scope="col">{t('confirmation_total')}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <p>Pixelstore fresh Blackberry</p>
                                    </td>
                                    <td>
                                        <h5>x 02</h5>
                                    </td>
                                    <td>
                                        <p>$720.00</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>Pixelstore fresh Blackberry</p>
                                    </td>
                                    <td>
                                        <h5>x 02</h5>
                                    </td>
                                    <td>
                                        <p>$720.00</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>Pixelstore fresh Blackberry</p>
                                    </td>
                                    <td>
                                        <h5>x 02</h5>
                                    </td>
                                    <td>
                                        <p>$720.00</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h4>{t('confirmation_subtotal')}</h4>
                                    </td>
                                    <td>
                                        <h5></h5>
                                    </td>
                                    <td>
                                        <p>$2160.00</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div> */}
            </div >
        </section >

    </>
};

export default memo(Confirmation);