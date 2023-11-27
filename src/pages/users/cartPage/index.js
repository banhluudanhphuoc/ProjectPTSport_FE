import { memo, useState, useEffect } from "react";
import './style.scss';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Banner from "../../users/theme/banner";
import { Icon } from '@iconify/react';
import { useTranslation } from "react-i18next";
import { Modal, Button, Image } from 'react-bootstrap';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import Cookies from 'js-cookie';
import axios from 'axios';
import { CartProvider, useCart } from "react-use-cart";
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

    const { t, i18n } = useTranslation();


    const [showConfirmationModal, setShowConfirmationModal] = useState(false);
    const [itemToRemove, setItemToRemove] = useState(null);

    const handleDeleteProduct = (item) => {
        setItemToRemove(item);
        setShowConfirmationModal(true);
    };
    const navigate = useNavigate();

    const confirmDeleteProduct = () => {
        if (itemToRemove) {
            removeItem(itemToRemove.id);
            setItemToRemove(null);
            setShowConfirmationModal(false);
            NotificationManager.success(
                'Sản phẩm đã được xóa khỏi giỏ hàng',
                'Xóa sản phẩm',
                2000
            );
        }
    };

    const [user, setUser] = useState([]);
    const [totalItemOnCart, setTotalItemOnCart] = useState([]);
    const [totalPriceCart, setTotalPriceCart] = useState([]);
    const [productOnCart, setProductOnCart] = useState([]);
    const api = process.env.REACT_APP_API_URL;
    const auth = process.env.REACT_APP_API_URL_AUTH;
    useEffect(() => {
        const userToken = Cookies.get('userToken');

        const fetchMe = async () => {
            try {
                const response = await axios.get(auth + '/me', {
                    headers: {
                        'Authorization': `Bearer ${userToken}`,
                        'Content-Type': 'application/json',
                    }
                });

                setUser(response.data);
                fetchCountItemCart(response.data.userId);
                fetchTotalPriceCart(response.data.userId);
                fetchItemCart(response.data.userId);
            } catch (error) {
                console.error('Error fetching Brand:', error);
            }
        };

        const fetchCountItemCart = async (userId) => {
            try {
                const response = await axios.get(api + '/cart/count/' + userId);

                setTotalItemOnCart(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        const fetchItemCart = async (userId) => {
            try {
                const response = await axios.get(api + '/cart/' + userId);

                setProductOnCart(response.data.itemList);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        const fetchTotalPriceCart = async (userId) => {
            try {
                const response = await axios.get(api + '/cart/total-price/' + userId);

                setTotalPriceCart(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchMe();

    }, [api, auth]);

    useEffect(() => {
        if (totalItemOnCart === 0) {
            navigate('/category-page');
        }
    }, [totalItemOnCart]);


    function formatCurrency(amount) {
        // Sử dụng NumberFormat để định dạng số
        const formatter = new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
        });

        // Áp dụng định dạng và trả về chuỗi đã định dạng
        return formatter.format(amount);
    }
    return <>
        <CartProvider>
            <NotificationContainer />
            <Banner pageTitle={t('pageTitle_cart')} />
            <section className="cart_area">
                <div className="container">
                    <div className="cart_inner">
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col" className="col-4">{t('cart_product')}</th>
                                        <th scope="col" className="col-3">{t('cart_price')}</th>
                                        <th scope="col" className="col-4">{t('cart_quantity')}</th>
                                        <th scope="col" className="col-2">{t('cart_total')}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {items.map((item) => (
                                        <tr key={item.id} className="cart_product">
                                            <td>
                                                <div className="media">
                                                    <div className="d-flex">
                                                        <img src={item.image} alt="" width={100} />
                                                    </div>
                                                    <div className="media-body media-body-custom">
                                                        <p>{item.productName}</p>
                                                        <span className="ml-5">
                                                            <Link onClick={() => handleDeleteProduct(item)} >
                                                                <Icon icon="ph:x" />
                                                            </Link>
                                                        </span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h5>{formatCurrency(item.price)}</h5>
                                            </td>
                                            <td>
                                                <div class="product_count">
                                                    <input type="text" name="qty" id="sst" maxLength="12" value={item.quantity} title="Quantity:"
                                                        class="input-text qty" />
                                                    <div class="arrow-btn d-inline-flex flex-column">
                                                        <button class="increase items-count" type="button" title="Increase Quantity" onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>
                                                            <Icon icon="teenyicons:up-outline" />
                                                        </button>
                                                        <button className="reduced items-count" type="button" title="Decrease Quantity" onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                                                            style={{ display: item.quantity === 1 ? 'none' : 'block' }}>
                                                            <Icon icon="teenyicons:down-outline" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h5>{formatCurrency(item.itemTotal)}</h5>
                                            </td>
                                        </tr>
                                    ))}


                                    <tr className="bottom_button out_button_area">
                                        <td>
                                            {/* <Link className="gray_btn btn-custom" href="#">Update Cart</Link> */}
                                        </td>
                                        <td>
                                        </td>

                                        <td>
                                        </td>
                                        <td>
                                            <div className="cupon_text d-flex align-items-center ">
                                                <input type="text" placeholder="Coupon Code" />
                                                <Link className="primary-btn btn-custom" href="#">Apply</Link>
                                                <Link className="gray_btn btn-custom" href="#">Close Coupon</Link>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>

                                        </td>
                                        <td>

                                        </td>
                                        <td>
                                            <h4>{t('cart_subtotal')}</h4>
                                        </td>
                                        <td>
                                            <h4>{formatCurrency(cartTotal)}</h4>
                                        </td>
                                    </tr>
                                    {/* <tr className="shipping_area">
                                        <td>

                                        </td>
                                        <td>

                                        </td>
                                        <td>
                                            <h5>Shipping</h5>
                                        </td>
                                        <td>
                                            <div className="shipping_box">
                                                <ul className="list">
                                                    <li><Link href="#" className="btn-custom">Flat Rate: $5.00</Link></li>
                                                    <li><Link href="#" className="btn-custom">Free Shipping</Link></li>
                                                    <li><Link href="#" className="btn-custom">Flat Rate: $10.00</Link></li>
                                                    <li className="active"><Link href="#" className="btn-custom">Local Delivery: $2.00</Link></li>
                                                </ul>
                                                <h6>Calculate Shipping <i className="fa fa-caret-down" aria-hidden="true"></i></h6>
                                                <select className="shipping_select">
                                                    <option value="1">Bangladesh</option>
                                                    <option value="2">India</option>
                                                    <option value="4">Pakistan</option>
                                                </select>
                                                <select className="shipping_select">
                                                    <option value="1">Select a State</option>
                                                    <option value="2">Select a State</option>
                                                    <option value="4">Select a State</option>
                                                </select>
                                                <input type="text" placeholder="Postcode/Zipcode" />
                                                <Link className="gray_btn btn-custom" href="#">Update Details</Link>
                                            </div>
                                        </td>
                                    </tr> */}
                                    <tr className="out_button_area">
                                        <td>

                                        </td>
                                        <td>
                                            <div className="checkout_btn_inner d-flex ">
                                                <Link className="gray_btn btn-custom" to='/category-page'>{t('cart_continue_shoping')}</Link>
                                            </div>

                                        </td>
                                        <td>
                                        </td>
                                        <td>
                                        </td>
                                        <td>
                                            <div className="checkout_btn_inner">
                                                <Link className="primary-btn btn-custom" to="/checkout">{t('cart_process_checkout')}</Link>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
            {showConfirmationModal && (
                <Modal show={showConfirmationModal} onHide={() => setShowConfirmationModal(false)}>
                    <Modal.Header>
                        <Modal.Title>Xác nhận xóa sản phẩm</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Bạn có chắc chắn muốn xóa sản phẩm này khỏi giỏ hàng?</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShowConfirmationModal(false)}>
                            Hủy
                        </Button>
                        <Button variant="primary" onClick={confirmDeleteProduct}>
                            Xác nhận
                        </Button>
                    </Modal.Footer>
                </Modal>
            )}
        </CartProvider >
    </>
};

export default memo(CartPage);