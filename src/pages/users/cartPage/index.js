import { memo, useState, useEffect } from "react";
import { CartProvider, useCart } from "react-use-cart";
import './style.scss';
import { Link } from "react-router-dom";
import Banner from "../../users/theme/banner";
import { Icon } from '@iconify/react';
import { useTranslation } from "react-i18next";

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
    const [currentLanguage, setCurrentLanguage] = useState('VI');
    const handleLanguageChange = (newLanguage, lng) => {
        setCurrentLanguage(newLanguage)
        i18n.changeLanguage(lng);
    };

    return <>
        <CartProvider>
            <Banner />
            <section className="cart_area">
                <div className="container">
                    <div className="cart_inner">
                        <div className="table table-hover ">
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
                                        <tr>
                                            <td>
                                                <div className="media">
                                                    <div className="d-flex">
                                                        <img src={item.img_src} alt="" width={100} />
                                                    </div>
                                                    <div className="media-body">
                                                        <p>{item.product_name}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h5>${item.price}</h5>
                                            </td>
                                            <td>
                                                <div class="product_count">
                                                    <input type="text" name="qty" id="sst" maxlength="12" value={item.quantity} title="Quantity:"
                                                        class="input-text qty" />
                                                    <div class="arrow-btn d-inline-flex flex-column">
                                                        <button class="increase items-count" type="button" title="Increase Quantity" onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>
                                                            <Icon icon="teenyicons:up-outline" />
                                                        </button>
                                                        <button className="reduced items-count" type="button" title="Decrease Quantity" onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>
                                                            <Icon icon="teenyicons:down-outline" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <h5>${item.itemTotal}</h5>
                                            </td>
                                        </tr>
                                    ))}


                                    {/* <tr className="bottom_button">
                                        <td>
                                            <Link className="gray_btn btn-custom" href="#">Update Cart</Link>
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
                                    </tr> */}
                                    <tr>
                                        <td>

                                        </td>
                                        <td>

                                        </td>
                                        <td>
                                            <h4>{t('cart_subtotal')}</h4>
                                        </td>
                                        <td>
                                            <h4>${cartTotal}</h4>
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
                                                    <li><Link href="#" classNameName="btn-custom">Flat Rate: $5.00</Link></li>
                                                    <li><Link href="#" classNameName="btn-custom">Free Shipping</Link></li>
                                                    <li><Link href="#" classNameName="btn-custom">Flat Rate: $10.00</Link></li>
                                                    <li className="active"><Link href="#" classNameName="btn-custom">Local Delivery: $2.00</Link></li>
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
        </CartProvider >
    </>
};

export default memo(CartPage);