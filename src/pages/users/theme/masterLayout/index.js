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

import MyChatComponent from "components/user/facebook/chat";

const MasterLayout = ({ children, ...props }) => {
    const { t, i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState('VI');
    const handleLanguageChange = (newLanguage, lng) => {
        setCurrentLanguage(newLanguage)
        i18n.changeLanguage(lng);
    };
    const location = useLocation();
    const isHome = location.pathname === '/';



    return (
        <div {...props}>
            <Header isHome={isHome} />
            <ScrollToTop
                smooth
                color="#FD8400"
                viewBox="0 0 24 24"
                svgPath="M12 19V6M5 12l7-7 7 7"

            />
            {children}
            <MyChatComponent />
            <Footer />

        </div>
    );
};

export default memo(MasterLayout);