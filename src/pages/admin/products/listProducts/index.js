import { memo } from "react";
import './style.scss';
import { Link } from "react-router-dom";

const ListProductsAdmin = () => {


    return (
        <>
            <div class="content-wrapper">
                <div class="container-xxl flex-grow-1 container-p-y">
                    <h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">PT Sports /</span> Products List</h4>

                    <div class="row row-cols-1 row-cols-md-4 g-4 mb-5">
                        <div class="col">
                            <div class="card h-100">
                                <img class="card-img-top" src="../assets/img/elements/2.jpg" alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">
                                        Some quick example text to build on the card title and make up the bulk of the card's content.
                                    </p>
                                    <Link href="javascript:void(0)" class="btn btn-outline-primary">Go somewhere</Link>
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