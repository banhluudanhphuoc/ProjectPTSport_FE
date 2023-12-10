import axios from "axios";
import Cookies from 'js-cookie';
import { memo, useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useTranslation } from "react-i18next";
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Banner from "../../users/theme/banner";
import "./style.scss";

const OrderDetailCustomer = () => {
    const { orderID } = useParams();
    const api = process.env.REACT_APP_API_URL;
    const idCancelOrder = process.env.REACT_APP_ID_CANCEL_ORDER;
    const { t, i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState('VI');
    const handleLanguageChange = (newLanguage, lng) => {
        setCurrentLanguage(newLanguage)
        i18n.changeLanguage(lng);
    };

    const auth = process.env.REACT_APP_API_URL_AUTH;
    const navigate = useNavigate();
    const [user, setUser] = useState([]);
    const [order, setOrder] = useState([]);
    const userToken = Cookies.get('userToken');
    const [products, setProducts] = useState([]);
    const [showCancelModal, setShowCancelModal] = useState(false);
    const handleShowCancelModal = () => setShowCancelModal(true);
    const handleCloseCancelModal = () => setShowCancelModal(false);

    const awaitConfirmOrder = process.env.REACT_APP_ID_AWAIT_CONFIRM_ORDER;
    const confirmOrder = process.env.REACT_APP_ID_CONFIRM_ORDER;
    const prepareOrder = process.env.REACT_APP_ID_PREPARE_ORDER;
    const deliveringOrder = process.env.REACT_APP_ID_DELIVERING_ORDER;
    const doneOrder = process.env.REACT_APP_ID_DONE_ORDER;
    const cancelOrder = process.env.REACT_APP_ID_CANCEL_ORDER;
    const hasPayOrder = process.env.REACT_APP_ID_HAS_PAY_ORDER;
    const [sizes, setSizes] = useState();
    const [date, setDate] = useState();
    useEffect(() => {
        const fetchSizes = async () => {
            try {
                const response = await axios.get(`${api}/sizes`);
                setSizes(response.data);

            } catch (error) {
                console.error('Error fetching size:', error);
            }
        };

        fetchSizes();
    }, [api]);
    useEffect(() => {
        if (!userToken) {
            navigate('/login-user');
        }

        const fetchData = async () => {
            try {
                // Fetch products
                const productsResponse = await axios.get(api + '/products');
                setProducts(productsResponse.data.contents);

                // Fetch order
                const orderResponse = await axios.get(api + '/orders/order/' + orderID, {
                    headers: {
                        'Authorization': `Bearer ${userToken}`,
                        'Content-Type': 'application/json',
                    },
                });
                setOrder(orderResponse.data);
                console.log(orderResponse);


                const createdAtDate = new Date(orderResponse.data.createdAt);
                const options = {
                    year: 'numeric',
                    month: 'numeric',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                    timeZone: 'UTC',
                };
                const formattedDate = createdAtDate.toLocaleString('en-US', options);
                setDate(formattedDate);
            } catch (error) {
                // Handle errors
                console.error('Error fetching data:', error);
                // You might want to set an error state or display an error message
            }
        };

        fetchData();

    }, [api, userToken, orderID, navigate]);




    function formatCurrency(amount) {
        // Sử dụng NumberFormat để định dạng số
        const formatter = new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
        });

        // Áp dụng định dạng và trả về chuỗi đã định dạng
        return formatter.format(amount);
    }




    const handleCancelOrder = async () => {
        const formData = new FormData();
        formData.append('newOrderStatusId', idCancelOrder);
        formData.append('orderId', orderID);

        try {
            // Perform cancellation API request
            const response = await axios.post(`${api}/orders/cancel-order`, formData, {
                headers: {
                    'Authorization': `Bearer ${userToken}`,
                    'Content-Type': 'multipart/form-data',
                },
            });

            handleCloseCancelModal();
            NotificationManager.success(t('message_success_cancel_order'), t('message_success'));
            setTimeout(() => {
                navigate('/profile-customer');
            }, 1000);


        } catch (error) {
            console.error('Error cancelling order:', error);
            handleCloseCancelModal();
        }
    };


    const handlePrintOrder = () => {
        window.print();
    };

    return <>
        <NotificationContainer />
        <Banner pageTitle={t('pageTitle_order_detail')} />
        <div className="container card mb-3 mt-3 printable-content">
            <div className="row mt-5 ml-3">
                <div className="col-md-8">
                    <h2>{t('order_detail')}</h2>
                    <p><strong>{t('order_detail_number')}:</strong> {order.code}</p>
                    <p><strong>{t('order_detail_date')}:</strong>{date}</p>
                    <p><strong>{t('order_detail_status')}:</strong> <span className="badge bg-label-primary me-1">{order?.orderStatus?.name}</span></p>
                </div>
                <div className="col-md-4 align-right d-flex">
                    <Link to="/profile-customer">
                        <Button className="btn btn-customer mr-3">{t('order_detail_button_back')}</Button>
                    </Link>
                    <Link>
                        <Button
                            type="button"
                            className="btn btn-success mr-3"
                            onClick={handlePrintOrder}
                        >
                            In
                        </Button>
                    </Link>

                    {order.orderStatusID === parseInt(awaitConfirmOrder) &&
                        <Link>
                            <button
                                type='button'
                                className="btn btn-danger"
                                onClick={handleShowCancelModal}
                            >
                                {t('order_detail_button_cancel_order')}
                            </button>
                        </Link>
                    }

                </div>
            </div>

            <div className="row ml-3 mt-2">
                <div className="col-md-12">
                    <h3>{t('order_detail_product')}</h3>
                    <ul className="list-group">
                        {order?.orderProducts?.map((product) => {
                            const matchedProduct = products.find(p => p.id === product.productID);
                            const findSizeName = (sizeID) => {
                                const foundSize = sizes.find(sizefind => sizefind.id === sizeID);
                                return foundSize ? foundSize.name : null;
                            };

                            const sizeName = findSizeName(product.sizeID);
                            // Kiểm tra xem sản phẩm có tồn tại không
                            if (matchedProduct) {
                                return (
                                    <li className="list-group-item" key={product.id}>
                                        <div className="row">
                                            <div className="col-md-3">
                                                <img src={matchedProduct.listImage[0].path} alt='img product' className="img-fluid" width={"150px"} height={"150px"} />
                                            </div>
                                            <div className="col-md-9">
                                                <p><strong>{t('order_detail_product_name')} : </strong> {matchedProduct.name}</p>
                                                <p><strong>{t('size')} : </strong>{sizeName}</p>
                                                <p><strong>{t('order_detail_product_price')} : </strong> {formatCurrency(product.totalPrice)}</p>
                                                <p><strong>{t('order_detail_product_quantity')} : </strong> {product.quantity}</p>
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
                    <h3>{t('order_detail_shiping_info')}</h3>
                    <p> <strong>{t('order_detail_shiping_info_name')}:</strong>{order.customerName}</p>
                    <p><strong>{t('order_detail_shiping_info_phone_number')}:</strong>{order.customerPhone}</p>
                    <p><strong>{t('order_detail_shiping_info_address')}:</strong> {order.customerAddress}</p>
                </div>
                <div className="col-md-6">
                    <h3>{t('order_detail_payment_info')}</h3>
                    <p><strong>{t('order_detail_payment_info_method')}:</strong>{order?.paymentMethod?.name}</p>
                    <h2><strong>{t('order_detail_payment_total')}:</strong> {formatCurrency(order.totalPrice)}</h2>
                </div>
            </div>

        </div>
        <Modal show={showCancelModal} onHide={handleCloseCancelModal}>
            <Modal.Header>
                <Modal.Title>{t('confirmation_modal_title')}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {t('confirmation_modal_message')}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseCancelModal}>
                    {t('confirmation_modal_button_cancel')}
                </Button>
                <Button variant="danger" onClick={handleCancelOrder}>
                    {t('confirmation_modal_button_confirm')}
                </Button>
            </Modal.Footer>
        </Modal>

    </>
};

export default memo(OrderDetailCustomer);