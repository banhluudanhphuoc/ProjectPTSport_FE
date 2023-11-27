import { memo, useState, useEffect } from "react";
import './style.scss';
import Banner from "../../users/theme/banner";
import { Link } from 'react-router-dom';
import RelatedProductArea from "../theme/relatedProductArea";
import ProductImg from '../../../style/img/category/s-p1.jpg';
import ProductImg1 from '../../../style/img/exclusive.jpg';
import OwlCarousel from 'react-owl-carousel';
import { Tab, Nav, Container, Row, Col, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import ImgReview1 from '../../../style/img/product/review-1.png';
import ImgReview2 from '../../../style/img/product/review-2.png';
import ImgReview3 from '../../../style/img/product/review-3.png';
import SizeChart from '../../../assets/users/size-charts/giay-nam.png';
import { CartProvider, useCart } from "react-use-cart";
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';
import { FaRegHeart, FaHeart, FaEye } from "react-icons/fa";
const ProductDetail = () => {
    const { t, i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState('VI');
    const handleLanguageChange = (newLanguage, lng) => {
        setCurrentLanguage(newLanguage)
        i18n.changeLanguage(lng);
    };

    const [mainImage, setMainImage] = useState();
    const { productID } = useParams();
    const [product, setProduct] = useState([]);
    const api = process.env.REACT_APP_API_URL;
    const auth = process.env.REACT_APP_API_URL_AUTH;
    const [user, setUser] = useState([]);
    const [productsWishList, setProductsWishList] = useState([]);
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`${api}/products/${productID}`);
                setProduct(response.data);
                setMainImage(response.data.listImage[0].path);

            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };

        fetchProduct();

    }, [api, productID]);
    function formatCurrency(amount) {
        // Sử dụng NumberFormat để định dạng số
        const formatter = new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
        });

        // Áp dụng định dạng và trả về chuỗi đã định dạng
        return formatter.format(amount);
    }

    useEffect(() => {
        const userToken = Cookies.get('userToken');

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
    const addToWishlist = async () => {
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
                NotificationManager.success("Thêm vào danh sách Yêu thích thành công", "Thành Công");
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
    const addToCart = (cartItem) => {
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
    };

    const navigate = useNavigate();
    const handleAddToCart = (item) => {
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
        // Xử lý thêm sản phẩm vào giỏ hàng ở đây
        addToCart(cartItem);
        // Hiển thị thông báo thành công
        NotificationManager.success(t('notification_add_product_to_cart_success'), t('notification_add_product_to_cart_success_title'), 3000, () => {
            navigate("/cart");
        });
    };





    const stars = document.querySelectorAll('.star');
    stars.forEach((star, index) => {
        star.addEventListener('mouseover', () => {
            // Thay đổi class của biểu tượng Font Awesome khi hover
            star.querySelector('i').classList.remove('fa-star-o');
            star.querySelector('i').classList.add('fa-star');
        });

        star.addEventListener('mouseout', () => {
            // Đảm bảo rằng class đã chuyển đổi được đổi trở lại sau khi hover
            if (!star.classList.contains('active')) {
                star.querySelector('i').classList.remove('fa-star');
                star.querySelector('i').classList.add('fa-star-o');
            }
        });

        star.addEventListener('click', () => {
            // Xóa lớp 'active' khỏi tất cả các ngôi sao
            stars.forEach((s, i) => {
                s.classList.remove('active');
            });
            // Thêm lớp 'active' cho các ngôi sao từ vị trí 0 đến vị trí được click
            for (let i = 0; i <= index; i++) {
                stars[i].classList.add('active');
            }
        });
    });


    return (
        <>
            <NotificationContainer />
            <Banner pageTitle={product.name} />
            <div class="product_image_area">
                <div class="container">
                    <div class="row s_product_inner">
                        <div class="col-lg-6">

                            <div className="image-gallery-container">
                                <div className="main-image-container">
                                    <Image
                                        src={mainImage}
                                        alt="Main Image"
                                        className="main-image"
                                    />
                                </div>
                                <OwlCarousel className="owl-theme" loop margin={10} nav>
                                    {product.listImage && (
                                        product.listImage.map((image) => (
                                            <div className="thumbnail-item">
                                                <img
                                                    className="thumbnail"
                                                    src={image.path}
                                                    alt=""
                                                    onClick={() => setMainImage(image.path)}
                                                />
                                            </div>
                                        ))
                                    )}
                                </OwlCarousel>
                            </div>
                        </div>
                        <div class="col-lg-5 offset-lg-1">
                            <div class="s_product_text">
                                <h3>{product.name}</h3>
                                <div class="price">
                                    <h2>{formatCurrency(product.price)}</h2>
                                    {/* <h5 class="l-through">$210.00</h5> */}
                                </div>

                                <ul class="list">
                                    {/* <li><Link class="active" href="#"><span>Category</span> : Household</Link></li> */}
                                    {product.totalQuantity > 0 ? (
                                        <li><Link href="#" className="stock-product-detail"><span>Còn hàng</span></Link></li>

                                    ) : (<li><Link href="#" className="stock-product-detail"><span>Hết hàng</span></Link></li>)}

                                </ul>
                                <div dangerouslySetInnerHTML={{ __html: product.description }}></div>

                                <div class="card_area d-flex align-items-center">
                                    {product.totalQuantity > 0 && (
                                        <Link class="primary-btn btn-product-detail" to="/cart" onClick={() => handleAddToCart(product)}>Add to Cart</Link>
                                    )}
                                    {isProductInWishlist(productsWishList, product.id) ? (
                                        <Link class="icon_btn btn-product-detail" to={'/wish-list'}><span><FaHeart /></span></Link>

                                    ) : (
                                        <Link class="icon_btn btn-product-detail" onClick={addToWishlist}><span><FaRegHeart /></span></Link>
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
                                    <div class="table-responsive">
                                        <img src={SizeChart} alt="" />
                                    </div>
                                </div>

                            </Tab.Pane>
                            <Tab.Pane eventKey="contact">
                                <Container className="mt-3 mb-3 d-flex">
                                    <Col md='6'>
                                        <Row>
                                            <Col>
                                                <div class="review_item">
                                                    <div class="media">
                                                        <div class="d-flex">
                                                            <img src={ImgReview1} alt="" />
                                                        </div>
                                                        <div class="media-body">
                                                            <h4>Blake Ruiz</h4>
                                                            <h5>12th Feb, 2018 at 05:56 pm</h5>
                                                            <Link class="reply_btn" href="#">Reply</Link>
                                                        </div>
                                                    </div>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                                                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                                        commodo</p>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col >
                                                <div class="review_item mt-2">
                                                    <div class="media">
                                                        <div class="d-flex">
                                                            <img src={ImgReview3} alt="" />
                                                        </div>
                                                        <div class="media-body">
                                                            <h4>Blake Ruiz</h4>
                                                            <h5>12th Feb, 2018 at 05:56 pm</h5>
                                                            <Link class="reply_btn" href="#">Reply</Link>
                                                        </div>
                                                    </div>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                                                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                                        commodo</p>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col >
                                                <div class="review_item mt-2">
                                                    <div class="media">
                                                        <div class="d-flex">
                                                            <img src={ImgReview2} alt="" />
                                                        </div>
                                                        <div class="media-body">
                                                            <h4>Blake Ruiz</h4>
                                                            <h5>12th Feb, 2018 at 05:56 pm</h5>
                                                            <Link class="reply_btn" href="#">Reply</Link>
                                                        </div>
                                                    </div>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                                                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                                        commodo</p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col md='6'>
                                        <div class="review_box">
                                            <h4>{t('product_detail_post_comment')}</h4>
                                            <form class="row contact_form" action="contact_process.php" method="post" id="contactForm" novalidate="novalidate">
                                                <div class="col-md-12">
                                                    <div class="form-group">
                                                        <input type="text" class="form-control" id="name" name="name" placeholder={t('product_detail_post_comment_name')} />
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="form-group">
                                                        <input type="email" class="form-control" id="email" name="email" placeholder={t('product_detail_post_comment_email')} />
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="form-group">
                                                        <input type="text" class="form-control" id="number" name="number" placeholder={t('product_detail_post_comment_number')} />
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <div class="form-group">
                                                        <textarea class="form-control" name="message" id="message" rows="1" placeholder={t('product_detail_post_comment_message')}></textarea>
                                                    </div>
                                                </div>
                                                <div class="col-md-12 text-right">
                                                    <button type="submit" value="submit" class="btn primary-btn">{t('product_detail_post_comment_submit')}</button>
                                                </div>
                                            </form>
                                        </div>
                                    </Col>
                                </Container>

                            </Tab.Pane>
                            <Tab.Pane eventKey="review">
                                <Container className="mt-3 mb-3">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="row total_rate">
                                                <div class="col-6">
                                                    <div class="box_total_product mt-3">
                                                        <h5>Overall</h5>
                                                        <h4>4.0</h4>
                                                        <h6>(03 Reviews)</h6>
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <div class="rating_list mt-3">
                                                        <h4>Based on 3 Reviews</h4>
                                                        <ul class="list">
                                                            <li>
                                                                <Link href="#" className="link-star">5 Star
                                                                    <i class="fa fa-star"></i>
                                                                    <i class="fa fa-star"></i>
                                                                    <i class="fa fa-star"></i>
                                                                    <i class="fa fa-star"></i>
                                                                    <i class="fa fa-star"></i>
                                                                    01
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href="#" className="link-star">4 Star
                                                                    <i class="fa fa-star"></i>
                                                                    <i class="fa fa-star"></i>
                                                                    <i class="fa fa-star"></i>
                                                                    <i class="fa fa-star"></i>
                                                                    <i class="fa fa-star-o"></i>
                                                                    01
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href="#" className="link-star">3 Star
                                                                    <i class="fa fa-star"></i>
                                                                    <i class="fa fa-star"></i>
                                                                    <i class="fa fa-star"></i>
                                                                    <i class="fa fa-star-o"></i>
                                                                    <i class="fa fa-star-o"></i>
                                                                    01
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href="#" className="link-star">2 Star
                                                                    <i class="fa fa-star"></i>
                                                                    <i class="fa fa-star"></i>
                                                                    <i class="fa fa-star-o"></i>
                                                                    <i class="fa fa-star-o"></i>
                                                                    <i class="fa fa-star-o"></i>
                                                                    01
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href="#" className="link-star">1 Star
                                                                    <i class="fa fa-star"></i>
                                                                    <i class="fa fa-star-o"></i>
                                                                    <i class="fa fa-star-o"></i>
                                                                    <i class="fa fa-star-o"></i>
                                                                    <i class="fa fa-star-o"></i>
                                                                    01
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="review_list">
                                                <div class="review_item">
                                                    <div class="media">
                                                        <div class="d-flex">
                                                            <img src={ImgReview1} alt="" />
                                                        </div>
                                                        <div class="media-body">
                                                            <h4>Blake Ruiz</h4>
                                                            <i class="fa fa-star"></i>
                                                            <i class="fa fa-star"></i>
                                                            <i class="fa fa-star"></i>
                                                            <i class="fa fa-star"></i>
                                                            <i class="fa fa-star"></i>
                                                        </div>
                                                    </div>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                                                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                                        commodo</p>
                                                </div>
                                                <div class="review_item">
                                                    <div class="media">
                                                        <div class="d-flex">
                                                            <img src={ImgReview2} alt="" />
                                                        </div>
                                                        <div class="media-body">
                                                            <h4>Blake Ruiz</h4>
                                                            <i class="fa fa-star"></i>
                                                            <i class="fa fa-star"></i>
                                                            <i class="fa fa-star"></i>
                                                            <i class="fa fa-star"></i>
                                                            <i class="fa fa-star"></i>
                                                        </div>
                                                    </div>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                                                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                                        commodo</p>
                                                </div>
                                                <div class="review_item">
                                                    <div class="media">
                                                        <div class="d-flex">
                                                            <img src={ImgReview3} alt="" />
                                                        </div>
                                                        <div class="media-body">
                                                            <h4>Blake Ruiz</h4>
                                                            <i class="fa fa-star"></i>
                                                            <i class="fa fa-star"></i>
                                                            <i class="fa fa-star"></i>
                                                            <i class="fa fa-star"></i>
                                                            <i class="fa fa-star"></i>
                                                        </div>
                                                    </div>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                                                        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                                        commodo</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="review_box mt-3">
                                                <h4>{t('product_detail_post_review_add')}</h4>
                                                <p>{t('product_detail_post_review_rate')}:</p>
                                                <ul class="star-rating list">
                                                    <li class="star"><i class="fa fa-star-o"></i></li>
                                                    <li class="star"><i class="fa fa-star-o"></i></li>
                                                    <li class="star"><i class="fa fa-star-o"></i></li>
                                                    <li class="star"><i class="fa fa-star-o"></i></li>
                                                    <li class="star"><i class="fa fa-star-o"></i></li>
                                                </ul>

                                                <form class="row contact_form" action="" method="post" id="contactForm" novalidate="novalidate">
                                                    <div class="col-md-12">
                                                        <div class="form-group">
                                                            <input
                                                                type="text"
                                                                class="form-control"
                                                                id="name"
                                                                name="name"
                                                                placeholder={t('product_detail_post_comment_name')}
                                                                onfocus="this.placeholder = ''"
                                                                onblur="this.placeholder = 'Your Full name'"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12">
                                                        <div class="form-group">
                                                            <input
                                                                type="email"
                                                                class="form-control"
                                                                id="email"
                                                                name="email"
                                                                placeholder={t('product_detail_post_comment_email')}
                                                                onfocus="this.placeholder = ''"
                                                                onblur="this.placeholder = 'Email Address'"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12">
                                                        <div class="form-group">
                                                            <input
                                                                type="text"
                                                                class="form-control"
                                                                id="number"
                                                                name="number"
                                                                placeholder={t('product_detail_post_comment_number')}
                                                                onfocus="this.placeholder = ''"
                                                                onblur="this.placeholder = 'Phone Number'"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12">
                                                        <div class="form-group">
                                                            <textarea
                                                                class="form-control"
                                                                name="message"
                                                                id="message"
                                                                rows="1"
                                                                placeholder={t('product_detail_post_comment_review')}
                                                                onfocus="this.placeholder = ''"
                                                                onblur="this.placeholder = 'Review'">

                                                            </textarea>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12 text-right">
                                                        <button type="submit" value="submit" class="primary-btn">{t('product_detail_post_comment_submit')}</button>
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
