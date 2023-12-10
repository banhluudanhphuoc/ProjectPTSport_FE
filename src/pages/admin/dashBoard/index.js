import { memo, useState, useEffect } from "react";
import './style.scss';
import { Link } from "react-router-dom";
import Chart from 'react-apexcharts'
import ReactApexChart from 'react-apexcharts';
import { Modal, Button, Image } from 'react-bootstrap';
import Cookies from 'js-cookie';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import axios from 'axios';
import OrderAmountComparisonTable from "components/admin/OrderAmountComparisonTable";
import OrderComparisonChart from "components/admin/OrderComparisonChart";
import OrderValueTable from "components/admin/OrderValueTable";
import PaymentComparisonChart from "components/admin/PaymentComparisonChart";
import OrderStatisticsChart from "components/admin/OrderStatisticsChart";
const DashBoard = () => {
    const awaitConfirmOrder = process.env.REACT_APP_ID_AWAIT_CONFIRM_ORDER;
    const hasPayOrder = process.env.REACT_APP_ID_HAS_PAY_ORDER;
    const confirmOrder = process.env.REACT_APP_ID_CONFIRM_ORDER;
    const prepareOrder = process.env.REACT_APP_ID_PREPARE_ORDER;
    const deliveringOrder = process.env.REACT_APP_ID_DELIVERING_ORDER;
    const doneOrder = process.env.REACT_APP_ID_DONE_ORDER;
    const cancelOrder = process.env.REACT_APP_ID_CANCEL_ORDER;
    const api_admin = process.env.REACT_APP_API_URL_ADMIN;
    const admin_url = process.env.REACT_APP_ADMIN_URL;
    const api = process.env.REACT_APP_API_URL;
    const [orders, setOrders] = useState([]);
    const [newOrders, setNewOrders] = useState([]);
    const [products, setProducts] = useState([]);




    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get(`${api}/orders`);
                //console.log(response);
                const sortedOrders = response.data.sort((a, b) => a.orderStatusID - b.orderStatusID);
                setOrders(sortedOrders);

                const newOrders = sortedOrders.filter(order =>
                    order.orderStatusID === parseInt(awaitConfirmOrder) || order.orderStatusID === parseInt(hasPayOrder)
                );
                setNewOrders(newOrders);

                if (newOrders.length > 0) {
                    NotificationManager.info(`Có ${newOrders.length} đơn hàng mới!`, '', 2000);
                }

            } catch (error) {
                console.error('Error fetching orders:', error);
                // Hiển thị thông báo lỗi hoặc ghi log ở đây
            }
        };

        const fetchProducts = async () => {
            try {
                const response = await axios.get(api + '/products');
                setProducts(response.data);




            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchOrders();
        fetchProducts();
    }, [api, doneOrder, awaitConfirmOrder, hasPayOrder]);


    return (
        <>
            <NotificationContainer />
            {/* <!-- Content wrapper --> */}
            <div className="content-wrapper">
                {/* <!-- Content --> */}

                <div className="container-xxl flex-grow-1 container-p-y " >
                    <div className="row">
                        <div className="col-12 col-lg-12 order-2 order-md-3 order-lg-2 mb-4">
                            <div className="card">
                                <div className="row row-bordered g-0">
                                    <div className="col-md-6">
                                        <h5 className="card-header m-0 me-2 pb-3">Thống kê số lượng đơn hàng</h5>
                                        <OrderComparisonChart />
                                    </div>
                                    <div className="col-md-6">
                                        <h5 className="card-header m-0 me-2 pb-3">Thống kê giá trị đơn hàng</h5>
                                        <OrderAmountComparisonTable />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-12 order-2 order-md-3 order-lg-2 mb-4">
                            <div className="card">
                                <div className="row row-bordered g-0">
                                    <div className="col-md-12">

                                        <OrderValueTable />
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-12 order-2 order-md-3 order-lg-2 mb-4">
                            <div className="card">
                                <div className="row row-bordered g-0">
                                    <div className="col-md-12">

                                        <PaymentComparisonChart />
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-12 order-2 order-md-3 order-lg-2 mb-4">
                            <div className="card">
                                <div className="row row-bordered g-0">
                                    <div className="col-md-12">

                                        <OrderStatisticsChart />
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </>
    );
};

export default memo(DashBoard);