import React, { useState, useEffect, memo } from 'react';
import "./style.scss";
import axios from "axios";
import { Modal, Button, Image } from 'react-bootstrap';
import { useTranslation } from "react-i18next";
import { Link, useNavigate, useParams } from 'react-router-dom';
import Cookies from 'js-cookie';
import { NotificationContainer, NotificationManager } from 'react-notifications';

const OrderDetailAdmin = () => {
    const { orderID } = useParams();
    const [order, setOrder] = useState([]);
    const api_admin = process.env.REACT_APP_API_URL_ADMIN;
    const admin_url = process.env.REACT_APP_ADMIN_URL;
    const api = process.env.REACT_APP_API_URL;
    const [products, setProducts] = useState([]);
    const adminToken = Cookies.get('adminToken');

    const awaitConfirmOrder = process.env.REACT_APP_ID_AWAIT_CONFIRM_ORDER;
    const hasPayOrder = process.env.REACT_APP_ID_HAS_PAY_ORDER;
    const confirmOrder = process.env.REACT_APP_ID_CONFIRM_ORDER;
    const prepareOrder = process.env.REACT_APP_ID_PREPARE_ORDER;
    const deliveringOrder = process.env.REACT_APP_ID_DELIVERING_ORDER;
    const doneOrder = process.env.REACT_APP_ID_DONE_ORDER;
    const cancelOrder = process.env.REACT_APP_ID_CANCEL_ORDER;
    const navigate = useNavigate();
    useEffect(() => {


        const fetchData = async () => {
            try {
                // Fetch products
                const productsResponse = await axios.get(api + '/products');
                setProducts(productsResponse.data.contents);

                // Fetch order
                const orderResponse = await axios.get(api + '/orders/order/' + orderID);
                setOrder(orderResponse.data);

            } catch (error) {
                // Handle errors
                //console.error('Error fetching data:', error);
                // You might want to set an error state or display an error message
            }
        };

        fetchData();

    }, [api, orderID]);


    function formatCurrency(amount) {
        // Sử dụng NumberFormat để định dạng số
        const formatter = new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
        });

        // Áp dụng định dạng và trả về chuỗi đã định dạng
        return formatter.format(amount);
    }



    const handleUpdateOrderStatus = async (newStatusId) => {
        const formData = new FormData();
        formData.append('newOrderStatusId', newStatusId);
        formData.append('orderId', orderID);
        try {
            const response = await axios.post(`${api_admin}/orders/update-order-status`, formData, {
                headers: {
                    'Authorization': `Bearer ${adminToken}`,
                    'Content-Type': 'multipart/form-data',
                },
            });

            setOrder(response.data);
            NotificationManager.success('Cập nhật trạng thái đơn hàng thành công', 'Thành Công', 1000);

            navigate(admin_url + '/orders_list_admin');
        } catch (error) {
            //console.error('Error updating order status:', error);
            NotificationManager.error('Cập nhật trạng thái đơn hàng không thành công', 'Lỗi');
        }
    };

    return <>
        <NotificationContainer />
        <div className="container card ">
            <div className="row mt-5 ml-3">
                <div className="col-md-9">
                    <h2>Chi tiết đơn hàng</h2>
                    <p><strong>Mã đơn hàng:</strong> {order.code}</p>
                    {/* <p><strong>Ngày đặt:</strong> date </p> */}
                    <p><strong>Trạng thái:</strong><span className="badge bg-label-primary me-1">{order?.orderStatus?.name}</span> </p>
                </div>
                <div className="col-md-3 align-right">
                    <Link className="btn btn-customer-admin mb-2" to={admin_url + '/orders_list_admin'}>Quay Lại</Link>
                    <div>

                        {order?.orderStatusID === parseInt(awaitConfirmOrder) && (
                            <button className="btn btn-success" onClick={() => handleUpdateOrderStatus(confirmOrder)}>
                                Xác nhận đơn hàng
                            </button>
                        )}
                        {order?.orderStatusID === parseInt(confirmOrder) && (
                            <button className="btn btn-success" onClick={() => handleUpdateOrderStatus(prepareOrder)}>
                                Chuẩn bị hàng
                            </button>
                        )}
                        {order?.orderStatusID === parseInt(hasPayOrder) && (
                            <button className="btn btn-warning" onClick={() => handleUpdateOrderStatus(prepareOrder)}>
                                Chuẩn bị hàng
                            </button>
                        )}
                        {order?.orderStatusID === parseInt(prepareOrder) && (
                            <button className="btn btn-info" onClick={() => handleUpdateOrderStatus(deliveringOrder)}>
                                Bắt đầu giao hàng
                            </button>
                        )}
                        {order?.orderStatusID === parseInt(deliveringOrder) && (
                            <button className="btn btn-primary" onClick={() => handleUpdateOrderStatus(doneOrder)}>
                                Đã giao hàng
                            </button>
                        )}

                    </div>

                </div>
            </div>

            <div className="row ml-3 mt-2">
                <div className="col-md-12">
                    <h3>Sản phẩm</h3>
                    <ul className="list-group">

                        {order?.orderProducts?.map((product) => {
                            const matchedProduct = products.find(p => p.id === product.productID);

                            // Kiểm tra xem sản phẩm có tồn tại không
                            if (matchedProduct) {
                                return (
                                    <li className="list-group-item" key={product.id}>
                                        <div className="row">
                                            <div className="col-md-3">
                                                <img src={matchedProduct.listImage[0].path} alt='img product' className="img-fluid" width={"150px"} height={"150px"} />
                                            </div>
                                            <div className="col-md-9">
                                                <p><strong>Tên sản phẩm : </strong> {matchedProduct.name}</p>
                                                <p><strong>Giá : </strong> {formatCurrency(product.totalPrice)}</p>
                                                <p><strong>Số lượng : </strong> {product.quantity}</p>
                                            </div>
                                        </div>
                                    </li>
                                );
                            }

                            return null; // Trường hợp không tìm thấy sản phẩm
                        })}

                    </ul>
                </div>
            </div>

            <div className="row mt-3 ml-3">
                <div className="col-md-6">
                    <h3>Thông tin vận chuyển</h3>
                    <p><strong>Tên : </strong>{order.customerName}</p>
                    <p><strong>Số điện thoại : </strong>{order.customerPhone}</p>
                    <p><strong>Địa chỉ : </strong> {order.customerAddress}</p>
                </div>
                <div className="col-md-6">
                    <h3>Thông tin thanh toán</h3>
                    <p><strong>Phương thức thanh toán : </strong>{order?.paymentMethod?.name}</p>
                    <h2><strong>Tổng số tiền : </strong>{formatCurrency(order.totalPrice)}</h2>
                </div>
            </div>


        </div>
    </>
};

export default memo(OrderDetailAdmin);