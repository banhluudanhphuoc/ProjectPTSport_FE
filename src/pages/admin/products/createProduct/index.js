
import { memo, useState } from "react";
import './style.scss';
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';

import { NotificationContainer, NotificationManager } from 'react-notifications';
import { useNavigate } from 'react-router-dom';

const CreateProductAdmin = () => {
    const [showSuccess, setShowSuccess] = useState(false);

    const navigate = useNavigate();
    const handleAddToCart = (item) => {
        NotificationManager.success("Thành công", "Thêm sản phẩm thành công", 3000);
    };

    return (
        <>
            <div className="content-wrapper">
                <div className="container-xxl flex-grow-1 container-p-y">
                    <h4 className="fw-bold py-3 mb-4"><span className="text-muted fw-light">PT Sports /</span> Thêm sản phẩm</h4>

                    <div className="row row-cols-1 row-cols-md-4 g-4 mb-5">
                        <div className="col-xl">
                            <div className="card mb-4">

                                <div className="card-body">
                                    <form>
                                        <div className="mb-3">
                                            <label className="form-label" for="basic-icon-default-product-name">Tên sản phẩm</label>
                                            <div className="input-group input-group-merge">
                                                <span id="basic-icon-default-product-name2" className="input-group-text"><Icon icon="fluent-mdl2:product-variant" /></span>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="basic-icon-default-product-name"
                                                    placeholder="Tên sản phẩm"
                                                    aria-label="Tên sản phẩm"
                                                    aria-describedby="basic-icon-default-product-name2"
                                                />
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label" for="basic-icon-default-inventory">Số lượng</label>
                                            <div className="input-group input-group-merge">
                                                <span id="basic-icon-default-inventory2" className="input-group-text"><Icon icon="material-symbols:inventory-2-outline" /></span>
                                                <input
                                                    type="number"
                                                    id="basic-icon-default-inventory"
                                                    className="form-control"
                                                    placeholder="Số lượng"
                                                    aria-label="Số lượng"
                                                    aria-describedby="basic-icon-default-inventory2"
                                                />
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label" for="basic-icon-default-price">Giá</label>
                                            <div className="input-group input-group-merge">
                                                <span id="basic-icon-default-price2" className="input-group-text"><Icon icon="icomoon-free:price-tags" /></span>
                                                <input
                                                    type="number"
                                                    id="basic-icon-default-price"
                                                    className="form-control"
                                                    placeholder="Giá"
                                                    aria-label="Giá"
                                                    aria-describedby="basic-icon-default-price2"
                                                />
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label" for="basic-icon-default-category">Danh mục</label>
                                            <div className="input-group input-group-merge">
                                                <span id="basic-icon-default-category2" className="input-group-text"><Icon icon="iconamoon:category-fill" /></span>
                                                <select className="form-select" id="basic-icon-default-category" aria-describedby="basic-icon-default-category2">
                                                    <option selected>Choose...</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label" for="basic-icon-default-brand">Thương hiệu</label>
                                            <div className="input-group input-group-merge">
                                                <span id="basic-icon-default-brand2" className="input-group-text"><Icon icon="tabler:brand-cake" /></span>
                                                <select className="form-select" id="basic-icon-default-brand" aria-describedby="basic-icon-default-brand2">
                                                    <option selected>Choose...</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label" for="basic-icon-default-description">Mô tả</label>
                                            <div className="input-group input-group-merge">
                                                <span id="basic-icon-default-description2" className="input-group-text"><Icon icon="fluent:text-description-ltr-24-regular" /></span>
                                                <textarea
                                                    id="basic-icon-default-description"
                                                    className="form-control"
                                                    placeholder="Mô tả sản phẩm"
                                                    aria-label="Mô tả sản phẩm"
                                                    aria-describedby="basic-icon-default-description2"
                                                ></textarea>
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label for="basic-icon-default-image" className="form-label">Thêm ảnh sản phẩm</label>
                                            <div className="input-group input-group-merge">
                                                <span id="basic-icon-default-image2" className="input-group-text"><Icon icon="ph:image-light" /></span>
                                                <input className="form-control" type="file" id="basic-icon-default-image" multiple aria-describedby="basic-icon-default-image2" />
                                            </div>
                                        </div>
                                        <button type="" className="btn btn-primary" >Thêm sản phẩm</button>

                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    );
};

export default memo(CreateProductAdmin);