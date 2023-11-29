import { memo, useState, useEffect } from "react";
import './style.scss';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Modal, Button, Image } from 'react-bootstrap';
import axios from 'axios';
import Banner from "pages/users/theme/banner";
import { useTranslation } from "react-i18next";
import { CartProvider, useCart } from "react-use-cart";
import RelatedProductArea from "pages/users/theme/relatedProductArea";
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import ProductModal from "components/user/modal/ProductModal";
import ProductItem from "components/user/items/ProductItem2";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { FaEllipsis } from "react-icons/fa6";
import { useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';
const CategoryPage = () => {
    const { addItem } = useCart();
    const { t, i18n } = useTranslation();
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    const [data, setData] = useState({
        contents: [],
        lastPage: false,
        pageNumber: 0,
        pageSize: 9,
        totalElements: 0,
        totalPages: 0,
    });
    const [productsFilter, setProductsFilter] = useState([]);

    const [categories, setCategories] = useState([]);
    const [brands, setBrands] = useState([]);
    const auth = process.env.REACT_APP_API_URL_AUTH;
    const [user, setUser] = useState([]);
    const [productsWishList, setProductsWishList] = useState([]);
    const userToken = Cookies.get('userToken');

    const api = process.env.REACT_APP_API_URL;
    const location = useLocation();

    const pathname = location.pathname;
    const parts = pathname.split('/');
    const type = parts[1];
    const idFilter = parts[2];
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let response;
                if (idFilter) {
                    // Handle the case when both type and idFilter are defined
                    if (type === 'brand-page') {
                        response = await axios.get(api + `/filter-by-catalog/` + idFilter);
                        setProductsFilter(response.data);

                    } else if (type === 'category-page') {
                        response = await axios.get(api + '/filter-by-category/' + idFilter);
                        setProductsFilter(response.data);
                    }
                } else {
                    // Handle the case when either type or idFilter is undefined
                    response = await axios.get(api + '/products', { maxRedirects: 5 });
                    setData(response.data);
                }

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [api, type, idFilter]);
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get(api + '/categories');

                // Xử lý phản hồi từ server (response.data)
                setCategories(response.data);
            } catch (error) {
                // Xử lý lỗi
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


    useEffect(() => {

        const fetchMe = async () => {
            try {
                const response = await axios.get(auth + '/me', {
                    headers: {
                        'Authorization': `Bearer ${userToken}`,
                        'Content-Type': 'application/json',
                    }
                });

                setUser(response.data);

                // Call fetchProducts after setUser
                fetchProductsWishList(response.data.userId);
            } catch (error) {
                console.error('Error fetching Brand:', error);
            }
        };

        const fetchProductsWishList = async (userId) => {
            try {
                const response = await axios.get(api + '/wish-list/' + userId, {
                    headers: {
                        'Authorization': `Bearer ${userToken}`,
                        'Content-Type': 'application/json',
                    }
                });

                setProductsWishList(response.data.productDtos);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchMe();
    }, [api, auth]);
    const isProductInWishlist = (wishlist, productId) => {
        return wishlist.some(product => product.id === productId);
    };


    const renderPaginationLinks = () => {
        const links = [];
        if (data.pageNumber) {
            for (let i = 1; i <= data.totalPages; i++) {
                links.push(
                    <Link key={i} className={i === data.pageNumber + 1 ? 'active' : ''}>
                        {i}
                    </Link>
                );
            }
            return links;
        }
        return null;
    };



    const addToCart = (cartItem, cartItem2) => {
        fetch(api + `/cart/${user.userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(cartItem),
        })
            .then((response) => response.json())
            .then((data) => {
                setCart(data.itemList);
            })
            .catch((error) => {
                console.error('Error adding to cart:', error);
            });
        addItem(cartItem2);
    };


    const handleAddToCart = (item) => {
        if (!userToken) {
            NotificationManager.error(t('message_fail_add_to_cart'), t('message_failed'));
        } else {
            const cartItem2 = {
                id: item.id,
                productName: item.name,
                sizeID: 2,
                colorID: 2,
                image: item.listImage[0].path,
                quantity: 1,
                price: item.price,
                totalPrice: item.price,
            };
            const cartItem = {
                productID: item.id, // ID thực của sản phẩm
                productName: item.name,
                sizeID: 2,
                colorID: 2,
                image: item.listImage[0].path,
                quantity: 1,
                price: item.price,
                totalPrice: item.price,
            };
            addToCart(cartItem, cartItem2);

            // Hiển thị thông báo thành công
            NotificationManager.success(t('notification_add_product_to_cart_success'), t('notification_add_product_to_cart_success_title'), 3000, () => {
                navigate("/cart");
            });
        }
    };

    return (
        <>

            <NotificationContainer />
            {type === 'category' ?
                <Banner pageTitle={t('pageTitle_category')} />
                :
                <Banner pageTitle={t('pageTitle_brand')} />}


            {/* <!-- End Banner Area-- > */}
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-lg-4 col-md-5">
                        <div className="sidebar-categories">

                            <div className="head">
                                {type === 'category-page' ? t('menu_categries') : t('menu_brands')}
                            </div>
                            {type === 'category-page' ? (
                                <ul className="main-categories">
                                    {categories.map((category) => (
                                        <li className="main-nav-list">
                                            <Link to={`/category-page/` + category.categoryID}>
                                                <span className="lnr lnr-arrow-right"></span>
                                                {category.categoryName}
                                                {/* <span className="number">()</span> */}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <ul className="main-categories">
                                    {brands.map((brand) => (
                                        <li className="main-nav-list">
                                            <Link to={`/brand-page/` + brand.catalogId}>
                                                <span className="lnr lnr-arrow-right"></span>
                                                {brand.catalogName}
                                                {/* <span className="number">()</span> */}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                    <div className="col-xl-9 col-lg-8 col-md-7">

                        <div className="filter-bar d-flex flex-wrap align-items-center">
                            <div className="pagination">
                                <select class="nice-select">
                                    <option value="1">{t('sorting_default')}</option>
                                    <option value="2">{t('sorting_price_high')}</option>
                                    <option value="3">{t('sorting_price_low')}</option>
                                </select>
                            </div>
                            <div className="sorting mr-auto">

                            </div>
                            <div className="pagination">

                                <Link href="#" className="prev-arrow" disabled={data.pageNumber === 0}>
                                    <GrFormPrevious />
                                </Link>
                                {renderPaginationLinks()}
                                <Link
                                    href="#"
                                    className="next-arrow"
                                    disabled={data.pageNumber === data.totalPages - 1 || data.lastPage}
                                >
                                    <GrFormNext />
                                </Link>
                            </div>
                        </div>
                        {/* <!-- End Filter Bar -->
                        <!-- Start Best Seller --> */}
                        <section className="lattest-product-area pb-40 category-list">
                            <div className="row">
                                {idFilter ? (productsFilter.map((item) => (
                                    <ProductItem
                                        product={item}
                                        handleAddToCart={handleAddToCart}
                                        t={t}
                                        setShowModal={setShowModal}
                                        key={item.id}
                                        isInWishlist={isProductInWishlist(productsWishList, item.id)}
                                        userId={user.userId}
                                    />
                                ))) : (
                                    data.contents.map((item) => (
                                        <ProductItem
                                            product={item}
                                            handleAddToCart={handleAddToCart}
                                            t={t}
                                            setShowModal={setShowModal}
                                            key={item.id}
                                            isInWishlist={isProductInWishlist(productsWishList, item.id)}
                                            userId={user.userId}

                                        />
                                    ))
                                )}


                            </div>
                        </section>


                    </div>
                </div>
                < RelatedProductArea />
            </div>
            {idFilter ? (productsFilter.map((item) => (
                <ProductModal
                    product={item}
                    showModal={showModal === item.id}
                    setShowModal={setShowModal}
                    handleAddToCart={handleAddToCart}
                    t={t}
                    key={item.id}
                />
            ))) : (
                data.contents.map((item) => (
                    <ProductModal
                        product={item}
                        showModal={showModal === item.id}
                        setShowModal={setShowModal}
                        handleAddToCart={handleAddToCart}
                        t={t}
                        key={item.id}
                    />
                ))
            )}


        </>

    );
};

export default memo(CategoryPage);