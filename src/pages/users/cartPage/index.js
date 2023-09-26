import { memo, useState, useEffect } from "react";
import { CartProvider, useCart } from "react-use-cart";
import { Table, ActionIcon, Card, Grid, Button } from '@mantine/core';
import './style.scss';
import { Link } from "react-router-dom";
import Banner from "../../users/theme/banner";

import ImgCart from '../../../style/img/cart.jpg';

const CartPage = () => {
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

    const [quantity, setQuantity] = useState(1); // Khởi tạo số lượng ban đầu

    const increaseQuantity = () => {
        // Tăng số lượng lên 1 khi nút tăng được nhấn
        setQuantity(quantity + 1);
    };

    const decreaseQuantity = () => {
        // Giảm số lượng đi 1 khi nút giảm được nhấn, nhưng không cho phép số lượng nhỏ hơn 1
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };


    return <>
        <CartProvider>
            <Banner />
            <section class="cart_area">
                <div class="container">
                    <div class="cart_inner">
                        <div class="table-responsive">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Product</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div class="media">
                                                <div class="d-flex">
                                                    <img src={ImgCart} alt="" />
                                                </div>
                                                <div class="media-body">
                                                    <p>Minimalistic shop for multipurpose use</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <h5>$360.00</h5>
                                        </td>
                                        <td>
                                            <div className="quantity-container d-flex align-items-center mt-15">

                                                <input type="text" className="quantity-amount ml-15" value={quantity} readOnly />
                                                <div className="arrow-btn d-inline-flex flex-column">
                                                    <button className="increase arrow" type="button" title="Increase Quantity" onClick={increaseQuantity}>
                                                        <span className="lnr lnr-chevron-up"></span>
                                                    </button>
                                                    <button className="decrease arrow" type="button" title="Decrease Quantity" onClick={decreaseQuantity}>
                                                        <span className="lnr lnr-chevron-down"></span>
                                                    </button>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <h5>$720.00</h5>
                                        </td>
                                    </tr>

                                    <tr class="bottom_button">
                                        <td>
                                            <a class="gray_btn btn-custom" href="#">Update Cart</a>
                                        </td>
                                        <td>
                                            <div class="cupon_text d-flex align-items-center">
                                                <input type="text" placeholder="Coupon Code" />
                                                <a class="primary-btn btn-custom" href="#">Apply</a>
                                            </div>
                                        </td>
                                        <td>
                                        </td>
                                        <td>
                                            <div class="cupon_text d-flex align-items-center ">
                                                <a class="gray_btn btn-custom" href="#">Close Coupon</a>
                                            </div>

                                        </td>
                                    </tr>
                                    <tr>
                                        <td>

                                        </td>
                                        <td>

                                        </td>
                                        <td>
                                            <h4>Subtotal</h4>
                                        </td>
                                        <td>
                                            <h4>$2160.00</h4>
                                        </td>
                                    </tr>
                                    <tr class="shipping_area">
                                        <td>

                                        </td>
                                        <td>

                                        </td>
                                        <td>
                                            <h5>Shipping</h5>
                                        </td>
                                        <td>
                                            <div class="shipping_box">
                                                <ul class="list">
                                                    <li><a href="#" className="btn-custom">Flat Rate: $5.00</a></li>
                                                    <li><a href="#" className="btn-custom">Free Shipping</a></li>
                                                    <li><a href="#" className="btn-custom">Flat Rate: $10.00</a></li>
                                                    <li class="active"><a href="#" className="btn-custom">Local Delivery: $2.00</a></li>
                                                </ul>
                                                <h6>Calculate Shipping <i class="fa fa-caret-down" aria-hidden="true"></i></h6>
                                                <select class="shipping_select">
                                                    <option value="1">Bangladesh</option>
                                                    <option value="2">India</option>
                                                    <option value="4">Pakistan</option>
                                                </select>
                                                <select class="shipping_select">
                                                    <option value="1">Select a State</option>
                                                    <option value="2">Select a State</option>
                                                    <option value="4">Select a State</option>
                                                </select>
                                                <input type="text" placeholder="Postcode/Zipcode" />
                                                <a class="gray_btn btn-custom" href="#">Update Details</a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr class="out_button_area">
                                        <td>
                                            <a class="gray_btn btn-custom" href="#">Continue Shopping</a>
                                        </td>
                                        <td>

                                        </td>
                                        <td>

                                        </td>

                                        <td>
                                            <div class="checkout_btn_inner d-flex align-items-right">
                                                <a class="primary-btn btn-custom" href="#">Proceed to checkout</a>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </CartProvider >
    </>
};

export default memo(CartPage);