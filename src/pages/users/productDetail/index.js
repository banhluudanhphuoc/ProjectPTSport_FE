import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import CommentSection from "components/user/facebook/comment";
import Cookies from 'js-cookie';
import { memo, useCallback, useEffect, useState } from "react";

import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import { useTranslation } from "react-i18next";
import { FaHeart, FaRegHeart, FaRegStar, FaStar } from "react-icons/fa";
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'owl.carousel/dist/owl.carousel.min';
import 'owl.carousel/dist/owl.carousel.min.js';
import ReactImageMagnify from 'react-image-magnify';
import OwlCarousel from 'react-owl-carousel';
import Rating from "react-rating";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useCart } from "react-use-cart";
import SizeChart from '../../../assets/users/size-charts/giay-nam.png';
import Banner from "../../users/theme/banner";
import RelatedProductArea from "../theme/relatedProductArea";
import './style.scss';
const ProductDetail = () => {
    const postUrl = process.env.REACT_APP_URL;
    const { t, i18n } = useTranslation();
    const userToken = Cookies.get('userToken');
    const [mainImage, setMainImage] = useState();
    const { productID } = useParams();
    const [product, setProduct] = useState([]);
    const [productListImage, setProductListImage] = useState([]);
    const api = process.env.REACT_APP_API_URL;
    const auth = process.env.REACT_APP_API_URL_AUTH;
    const [user, setUser] = useState([]);
    const [productsWishList, setProductsWishList] = useState([]);
    const { addItem, items, updateItemQuantity } = useCart();
    const [sizesText, setSizesText] = useState([]);
    const [sizesNumber, setSizesNumber] = useState([]);
    const [size, setSize] = useState();
    const [sizes, setSizes] = useState();
    const [productOnCart, setProductOnCart] = useState([]);
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`${api}/products/${productID}`);
                setProduct(response.data);
                setMainImage(response.data.listImage[0].path);
                setProductListImage(response.data.listImage);
                //console.log(response.data);
            } catch (error) {
                console.error('Error fetching product:', error);
            }

        };
        fetchProduct();
    }, [api, auth, userToken, productID]);



    useEffect(() => {
        if (userToken) {
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
                    fetchItemCart(response.data.userId);
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

            const fetchItemCart = async (userId) => {
                try {
                    const response = await axios.get(api + '/cart/' + userId);

                    setProductOnCart(response.data.itemList); // .itemList
                    // console.log(response.data.itemList);
                    // console.log(items);
                    //console.log(response);
                } catch (error) {
                    console.error('Error fetching products:', error);
                }
            };

            fetchMe();
        }


    }, [api, auth, userToken, productID]);

    function formatCurrency(amount) {
        const formatter = new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
        });

        // Áp dụng định dạng và trả về chuỗi đã định dạng
        return formatter.format(amount);
    }
    const addToWishlist = async () => {
        if (!userToken) {
            NotificationManager.error(t('message_fail_add_wish_list'), t('message_failed'), 1500);
        }
        try {
            // Make an API request to add the product to the wishlist
            const response = await fetch(api + '/wish-list/' + user.userId + '/' + product.id, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            // Handle the response as needed
            if (response.ok) {
                NotificationManager.success(t('message_success_add_wish_list'), t('message_success'), 1500);
                setTimeout(function () {
                    window.location.href = "/wish-list";
                }, 500);
            }
        } catch (error) {
            console.error('Error adding product to wishlist:', error);
        }
    };


    const isProductInWishlist = (wishlist, productId) => {
        return wishlist.some(product => product.id === productId);
    };


    const [cart, setCart] = useState([]);
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

    const navigate = useNavigate();


    const handleAddToCart = (event, item) => {
        event.preventDefault();
        if (!userToken) {
            NotificationManager.error(t('message_fail_add_to_cart'), t('message_failed'), 1500);
        } else {
            if (size === undefined || size === "0") {
                NotificationManager.error(t('message_empty_size'), t('message_failed'), 1500);
                return;
            } else {

                const productInCart = items.find(cartItem => cartItem.productID === item.id);

                const calculateTotalQuantityForProduct = (items, productId) => {
                    const filteredItems = items.filter(item => item.productID === productId);
                    const totalQuantity = filteredItems.reduce((total, currentItem) => total + currentItem.quantity, 0);
                    return totalQuantity;
                };

                const productIdToCalculate = item.id;
                const totalQuantityForProduct = calculateTotalQuantityForProduct(items, productIdToCalculate);


                const findSizeName = (size) => {
                    const foundSize = sizes.find(sizefind => String(sizefind.id) === size);
                    return foundSize ? foundSize.name : null;
                };
                const sizeName = findSizeName(size);

                if (productInCart) {
                    if (productInCart.sizeID === size) {

                        if (totalQuantityForProduct + 1 > item.totalQuantity) {
                            NotificationManager.error(t('message_total_quantity'), '', 1500);
                        } else {
                            const cartItem2 = {
                                id: item.id,
                                productID: item.id,
                                productName: item.name,
                                sizeID: size,
                                sizeName: sizeName,
                                colorID: 2,
                                image: item.listImage[0].path,
                                quantity: 1,
                                price: item.discountedPrice,
                                totalPrice: item.discountedPrice,
                            };

                            const cartItem = {
                                productID: item.id,
                                productName: item.name,
                                sizeID: size,
                                colorID: 2,
                                quantity: 1,
                            };
                            addToCart(cartItem, cartItem2);

                            NotificationManager.success(t('notification_add_product_to_cart_success'), t('notification_add_product_to_cart_success_title'), 1500, () => {
                                navigate("/cart");
                            });
                        }
                    } else {
                        if (totalQuantityForProduct + 1 > item.totalQuantity) {
                            NotificationManager.error(t('message_total_quantity'), '', 1500);
                        } else {

                            const cartItem2 = {
                                id: 900 + size,
                                productID: item.id,
                                productName: item.name,
                                sizeID: size,
                                sizeName: sizeName,
                                colorID: 2,
                                image: item.listImage[0].path,
                                quantity: 1,
                                price: item.discountedPrice,
                                totalPrice: item.discountedPrice,
                            };
                            const cartItem = {
                                productID: item.id,
                                productName: item.name,
                                sizeID: size,
                                colorID: 2,
                                quantity: 1,
                            };
                            addToCart(cartItem, cartItem2);

                            NotificationManager.success(t('notification_add_product_to_cart_success'), t('notification_add_product_to_cart_success_title'), 1500, () => {
                                navigate("/cart");
                            });
                        }
                    }
                } else {

                    const cartItem2 = {
                        id: item.id,
                        productID: item.id,
                        productName: item.name,
                        sizeID: size,
                        sizeName: sizeName,
                        colorID: 2,
                        image: item.listImage[0].path,
                        quantity: 1,
                        price: item.discountedPrice,
                        totalPrice: item.discountedPrice,
                    };
                    const cartItem = {
                        productID: item.id,
                        productName: item.name,
                        sizeID: size,
                        colorID: 2,
                        quantity: 1,
                    };
                    addToCart(cartItem, cartItem2);

                    NotificationManager.success(t('notification_add_product_to_cart_success'), t('notification_add_product_to_cart_success_title'), 1500, () => {
                        navigate("/cart");
                    });

                }
            }

        }
    };





    const handleAddToCartNull = () => {
        NotificationManager.error(t('message_total_quantity'), '', 1500);
    };

    useEffect(() => {
        const fetchSizes = async () => {
            try {
                const response = await axios.get(`${api}/sizes`);
                const sizeToFill = response.data;

                // Use optional chaining to avoid errors if there are no numeric characters
                const textData = sizeToFill
                    .filter(item => !/\d+/.test(item.name))
                    .map(item => ({
                        id: item.id,
                        remainingData: item.name.trim(),
                    }));

                // Filter out items without numeric characters in their names
                const filteredData = sizeToFill.filter(item => /\d+/.test(item.name));

                // Extract and parse numeric values with associated ids
                const numericDataFiltered = filteredData.map(item => ({
                    id: item.id,
                    numericValue: parseInt(item.name.match(/\d+/)[0], 10),
                }));
                setSizes(response.data);
                setSizesText(textData);
                setSizesNumber(numericDataFiltered); // Use the filtered numeric data with ids
                // textData chứa các chuỗi, numericData chứa các số

            } catch (error) {
                console.error('Error fetching size:', error);
            }
        };

        fetchSizes();
    }, [api]);



    const handleSizeChange = useCallback((e) => {
        const value = e.target.value;
        setSize(value);
    }, []);


    const clothes = process.env.REACT_APP_CATEGORY_CLOTHES;
    const shoes = process.env.REACT_APP_CATEGORY_SHOES;

    return (
        <>

            <NotificationContainer />
            <Banner pageTitle={product.name} />
            <div className="product_image_area">
                <div className="container">
                    <div className="row s_product_inner">
                        <div className="col-lg-6">

                            <div className="image-gallery-container">
                                <div className="main-image-container">
                                    <ReactImageMagnify {...{
                                        smallImage: {
                                            alt: '',
                                            isFluidWidth: true,
                                            src: mainImage,
                                        },
                                        largeImage: {
                                            src: mainImage,
                                            width: 1200,
                                            height: 1800,
                                        }
                                    }}
                                        enlargedImageContainerStyle={{ zIndex: 9 }}
                                    />
                                    {/* <Image
                                        src={mainImage}
                                        alt="Main Image"
                                        className="main-image"
                                    /> */}
                                </div>

                                <OwlCarousel className="owl-theme" margin={10} nav >
                                    {productListImage?.map((image) => (
                                        <div className="item" key={image?.id}>
                                            <img
                                                className="custom-img-product-detail"
                                                src={image?.path}
                                                alt=""
                                                onClick={() => setMainImage(image?.path)}
                                            />
                                        </div>
                                    ))}
                                </OwlCarousel>
                            </div>
                        </div>
                        <div className="col-lg-5 offset-lg-1">
                            <div className="s_product_text">
                                <h3>{product.name}</h3>
                                <div className="price">
                                    {product.price !== product.discountedPrice ? (
                                        <>
                                            <h2>{formatCurrency(product.discountedPrice)}</h2>
                                            <h5 className="l-through">{formatCurrency(product.price)}</h5>
                                        </>
                                    ) : (
                                        <h2>{formatCurrency(product.price)}</h2>
                                    )

                                    }


                                </div>

                                <ul className="list">
                                    {/* <li><Link className="active" href="#"><span>Category</span> : Household</Link></li> */}
                                    {product.totalQuantity > 0 ? (
                                        <li><Link href="#" className="stock-product-detail"><span>{t('in_stock')}</span></Link></li>

                                    ) : (<li><Link href="#" className="stock-product-detail"><span>{t('out_stock')}</span></Link></li>)}

                                </ul>
                                <div dangerouslySetInnerHTML={{ __html: product.description }}></div>
                                {product.categoryID === parseInt(clothes) &&
                                    <div className="mb-2 col-md-4">
                                        <label className="form-label" htmlFor="product-size">{t('size')}</label>
                                        <div className="input-group input-group-merge">
                                            <select
                                                className="form-select"
                                                id="product-size"
                                                aria-describedby="product-size-icon"
                                                onChange={handleSizeChange}
                                                name="size"
                                            >
                                                <option value="0" selected>{t('select_size')}</option>
                                                {sizesText.map(size => (
                                                    <option key={size.id} value={size.id}>{size.remainingData}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                }
                                {product.categoryID === parseInt(shoes) &&
                                    <div className="mb-2 col-md-4">
                                        <label className="form-label" htmlFor="product-size">{t('size')}</label>
                                        <div className="input-group input-group-merge">
                                            <select
                                                className="form-select"
                                                id="product-size"
                                                aria-describedby="product-size-icon"
                                                onChange={handleSizeChange}
                                                name="size"
                                            >
                                                <option value="0" selected>{t('select_size')}</option>
                                                {sizesNumber.map(size => (
                                                    <option key={size.id} value={size.id}>{size.numericValue}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                }


                                <div className="card_area d-flex align-items-center">
                                    {product.totalQuantity > 0 ? (
                                        <Link className="primary-btn btn-product-detail" onClick={(event) => handleAddToCart(event, product)}>{t("add_to_bag")}</Link>
                                    ) : (
                                        <Link className="primary-btn btn-product-detail" onClick={handleAddToCartNull}>{t("add_to_bag")}</Link>
                                    )}
                                    {isProductInWishlist(productsWishList, product.id) ? (
                                        <Link className="icon_btn btn-product-detail" to={'/wish-list'}><span><FaHeart /></span></Link>

                                    ) : (
                                        <Link className="icon_btn btn-product-detail" onClick={addToWishlist}><span><FaRegHeart /></span></Link>
                                    )
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="product_description_area">
                <div className="container mt-5 ">
                    <Tab.Container id="my-tabs" defaultActiveKey="home" >
                        <Nav variant="tabs">
                            <Nav.Item >
                                <Nav.Link eventKey="home" >{t('product_detail_description')}</Nav.Link>
                            </Nav.Item>
                            <Nav.Item >
                                <Nav.Link eventKey="size-chart" >{t('product_detail_size_charts')}</Nav.Link>
                            </Nav.Item>
                            <Nav.Item >
                                <Nav.Link eventKey="contact" >{t('product_detail_comments')}</Nav.Link>
                            </Nav.Item>
                            <Nav.Item >
                                <Nav.Link eventKey="review" >{t('product_detail_reviews')}</Nav.Link>
                            </Nav.Item>
                        </Nav>

                        <Tab.Content>
                            <Tab.Pane eventKey="home">
                                <div className="container mt-5 mb-5 ">
                                    <div dangerouslySetInnerHTML={{ __html: product.detail }}></div>
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="size-chart">
                                <div className="container mt-5 mb-5 ">
                                    <div className="table-responsive">
                                        <img src={SizeChart} alt="" />
                                    </div>
                                </div>

                            </Tab.Pane>
                            <Tab.Pane eventKey="contact">
                                <Container className="mt-3 mb-3 d-flex">
                                    <Col md='12'>
                                        <Row>
                                            <Col>
                                                <div className="review_item">
                                                    <CommentSection url={postUrl} />
                                                </div>
                                            </Col>
                                        </Row>


                                    </Col>
                                    {/* <Col md='6'>
                                        <div className="review_box">
                                            <h4>{t('product_detail_post_comment')}</h4>
                                            <form className="row contact_form" action="contact_process.php" method="post" id="contactForm" novalidate="novalidate">
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" id="name" name="name" placeholder={t('product_detail_post_comment_name')} />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <input type="email" className="form-control" id="email" name="email" placeholder={t('product_detail_post_comment_email')} />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" id="number" name="number" placeholder={t('product_detail_post_comment_number')} />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <textarea className="form-control" name="message" id="message" rows="1" placeholder={t('product_detail_post_comment_message')}></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 text-right">
                                                    <button type="submit" value="submit" className="btn primary-btn">{t('product_detail_post_comment_submit')}</button>
                                                </div>
                                            </form>
                                        </div>
                                    </Col> */}
                                </Container>

                            </Tab.Pane>
                            <Tab.Pane eventKey="review">
                                <Container className="mt-3 mb-3">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="row total_rate">
                                                {/* <div className="col-6">
                                                    <div className="box_total_product mt-3">
                                                        <h5>Overall</h5>
                                                        <h4>4.0</h4>
                                                        <h6>(03 Reviews)</h6>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="rating_list mt-3">
                                                        <h4>Based on 3 Reviews</h4>
                                                    </div>
                                                </div> */}
                                            </div>
                                            <div className="review_list">

                                                {/* <div className="review_item">
                                                    <div className="media">
                                                        <div className="d-flex">
                                                            <img src={ImgReview3} alt="" />
                                                        </div>
                                                        <div className="media-body">
                                                            <h4>Blake Ruiz</h4>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </div>
                                                    </div>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                                                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                                        commodo</p>
                                                </div> */}

                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="review_box mt-3">
                                                <h4>{t('product_detail_post_review_add')}</h4>
                                                <p>{t('product_detail_post_review_rate')}:</p>
                                                <ul className="star-rating list">
                                                    <Rating
                                                        emptySymbol={<FaRegStar />}
                                                        fullSymbol={<FaStar />}
                                                    />
                                                </ul>

                                                <form className="row contact_form" action="" method="post" id="contactForm" novalidate="novalidate">
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                id="name"
                                                                name="name"
                                                                placeholder={t('product_detail_post_comment_name')}
                                                                onfocus="this.placeholder = ''"
                                                                onblur="this.placeholder = 'Your Full name'"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <input
                                                                type="email"
                                                                className="form-control"
                                                                id="email"
                                                                name="email"
                                                                placeholder={t('product_detail_post_comment_email')}
                                                                onfocus="this.placeholder = ''"
                                                                onblur="this.placeholder = 'Email Address'"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                id="number"
                                                                name="number"
                                                                placeholder={t('product_detail_post_comment_number')}
                                                                onfocus="this.placeholder = ''"
                                                                onblur="this.placeholder = 'Phone Number'"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <textarea
                                                                className="form-control"
                                                                name="message"
                                                                id="message"
                                                                rows="1"
                                                                placeholder={t('product_detail_post_comment_review')}
                                                                onfocus="this.placeholder = ''"
                                                                onblur="this.placeholder = 'Review'">

                                                            </textarea>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12 text-right">
                                                        <button type="submit" value="submit" className="primary-btn">{t('product_detail_post_comment_submit')}</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </Container>
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </div>
            </section>

            < RelatedProductArea />
        </>
    );
};

export default memo(ProductDetail);
