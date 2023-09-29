import React, { useState, memo } from "react";

import "./style.scss";
import axios from "axios";

import Banner from "../../users/theme/banner";
import { Link } from "react-router-dom";
const OrderDetailCustomer = () => {



    return <>
        <Banner />
        <div className="container card">
            <div className="row mt-3">
                <div className="col-md-11">
                    <h2>Order Details</h2>
                    <p><strong>Order Number:</strong> id</p>
                    <p><strong>Date:</strong> date </p>
                    <p><strong>Status:</strong> status</p>
                </div>
                <div className="col-md-1 align-right">
                    <Link to="/profile_customer">
                        <button className="btn btn-primary">trờ lại</button>
                    </Link>

                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <h3>Products</h3>
                    <ul className="list-group">

                        <li className="list-group-item">
                            <div className="row">
                                <div className="col-md-3">
                                    <img src='' alt='' className="img-fluid" />
                                </div>
                                <div className="col-md-9">
                                    <h4>asddd</h4>
                                    <p><strong>Price:</strong> $1111</p>
                                    <p><strong>Quantity:</strong> 222</p>
                                </div>
                            </div>
                        </li>

                    </ul>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <h3>Shipping Information</h3>
                    <p><strong>Name:</strong>anh a</p>
                    <p><strong>Address:</strong> long an</p>
                    <p><strong>City:</strong> tan an</p>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <h3>Payment Information</h3>
                    <p><strong>Payment Method:</strong> method</p>
                    <p><strong>Total Amount:</strong> $60</p>
                </div>
            </div>
        </div>

    </>
};

export default memo(OrderDetailCustomer);