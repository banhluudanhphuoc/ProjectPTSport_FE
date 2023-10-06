import React, { useState, memo } from "react";

import "./style.scss";
import axios from "axios";
import { Modal, Button, Image } from 'react-bootstrap';
import Banner from "../../users/theme/banner";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
const OrderDetailCustomer = () => {
    const { t, i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState('VI');
    const handleLanguageChange = (newLanguage, lng) => {
        setCurrentLanguage(newLanguage)
        i18n.changeLanguage(lng);
    };


    return <>
        <Banner pageTitle={t('pageTitle_order_detail')} />
        <div className="container card ">
            <div className="row mt-5 ml-3">
                <div className="col-md-11">
                    <h2>{t('order_detail')}</h2>
                    <p><strong>{t('order_detail_number')}:</strong> id</p>
                    <p><strong>{t('order_detail_date')}:</strong> date </p>
                    <p><strong>{t('order_detail_status')}:</strong> status</p>
                </div>
                <div className="col-md-1 align-right">
                    <Link to="/profile-customer">
                        <Button className="btn btn-customer">{t('order_detail_button_back')}</Button>
                    </Link>

                </div>
            </div>

            <div className="row ml-3 mt-2">
                <div className="col-md-12">
                    <h3>{t('order_detail_product')}</h3>
                    <ul className="list-group">

                        <li className="list-group-item">
                            <div className="row">
                                <div className="col-md-3">
                                    <img src='' alt='img product' className="img-fluid" />
                                </div>
                                <div className="col-md-9">
                                    <p><strong>{t('order_detail_product_name')}:</strong> jahskjdhakjd</p>
                                    <p><strong>{t('order_detail_product_price')}:</strong> $1111</p>
                                    <p><strong>{t('order_detail_product_quantity')}:</strong> 222</p>
                                </div>
                            </div>
                        </li>

                    </ul>
                </div>
            </div>

            <div className="row mt-3 ml-3">
                <div className="col-md-12">
                    <h3>{t('order_detail_shiping_info')}</h3>
                    <p><strong>{t('order_detail_shiping_info_name')}:</strong>anh a</p>
                    <p><strong>{t('order_detail_shiping_info_phone_number')}:</strong>123123123</p>
                    <p><strong>{t('order_detail_shiping_info_address')}:</strong> long an</p>
                    <p><strong>{t('order_detail_shiping_info_ward')}:</strong> tan an</p>
                    <p><strong>{t('order_detail_shiping_info_district')}:</strong> tan an</p>
                    <p><strong>{t('order_detail_shiping_info_city')}:</strong> tan an</p>
                </div>
            </div>

            <div className="row ml-3 mb-3">
                <div className="col-md-12">
                    <h3>{t('order_detail_payment_info')}</h3>
                    <p><strong>{t('order_detail_payment_info_method')}:</strong> method</p>
                    <h2><strong>{t('order_detail_payment_total')}:</strong> $60</h2>
                </div>
            </div>
        </div>

    </>
};

export default memo(OrderDetailCustomer);