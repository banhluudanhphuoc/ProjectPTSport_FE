import React, { useState, useEffect, memo } from 'react';
import axios from 'axios';
import { CartProvider, useCart } from "react-use-cart";
import './style.scss';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Banner from "../../users/theme/banner";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import jsonData from '../../../data/address.json';
import Cookies from 'js-cookie';
import { useTranslation } from "react-i18next";
import { useForm, isNotEmpty, isEmail, isInRange, hasLength, matches } from '@mantine/form';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import {
    PasswordInput,
    TextInput,
    Text,
    rem,
    Select,
    Radio,
} from '@mantine/core';
import ReactLoading from 'react-loading';
const CheckoutPage = () => {
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
    const { t, i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState('VI');
    const handleLanguageChange = (newLanguage, lng) => {
        setCurrentLanguage(newLanguage)
        i18n.changeLanguage(lng);
    };
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const [totalItemOnCart, setTotalItemOnCart] = useState([]);
    const [totalPriceCart, setTotalPriceCart] = useState([]);
    const [productOnCart, setProductOnCart] = useState([]);
    const api = process.env.REACT_APP_API_URL;
    const auth = process.env.REACT_APP_API_URL_AUTH;
    const [user, setUser] = useState([]);
    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState('');
    const [districts, setDistricts] = useState([]);
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [wards, setWards] = useState([]);
    const [selectedWard, setSelectedWard] = useState('');
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(''); // Initialize with an empty string

    const [selectedWardName, setSelectedWardName] = useState('');
    const [selectedCityName, setSelectedCityName] = useState('');
    const [selectedDistrictName, setSelectedDistrictName] = useState('');

    useEffect(() => {
        if (totalUniqueItems === 0) {
            navigate('/category-page');
        }
    }, [totalUniqueItems]);

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
            setSelectedCityName(city.Name);
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
            setSelectedDistrictName(district.Name);
        } else {
            setWards([]);
        }
    };

    const handleWardChange = (event) => {
        const selectedWardId = event.target.value;
        setSelectedWard(selectedWardId);
        const selectedWardName = event.target.options[event.target.selectedIndex].dataset.population;
        setSelectedWardName(selectedWardName);
    };

    const form = useForm({
        initialValues: {
            customerName: '',
            customerAddress: '',
            customerEmail: '',
            customerPhone: '',
        },
        validate: {
            customerName: hasLength({ min: 2 }, t('checkout_validation_name')),
            customerAddress: isNotEmpty(t('checkout_validation_address')),
            customerPhone: (value) => {
                const isEmpty = isNotEmpty(t('checkout_validation_phone_empty'))(value);
                if (isEmpty) {
                    return isEmpty;
                }

                const isTenDigit = value.length === 10; // Fix the condition here
                const startsWithZero = value.startsWith('0');

                if (!isTenDigit) {
                    return t('checkout_validation_phone_number_length_10'); // Return the error message directly
                }
                if (!startsWithZero) {
                    return t('checkout_validation_phone_start_0');
                }

                return undefined; // No validation error
            },
        },
    });

    const { values, isValid, errors, isSubmitting } = form;
    const handleChange = (event) => {
        form.setFieldValue(event.target.name, event.target.value);
    };

    const handleOrderSubmit = (e) => {
        e.preventDefault();
        form.validate();
        if (!selectedCity) {
            NotificationManager.error(t('checkout_validation_city'));
            return;
        }
        if (!selectedDistrict) {
            NotificationManager.error(t('checkout_validation_district'));
            return;
        }
        if (!selectedWard) {
            NotificationManager.error(t('checkout_validation_ward'));
            return;
        }
        if (!selectedPaymentMethod) {
            NotificationManager.error(t('checkout_validation_method_payment'));
            return;
        }
        if (form.isValid()) {
            handleSubmit();
        }
    };

    function formatCurrency(amount) {
        const formatter = new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
        });
        return formatter.format(amount);
    }



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
                fetchCountItemCart(response.data.userId);
                fetchTotalPriceCart(response.data.userId);
                fetchItemCart(response.data.userId);
            } catch (error) {
                console.error('Error fetching Brand:', error);
            }
        };

        const fetchCountItemCart = async (userId) => {
            try {
                const response = await axios.get(api + '/cart/count/' + userId);

                setTotalItemOnCart(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        const fetchItemCart = async (userId) => {
            try {
                const response = await axios.get(api + '/cart/' + userId);

                setProductOnCart(response.data.itemList);

            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        const fetchTotalPriceCart = async (userId) => {
            try {
                const response = await axios.get(api + '/cart/total-price/' + userId);

                setTotalPriceCart(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchMe();

    }, [api, auth, userToken]);
    function generateRandomTxnRef() {
        return Math.floor(Math.random() * 1000000000); // Adjust the range as needed
    }

    const handleSubmit = async () => {
        //console.log(user.userId);
        if (selectedPaymentMethod === '1') {
            try {
                const response = await axios.post(api + '/payment/money', {
                    "userID": user.userId,
                    "orderStatusID": 1,
                    "paymentMethodID": selectedPaymentMethod,
                    customerName: values.customerName,
                    customerAddress: `${values.customerAddress}, ${selectedWardName}, ${selectedDistrictName}, ${selectedCityName}`,
                    customerEmail: user.email,
                    customerPhone: values.customerPhone,
                },
                    {
                        headers: {
                            'Authorization': `Bearer ${userToken}`,
                            'Content-Type': 'application/json',
                        },
                    }
                );

                //Cookies.set('userToken', token)


                // const response2 = await axios.delete(api + "/cart/delete-cart/" + user.userId, {
                //     headers: {
                //         'Authorization': `Bearer ${userToken}`,
                //     },
                // });

                emptyCart();
                navigate('/confirmation');
            } catch (error) {
                // Handle errors (display error message, log, etc.)
                console.error('Error submitting order:', error);
            }
        } else {
            setIsLoading(true);

            try {
                const response = await axios.post(
                    api + '/payment/pay',
                    {
                        userID: user.userId,
                        vnp_TxnRef: generateRandomTxnRef(),
                        vnp_OrderInfo: '2',
                        vnp_OrderType: '200000',
                        vnp_Amount: totalPriceCart,

                    }
                );
                Cookies.set('userID', user.userId);
                Cookies.set('customerName', values.customerName);
                Cookies.set('customerAddress', `${values.customerAddress}, ${selectedWardName}, ${selectedDistrictName}, ${selectedCityName}`);
                Cookies.set('customerEmail', user.email);
                Cookies.set('customerPhone', values.customerPhone);

                setTimeout(function () {
                    window.open(response.data);
                }, 1000);


            } catch (error) {
                setIsLoading(false);
                console.error('Error submitting order for alternative payment method:', error);
            }
        }

    };

    useEffect(() => {
        window.addEventListener('message', (event) => {
            if (event.data === 'paymentConfirmed') {
                window.close();
                window.self.close();
            }
        });

    }, []);

    return <>
        {isLoading && (
            <div className="loading-overlay">
                <ReactLoading type="spinningBubbles" color="#FD8400" height={100} width={100} />
            </div>
        )}
        <NotificationContainer />
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
                <form className="row" onSubmit={handleOrderSubmit} noValidate>
                    <div className="billing_details">
                        <div className="row">
                            <div className="col-lg-7">
                                <h3> {t('checkout_billing_detail')}</h3>

                                <div className="col-md-12 form-group p_star">
                                    {t('checkout_fullname')}
                                    <TextInput
                                        type="text"
                                        id="customerName"
                                        name="customerName"
                                        placeholder={t('checkout_fullname') || user.name}
                                        value={values.customerName}
                                        onChange={handleChange}
                                        {...form.getInputProps('customerName')}
                                    />
                                    {errors.customerName && <div className="invalid-feedback">{errors.customerName}</div>}
                                </div>
                                <div className="col-md-12 form-group p_star">
                                    {t('checkout_number_phone')}
                                    <TextInput
                                        type="text"
                                        id="customerPhone"
                                        name="customerPhone"
                                        placeholder={t('checkout_number_phone')}
                                        value={values.customerPhone}
                                        onChange={handleChange}
                                        withAsterisk
                                        {...form.getInputProps('customerPhone')}
                                    />

                                </div>
                                <div className="col-md-12  p_star">
                                    {t('checkout_email')}
                                    <TextInput
                                        type="text"
                                        id="customerEmail"
                                        name="customerEmail"
                                        placeholder={t('checkout_email')}
                                        value={user.email}
                                        readOnly
                                    />
                                </div>


                                <div className="col-md-12 form-group p_star mt-3">
                                    <label htmlFor="city"> {t('checkout_city')}</label>
                                    <select id="city" value={selectedCity} onChange={handleCityChange} className="country_select " required>
                                        <option value="" disabled> {t('checkout_city_select')}</option>
                                        {cities.map((city) => (
                                            <option key={city.Id} value={city.Id} data-population={city.Name}>
                                                {city.Name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="col-md-12 form-group p_star">
                                    <label htmlFor="district"> {t('checkout_district')}</label>
                                    <select id="district" value={selectedDistrict} onChange={handleDistrictChange} className="country_select " aria-required>
                                        <option value="" disabled> {t('checkout_district_select')}</option>
                                        {districts.map((district) => (
                                            <option key={district.Id} value={district.Id} data-population={district.Name}>
                                                {district.Name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="col-md-12 form-group p_star">
                                    <label htmlFor="ward"> {t('checkout_ward')}</label>
                                    <select id="ward" value={selectedWard} onChange={handleWardChange} className="country_select" required>
                                        <option value="" disabled>{t('checkout_ward_select')}</option>
                                        {wards.map((ward) => (
                                            <option key={ward.Id} value={ward.Id} data-population={ward.Name}>
                                                {ward.Name}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="col-md-12 form-group p_star">
                                    {t('checkout_address')}
                                    <TextInput
                                        type="text"
                                        id="customerAddress"
                                        name="customerAddress"
                                        placeholder={t('checkout_address')}
                                        value={values.customerAddress}
                                        onChange={handleChange}
                                        withAsterisk
                                        {...form.getInputProps('customerAddress')}
                                    />
                                </div>


                                {/* <div className="col-md-12 form-group">
                                    {t('checkout_note')}
                                    <textarea
                                        className="form-control"
                                        name="message"
                                        id="message"
                                        rows="1" placeholder={t('checkout_note')}
                                    >

                                    </textarea>
                                </div> */}

                            </div>
                            <div className="col-lg-5">
                                <div className="order_box">
                                    <h2>{t('checkout_your_order')}</h2>
                                    <table className="cart-table" width={"100%"}>
                                        <thead>
                                            <tr>
                                                <th>{t('checkout_your_order_product')}</th>
                                                <th>{t('checkout_your_order_quantity')}</th>
                                                <th>{t('checkout_your_order_total')}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {productOnCart.map((item) => (
                                                <tr key={item.productId}>
                                                    <td>
                                                        {item.productName}
                                                    </td>
                                                    <td>
                                                        {item.quantity}
                                                    </td>
                                                    <td>
                                                        {formatCurrency(item.totalPrice)}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>

                                    <ul className="list list_2">
                                        <li>
                                            <Link className="the_a_checkout">{t('checkout_your_order_subtotal')}
                                                <span>
                                                    {formatCurrency(totalPriceCart)}
                                                </span>
                                            </Link>
                                        </li>
                                        {/* <li><Link href="#" className="the_a_checkout">Shipping <span>Flat rate: $50.00</span></Link></li>
                                    <li><Link href="#" className="the_a_checkout">Total <span>$2210.00</span></Link></li> */}
                                    </ul>
                                    <div className="payment_item" >
                                        <div className='radio_payment'>
                                            <label htmlFor="ship_cod" className='mr-1'>{t('checkout_your_order_cod')}</label>
                                            <Radio
                                                type="radio"
                                                id="ship_cod"
                                                name="selector"
                                                value="1" // Set a value for the COD payment method
                                                checked={selectedPaymentMethod === '1'} // Check if it's selected
                                                onChange={() => setSelectedPaymentMethod('1')} // Update the state when selected
                                            />

                                        </div>
                                        <div className="check mt-2"></div>
                                        <p>{t('checkout_your_order_cod_des')}</p>
                                    </div>
                                    <div className="payment_item">
                                        <div className='radio_payment'>
                                            <label htmlFor="vnpay" className='mr-1'>VNPay </label>
                                            <Radio
                                                type="radio"
                                                id="vnpay"
                                                name="selector"
                                                value="2" // Set a value for the VNPay payment method
                                                checked={selectedPaymentMethod === '2'} // Check if it's selected
                                                onChange={() => setSelectedPaymentMethod('2')} // Update the state when selected
                                            />
                                        </div>
                                        <div className="check mt-2"></div>
                                        <p>{t('checkout_your_order_vnpay_des')}</p>
                                    </div>

                                    {/* <div className="create_account">
                                        <input type="checkbox" id="f-option4" name="selector" />
                                        <label for="f-option4">{t('checkout_your_order_license1')} </label>
                                        <Link href="#" className="the_a_checkout terms"><span>{t('checkout_your_order_license2')}</span></Link>
                                    </div> */}
                                    <button type="submit" className={`primary-btn the_a_checkout ${!isValid ? 'disabled' : ''}`}>
                                        {t('checkout_proceed')}

                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section >
    </>
};

export default memo(CheckoutPage);