import { memo, useState, useEffect } from "react";
import './style.scss';
import { Link } from "react-router-dom";
import Chart from 'react-apexcharts'
import ReactApexChart from 'react-apexcharts';
import { Modal, Button, Image } from 'react-bootstrap';
import Cookies from 'js-cookie';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import axios from 'axios';
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
    const [state, setState] = useState({
        series: [67],
        options: {
            chart: {
                height: 350,
                type: 'radialBar',
                offsetY: -10
            },
            plotOptions: {
                radialBar: {
                    startAngle: -135,
                    endAngle: 135,
                    dataLabels: {
                        name: {
                            fontSize: '16px',
                            color: undefined,
                            offsetY: 120
                        },
                        value: {
                            offsetY: 76,
                            fontSize: '22px',
                            color: undefined,
                            formatter: function (val) {
                                return val + "%";
                            }
                        }
                    }
                }
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shade: 'dark',
                    shadeIntensity: 0.15,
                    inverseColors: false,
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 50, 65, 91]
                },
            },
            stroke: {
                dashArray: 4
            },
            labels: ['Median Ratio'],
        },
    });
    const [newChartState, setNewChartState] = useState({
        series: [
            {
                data: [
                    {
                        x: '2008',
                        y: [2800, 4500]
                    },
                    {
                        x: '2009',
                        y: [3200, 4100]
                    },
                    {
                        x: '2010',
                        y: [2950, 7800]
                    },
                    {
                        x: '2011',
                        y: [3000, 4600]
                    },
                    {
                        x: '2012',
                        y: [3500, 4100]
                    },
                    {
                        x: '2013',
                        y: [4500, 6500]
                    },
                    {
                        x: '2014',
                        y: [4100, 5600]
                    }
                ]
            }
        ],
        options: {
            chart: {
                height: 350,
                type: 'rangeBar',
                zoom: {
                    enabled: false
                }
            },
            plotOptions: {
                bar: {
                    isDumbbell: true,
                    columnWidth: 3,
                    dumbbellColors: [['#008FFB', '#00E396']]
                }
            },
            legend: {
                show: true,
                showForSingleSeries: true,
                position: 'top',
                horizontalAlign: 'left',
                customLegendItems: ['Product A', 'Product B']
            },
            fill: {
                type: 'gradient',
                gradient: {
                    type: 'vertical',
                    gradientToColors: ['#00E396'],
                    inverseColors: true,
                    stops: [0, 100]
                }
            },
            grid: {
                xaxis: {
                    lines: {
                        show: true
                    }
                },
                yaxis: {
                    lines: {
                        show: false
                    }
                }
            },
            xaxis: {
                tickPlacement: 'on'
            }
        },
    });



    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get(`${api}/orders`);
                const sortedOrders = response.data.sort((a, b) => a.orderStatusID - b.orderStatusID);
                setOrders(sortedOrders);

                const newOrders = sortedOrders.filter(order =>
                    order.orderStatusID === parseInt(awaitConfirmOrder) || order.orderStatusID === parseInt(hasPayOrder)
                );
                setNewOrders(newOrders);

                if (newOrders.length > 0) {
                    NotificationManager.info(`Có ${newOrders.length} đơn hàng mới!`);
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
    }, [api, doneOrder]);


    return (
        <>
            <NotificationContainer />
            {/* <!-- Content wrapper --> */}
            <div className="content-wrapper">
                {/* <!-- Content --> */}

                <div className="container-xxl flex-grow-1 container-p-y " >
                    <div className="row">
                        <div className="col-12 col-lg-8 order-2 order-md-3 order-lg-2 mb-4">
                            <div className="card">
                                <div className="row row-bordered g-0">
                                    <div className="col-md-8">
                                        <h5 className="card-header m-0 me-2 pb-3">Total Revenue</h5>
                                        <ReactApexChart options={newChartState.options} series={newChartState.series} type="line" height={350} />
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card-body">
                                            <div className="text-center">
                                                <div className="dropdown">
                                                    <button
                                                        className="btn btn-sm btn-outline-primary dropdown-toggle"
                                                        type="button"
                                                        id="growthReportId"
                                                        data-bs-toggle="dropdown"
                                                        aria-haspopup="true"
                                                        aria-expanded="false"
                                                    >
                                                        2022
                                                    </button>
                                                    <div className="dropdown-menu dropdown-menu-end" aria-labelledby="growthReportId">
                                                        <a className="dropdown-item" href="javascript:void(0);">2021</a>
                                                        <a className="dropdown-item" href="javascript:void(0);">2020</a>
                                                        <a className="dropdown-item" href="javascript:void(0);">2019</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="growthChart"></div>
                                        <ReactApexChart options={state.options} series={state.series} type="radialBar" height={300} />
                                        <div className="d-flex px-xxl-4 px-lg-2 p-4 gap-xxl-3 gap-lg-1 gap-3 justify-content-between">
                                            <div className="d-flex">
                                                <div className="me-2">
                                                    <span className="badge bg-label-primary p-2"><i className="bx bx-dollar text-primary"></i></span>
                                                </div>
                                                <div className="d-flex flex-column">
                                                    <small>2022</small>
                                                    <h6 className="mb-0">$32.5k</h6>
                                                </div>
                                            </div>
                                            <div className="d-flex">
                                                <div className="me-2">
                                                    <span className="badge bg-label-info p-2"><i className="bx bx-wallet text-info"></i></span>
                                                </div>
                                                <div className="d-flex flex-column">
                                                    <small>2021</small>
                                                    <h6 className="mb-0">$41.2k</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!--/ Total Revenue --> */}
                        <div className="col-12 col-md-8 col-lg-4 order-3 order-md-2">
                            <div className="row">

                                <div className="card h-100">
                                    <div className="card-header d-flex align-items-center justify-content-between pb-0">
                                        <div className="card-title mb-0">
                                            <h5 className="m-0 me-2">Order Statistics</h5>
                                            <small className="text-muted">42.82k Total Sales</small>
                                        </div>
                                        <div className="dropdown">
                                            <button
                                                className="btn p-0"
                                                type="button"
                                                id="orederStatistics"
                                                data-bs-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                            >
                                                <i className="bx bx-dots-vertical-rounded"></i>
                                            </button>
                                            <div className="dropdown-menu dropdown-menu-end" aria-labelledby="orederStatistics">
                                                <a className="dropdown-item" href="javascript:void(0);">Select All</a>
                                                <a className="dropdown-item" href="javascript:void(0);">Refresh</a>
                                                <a className="dropdown-item" href="javascript:void(0);">Share</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between align-items-center mb-3">
                                            <div className="d-flex flex-column align-items-center gap-1">
                                                <h2 className="mb-2">8,258</h2>
                                                <span>Total Orders</span>
                                            </div>
                                            <div id="orderStatisticsChart"></div>
                                        </div>
                                        <ul className="p-0 m-0">
                                            <li className="d-flex mb-4 pb-1">
                                                <div className="avatar flex-shrink-0 me-3">
                                                    <span className="avatar-initial rounded bg-label-primary"
                                                    ><i className="bx bx-mobile-alt"></i
                                                    ></span>
                                                </div>
                                                <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                                    <div className="me-2">
                                                        <h6 className="mb-0">Electronic</h6>
                                                        <small className="text-muted">Mobile, Earbuds, TV</small>
                                                    </div>
                                                    <div className="user-progress">
                                                        <small className="fw-semibold">82.5k</small>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="d-flex mb-4 pb-1">
                                                <div className="avatar flex-shrink-0 me-3">
                                                    <span className="avatar-initial rounded bg-label-success"><i className="bx bx-closet"></i></span>
                                                </div>
                                                <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                                    <div className="me-2">
                                                        <h6 className="mb-0">Fashion</h6>
                                                        <small className="text-muted">T-shirt, Jeans, Shoes</small>
                                                    </div>
                                                    <div className="user-progress">
                                                        <small className="fw-semibold">23.8k</small>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="d-flex mb-4 pb-1">
                                                <div className="avatar flex-shrink-0 me-3">
                                                    <span className="avatar-initial rounded bg-label-info"><i className="bx bx-home-alt"></i></span>
                                                </div>
                                                <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                                    <div className="me-2">
                                                        <h6 className="mb-0">Decor</h6>
                                                        <small className="text-muted">Fine Art, Dining</small>
                                                    </div>
                                                    <div className="user-progress">
                                                        <small className="fw-semibold">849k</small>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="d-flex">
                                                <div className="avatar flex-shrink-0 me-3">
                                                    <span className="avatar-initial rounded bg-label-secondary"
                                                    ><i className="bx bx-football"></i
                                                    ></span>
                                                </div>
                                                <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                                    <div className="me-2">
                                                        <h6 className="mb-0">Sports</h6>
                                                        <small className="text-muted">Football, Cricket Kit</small>
                                                    </div>
                                                    <div className="user-progress">
                                                        <small className="fw-semibold">99</small>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
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