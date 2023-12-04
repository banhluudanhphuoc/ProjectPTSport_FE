import { memo, useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';
import Cookies from 'js-cookie';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { Modal, Button } from 'react-bootstrap';
import ReactLoading from 'react-loading';
const ListProductsAdmin = () => {
    const [products, setProducts] = useState([]);
    const api = process.env.REACT_APP_API_URL_ADMIN;
    const admin_url = process.env.REACT_APP_ADMIN_URL;
    useEffect(() => {
        const adminToken = Cookies.get('adminToken');

        const fetchProducts = async () => {
            try {
                const response = await axios.get(api + '/products', {
                    headers: {
                        'Authorization': `Bearer ${adminToken}`,
                        'Content-Type': 'application/json',
                    }
                });
                setProducts(response.data);
            } catch (error) {
                // Xử lý lỗi
                //console.error('Error fetching categories:', error);
            }
        };

        fetchProducts();
    }, []);

    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleDeleteClick = (product) => {
        setSelectedProduct(product);

    };

    const handleConfirmDelete = () => {
        // Gọi hàm xóa sản phẩm sau khi xác nhận
        if (selectedProduct) {
            handleDeleteProduct(selectedProduct.id);
            setSelectedProduct(null);
        }
    };
    const [isLoading, setIsLoading] = useState(false);
    const handleCancelDelete = () => {
        // Hủy bỏ việc xóa sản phẩm và đóng cửa sổ xác nhận
        setSelectedProduct(null);
    };
    const handleDeleteProduct = async (productID) => {
        const adminToken = Cookies.get('adminToken');

        try {
            setIsLoading(true);
            const response = await axios.delete(
                `${api}/products/delete/${productID}`,
                {
                    headers: {
                        'Authorization': `Bearer ${adminToken}`,
                        'Content-Type': 'application/json',
                    }
                }
            );
            setProducts(products.filter(product => product.id !== productID));
            setIsLoading(false);
            NotificationManager.success("Xóa sản phẩm thành công");
        } catch (error) {
            setIsLoading(false);
            //console.error('Error deleting category:', error);
        }
    };

    return (
        <>
            {isLoading && (
                <div className="loading-overlay">
                    <ReactLoading type="spinningBubbles" color="#FD8400" height={100} width={100} />
                </div>
            )}
            <NotificationContainer />
            <div className="content-wrapper">
                <div className="container-xxl flex-grow-1 container-p-y">
                    <h4 className="fw-bold py-3 mb-4"><span className="text-muted fw-light">PT Sports /</span> Danh sách sản phẩm </h4>
                    <div className="row row-cols-1 row-cols-md-4 g-4 mb-5">
                        {products.length > 0 ? (
                            products.map(product => (
                                <div className="col" key={product.id}>
                                    <div className="card h-100">
                                        <img className="card-img-top" src={product.listImage[0].path} alt="image" />
                                        <div className="card-body">
                                            <h5 className="card-title">{product.name}</h5>
                                            <Link to={`${admin_url}/product_edit/${product.id}`} className="btn btn-outline-primary">
                                                Sửa
                                            </Link>
                                            <button onClick={() => handleDeleteClick(product)} className="btn btn-outline-danger ml-2">
                                                Xóa
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <h2>Chưa có sản phẩm nào</h2>
                        )}

                        {selectedProduct && (
                            <Modal show={true} onHide={handleCancelDelete}>
                                <Modal.Header>
                                    <Modal.Title>Xác nhận xóa</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <p>Bạn có chắc chắn muốn xóa sản phẩm "{selectedProduct.name}" không?</p>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleCancelDelete}>
                                        Hủy
                                    </Button>
                                    <Button variant="danger" onClick={handleConfirmDelete}>
                                        Xác nhận xóa
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        )}
                    </div>
                </div>
            </div>

        </>
    );
};

export default memo(ListProductsAdmin);