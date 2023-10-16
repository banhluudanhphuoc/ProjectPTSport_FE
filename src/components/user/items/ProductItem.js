// ProductItem.js
import React from 'react';
import { Link } from 'react-router-dom';

const ProductItem = ({ isHomePage, product, handleAddToCart, t, setShowModal }) => {
    return (
        <div
            className={isHomePage === false ? "col-lg-4 col-md-6" : "col-lg-3 col-md-6"}
            key={product.product_id}
        >
            <div className="single-product">
                <img className="img-fluid" src={product.img_src} alt="" />
                <div className="product-details">
                    <h6>{product.product_name}</h6>
                    <div className="price">
                        <h6>${product.price}</h6>
                        <h6 className="l-through">${product.price}</h6>
                    </div>
                    <div className="prd-bottom">
                        <Link className="social-info" onClick={() => handleAddToCart(product)} href="#">
                            <span className="ti-bag"></span>
                            <p className="hover-text">{t('add_to_bag')}</p>
                        </Link>
                        <Link to={''} className="social-info">
                            <span className="lnr lnr-heart"></span>
                            <p className="hover-text">{t('wishlist')}</p>
                        </Link>
                        <Link to={''} className="social-info" onClick={() => setShowModal(product.product_id)}>
                            <span className="lnr lnr-eye" ></span>
                            <p className="hover-text" >{t('quick_view')}</p>
                        </Link>
                        <Link to='/product-detail' className="social-info">
                            <span className="lnr lnr-move"></span>
                            <p className="hover-text">{t('view_more')}</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;
