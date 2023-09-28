import { memo, useState, useEffect } from "react";
import { CartProvider, useCart } from "react-use-cart";
import './style.scss';
import { Link } from "react-router-dom";
import Banner from "../../users/theme/banner";


const Confirmation = () => {
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



    return <>

        <Banner />
        <section class="order_details section_gap">
            <div class="container">
                <h3 class="title_confirmation">Thank you. Your order has been received.</h3>
                <div class="row order_d_inner">
                    <div class="col-lg-4">
                        <div class="details_item">
                            <h4>Order Info</h4>
                            <ul class="list">
                                <li><Link href="#" className="custom_the_a"><span>Order number</span> : 60235</Link></li>
                                <li><Link href="#" className="custom_the_a"><span>Date</span> : Los Angeles</Link></li>
                                <li><Link href="#" className="custom_the_a"><span>Total</span> : USD 2210</Link></li>
                                <li><Link href="#" className="custom_the_a"><span>Payment method</span> : Check payments</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="details_item">
                            <h4>Billing Address</h4>
                            <ul class="list">
                                <li><Link href="#" className="custom_the_a"><span>Street</span> : 56/8</Link></li>
                                <li><Link href="#" className="custom_the_a"><span>City</span> : Los Angeles</Link></li>
                                <li><Link href="#" className="custom_the_a"><span>Country</span> : United States</Link></li>
                                <li><Link href="#" className="custom_the_a"><span>Postcode </span> : 36952</Link></li >
                            </ul >
                        </div >
                    </div >
                    <div class="col-lg-4">
                        <div class="details_item">
                            <h4>Shipping Address</h4>
                            <ul class="list">
                                <li><Link href="#" className="custom_the_a"><span>Street</span> : 56/8</Link></li>
                                <li><Link href="#" className="custom_the_a"><span>City</span> : Los Angeles</Link></li>
                                <li><Link href="#" className="custom_the_a"><span>Country</span> : United States</Link></li>
                                <li><Link href="#" className="custom_the_a"><span>Postcode </span> : 36952</Link></li >
                            </ul >
                        </div >
                    </div >
                </div >
                <div class="order_details_table">
                    <h2>Order Details</h2>
                    <div class="table-responsive">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Product</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Total</th>
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
                                        <h4>Subtotal</h4>
                                    </td>
                                    <td>
                                        <h5></h5>
                                    </td>
                                    <td>
                                        <p>$2160.00</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h4>Shipping</h4>
                                    </td>
                                    <td>
                                        <h5></h5>
                                    </td>
                                    <td>
                                        <p>Flat rate: $50.00</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h4>Total</h4>
                                    </td>
                                    <td>
                                        <h5></h5>
                                    </td>
                                    <td>
                                        <p>$2210.00</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div >
        </section >

    </>
};

export default memo(Confirmation);