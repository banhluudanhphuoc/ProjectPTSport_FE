import { memo, useState, useEffect } from "react";
import './style.scss';
import { Link } from "react-router-dom";
import logo from '../header/logo192.png';
import { AiOutlineMail, AiOutlinePhone, AiTwotoneEnvironment, AiFillFacebook, AiFillInstagram, AiFillYoutube } from "react-icons/ai";

import { ROUTERS } from "utils/router";
import { CartProvider, useCart } from "react-use-cart";
import { Image } from "react-bootstrap";

import r1 from '../../../../style/img/r1.jpg';
import category5 from '../../../../style/img/category/c5.jpg';
import { useTranslation } from "react-i18next";


const Footer = () => {
    const { t, i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState('VI');
    const handleLanguageChange = (newLanguage, lng) => {
        setCurrentLanguage(newLanguage)
        i18n.changeLanguage(lng);
    };
    return (
        <section className="related-product-area section_gap_bottom">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 text-center">
                        <div className="section-title">
                            <h1>{t("deals_of_the_week")}</h1>

                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-9">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-6 mb-20">
                                <div className="single-related-product d-flex">
                                    <Link to={''}><img src={r1} alt="" /></Link>
                                    <div className="desc">
                                        <Link className="title"> Black lace Heels</Link>
                                        <div className="price">
                                            <h6>$189.00</h6>
                                            <h6 className="l-through">$210.00</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="ctg-right">
                            <a href="#" target="_blank">
                                <img className="img-fluid d-block mx-auto" src={category5} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default memo(Footer);