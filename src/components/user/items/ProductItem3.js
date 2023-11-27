// ProductItem.js
import React from 'react';
import { Link } from 'react-router-dom';
import product1 from '../../../style/img/product/p6.jpg';
import { FaRegHeart, FaHeart, FaEye } from "react-icons/fa";
import { IoBagAdd } from "react-icons/io5";
import { LuMoveDiagonal } from "react-icons/lu";
import { NotificationManager } from 'react-notifications';

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
    const deleteToWishlist = async () => {
        try {
            // Make an API request to add the product to the wishlist
            const response = await fetch(api + '/wish-list/' + userId + '/' + product.id, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            // Handle the response as needed
            if (response.ok) {
                NotificationManager.success(t('message_success_delete_wish_list'), t('message_success'));
                setTimeout(function () {
                    window.location.reload();
                }, 500);
            }
        } catch (error) {
            console.error('Error adding product to wishlist:', error);
        }
    };



    return (
        <div
            className="col-lg-3 col-md-6 product-item mt-2 card mb-2"
            key={product.id}
        >
            <div className="single-product">
                <img className="img-fluid img-product-item" src={product.listImage[0].path} alt="" />
                <div className="product-details">
                    <h6>{product.name}</h6>
                    <div className="price">
                        <h6>{formatCurrency(product.price)} </h6>
                        {/* <h6 className="l-through">${product.price}</h6> */}
                    </div>
                    <div className="prd-bottom">
                        {product.totalQuantity > 0 && (
                            <Link className="social-info" onClick={() => handleAddToCart(product)} >
                                <span><IoBagAdd /></span>
                                <p className="hover-text">{t('add_to_bag')}</p>
                            </Link>
                        )}


                        <Link to={'/wish-list'} className="social-info" onClick={() => deleteToWishlist(product)} >
                            <span><FaHeart /></span>
                            <p className="hover-text">{t('wishlist')}</p>
                        </Link>



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
