// ProductModal.js
import { memo, useState, useEffect } from "react";
import axios from 'axios';
import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { NotificationManager } from 'react-notifications';
const ProductModal = ({ product, showModal, setShowModal, handleAddToCart, t }) => {
    function formatCurrency(amount) {
        // Sử dụng NumberFormat để định dạng số
        const formatter = new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
        });

        // Áp dụng định dạng và trả về chuỗi đã định dạng
        return formatter.format(amount);
    }
    const [categories, setCategories] = useState([]);
    const [brands, setBrands] = useState([]);
    const api = process.env.REACT_APP_API_URL;
    useEffect(() => {

        const fetchCategories = async () => {
            try {
                const response = await axios.get(api + '/categories');
                setCategories(response.data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };
        const fetchBrands = async () => {
            try {
                const response = await axios.get(api + '/catalogs');
                // Xử lý phản hồi từ server (response.data)
                setBrands(response.data);
            } catch (error) {
                // Xử lý lỗi
                console.error('Error fetching categories:', error);
            }
        };
        fetchBrands();
        fetchCategories();
    }, [api]);


    const handleAddToCartNull = () => {
        NotificationManager.error(t('message_total_quantity'));
    };
    return (
        <>
            <Modal show={showModal} onHide={() => setShowModal(false)} key={product.id}>
                <Modal.Header></Modal.Header>
                <Modal.Body className="set_width_modal" key={product.id}>
                    <div className="container relative">
                        <div className="product-quick-view">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="quick-view-carousel">
                                        <img src={product.listImage[0].path} alt="" className="item" width={200} />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="quick-view-content">
                                        <div className="top">
                                            <h3 className="head">{product.name}</h3>

                                            {product.price !== product.discountedPrice ? (
                                                <>
                                                    <div className="price d-flex align-items-center">
                                                        <span className="lnr lnr-tag mr-2">{formatCurrency(product.discountedPrice)}</span>
                                                        <span className="ml-10 l-through">{formatCurrency(product.price)}</span>
                                                    </div>
                                                    {/* <h6>{formatCurrency(product.discountedPrice)}</h6>
                                                    <h6 className="l-through">{formatCurrency(product.price)}</h6> */}
                                                </>
                                            ) : (
                                                <div className="price d-flex align-items-center">
                                                    <span className="lnr lnr-tag"></span>
                                                    <span className="ml-10">{formatCurrency(product.price)} </span>
                                                </div>
                                            )}

                                            {/* <div className="category">{t('modal_category')}: <span>{product.categoryID}</span></div> */}
                                            {product.totalQuantity > 0 ? (
                                                <div className="available">
                                                    <span>Còn hàng  </span>
                                                </div>

                                            ) : (<span className="ml-10 l-through">Hết hàng</span>)}
                                        </div>
                                        <div className="middle">
                                            <div dangerouslySetInnerHTML={{ __html: product.description }}></div>
                                            <Link to={'/product-detail/' + product.id} className="view-full">{t('modal_view_full')}<span className="lnr lnr-arrow-right"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>

                    {product.totalQuantity > 0 ? (
                        <Button className="btn_add_to_card" onClick={() => handleAddToCart(product)}>
                            {t('add_to_bag')}
                        </Button>

                    ) : (
                        <Button className="btn_add_to_card" onClick={() => handleAddToCartNull()}>
                            {t('add_to_bag')}
                        </Button>
                    )}




                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        {t('close')}
                    </Button>
                </Modal.Footer>
            </Modal >
        </>

    );
};

export default ProductModal;
