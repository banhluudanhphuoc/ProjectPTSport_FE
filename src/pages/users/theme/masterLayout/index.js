import { height } from "@mui/system";
import { memo } from "react";
import Footer from "../footer";
import Header from "../header";

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
const MasterLayout = ({ children, ...props }) => {
    return (
        <div {...props}>
            <Header />

            {children}
            <Footer />
        </div>
    );
};

export default memo(MasterLayout);