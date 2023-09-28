import { memo, useState, useEffect } from "react";
import { Image } from "@mantine/core";
import './style.scss';
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import Banner from "../../users/theme/banner";

import imgExamp from '../../../style/img/organic-food/q1.jpg';

const CategoryPage = () => {
    const [showModal, setShowModal] = useState(false);
    const [quantity, setQuantity] = useState(1); // Khởi tạo số lượng ban đầu

    const increaseQuantity = () => {
        // Tăng số lượng lên 1 khi nút tăng được nhấn
        setQuantity(quantity + 1);
    };

    const decreaseQuantity = () => {
        // Giảm số lượng đi 1 khi nút giảm được nhấn, nhưng không cho phép số lượng nhỏ hơn 1
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <>
            <Banner />
            {/* <!-- End Banner Area-- > */}
            <div class="container">
                <div class="row">
                    <div class="col-xl-3 col-lg-4 col-md-5">
                        <div class="sidebar-categories">
                            <div class="head">Browse Categories</div>
                            <ul class="main-categories">


                                <li class="main-nav-list"><Link data-toggle="collapse" href="#fruitsVegetable" aria-expanded="false" aria-controls="fruitsVegetable"><span
                                    class="lnr lnr-arrow-right"></span>Fruits and Vegetables<span class="number">(53)</span></Link>
                                    <ul class="collapse" id="fruitsVegetable" data-toggle="collapse" aria-expanded="false" aria-controls="fruitsVegetable">
                                        <li class="main-nav-list child"><Link href="#">Frozen Fish<span class="number">(13)</span></Link></li>
                                        <li class="main-nav-list child"><Link href="#">Dried Fish<span class="number">(09)</span></Link></li>
                                        <li class="main-nav-list child"><Link href="#">Fresh Fish<span class="number">(17)</span></Link></li>
                                        <li class="main-nav-list child"><Link href="#">Meat Alternatives<span class="number">(01)</span></Link></li>
                                        <li class="main-nav-list child"><Link href="#">Meat<span class="number">(11)</span></Link></li>
                                    </ul>
                                </li>



                                <li class="main-nav-list"><Link data-toggle="collapse" href="#meatFish" aria-expanded="false" aria-controls="meatFish"><span
                                    class="lnr lnr-arrow-right"></span>Meat and Fish<span class="number">(53)</span></Link>
                                    <ul class="collapse" id="meatFish" data-toggle="collapse" aria-expanded="false" aria-controls="meatFish">
                                        <li class="main-nav-list child"><Link href="#">Frozen Fish<span class="number">(13)</span></Link></li>
                                        <li class="main-nav-list child"><Link href="#">Dried Fish<span class="number">(09)</span></Link></li>
                                        <li class="main-nav-list child"><Link href="#">Fresh Fish<span class="number">(17)</span></Link></li>
                                        <li class="main-nav-list child"><Link href="#">Meat Alternatives<span class="number">(01)</span></Link></li>
                                        <li class="main-nav-list child"><Link href="#">Meat<span class="number">(11)</span></Link></li>
                                    </ul>
                                </li>



                                <li class="main-nav-list"><Link data-toggle="collapse" href="#cooking" aria-expanded="false" aria-controls="cooking"><span
                                    class="lnr lnr-arrow-right"></span>Cooking<span class="number">(53)</span></Link>
                                    <ul class="collapse" id="cooking" data-toggle="collapse" aria-expanded="false" aria-controls="cooking">
                                        <li class="main-nav-list child"><Link href="#">Frozen Fish<span class="number">(13)</span></Link></li>
                                        <li class="main-nav-list child"><Link href="#">Dried Fish<span class="number">(09)</span></Link></li>
                                        <li class="main-nav-list child"><Link href="#">Fresh Fish<span class="number">(17)</span></Link></li>
                                        <li class="main-nav-list child"><Link href="#">Meat Alternatives<span class="number">(01)</span></Link></li>
                                        <li class="main-nav-list child"><Link href="#">Meat<span class="number">(11)</span></Link></li>
                                    </ul>
                                </li>
                                <li class="main-nav-list"><Link data-toggle="collapse" href="#beverages" aria-expanded="false" aria-controls="beverages"><span
                                    class="lnr lnr-arrow-right"></span>Beverages<span class="number">(24)</span></Link>
                                    <ul class="collapse" id="beverages" data-toggle="collapse" aria-expanded="false" aria-controls="beverages">
                                        <li class="main-nav-list child"><Link href="#">Frozen Fish<span class="number">(13)</span></Link></li>
                                        <li class="main-nav-list child"><Link href="#">Dried Fish<span class="number">(09)</span></Link></li>
                                        <li class="main-nav-list child"><Link href="#">Fresh Fish<span class="number">(17)</span></Link></li>
                                        <li class="main-nav-list child"><Link href="#">Meat Alternatives<span class="number">(01)</span></Link></li>
                                        <li class="main-nav-list child"><Link href="#">Meat<span class="number">(11)</span></Link></li>
                                    </ul>
                                </li>
                                <li class="main-nav-list"><Link data-toggle="collapse" href="#homeClean" aria-expanded="false" aria-controls="homeClean"><span
                                    class="lnr lnr-arrow-right"></span>Home and Cleaning<span class="number">(53)</span></Link>
                                    <ul class="collapse" id="homeClean" data-toggle="collapse" aria-expanded="false" aria-controls="homeClean">
                                        <li class="main-nav-list child"><Link href="#">Frozen Fish<span class="number">(13)</span></Link></li>
                                        <li class="main-nav-list child"><Link href="#">Dried Fish<span class="number">(09)</span></Link></li>
                                        <li class="main-nav-list child"><Link href="#">Fresh Fish<span class="number">(17)</span></Link></li>
                                        <li class="main-nav-list child"><Link href="#">Meat Alternatives<span class="number">(01)</span></Link></li>
                                        <li class="main-nav-list child"><Link href="#">Meat<span class="number">(11)</span></Link></li>
                                    </ul>
                                </li>
                                <li class="main-nav-list"><Link href="#">Pest Control<span class="number">(24)</span></Link></li>
                                <li class="main-nav-list"><Link data-toggle="collapse" href="#officeProduct" aria-expanded="false" aria-controls="officeProduct"><span
                                    class="lnr lnr-arrow-right"></span>Office Products<span class="number">(77)</span></Link>
                                    <ul class="collapse" id="officeProduct" data-toggle="collapse" aria-expanded="false" aria-controls="officeProduct">
                                        <li class="main-nav-list child"><Link href="#">Frozen Fish<span class="number">(13)</span></Link></li>
                                        <li class="main-nav-list child"><Link href="#">Dried Fish<span class="number">(09)</span></Link></li>
                                        <li class="main-nav-list child"><Link href="#">Fresh Fish<span class="number">(17)</span></Link></li>
                                        <li class="main-nav-list child"><Link href="#">Meat Alternatives<span class="number">(01)</span></Link></li>
                                        <li class="main-nav-list child"><Link href="#">Meat<span class="number">(11)</span></Link></li>
                                    </ul>
                                </li>
                                <li class="main-nav-list"><Link data-toggle="collapse" href="#beauttyProduct" aria-expanded="false" aria-controls="beauttyProduct"><span
                                    class="lnr lnr-arrow-right"></span>Beauty Products<span class="number">(65)</span></Link>
                                    <ul class="collapse" id="beauttyProduct" data-toggle="collapse" aria-expanded="false" aria-controls="beauttyProduct">
                                        <li class="main-nav-list child"><Link href="#">Frozen Fish<span class="number">(13)</span></Link></li>
                                        <li class="main-nav-list child"><Link href="#">Dried Fish<span class="number">(09)</span></Link></li>
                                        <li class="main-nav-list child"><Link href="#">Fresh Fish<span class="number">(17)</span></Link></li>
                                        <li class="main-nav-list child"><Link href="#">Meat Alternatives<span class="number">(01)</span></Link></li>
                                        <li class="main-nav-list child"><Link href="#">Meat<span class="number">(11)</span></Link></li>
                                    </ul>
                                </li>
                                <li class="main-nav-list"><Link data-toggle="collapse" href="#healthProduct" aria-expanded="false" aria-controls="healthProduct"><span
                                    class="lnr lnr-arrow-right"></span>Health Products<span class="number">(29)</span></Link>
                                    <ul class="collapse" id="healthProduct" data-toggle="collapse" aria-expanded="false" aria-controls="healthProduct">
                                        <li class="main-nav-list child"><Link href="#">Frozen Fish<span class="number">(13)</span></Link></li>
                                        <li class="main-nav-list child"><Link href="#">Dried Fish<span class="number">(09)</span></Link></li>
                                        <li class="main-nav-list child"><Link href="#">Fresh Fish<span class="number">(17)</span></Link></li>
                                        <li class="main-nav-list child"><Link href="#">Meat Alternatives<span class="number">(01)</span></Link></li>
                                        <li class="main-nav-list child"><Link href="#">Meat<span class="number">(11)</span></Link></li>
                                    </ul>
                                </li>
                                <li class="main-nav-list"><Link href="#">Pet Care<span class="number">(29)</span></Link></li>
                                <li class="main-nav-list"><Link data-toggle="collapse" href="#homeAppliance" aria-expanded="false" aria-controls="homeAppliance"><span
                                    class="lnr lnr-arrow-right"></span>Home Appliances<span class="number">(15)</span></Link>
                                    <ul class="collapse" id="homeAppliance" data-toggle="collapse" aria-expanded="false" aria-controls="homeAppliance">
                                        <li class="main-nav-list child"><Link href="#">Frozen Fish<span class="number">(13)</span></Link></li>
                                        <li class="main-nav-list child"><Link href="#">Dried Fish<span class="number">(09)</span></Link></li>
                                        <li class="main-nav-list child"><Link href="#">Fresh Fish<span class="number">(17)</span></Link></li>
                                        <li class="main-nav-list child"><Link href="#">Meat Alternatives<span class="number">(01)</span></Link></li>
                                        <li class="main-nav-list child"><Link href="#">Meat<span class="number">(11)</span></Link></li>
                                    </ul>
                                </li>
                                <li class="main-nav-list"><Link class="border-bottom-0" data-toggle="collapse" href="#babyCare" aria-expanded="false"
                                    aria-controls="babyCare"><span class="lnr lnr-arrow-right"></span>Baby Care<span class="number">(48)</span></Link>
                                    <ul class="collapse" id="babyCare" data-toggle="collapse" aria-expanded="false" aria-controls="babyCare">
                                        <li class="main-nav-list child"><Link href="#">Frozen Fish<span class="number">(13)</span></Link></li>
                                        <li class="main-nav-list child"><Link href="#">Dried Fish<span class="number">(09)</span></Link></li>
                                        <li class="main-nav-list child"><Link href="#">Fresh Fish<span class="number">(17)</span></Link></li>
                                        <li class="main-nav-list child"><Link href="#">Meat Alternatives<span class="number">(01)</span></Link></li>
                                        <li class="main-nav-list child"><Link href="#" class="border-bottom-0">Meat<span class="number">(11)</span></Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div class="sidebar-filter mt-50">
                            <div class="top-filter-head">Product Filters</div>
                            <div class="common-filter">
                                <div class="head">Brands</div>
                                <form action="#">
                                    <ul>
                                        <li class="filter-list"><input class="pixel-radio" type="radio" id="apple" name="brand" /><label for="apple">Apple<span>(29)</span></label></li>
                                        <li class="filter-list"><input class="pixel-radio" type="radio" id="asus" name="brand" /><label for="asus">Asus<span>(29)</span></label></li>
                                        <li class="filter-list"><input class="pixel-radio" type="radio" id="gionee" name="brand" /><label for="gionee">Gionee<span>(19)</span></label></li>
                                        <li class="filter-list"><input class="pixel-radio" type="radio" id="micromax" name="brand" /><label for="micromax">Micromax<span>(19)</span></label></li>
                                        <li class="filter-list"><input class="pixel-radio" type="radio" id="samsung" name="brand" /><label for="samsung">Samsung<span>(19)</span></label></li>
                                    </ul>
                                </form>
                            </div>
                            <div class="common-filter">
                                <div class="head">Color</div>
                                <form action="#">
                                    <ul>
                                        <li class="filter-list"><input class="pixel-radio" type="radio" id="black" name="color" /><label for="black">Black<span>(29)</span></label></li>
                                        <li class="filter-list"><input class="pixel-radio" type="radio" id="balckleather" name="color" /><label for="balckleather">Black
                                            Leather<span>(29)</span></label></li>
                                        <li class="filter-list"><input class="pixel-radio" type="radio" id="blackred" name="color" /><label for="blackred">Black
                                            with red<span>(19)</span></label></li>
                                        <li class="filter-list"><input class="pixel-radio" type="radio" id="gold" name="color" /><label for="gold">Gold<span>(19)</span></label></li>
                                        <li class="filter-list"><input class="pixel-radio" type="radio" id="spacegrey" name="color" /><label for="spacegrey">Spacegrey<span>(19)</span></label></li>
                                    </ul>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-9 col-lg-8 col-md-7">
                        {/* <!-- Start Filter Bar --> */}
                        <div class="filter-bar d-flex flex-wrap align-items-center">
                            <div class="sorting">
                                <select>
                                    <option value="1">Default sorting</option>
                                    <option value="1">Default sorting</option>
                                    <option value="1">Default sorting</option>
                                </select>
                            </div>
                            <div class="sorting mr-auto">
                                <select>
                                    <option value="1">Show 12</option>
                                    <option value="1">Show 12</option>
                                    <option value="1">Show 12</option>
                                </select>
                            </div>
                            <div class="pagination">
                                <Link href="#" class="prev-arrow"><i class="fa fa-long-arrow-left" aria-hidden="true"></i></Link>
                                <Link href="#" class="active">1</Link>
                                <Link href="#">2</Link>
                                <Link href="#">3</Link>
                                <Link href="#" class="dot-dot"><i class="fa fa-ellipsis-h" aria-hidden="true"></i></Link>
                                <Link href="#">6</Link>
                                <Link href="#" class="next-arrow"><i class="fa fa-long-arrow-right" aria-hidden="true"></i></Link>
                            </div>
                        </div>
                        {/* <!-- End Filter Bar -->
                        <!-- Start Best Seller --> */}
                        <section class="lattest-product-area pb-40 category-list">
                            <div class="row">

                                {/* <!-- single product --> */}
                                <div class="col-lg-4 col-md-6">
                                    <div class="single-product">
                                        <img class="img-fluid" src={imgExamp} alt="" />
                                        <div class="product-details">
                                            <h6>addidas New Hammer sole
                                                for Sports person</h6>
                                            <div class="price">
                                                <h6>$150.00</h6>
                                                <h6 class="l-through">$210.00</h6>
                                            </div>
                                            <div class="prd-bottom">

                                                <Link to={''} class="social-info">
                                                    <span class="ti-bag"></span>
                                                    <p class="hover-text">Add to bag</p>
                                                </Link>
                                                <Link to={''} class="social-info">
                                                    <span class="lnr lnr-heart"></span>
                                                    <p class="hover-text">Wishlist</p>
                                                </Link>
                                                <Link to={''} className="social-info" onClick={() => setShowModal(true)}>
                                                    <span className="lnr lnr-eye" ></span>
                                                    <p className="hover-text" >
                                                        Quick view
                                                    </p>
                                                </Link>
                                                <Link to={''} class="social-info">
                                                    <span class="lnr lnr-move"></span>
                                                    <p class="hover-text">view more</p>
                                                </Link>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>


                    </div>
                </div>
            </div>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Name</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div class="container relative">
                        <div class="product-quick-view">
                            <div class="row align-items-center">
                                <div class="col-lg-6">
                                    <div class="quick-view-carousel">
                                        <Image src={imgExamp} alt="" class="item" />
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="quick-view-content">
                                        <div class="top">
                                            <h3 class="head">Mill Oil 1000W Heater, White</h3>
                                            <div class="price d-flex align-items-center">
                                                <span class="lnr lnr-tag"></span>
                                                <span class="ml-10">$149.99</span>
                                            </div>
                                            <div class="price d-flex align-items-center">
                                                <span class="lnr lnr-tag"></span>
                                                <span class="ml-10 l-through">$150</span>
                                            </div>

                                            <div class="category">Category: <span>Household</span></div>
                                            <div class="available">Availibility: <span>In Stock</span></div>
                                        </div>
                                        <div class="middle">
                                            <p >Mill Oil is an innovative oil filled radiator with the most modern technology. If you are
                                                looking for something that can make your interior look awesome, and at the same time give you the pleasant
                                                warm feeling during the winter.</p>
                                            <Link href="#" class="view-full">View full Details <span class="lnr lnr-arrow-right"></span></Link>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button className=" btn_add_to_card" >
                        Add to Cart
                    </Button>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>




        </>

    );
};

export default memo(CategoryPage);