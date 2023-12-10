import { memo, useState, useEffect } from "react";
import './style.scss';
import { Icon } from '@iconify/react';
import Cookies from 'js-cookie';
import axios from 'axios';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { useNavigate, useParams } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useRef } from 'react';
import ReactLoading from 'react-loading';
const EditProductAdmin = () => {
    const { productID } = useParams();
    const navigate = useNavigate();
    const adminToken = Cookies.get('adminToken');
    const admin_url = process.env.REACT_APP_ADMIN_URL;
    const api = process.env.REACT_APP_API_URL_ADMIN;
    const [categories, setCategories] = useState([]);
    const [brands, setBrands] = useState([]);
    const [description, setDescription] = useState('');
    const [details, setDetails] = useState('');
    const [category, setCategory] = useState([]);
    const [brand, setBrand] = useState([]);
    const [productName, setProductName] = useState([]);
    const [quantity, setQuantity] = useState([]);
    const [price, setPrice] = useState([]);
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isValidImages, setIsValidImages] = useState(true);

    const [formData, setFormData] = useState({
        productName: '',
        quantity: '',
        price: '',
        category: '',
        brand: '',
        files: []
    });
    const [discounts, setDiscounts] = useState([]);
    const [discount, setDiscount] = useState([]);
    const [discountPrice, setDiscountPrice] = useState([]);

    const calculatePercentageReduction = () => {
        const originalPrice = parseFloat(price);
        const discountedPrice = parseFloat(discountPrice);

        if (originalPrice && discountedPrice) {
            const reductionPercentage = ((originalPrice - discountedPrice) / originalPrice) * 100;
            return reductionPercentage.toFixed(2); // You can adjust the number of decimal places as needed
        }

        return 0; // Default to 0 if prices are not valid numbers
    };

    const calculatedPercentage = calculatePercentageReduction();

    const matchingDiscount = discounts.find((discount) => {
        return parseFloat(discount.percentage) === parseFloat(calculatedPercentage);
    });

    // The ID of the matching discount can be accessed using matchingDiscount.id
    const matchingDiscountId = matchingDiscount ? matchingDiscount.id : null;


    useEffect(() => {
        const adminToken = Cookies.get('adminToken');

        const fetchDiscount = async () => {
            try {
                const response = await axios.get(api + '/discounts', {
                    headers: {
                        'Authorization': `Bearer ${adminToken}`,
                        'Content-Type': 'application/json',
                    }
                });

                // Xử lý phản hồi từ server (response.data)
                setDiscounts(response.data);
            } catch (error) {
                // Xử lý lỗi
                console.error('Error fetching discounts:', error);
            }
        };

        fetchDiscount();
    }, []);
    // Fetch product data for editing
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`${api}/products/${productID}`, {
                    headers: {
                        'Authorization': `Bearer ${adminToken}`,
                        'Content-Type': 'application/json',
                    }
                });
                setPrice(response.data.price);
                setImages(response.data.listImage);
                setProductName(response.data.name);
                setCategory(response.data.categoryID);
                setBrand(response.data.catalogID);
                setQuantity(response.data.totalQuantity);
                setDescription(response.data.description);
                setDetails(response.data.detail);
                setDiscount(response.data.discountID);
                setDiscountPrice(response.data.discountedPrice);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };

        fetchProduct();

    }, [api, adminToken, productID]);

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

        if (discount) {
            try {
                const formDataToSend = new FormData();
                formDataToSend.append('name', productName);
                formDataToSend.append('totalQuantity', quantity);
                formDataToSend.append('price', price);
                formDataToSend.append('categoryID', category);
                formDataToSend.append('catalogID', brand);
                formDataToSend.append('description', description);
                formDataToSend.append('detail', details);
                formDataToSend.append('sizesID', 2);
                formDataToSend.append('colorsID', 2);
                formDataToSend.append('lengthIDX', 1);

                if (Array.isArray(formData.files) && formData.files.length > 0) {
                    // Sắp xếp lại mảng files theo thứ tự
                    formData.files.sort((a, b) => a.lastModified - b.lastModified);

                    formData.files.forEach((file, index) => {
                        formDataToSend.append('files', file);
                    });
                }
                setIsLoading(true);
                const response = await axios.put(`${api}/products/update/${productID}`, formDataToSend, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Authorization': `Bearer ${adminToken}`
                    }
                });
                await axios.post(
                    `${api}/products/${productID}/assignDiscount/${discount}`,
                    {},
                    {
                        headers: {
                            'Authorization': `Bearer ${adminToken}`
                        }
                    }
                );
                setIsLoading(false);
                navigate(admin_url + '/products_list');
            } catch (error) {
                setIsLoading(false);
                NotificationManager.error('Lỗi xảy ra khi sửa sản phẩm. Vui lòng nhập đầy đủ thông tin của sản phẩm', 'Lỗi');
                console.error('Error editing product:', error);
            }

        } else {
            try {
                const formDataToSend = new FormData();
                formDataToSend.append('name', productName);
                formDataToSend.append('totalQuantity', quantity);
                formDataToSend.append('price', price);
                formDataToSend.append('categoryID', category);
                formDataToSend.append('catalogID', brand);
                formDataToSend.append('description', description);
                formDataToSend.append('detail', details);
                formDataToSend.append('sizesID', 2);
                formDataToSend.append('colorsID', 2);
                formDataToSend.append('lengthIDX', 1);

                if (Array.isArray(formData.files) && formData.files.length > 0) {
                    // Sắp xếp lại mảng files theo thứ tự
                    formData.files.sort((a, b) => a.lastModified - b.lastModified);

                    formData.files.forEach((file, index) => {
                        formDataToSend.append('files', file);
                    });
                }
                setIsLoading(true);
                const response = await axios.put(`${api}/products/update/${productID}`, formDataToSend, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Authorization': `Bearer ${adminToken}`
                    }
                });
                await axios.post(
                    `${api}/products/${productID}/assignDiscount/0`,
                    {},
                    {
                        headers: {
                            'Authorization': `Bearer ${adminToken}`
                        }
                    }
                );
                setIsLoading(false);
                navigate(admin_url + '/products_list');
            } catch (error) {
                setIsLoading(false);
                NotificationManager.error('Lỗi xảy ra khi sửa sản phẩm. Vui lòng nhập đầy đủ thông tin của sản phẩm', 'Lỗi');
                console.error('Error editing product null:', error);
            }
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
                    <h4 className="fw-bold py-3 mb-4"><span className="text-muted fw-light">PT Sports /</span> Sửa sản phẩm : {productName}</h4>

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
                                                    aria-label="Tên sản phẩm"
                                                    aria-describedby="product-name-icon"
                                                    name="productName"
                                                    onChange={(e) => setProductName(e.target.value)}
                                                    value={productName}
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
                                                    onChange={(e) => setQuantity(e.target.value)}
                                                    name="quantity"
                                                    value={quantity}
                                                    min={"0"}
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
                                                    onChange={(e) => setPrice(e.target.value)}
                                                    name="price"
                                                    value={price}
                                                    min={"0"}
                                                />
                                            </div>
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label" htmlFor="product-discount">Khuyến Mãi</label>
                                            <div className="input-group input-group-merge">
                                                <span id="product-discount-icon" className="input-group-text"><Icon icon="mdi:discount-outline" /></span>
                                                <select
                                                    className="form-select"
                                                    id="product-discount"
                                                    aria-describedby="product-discount-icon"
                                                    onChange={(e) => setDiscount(e.target.value)}
                                                    name="discount"
                                                    value={discount || matchingDiscountId}
                                                >


                                                    <option value='' >Chọn...</option>
                                                    {discounts && discounts.map((discount) => (
                                                        <option key={discount.id} value={discount.id}>
                                                            {discount.percentage} %
                                                        </option>
                                                    ))}
                                                </select>
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
                                                    onChange={(e) => setCategory(e.target.value)}
                                                    name="category"
                                                    value={category}
                                                >
                                                    <option value="" disabled>Chọn...</option>
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
                                                    onChange={(e) => setBrand(e.target.value)}
                                                    name="brand"
                                                    value={brand}
                                                >
                                                    <option value="" disabled>Chọn...</option>
                                                    {brands.map(brand => (
                                                        <option key={brand.catalogId} value={brand.catalogId}>{brand.catalogName}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="product-image" className="form-label">Thêm ảnh sản phẩm (jpg, png) - Chọn ảnh hiển thị chính đầu tiên</label>
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
                                                    capture="user"
                                                />
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Ảnh cũ</label>
                                            <div className="d-flex flex-wrap">
                                                {images.map((image, index) => (
                                                    <img
                                                        key={index}
                                                        src={image.path}  // Đặt đường dẫn ảnh thực tế vào đây
                                                        alt={`Old Image ${index + 1}`}
                                                        className="img-thumbnail m-2"
                                                        style={{ maxWidth: '100px', maxHeight: '100px' }}
                                                    />
                                                ))}
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
                                        <button type="submit" className="btn btn-primary">Sửa sản phẩm</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default memo(EditProductAdmin);
