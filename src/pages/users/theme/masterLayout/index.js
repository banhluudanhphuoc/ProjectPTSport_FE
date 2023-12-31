import { memo, useState } from "react";
import { useLocation } from 'react-router-dom';
import Footer from "../footer";
import Header from "../header";

import '../../../../style/css/bootstrap.css';
import '../../../../style/css/font-awesome.min.css';
import '../../../../style/css/ion.rangeSlider.css';
import '../../../../style/css/ion.rangeSlider.skinFlat.css';
import '../../../../style/css/linearicons.css';
import '../../../../style/css/magnific-popup.css';
import '../../../../style/css/main.css';
import '../../../../style/css/main.map';
import '../../../../style/css/nice-select.css';
import '../../../../style/css/themify-icons.css';

import '../../../../style/js/jquery.sticky.js';
import '../../../../style/js/main.js';



import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { useTranslation } from "react-i18next";
import ScrollToTop from "react-scroll-to-top";


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

            <Footer />

        </div>
    );
};

export default memo(MasterLayout);