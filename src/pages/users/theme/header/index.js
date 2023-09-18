import { memo, useState } from "react";
import './style.scss';
import { Link } from "react-router-dom";
import logo from './logo192.png';
import { AiOutlineSearch, AiOutlineUser, AiOutlineShopping, BiUserCircle } from "react-icons/ai";

import { ROUTERS } from "utils/router";
import { CartProvider, useCart } from "react-use-cart";

const Header = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
    } = useCart();
    const [menus, setMenus] = useState([
        {
            name: "Nam",
            path: ROUTERS.USER.HOME,
            isShowSubmenu: false,
            child: [
                {
                    name: "Áo thun",
                    path: ROUTERS.USER.HOME,
                },
                {
                    name: "Áo khoác",
                    path: ROUTERS.USER.HOME,
                },
            ]
        },
        {
            name: "Nữ",
            path: ROUTERS.USER.HOME,
            isShowSubmenu: false,
            child: [
                {
                    name: "Áo thun",
                    path: ROUTERS.USER.HOME,
                },
                {
                    name: "Áo khoác",
                    path: ROUTERS.USER.HOME,
                },
            ]
        },
        {
            name: "Trẻ em",
            path: ROUTERS.USER.HOME,
        },
        {
            name: "Thương hiệu",
            path: ROUTERS.USER.HOME,
        },
    ]);

    return <div className="header_top">
        <div className="container">
            <div className="row">
                <div className="col-sm-4 col-md-4 col-xl-4 col-lg-4 header_top_left">
                    <ul className="header_menu">
                        {
                            menus?.map((menu, menuKey) => (
                                //className={menuKey === 0 ? "active" : ""}
                                <li key={menuKey} >
                                    <Link to={menu?.path} className="link_header_left">
                                        {menu?.name}
                                    </Link>
                                    {
                                        menu.child && (
                                            <ul className="header_menu_dropdown">
                                                {
                                                    menu.child.map((childItem, childKey) => (
                                                        <li key={'${menuKey}-${childKey}'}>
                                                            <Link to={childItem.path}>{childItem.name}</Link>
                                                        </li>
                                                    ))
                                                }

                                            </ul>
                                        )
                                    }
                                </li>
                            ))
                        }

                    </ul>
                </div>
                <div className="col-sm-4 col-md-4 col-xl-4 col-lg-4 header_top_mid">
                    <Link to={""}>
                        <img src={logo} className="header_logo" alt="logo" />
                    </Link>
                </div>
                <div className="col-sm-4 col-md-4 col-xl-4 col-lg-4 header_top_right">
                    <div className="search_box">
                        <input type={"text"} id="search_text" />
                        <div className="search_icon">
                            <Link to={""} >
                                <AiOutlineSearch />
                            </Link>
                        </div>
                    </div>
                    <div className="header_user">
                        <Link to={""} >
                            <AiOutlineUser />
                        </Link></div>
                    <div className="header_shopping">
                        <Link to={"/cart"} >
                            <AiOutlineShopping /><span className="number_shopping">{totalUniqueItems}</span>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    </div>
        ;

};

export default memo(Header);