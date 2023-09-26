import { memo, useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { AiOutlineMail, AiOutlinePhone, AiTwotoneEnvironment, AiFillFacebook, AiFillInstagram, AiFillYoutube } from "react-icons/ai";

import { ROUTERS } from "utils/router";
import { CartProvider, useCart } from "react-use-cart";
import { Image } from "react-bootstrap";


const Banner = () => {
    return (
        <section class="banner-area organic-breadcrumb">
            <div class="container">
                <div class="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
                    <div class="col-first">
                        <h1>PT SPORTS</h1>
                        <nav class="d-flex align-items-center">
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default memo(Banner);

