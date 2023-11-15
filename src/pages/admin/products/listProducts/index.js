import { memo } from "react";
import './style.scss';
import { Link } from "react-router-dom";

import Img from '../../../../style/img/l5.jpg';

const ListProductsAdmin = () => {


    return (
        <>
            <div className="content-wrapper">
                <div className="container-xxl flex-grow-1 container-p-y">
                    <h4 className="fw-bold py-3 mb-4"><span className="text-muted fw-light">PT Sports /</span> Danh sách sản phẩm </h4>

                    <div className="row row-cols-1 row-cols-md-4 g-4 mb-5">
                        <div className="col">
                            <div className="card h-100">
                                <img className="card-img-top" src={Img} alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title"> Tên sản phẩm </h5>
                                    <Link to={"/administrator-management/product_edit"} className="btn btn-outline-primary">Sửa </Link>
                                    <Link href="javascript:void(0)" className="btn btn-outline-danger ml-2">Xóa</Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default memo(ListProductsAdmin);