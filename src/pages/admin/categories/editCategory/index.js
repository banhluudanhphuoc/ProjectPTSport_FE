
import { memo, useState } from "react";
import './style.scss';
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';

const EditCategoryAdmin = () => {


    return (
        <><div className="content-wrapper">
            <div className="container-xxl flex-grow-1 container-p-y">
                <h4 className="fw-bold py-3 mb-4"><span className="text-muted fw-light">PT Sports /</span> Sửa danh mục : </h4>

                <div className="row row-cols-1 row-cols-md-4 g-4 mb-5">
                    <div className="col-xl">
                        <div className="card mb-4">

                            <div className="card-body">
                                <form>
                                    <div className="mb-3">
                                        <label className="form-label" for="basic-icon-default-product-name">Tên danh mục mới</label>
                                        <div className="input-group input-group-merge">
                                            <span id="basic-icon-default-product-name2" className="input-group-text"><Icon icon="iconamoon:category-fill" /></span>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="basic-icon-default-product-name"
                                                placeholder="Tên danh mục mới"
                                                aria-label="Tên danh mục mới"
                                                aria-describedby="basic-icon-default-product-name2"
                                            />
                                        </div>
                                    </div>

                                    <button type="" className="btn btn-primary">Sửa danh mục</button>

                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div></>
    );
};

export default memo(EditCategoryAdmin);