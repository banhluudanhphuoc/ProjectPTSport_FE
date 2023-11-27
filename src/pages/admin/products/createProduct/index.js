import { memo, useState, useEffect } from "react";
import './style.scss';
import { Icon } from '@iconify/react';
import Cookies from 'js-cookie';
import axios from 'axios';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { useNavigate } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ReactLoading from 'react-loading';
const CreateProductAdmin = () => {
    const navigate = useNavigate();
    const adminToken = Cookies.get('adminToken');
    const admin_url = process.env.REACT_APP_ADMIN_URL;
    const api = process.env.REACT_APP_API_URL_ADMIN;
    const [categories, setCategories] = useState([]);
    const [brands, setBrands] = useState([]);
    const [description, setDescription] = useState([]);
    const [details, setDetails] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isValidImages, setIsValidImages] = useState(true);
    // Fetch category data from the server
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get(`${api}/categories`, {
                    headers: {
                        'Authorization': `Bearer ${adminToken}`,
                        'Content-Type': 'application/json',
                    }
                });
                setCategories(response.data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategories();
    }, [api, adminToken]);

    // Fetch brand data from the server
    useEffect(() => {
        const fetchBrands = async () => {
            try {
                const response = await axios.get(`${api}/catalogs`, {
                    headers: {
                        'Authorization': `Bearer ${adminToken}`,
                        'Content-Type': 'application/json',
                    }
                });
                setBrands(response.data);
            } catch (error) {
                console.error('Error fetching brands:', error);
            }
        };

        fetchBrands();
    }, [api, adminToken]);

    const [formData, setFormData] = useState({
        productName: '',
        quantity: '',
        price: '',
        category: '',
        brand: '',
        description: '',
        details: '',
        files: []
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };


    const MAX_FILE_SIZE_MB = 5;
    const MAX_WIDTH = 1600;
    const MAX_HEIGHT = 1600;
    const handleFileChange = async (e) => {
        const files = e.target.files;

        try {
            const isValidSize = await Promise.all(
                Array.from(files).map(async (file) => {
                    return new Promise((resolve) => {
                        const image = new Image();
                        image.onload = function () {
                            resolve(
                                file.size <= MAX_FILE_SIZE_MB * 1024 * 1024 &&
                                image.width <= MAX_WIDTH &&
                                image.height <= MAX_HEIGHT
                            );
                        };
                        image.src = URL.createObjectURL(file);
                    });
                })
            );

            if (isValidSize.includes(false)) {
                NotificationManager.error('Kích thước ảnh không hợp lệ', 'Lỗi');
                setIsValidImages(false);
                return;
            }

            setIsValidImages(true);

            setFormData((prevFormData) => ({
                ...prevFormData,
                files: Array.from(files),
            }));
        } catch (error) {
            console.error('Lỗi kiểm tra kích thước hình ảnh:', error);
        }
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!isValidImages) {
            NotificationManager.error('Có ít nhất 1 ảnh không hợp lệ. Vui lòng kiểm tra lại', 'Lỗi');
            return;
        }
        try {
            const formDataToSend = new FormData();
            formDataToSend.append('name', formData.productName);
            formDataToSend.append('totalQuantity', formData.quantity);
            formDataToSend.append('price', formData.price);
            formDataToSend.append('categoryID', formData.category);
            formDataToSend.append('catalogID', formData.brand);
            formDataToSend.append('description', description);
            formDataToSend.append('detail', details);
            formDataToSend.append('sizesID', 2);
            formDataToSend.append('colorsID', 2);
            formDataToSend.append('lengthIDX', 1);

            if (Array.isArray(formData.files) && formData.files.length > 0) {
                formData.files.forEach((file, index) => {
                    formDataToSend.append('files', file);
                });
            }
            console.log(formDataToSend);
            setIsLoading(true);
            const response = await axios.post(`${api}/products`, formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${adminToken}`
                }
            });

            setIsLoading(false);
            navigate(admin_url + '/products_list');
        } catch (error) {
            setIsLoading(false);
            NotificationManager.error('Lỗi xảy ra khi thêm sản phẩm . Vui lòng nhập đầy đủ thông tin của sản phẩm', 'Lỗi');
            console.error('Error adding product:', error);
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
                    <h4 className="fw-bold py-3 mb-4"><span className="text-muted fw-light">PT Sports /</span> Thêm sản phẩm</h4>

                    <div className="row row-cols-1 row-cols-md-4 g-4 mb-5">
                        <div className="col-xl">
                            <div className="card mb-4">
                                <div className="card-body">
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-3">
                                            <label className="form-label" htmlFor="product-name">Tên sản phẩm</label>
                                            <div className="input-group input-group-merge">
                                                <span id="product-name-icon" className="input-group-text"><Icon icon="fluent-mdl2:product-variant" /></span>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="product-name"
                                                    placeholder="Tên sản phẩm"
                                                    aria-label="Tên sản phẩm"
                                                    aria-describedby="product-name-icon"
                                                    onChange={handleInputChange}
                                                    name="productName"
                                                />
                                            </div>
                                        </div>
                                        <div className="mb-5">
                                            <label className="form-label" htmlFor="product-description">Mô tả</label>
                                            <div className="input-group input-group-merge">
                                                <ReactQuill
                                                    className='content-news'
                                                    value={description}
                                                    onChange={(content) => setDescription(content)}
                                                    modules={{
                                                        toolbar: [
                                                            [{ header: [1, 2, 3, 4, 5, 6, false] }],
                                                            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                                                            [{ list: 'ordered' }, { list: 'bullet' }],
                                                            ['link', 'image'],
                                                            ['clean'],
                                                        ],
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label" htmlFor="product-quantity">Số lượng</label>
                                            <div className="input-group input-group-merge">
                                                <span id="product-quantity-icon" className="input-group-text"><Icon icon="material-symbols:inventory-2-outline" /></span>
                                                <input
                                                    type="number"
                                                    id="product-quantity"
                                                    className="form-control"
                                                    placeholder="Số lượng"
                                                    aria-label="Số lượng"
                                                    aria-describedby="product-quantity-icon"
                                                    onChange={handleInputChange}
                                                    name="quantity"
                                                />
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label" htmlFor="product-price">Giá</label>
                                            <div className="input-group input-group-merge">
                                                <span id="product-price-icon" className="input-group-text"><Icon icon="icomoon-free:price-tags" /></span>
                                                <input
                                                    type="number"
                                                    id="product-price"
                                                    className="form-control"
                                                    placeholder="Giá"
                                                    aria-label="Giá"
                                                    aria-describedby="product-price-icon"
                                                    onChange={handleInputChange}
                                                    name="price"
                                                />
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label" htmlFor="product-category">Danh mục</label>
                                            <div className="input-group input-group-merge">
                                                <span id="product-category-icon" className="input-group-text"><Icon icon="iconamoon:category-fill" /></span>
                                                <select
                                                    className="form-select"
                                                    id="product-category"
                                                    aria-describedby="product-category-icon"
                                                    onChange={handleInputChange}
                                                    name="category"
                                                >
                                                    <option value="" selected disabled>Choose...</option>
                                                    {categories.map(category => (
                                                        <option key={category.categoryID} value={category.categoryID}>{category.categoryName}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label" htmlFor="product-brand">Thương hiệu</label>
                                            <div className="input-group input-group-merge">
                                                <span id="product-brand-icon" className="input-group-text"><Icon icon="tabler:brand-cake" /></span>
                                                <select
                                                    className="form-select"
                                                    id="product-brand"
                                                    aria-describedby="product-brand-icon"
                                                    onChange={handleInputChange}
                                                    name="brand"
                                                >
                                                    <option value="" selected disabled>Choose...</option>
                                                    {brands.map(brand => (
                                                        <option key={brand.catalogId} value={brand.catalogId}>{brand.catalogName}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="product-image" className="form-label">Thêm ảnh sản phẩm (jpg, png)</label>
                                            <div className="input-group input-group-merge">
                                                <span id="product-image-icon" className="input-group-text"><Icon icon="ph:image-light" /></span>
                                                <input
                                                    className="form-control"
                                                    type="file"
                                                    id="product-image"
                                                    multiple
                                                    aria-describedby="product-image-icon"
                                                    onChange={handleFileChange}
                                                    accept=".jpg, .jpeg, .png"
                                                />
                                            </div>
                                        </div>
                                        <div className="mb-5">
                                            <label className="form-label" htmlFor="product-details">Chi tiết</label>
                                            <div className="input-group input-group-merge">
                                                <ReactQuill
                                                    className='content-news'
                                                    value={details}
                                                    onChange={(content) => setDetails(content)}
                                                    modules={{
                                                        toolbar: [
                                                            [{ header: [1, 2, 3, 4, 5, 6, false] }],
                                                            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                                                            [{ list: 'ordered' }, { list: 'bullet' }],
                                                            ['link', 'image'],
                                                            ['clean'],
                                                        ],
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-primary" disabled={!isValidImages}>Thêm sản phẩm</button>
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
