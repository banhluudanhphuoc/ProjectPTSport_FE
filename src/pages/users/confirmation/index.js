import { memo, useState, useEffect } from "react";
import { CartProvider, useCart } from "react-use-cart";
import './style.scss';
import { Link } from "react-router-dom";
import Banner from "../../users/theme/banner";

import { useTranslation } from "react-i18next";
const Confirmation = () => {
    const { t, i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState('VI');
    const handleLanguageChange = (newLanguage, lng) => {
        setCurrentLanguage(newLanguage)
        i18n.changeLanguage(lng);
    };
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

        <Banner pageTitle={t('pageTitle_confirmation')} />
        <section class="order_details section_gap">
            <div class="container">
                <h3 class="title_confirmation">{t('confirmation_thank')}</h3>
                <div class="row order_d_inner">
                    <div class="col-lg-6">
                        <div class="details_item">
                            <h4>{t('confirmation_order_info')}</h4>
                            <ul class="list">
                                <li><Link href="#" className="custom_the_a"><span>{t('confirmation_order_number')}</span> : 60235</Link></li>
                                <li><Link href="#" className="custom_the_a"><span>{t('confirmation_date')}</span> : Los Angeles</Link></li>
                                <li><Link href="#" className="custom_the_a"><span>{t('confirmation_total')}</span> : USD 2210</Link></li>
                                <li><Link href="#" className="custom_the_a"><span>{t('confirmation_method')}</span> : Check payments</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-lg-6">
                        <div class="details_item">
                            <h4>{t('confirmation_shipping_address')}</h4>
                            <ul class="list">
                                <li><Link href="#" className="custom_the_a"><span>{t('confirmation_address')}</span> : 56/8</Link></li>
                                <li><Link href="#" className="custom_the_a"><span>{t('confirmation_city')}</span> : Los Angeles</Link></li>
                                <li><Link href="#" className="custom_the_a"><span>{t('confirmation_district')}</span> : United States</Link></li>
                                <li><Link href="#" className="custom_the_a"><span>{t('confirmation_ward')} </span> : 36952</Link></li >
                            </ul >
                        </div >
                    </div >
                </div >
                <div class="order_details_table">
                    <h2>{t('confirmation_order_detail')}</h2>
                    <div class="table-responsive">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">{t('confirmation_product')}</th>
                                    <th scope="col">{t('confirmation_product')}</th>
                                    <th scope="col">{t('confirmation_total')}</th>
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
                                        <h4>{t('confirmation_subtotal')}</h4>
                                    </td>
                                    <td>
                                        <h5></h5>
                                    </td>
                                    <td>
                                        <p>$2160.00</p>
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