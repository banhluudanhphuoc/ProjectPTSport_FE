[33mcommit 80b03a655c1c0cf721c1feab1b1cd4990052a626[m[33m ([m[1;36mHEAD -> [m[1;32mmain[m[33m)[m
Author: tam2685 <thanhtam2685@gmail.com>
Date:   Fri Oct 6 15:01:49 2023 +0700

    06/10_2

[1mdiff --git a/src/pages/users/theme/footer/index.js b/src/pages/users/theme/footer/index.js[m
[1mindex dfded47..0069bdb 100644[m
[1m--- a/src/pages/users/theme/footer/index.js[m
[1m+++ b/src/pages/users/theme/footer/index.js[m
[36m@@ -3,8 +3,6 @@[m [mimport './style.scss';[m
 import { Link } from "react-router-dom";[m
 import logo from '../header/logo192.png';[m
 import { AiOutlineMail, AiOutlinePhone, AiTwotoneEnvironment, AiFillFacebook, AiFillInstagram, AiFillYoutube } from "react-icons/ai";[m
[31m-import { ROUTERS } from "utils/router";[m
[31m-import { CartProvider, useCart } from "react-use-cart";[m
 import { Image } from "react-bootstrap";[m
 import ExampImg from '../../../../style/img/i1.jpg';[m
 import { useTranslation } from "react-i18next";[m
