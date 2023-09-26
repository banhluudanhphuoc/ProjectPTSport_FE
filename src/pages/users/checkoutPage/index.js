import { memo } from "react";
import { CartProvider, useCart } from "react-use-cart";
import { useForm, isNotEmpty, isEmail, isInRange, hasLength, matches } from '@mantine/form';
import { Button, Group, TextInput, NumberInput, Box, Grid, Card, Table, ActionIcon, NativeSelect } from '@mantine/core';
import './style.scss';
import { Link } from "react-router-dom";
import Banner from "../../users/theme/banner";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
const CheckoutPage = () => {
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
        <Banner />
        <section class="checkout_area section_gap">
            <div class="container">

                <div class="cupon_area">
                    <div class="check_title">
                        <h2>Have a coupon? <a href="#" className="the_a_checkout">Click here to enter your code</a></h2>
                    </div>
                    <input type="text" placeholder="Enter coupon code" />
                    <a class="tp_btn the_a_checkout" href="#" >Apply Coupon</a>
                </div>
                <div class="billing_details">
                    <div class="row">
                        <div class="col-lg-8">
                            <h3>Billing Details</h3>
                            <form class="row contact_form" action="#" method="post" novalidate="novalidate">
                                <div class="col-md-6 form-group p_star">
                                    First Name
                                    <input type="text" class="form-control" id="first" name="name" placeholder="First name" />

                                </div>
                                <div class="col-md-6 form-group p_star">
                                    Last Name
                                    <input type="text" class="form-control" id="last" name="name" placeholder="Last name" />

                                </div>
                                <div class="col-md-12 form-group">
                                    Company Name
                                    <input type="text" class="form-control" id="company" name="company" placeholder="Company name" />
                                </div>
                                <div class="col-md-6 form-group p_star">
                                    Phone Number
                                    <input type="text" class="form-control" id="number" name="number" placeholder="Phone number" />

                                </div>
                                <div class="col-md-6 form-group p_star">
                                    Email Address
                                    <input type="text" class="form-control" id="email" name="compemailany" placeholder="Email Address" />
                                </div>
                                <div class="col-md-12 form-group p_star">
                                    <select class="country_select">
                                        <option value="1">Country</option>
                                        <option value="2">Country</option>
                                        <option value="4">Country</option>
                                    </select>
                                </div>
                                <div class="col-md-12 form-group p_star">
                                    Address line 01
                                    <input type="text" class="form-control" id="add1" name="add1" placeholder="Address line 01" />
                                </div>
                                <div class="col-md-12 form-group p_star">
                                    Address line 02
                                    <input type="text" class="form-control" id="add2" name="add2" placeholder="Address line 02" />
                                </div>
                                <div class="col-md-12 form-group p_star">
                                    Town/City
                                    <input type="text" class="form-control" id="city" name="city" placeholder="Town/City" />
                                </div>
                                <div class="col-md-12 form-group p_star">
                                    <select class="country_select">
                                        <option value="1">District</option>
                                        <option value="2">District</option>
                                        <option value="4">District</option>
                                    </select>
                                </div>
                                <div class="col-md-12 form-group">
                                    <input type="text" class="form-control" id="zip" name="zip" placeholder="Postcode/ZIP" />
                                </div>

                                <div class="col-md-12 form-group">
                                    <div class="creat_account">
                                        <h3>Shipping Details</h3>
                                        <input type="checkbox" id="f-option3" name="selector" />
                                        <label for="f-option3">Ship to a different address?</label>
                                    </div>
                                    <textarea class="form-control" name="message" id="message" rows="1" placeholder="Order Notes"></textarea>
                                </div>
                            </form>
                        </div>
                        <div class="col-lg-4">
                            <div class="order_box">
                                <h2>Your Order</h2>
                                <ul class="list">
                                    <li><a href="#" className="the_a_checkout">Product <span>Total</span></a></li>
                                    <li><a href="#" className="the_a_checkout">Fresh Blackberry <span class="middle">x 02</span> <span class="last">$720.00</span></a></li>
                                    <li><a href="#" className="the_a_checkout">Fresh Tomatoes <span class="middle">x 02</span> <span class="last">$720.00</span></a></li>
                                    <li><a href="#" className="the_a_checkout">Fresh Brocoli <span class="middle">x 02</span> <span class="last">$720.00</span></a></li>
                                </ul>
                                <ul class="list list_2">
                                    <li><a href="#" className="the_a_checkout">Subtotal <span>$2160.00</span></a></li>
                                    <li><a href="#" className="the_a_checkout">Shipping <span>Flat rate: $50.00</span></a></li>
                                    <li><a href="#" className="the_a_checkout">Total <span>$2210.00</span></a></li>
                                </ul>
                                <div class="payment_item">
                                    <div class="radion_btn">
                                        <input type="radio" id="f-option5" name="selector" />
                                        <label for="f-option5">Check payments</label>
                                        <div class="check"></div>
                                    </div>
                                    <p>Please send a check to Store Name, Store Street, Store Town, Store State / County,
                                        Store Postcode.</p>
                                </div>
                                <div class="payment_item active">
                                    <div class="radion_btn">
                                        <input type="radio" id="f-option6" name="selector" />
                                        <label for="f-option6">Paypal </label>
                                        <img src="img/product/card.jpg" alt="" />
                                        <div class="check"></div>
                                    </div>
                                    <p>Pay via PayPal; you can pay with your credit card if you don’t have a PayPal
                                        account.</p>
                                </div>
                                <div class="creat_account">
                                    <input type="checkbox" id="f-option4" name="selector" />
                                    <label for="f-option4">I’ve read and accept the </label>
                                    <a href="#" className="the_a_checkout terms"><span>terms & conditions* </span></a>
                                </div>
                                <a class="primary-btn the_a_checkout" href="#" >Proceed to Paypal</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
};

export default memo(CheckoutPage);