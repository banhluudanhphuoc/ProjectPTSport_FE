import { memo, useState, useEffect } from "react";
import './style.scss';
import { Link } from "react-router-dom";
import logo from '../header/logo192.png';
import { AiOutlineMail, AiOutlinePhone, AiTwotoneEnvironment, AiFillFacebook, AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { ROUTERS } from "utils/router";
import { CartProvider, useCart } from "react-use-cart";
import { Image } from "react-bootstrap";
import ExampImg from '../../../../style/img/i1.jpg';

const Footer = () => {
    return (
        <footer className="footer-area section_gap">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4  col-md-6 col-sm-6">
                        <div className="single-footer-widget">
                            <h6>About Us</h6>
                            <p>
                                "Discover PT Sport – your go-to source for top-tier sportswear, shoes, and gear, featuring renowned brands like Adidas and Nike. We're your partner in athletic excellence, offering quality products and dedicated service. Join us on your active journey today!"
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3  col-md-6 col-sm-6">
                        <div className="single-footer-widget">
                            <h6>Newsletter</h6>
                            <p>Stay update with our latest</p>
                            <div className="" id="mc_embed_signup">
                                <form target="_blank" className="form-inline">
                                    <div className="d-flex flex-row">
                                        <input className="form-control" name="EMAIL" placeholder="Enter Email"
                                            required="" type="email" />
                                        <button className="click-btn btn btn-default"><i className="fa fa-long-arrow-right"
                                            aria-hidden="true"></i></button>
                                    </div>
                                    <div className="info"></div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3  col-md-6 col-sm-6">
                        <div className="single-footer-widget mail-chimp">
                            <h6 className="mb-20">Instragram Feed</h6>
                            <ul className="instafeed d-flex flex-wrap">
                                <li><Image alt="" src={ExampImg} /></li>
                                <li><Image alt="" src={ExampImg} /></li>
                                <li><Image alt="" src={ExampImg} /></li>
                                <li><Image alt="" src={ExampImg} /></li>
                                <li><Image alt="" src={ExampImg} /></li>
                                <li><Image alt="" src={ExampImg} /></li>
                                <li><Image alt="" src={ExampImg} /></li>
                                <li><Image alt="" src={ExampImg} /></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6 col-sm-6">
                        <div className="single-footer-widget">
                            <h6>Follow Us</h6>
                            <p>Let us be social</p>
                            <div className="footer-social d-flex align-items-center">
                                <Link to="#"><i className="fa fa-facebook"></i></Link>
                                <Link to="#"><i className="fa fa-twitter"></i></Link>
                                <Link to="#"><i className="fa fa-dribbble"></i></Link>
                                <Link to="#"><i className="fa fa-behance"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom d-flex justify-content-center align-items-center flex-wrap">
                    <p className="footer-text m-0">
                        <script>document.write(new Date().getFullYear());</script>
                        "Celebrating Sport, Defining Style – <i className="fa fa-heart-o" aria-hidden="true"></i> <Link to=""
                            target="_blank">PT SPORTS</Link>, Where Excellence Meets Passion."
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default memo(Footer);