import React, { useState, memo } from "react";

import "./style.scss";
import axios from "axios";
import { Modal, Button, Image } from 'react-bootstrap';
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const OrderDetailAdmin = (order) => {
    return <>
        <div className="container card ">
            <div className="row mt-5 ml-3">
                <div className="col-md-9">
                    <h2>Chi tiết đơn hàng</h2>
                    <p><strong>Mã đơn hàng:</strong> id</p>
                    <p><strong>Ngày đặt:</strong> date </p>
                    <p><strong>Trạng thái:</strong> status</p>
                </div>
                <div className="col-md-3 align-right">
                    <Link className="btn btn-customer-admin">order_detail_button_back</Link>
                    <Link className="btn btn-customer-admin">order_detail_button_back</Link>
                </div>
            </div>

            <div className="row ml-3 mt-2">
                <div className="col-md-12">
                    <h3>Sản phẩm</h3>
                    <ul className="list-group">

                        <li className="list-group-item">
                            <div className="row">
                                <div className="col-md-3">
                                    <img src='' alt='img product' className="img-fluid" />
                                </div>
                                <div className="col-md-9">
                                    <p><strong>Tên sản phẩm:</strong> jahskjdhakjd</p>
                                    <p><strong>Giá:</strong> $1111</p>
                                    <p><strong>Số lượng:</strong> 222</p>
                                </div>
                            </div>
                        </li>

                    </ul>
                </div>
            </div>

            <div className="row mt-3 ml-3">
                <div className="col-md-6">
                    <h3>Thông tin vận chuyển</h3>
                    <p><strong>Tên:</strong>anh a</p>
                    <p><strong>Số điện thoại:</strong>123123123</p>
                    <p><strong>Địa chỉ:</strong> long an</p>
                    <p><strong>Phường/Xã/Thị trấn:</strong> tan an</p>
                    <p><strong>Quận/Huyện:</strong> tan an</p>
                    <p><strong>Tỉnh/Thành phố:</strong> tan an</p>
                </div>
                <div className="col-md-6">
                    <h3>Thông tin thanh toán</h3>
                    <p><strong>Phương thức thanh toán:</strong> method</p>
                    <h2><strong>Tổng số tiền:</strong> $60</h2>
                </div>
            </div>


        </div>
    </>
};

export default memo(OrderDetailAdmin);