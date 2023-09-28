import { memo, useState, useEffect } from "react";
import './style.scss';
import Banner from "../../users/theme/banner";
import { Link } from 'react-router-dom';
import RelatedProductArea from "../theme/relatedProductArea";
import ProductImg from '../../../style/img/category/s-p1.jpg';
import ProductImg1 from '../../../style/img/exclusive.jpg';
import OwlCarousel from 'react-owl-carousel';
import { Tab, Nav, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import ImgReview1 from '../../../style/img/product/review-1.png';
import ImgReview2 from '../../../style/img/product/review-2.png';
import ImgReview3 from '../../../style/img/product/review-3.png';

const ProductDetail = () => {
    // const [product, setProduct] = useState(null);
    // const { product: productId } = useParams();

    // useEffect(() => {
    //     // Simulate fetching product details from an API based on productId
    //     // Replace this with actual data fetching logic
    //     const fetchProductDetails = async () => {
    //         try {
    //             const response = await fetch(`/api/products/${productId}`);
    //             if (response.ok) {
    //                 const productData = await response.json();
    //                 setProduct(productData);
    //             } else {
    //                 // Handle error response
    //                 console.error("Failed to fetch product details");
    //             }
    //         } catch (error) {
    //             console.error("Error while fetching product details:", error);
    //         }
    //     };

    //     fetchProductDetails();
    // }, [productId]);

    // if (!product) {
    //     // Product details are still being fetched, or an error occurred
    //     return <div>Loading...</div>;
    // }

    const [mainImage, setMainImage] = useState(ProductImg);
    return (
        <>
            <Banner />
            <div class="product_image_area">
                <div class="container">
                    <div class="row s_product_inner">
                        <div class="col-lg-6">

                            <div className="image-gallery-container">
                                <div className="main-image-container">
                                    <img src={mainImage} alt="Main Image" className="main-image" />
                                </div>

                                <OwlCarousel className="owl-theme" loop margin={10} nav>
                                    <div className="thumbnail-item">
                                        <img
                                            className="thumbnail"
                                            src={ProductImg1}
                                            alt=""
                                            onClick={() => setMainImage(ProductImg1)}
                                        />
                                    </div>
                                    <div className="thumbnail-item">
                                        <img
                                            className="thumbnail"
                                            src={ProductImg}
                                            alt=""
                                            onClick={() => setMainImage(ProductImg)}
                                        />
                                    </div>
                                    <div className="thumbnail-item">
                                        <img
                                            className="thumbnail"
                                            src={ProductImg}
                                            alt=""
                                            onClick={() => setMainImage(ProductImg)}
                                        />
                                    </div>

                                </OwlCarousel>
                            </div>
                        </div>
                        <div class="col-lg-5 offset-lg-1">
                            <div class="s_product_text">
                                <h3>Faded SkyBlu Denim Jeans</h3>
                                <div class="price">
                                    <h2>$149.99</h2>
                                    <h5 class="l-through">$210.00</h5>
                                </div>

                                <ul class="list">
                                    <li><Link class="active" href="#"><span>Category</span> : Household</Link></li>
                                    <li><Link href="#" className="stock-product-detail"><span>Availibility</span> : In Stock</Link></li>
                                </ul>
                                <p>Mill Oil is an innovative oil filled radiator with the most modern technology. If you are looking for
                                    something that can make your interior look awesome, and at the same time give you the pleasant warm feeling
                                    during the winter.</p>

                                <div class="card_area d-flex align-items-center">
                                    <Link class="primary-btn btn-product-detail" to="/cart">Add to Cart</Link>
                                    <Link class="icon_btn btn-product-detail" href="#"><i class="lnr lnr lnr-heart"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container mt-5">
                <Tab.Container id="my-tabs" defaultActiveKey="home">
                    <Nav variant="tabs">
                        <Nav.Item>
                            <Nav.Link eventKey="home">Description</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="profile">Specification</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="contact">Comments</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="review">Reviews</Nav.Link>
                        </Nav.Item>
                    </Nav>

                    <Tab.Content>
                        <Tab.Pane eventKey="home">
                            <div className="container mt-5 mb-5">
                                <p>Beryl Cook is one of Britain’s most talented and amusing artists .Beryl’s pictures feature women of all shapes
                                    and sizes enjoying themselves .Born between the two world wars, Beryl Cook eventually left Kendrick School in
                                    Reading at the age of 15, where she went to secretarial school and then into an insurance office. After moving to
                                    London and then Hampton, she eventually married her next door neighbour from Reading, John Cook. He was an
                                    officer in the Merchant Navy and after he left the sea in 1956, they bought a pub for a year before John took a
                                    job in Southern Rhodesia with a motor company. Beryl bought their young son a box of watercolours, and when
                                    showing him how to use it, she decided that she herself quite enjoyed painting. John subsequently bought her a
                                    child’s painting set for her birthday and it was with this that she produced her first significant work, a
                                    half-length portrait of a dark-skinned lady with a vacant expression and large drooping breasts. It was aptly
                                    named ‘Hangover’ by Beryl’s husband and</p>
                                <p>It is often frustrating to attempt to plan meals that are designed for one. Despite this fact, we are seeing
                                    more and more recipe books and Internet websites that are dedicated to the act of cooking for one. Divorce and
                                    the death of spouses or grown children leaving for college are all reasons that someone accustomed to cooking for
                                    more than one would suddenly need to learn how to adjust all the cooking practices utilized before into a
                                    streamlined plan of cooking that is more efficient for one person creating less</p>
                            </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="profile">
                            <div className="container mt-5 mb-5 ">
                                <div class="table-responsive">
                                    <table class="table">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <h5>Width</h5>
                                                </td>
                                                <td>
                                                    <h5>128mm</h5>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h5>Height</h5>
                                                </td>
                                                <td>
                                                    <h5>508mm</h5>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h5>Depth</h5>
                                                </td>
                                                <td>
                                                    <h5>85mm</h5>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h5>Weight</h5>
                                                </td>
                                                <td>
                                                    <h5>52gm</h5>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h5>Quality checking</h5>
                                                </td>
                                                <td>
                                                    <h5>yes</h5>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h5>Freshness Duration</h5>
                                                </td>
                                                <td>
                                                    <h5>03days</h5>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h5>When packeting</h5>
                                                </td>
                                                <td>
                                                    <h5>Without touch of hand</h5>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h5>Each Box contains</h5>
                                                </td>
                                                <td>
                                                    <h5>60pcs</h5>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
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
                                        <h4>Post a comment</h4>
                                        <form class="row contact_form" action="contact_process.php" method="post" id="contactForm" novalidate="novalidate">
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <input type="text" class="form-control" id="name" name="name" placeholder="Your Full name" />
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <input type="email" class="form-control" id="email" name="email" placeholder="Email Address" />
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <input type="text" class="form-control" id="number" name="number" placeholder="Phone Number" />
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <textarea class="form-control" name="message" id="message" rows="1" placeholder="Message"></textarea>
                                                </div>
                                            </div>
                                            <div class="col-md-12 text-right">
                                                <button type="submit" value="submit" class="btn primary-btn">Submit Now</button>
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
                                            <h4>Add a Review</h4>
                                            <p>Your Rating:</p>
                                            <ul class="list">
                                                <li><Link href="#"><i class="fa fa-star"></i></Link></li>
                                                <li><Link href="#"><i class="fa fa-star"></i></Link></li>
                                                <li><Link href="#"><i class="fa fa-star"></i></Link></li>
                                                <li><Link href="#"><i class="fa fa-star"></i></Link></li>
                                                <li><Link href="#"><i class="fa fa-star"></i></Link></li>
                                            </ul>
                                            <p>Outstanding</p>
                                            <form class="row contact_form" action="contact_process.php" method="post" id="contactForm" novalidate="novalidate">
                                                <div class="col-md-12">
                                                    <div class="form-group">
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            id="name"
                                                            name="name"
                                                            placeholder="Your Full name"
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
                                                            placeholder="Email Address"
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
                                                            placeholder="Phone Number"
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
                                                            placeholder="Review"
                                                            onfocus="this.placeholder = ''"
                                                            onblur="this.placeholder = 'Review'">

                                                        </textarea>
                                                    </div>
                                                </div>
                                                <div class="col-md-12 text-right">
                                                    <button type="submit" value="submit" class="primary-btn">Submit Now</button>
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
            < RelatedProductArea />
        </>
    );
};

export default memo(ProductDetail);
