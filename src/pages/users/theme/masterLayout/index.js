import React, { memo, useState, useEffect } from "react";
import Footer from "../footer";
import Header from "../header";
import { useLocation } from 'react-router-dom';

import '../../../../style/css/linearicons.css';
import '../../../../style/css/font-awesome.min.css';
import '../../../../style/css/themify-icons.css';
import '../../../../style/css/bootstrap.css';
import '../../../../style/css/nice-select.css';
import '../../../../style/css/ion.rangeSlider.css';
import '../../../../style/css/ion.rangeSlider.skinFlat.css';
import '../../../../style/css/magnific-popup.css';
import '../../../../style/css/main.css';
import '../../../../style/css/main.map';

import '../../../../style/js/jquery.sticky.js';
import '../../../../style/js/main.js';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { useTranslation } from "react-i18next";
import ScrollToTop from "react-scroll-to-top";
import Cookies from 'js-cookie';
import axios from 'axios';
const MasterLayout = ({ children, ...props }) => {
    const { t, i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState('VI');
    const handleLanguageChange = (newLanguage, lng) => {
        setCurrentLanguage(newLanguage)
        i18n.changeLanguage(lng);
    };
    const location = useLocation();
    const isHome = location.pathname === '/';
    const [totalItemOnCart, setTotalItemOnCart] = useState([]);
    const userToken = Cookies.get('userToken');
    const auth = process.env.REACT_APP_API_URL_AUTH;
    const api = process.env.REACT_APP_API_URL;
    useEffect(() => {


        const fetchMe = async () => {
            try {
                const response = await axios.get(auth + '/me', {
                    headers: {
                        'Authorization': `Bearer ${userToken}`,
                        'Content-Type': 'application/json',
                    }
                });

                //fetchProductsWishList(response.data.userId);
                fetchCountItemCart(response.data.userId);
            } catch (error) {
                console.error('Error fetching Brand:', error);
            }
        };

        // const fetchProductsWishList = async (userId) => {
        //     try {
        //         const response = await axios.get(api + '/wish-list/' + userId, {
        //             headers: {
        //                 'Authorization': `Bearer ${userToken}`,
        //                 'Content-Type': 'application/json',
        //             }
        //         });

        //         setProductsWishListCount(response.data.productDtos.length);
        //     } catch (error) {
        //         console.error('Error fetching products:', error);
        //     }
        // };


        fetchMe();
    }, [api, auth, userToken]);
    const fetchCountItemCart = async (userId) => {
        try {
            const response = await axios.get(api + '/cart/count/' + userId);
            setTotalItemOnCart(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };
    return (
        <div {...props}>
            <Header isHome={isHome} totalItemOnCart={totalItemOnCart} />
            <ScrollToTop
                smooth
                color="#FD8400"
                viewBox="0 0 24 24"
                svgPath="M12 19V6M5 12l7-7 7 7"
            />
            {React.cloneElement(children)}
            <Footer />
        </div>
    );
};

export default memo(MasterLayout);