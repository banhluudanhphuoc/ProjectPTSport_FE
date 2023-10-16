import React, { useState, useEffect, memo } from 'react';
import axios from 'axios';
import { CartProvider, useCart } from "react-use-cart";
import './style.scss';
import { Link } from "react-router-dom";
import Banner from "../../users/theme/banner";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import jsonData from '../../../data/address.json';

import { useTranslation } from "react-i18next";
const CheckoutPage = () => {
    const { t, i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState('VI');
    const handleLanguageChange = (newLanguage, lng) => {
        setCurrentLanguage(newLanguage)
        i18n.changeLanguage(lng);
    };
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

    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState('');
    const [districts, setDistricts] = useState([]);
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [wards, setWards] = useState([]);
    const [selectedWard, setSelectedWard] = useState('');

    useEffect(() => {
        try {
            setCities(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }

    }, []);

    const handleCityChange = (event) => {
        const selectedCityId = event.target.value;
        setSelectedCity(selectedCityId);
        setSelectedDistrict('');
        setSelectedWard('');

        // Tìm thành phố đã chọn trong dữ liệu và đặt danh sách quận/huyện của nó
        const city = cities.find((city) => city.Id === selectedCityId);
        if (city) {
            setDistricts(city.Districts);
        } else {
            setDistricts([]);
        }
    };

    const handleDistrictChange = (event) => {
        const selectedDistrictId = event.target.value;
        setSelectedDistrict(selectedDistrictId);
        setSelectedWard('');

        // Tìm quận/huyện đã chọn trong dữ liệu và đặt danh sách phường/xã của nó
        const district = districts.find((district) => district.Id === selectedDistrictId);
        if (district) {
            setWards(district.Wards);
        } else {
            setWards([]);
        }
    };

    const handleWardChange = (event) => {
        setSelectedWard(event.target.value);
    };


    // const form = useForm({
    //     initialValues: {
    //         name: '',
    //         address: '',
    //         email: '',
    //         phonenumber: '',
    //     },

    //     validate: {
    //         name: hasLength({ min: 2, max: 10 }, 'Nhập tên !!! (Ít nhất 2 kí tự))'),
    //         address: isNotEmpty('Nhập địa chỉ giao hàng !!!'),
    //         email: isEmail('Email không hợp lệ !!!'),
    //         phonenumber: isNotEmpty('Nhập số điện thoại nhận hàng !!!'),
    //     },
    // });
    return <>
        <Banner pageTitle={t('pageTitle_checkout')} />
        <section className="checkout_area section_gap">
            <div className="container">

                {/* <div className="cupon_area">
                    <div className="check_title">
                        <h2>Have a coupon? <Link href="#" className="the_a_checkout">Click here to enter your code</Link></h2>
                    </div>
                    <input type="text" placeholder="Enter coupon code" />
                    <Link className="tp_btn the_a_checkout" href="#" >Apply Coupon</Link>
                </div> */}
                <form className="row contact_form" action="#" method="post" novalidate="novalidate">
                    <div className="billing_details">
                        <div className="row">
                            <div className="col-lg-8">
                                <h3> {t('checkout_billing_detail')}</h3>

                                <div className="col-md-12 form-group p_star">
                                    {t('checkout_fullname')}
                                    <input type="text" className="form-control" id="first" name="name" placeholder={t('checkout_fullname')} />

                                </div>
                                <div className="col-md-6 form-group p_star">
                                    {t('checkout_number_phone')}
                                    <input type="text" className="form-control" id="number" name="number" placeholder={t('checkout_number_phone')} />

                                </div>
                                <div className="col-md-6 form-group p_star">
                                    {t('checkout_email')}
                                    <input type="text" className="form-control" id="email" name="compemailany" placeholder={t('checkout_email')} />
                                </div>


                                <div className="col-md-12 form-group p_star">
                                    <label htmlFor="city"> {t('checkout_city')}</label>
                                    <select id="city" value={selectedCity} onChange={handleCityChange} className="country_select ">
                                        <option value="" disabled> {t('checkout_city_select')}</option>
                                        {cities.map((city) => (
                                            <option key={city.Id} value={city.Id}>
                                                {city.Name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="col-md-12 form-group p_star">
                                    <label htmlFor="district"> {t('checkout_district')}</label>
                                    <select id="district" value={selectedDistrict} onChange={handleDistrictChange} className="country_select ">
                                        <option value="" disabled> {t('checkout_district_select')}</option>
                                        {districts.map((district) => (
                                            <option key={district.Id} value={district.Id}>
                                                {district.Name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="col-md-12 form-group p_star">
                                    <label htmlFor="ward"> {t('checkout_ward')}</label>
                                    <select id="ward" value={selectedWard} onChange={handleWardChange} className="country_select">
                                        <option value="" disabled> {t('checkout_ward_select')}</option>
                                        {wards.map((ward) => (
                                            <option key={ward.Id} value={ward.Id}>
                                                {ward.Name}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="col-md-12 form-group p_star">
                                    {t('checkout_address')}
                                    <input type="text" className="form-control" id="add1" name="add1" placeholder={t('checkout_address')} />
                                </div>


                                <div className="col-md-12 form-group">
                                    {t('checkout_note')}
                                    <textarea className="form-control" name="message" id="message" rows="1" placeholder={t('checkout_note')}></textarea>
                                </div>

                            </div>
                            <div className="col-lg-4">
                                <div className="order_box">
                                    <h2>{t('checkout_your_order')}</h2>
                                    <ul className="list">
                                        <li><Link href="#" className="the_a_checkout">{t('checkout_your_order_product')} <span>{t('checkout_your_order_total')}</span></Link></li>
                                        {items.map((item) => (
                                            <li>
                                                <Link href="#" className="the_a_checkout">{item.product_name}
                                                    <span className="middle">x {item.quantity}</span>
                                                    <span className="last">${item.itemTotal}</span>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                    <ul className="list list_2">
                                        <li><Link href="#" className="the_a_checkout">{t('checkout_your_order_subtotal')} <span>${cartTotal}</span></Link></li>
                                        {/* <li><Link href="#" className="the_a_checkout">Shipping <span>Flat rate: $50.00</span></Link></li>
                                    <li><Link href="#" className="the_a_checkout">Total <span>$2210.00</span></Link></li> */}
                                    </ul>
                                    <div className="payment_item">
                                        <div className="radion_btn">
                                            <input type="radio" id="ship_cod" name="selector" />
                                            <label for="ship_cod">{t('checkout_your_order_cod')}</label>
                                            <div className="check"></div>
                                        </div>
                                        <p>{t('checkout_your_order_cod_des')}</p>
                                    </div>
                                    <div className="payment_item active">
                                        <div className="radion_btn">
                                            <input type="radio" id="vnpay" name="selector" />
                                            <label for="vnpay">VNPay </label>
                                            <div className="check"></div>
                                        </div>
                                        <p>{t('checkout_your_order_vnpay_des')}</p>
                                    </div>
                                    <div className="create_account">
                                        <input type="checkbox" id="f-option4" name="selector" />
                                        <label for="f-option4">{t('checkout_your_order_license1')} </label>
                                        <Link href="#" className="the_a_checkout terms"><span>{t('checkout_your_order_license2')}</span></Link>
                                    </div>
                                    <Link className="primary-btn the_a_checkout" href="#" >{t('checkout_proceed')}</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    </>
};

export default memo(CheckoutPage);