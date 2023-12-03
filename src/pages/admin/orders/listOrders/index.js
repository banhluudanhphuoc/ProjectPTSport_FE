import { memo, useState, useEffect } from "react";
import './style.scss';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Icon } from '@iconify/react';
import Cookies from 'js-cookie';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import axios from 'axios';

const OrdersListAdmin = () => {
    const [orders, setOrders] = useState([]);
    const api_admin = process.env.REACT_APP_API_URL_ADMIN;
    const admin_url = process.env.REACT_APP_ADMIN_URL;
    const api = process.env.REACT_APP_API_URL;
    const { orderStatusID } = useParams();

    const awaitConfirmOrder = process.env.REACT_APP_ID_AWAIT_CONFIRM_ORDER;
    const hasPayOrder = process.env.REACT_APP_ID_HAS_PAY_ORDER;
    const confirmOrder = process.env.REACT_APP_ID_CONFIRM_ORDER;
    const prepareOrder = process.env.REACT_APP_ID_PREPARE_ORDER;
    const deliveringOrder = process.env.REACT_APP_ID_DELIVERING_ORDER;
    const doneOrder = process.env.REACT_APP_ID_DONE_ORDER;
    const cancelOrder = process.env.REACT_APP_ID_CANCEL_ORDER;

    useEffect(() => {

        const fetchOrder = async () => {
            try {
                const response = await axios.get(api + '/orders');
                const sortedOrders = response.data.sort((a, b) => a.orderStatusID - b.orderStatusID);
                setOrders(sortedOrders);
            } catch (error) {
                // Xử lý lỗi
                console.error('Error fetching categories:', error);
            }
        };
        fetchOrder();
    }, []);

    const getStatusBadgeClass = (orderStatusID) => {
        switch (orderStatusID) {
            case parseInt(awaitConfirmOrder):
                return "badge bg-label-secondary";
            case parseInt(hasPayOrder):
                return "badge badge-dark";
            case parseInt(confirmOrder):
                return "badge bg-label-primary";
            case parseInt(prepareOrder):
                return "badge bg-label-info";
            case parseInt(deliveringOrder):
                return "badge bg-label-warning";
            case parseInt(doneOrder):
                return "badge bg-label-success";
            case parseInt(cancelOrder):
                return "badge bg-label-danger";
            default:
                return "badge bg-label-dark";
        }
    };


    return <>
        <div className="content-wrapper">
            <div className="container-xxl flex-grow-1 container-p-y">
                <h4 className="fw-bold py-3 mb-4"><span className="text-muted fw-light">PT Sports /</span> Tất cả đơn hàng</h4>

                <div className="card">

                    <div className=" text-nowrap">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>CODE</th>
                                    <th>Tổng tiền</th>
                                    <th>Trạng thái</th>
                                    <th>Hành động</th>
                                </tr>
                            </thead>
                            <tbody className="table-border-bottom-0">
                                {orders.map((order) => (
                                    <tr>
                                        <td><i className="fab fa-angular fa-lg text-danger me-3"></i> <strong>{order.code}</strong></td>
                                        <td>{order.totalPrice}</td>

                                        <td>
                                            <span className={getStatusBadgeClass(order.orderStatusID)}>
                                                {order.orderStatus.name}
                                            </span>
                                        </td>
                                        <td>
                                            <div className="dropdown">
                                                <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                                    <Icon icon="bx:dots-vertical-rounded" />
                                                </button>
                                                <div className="dropdown-menu">
                                                    <Link className="dropdown-item" to={admin_url + '/order_detail_admin/' + order.id}>
                                                        <Icon icon="bx:edit-alt" />
                                                        Xem chi tiết
                                                    </Link>
                                                    {/* <Link className="dropdown-item" href="javascript:void(0);">
                                                        <Icon icon="bx:trash" />
                                                        Xóa
                                                    </Link> */}
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                ))}


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </>
};

export default memo(OrdersListAdmin);