// ProductModal.js
import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Link, useParams, useNavigate } from 'react-router-dom';

const ProductModal = ({ product, showModal, setShowModal, handleAddToCart, t }) => {
    return (
        <Modal show={showModal} onHide={() => setShowModal(false)} key={product.product_id}>
            <Modal.Header></Modal.Header>
            <Modal.Body className="set_width_modal" key={product.id}>
                <div className="container relative">
                    <div className="product-quick-view">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="quick-view-carousel">
                                    <img src={product.img_src} alt="" className="item" width={200} />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="quick-view-content">
                                    <div className="top">
                                        <h3 className="head">{product.product_name}</h3>
                                        <div className="price d-flex align-items-center">
                                            <span className="lnr lnr-tag"></span>
                                            <span className="ml-10">${product.price}</span>
                                        </div>
                                        <div className="price d-flex align-items-center">
                                            <span className="lnr lnr-tag"></span>
                                            <span className="ml-10 l-through">${product.price}</span>
                                        </div>
                                        <div className="category">{t('modal_category')}: <span>Household</span></div>
                                        <div className="available">{t('modal_availibility')}: <span>In Stock</span></div>
                                    </div>
                                    <div className="middle">
                                        <p >{product.description}</p>
                                        <Link to='/product-detail' className="view-full">{t('modal_view_full')}<span className="lnr lnr-arrow-right"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button className="btn_add_to_card" onClick={() => handleAddToCart(product)}>
                    {t('add_to_bag')}
                </Button>
                <Button variant="secondary" onClick={() => setShowModal(false)}>
                    {t('close')}
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ProductModal;
