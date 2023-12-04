// ProductItem.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegHeart, FaHeart, FaEye } from "react-icons/fa";
import { IoBagAdd } from "react-icons/io5";
import { LuMoveDiagonal } from "react-icons/lu";
import { NotificationManager } from 'react-notifications';
import Cookies from 'js-cookie';
import { AiOutlineClose } from "react-icons/ai";
const ProductItem = ({ product, handleAddToCart, t, setShowModal, isInWishlist, userId }) => {
    function formatCurrency(amount) {
        // Sử dụng NumberFormat để định dạng số
        const formatter = new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
        });

        // Áp dụng định dạng và trả về chuỗi đã định dạng
        return formatter.format(amount);
    }
    const api = process.env.REACT_APP_API_URL;
    const addToWishlist = async () => {
        const userToken = Cookies.get('userToken');
        if (!userToken) {
            NotificationManager.error(t('message_fail_add_wish_list'), t('message_failed'));
        }
        else {
            try {
                // Make an API request to add the product to the wishlist
                const response = await fetch(api + '/wish-list/' + userId + '/' + product.id, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                // Handle the response as needed
                if (response.ok) {
                    NotificationManager.success(t('message_success_add_wish_list'), t('message_success'));
                    setTimeout(function () {
                        window.location.href = "/wish-list";
                    }, 500);
                }
            } catch (error) {
                //console.error('Error adding product to wishlist:', error);
            }
        }

    };

    return (
        <div
            className="col-lg-4 col-md-6 col-sm-6 product-item mt-2 card"
            key={product.id}
        >
            <div className="single-product">
                <img className="img-fluid img-product-item" src={product.listImage[0].path} alt="" />
                <div className="product-details">
                    <h6>{product.name}</h6>
                    <div className="price">
                        {product.price !== product.discountedPrice ? (
                            <>
                                <h6>{formatCurrency(product.discountedPrice)}</h6>
                                <h6 className="l-through">{formatCurrency(product.price)}</h6>
                            </>
                        ) : (
                            <h6>{formatCurrency(product.price)}</h6>
                        )}
                    </div>
                    <div className="prd-bottom">
                        {product.totalQuantity > 0 ? (
                            <Link className="social-info" onClick={() => handleAddToCart(product)} >
                                <span><IoBagAdd /></span>
                                <p className="hover-text">{t('add_to_bag')}</p>
                            </Link>
                        ) : (
                            <Link className="social-info">
                                <span><AiOutlineClose /></span>
                                <p className="hover-text">{t('out_of_stock')}</p>
                            </Link>
                        )}
                        {isInWishlist ? (
                            <Link to={'/wish-list'} className="social-info">
                                <span><FaHeart /></span>
                                <p className="hover-text">{t('wishlist')}</p>
                            </Link>
                        ) : (
                            <Link className="social-info" onClick={addToWishlist}>
                                <span><FaRegHeart /></span>
                                <p className="hover-text">{t('wishlist')}</p>
                            </Link>
                        )}


                        <Link to={''} className="social-info" onClick={() => setShowModal(product.id)}>
                            <span><FaEye /></span>
                            <p className="hover-text" >{t('quick_view')}</p>
                        </Link>
                        <Link to={'/product-detail/' + product.id} className="social-info">
                            <span><LuMoveDiagonal /></span>
                            <p className="hover-text">{t('view_more')}</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;
