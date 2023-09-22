import React, { useState } from "react";
import "./style.scss";
import {
    AiFillDashboard,
    AiFillPicture,
    AiFillFolder,
    AiFillTag,
    AiFillFile,
    AiOutlineOrderedList,
    AiOutlineUnorderedList,
    AiOutlineUser,
    AiOutlineUserSwitch
} from "react-icons/ai";
import { BiDollar } from "react-icons/bi";
import { Link } from "react-router-dom";

const MenuItem = ({ item, onItemClick, depth, activeItemId }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleItemClick = () => {
        onItemClick(item);
        setIsOpen(!isOpen);
    };

    const subMenuStyle = {
        marginLeft: `${depth * 20}px`,
        display: isOpen ? "block" : "none",
    };

    const isActive = item.id === activeItemId;

    return (
        <li><Link to={item.link} className="link-menu">
            <div
                className={`menu-item ${isActive ? "active" : ""}`}
                onClick={handleItemClick}
            >
                {item.icon === "Dashboard" ? (
                    <AiFillDashboard style={{ marginRight: "8px" }} />
                ) : item.icon === "Catalog" ? (
                    <AiFillPicture style={{ marginRight: "8px" }} />
                ) : item.icon === "Products" ? (
                    <AiFillFolder style={{ marginRight: "8px" }} />
                ) : item.icon === "Categories" ? (
                    <AiFillTag style={{ marginRight: "8px" }} />
                ) : item.icon === "Posters" ? (
                    <AiFillFile style={{ marginRight: "8px" }} />
                ) : item.icon === "Sales" ? (
                    <BiDollar style={{ marginRight: "8px" }} />
                ) : item.icon === "Orders" ? (
                    <AiOutlineOrderedList style={{ marginRight: "8px" }} />
                ) : item.icon === "Invoices" ? (
                    <AiOutlineUnorderedList style={{ marginRight: "8px" }} />
                ) : item.icon === "Customers" ? (
                    <AiOutlineUser style={{ marginRight: "8px" }} />
                ) : item.icon === "Segments" ? (
                    <AiOutlineUserSwitch style={{ marginRight: "8px" }} />
                ) : null}
                {item.label}
            </div>
        </Link>

            {item.submenu && (
                <ul className="sub-menu" style={subMenuStyle}>
                    {item.submenu.map((subItem) => (
                        <MenuItem key={subItem.id} item={subItem} onItemClick={onItemClick} depth={depth + 1} />
                    ))}
                </ul>
            )}
        </li>
    );
};

const InfiniteMultiLevelMenu = ({ menuData }) => {
    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemClick = (item) => {
        setSelectedItem(item);
    };

    return (
        <div className="menu-container">
            <ul className="menu">
                {menuData.map((item) => (
                    <MenuItem key={item.id} item={item} onItemClick={handleItemClick} depth={1} activeItemId={selectedItem ? selectedItem.id : null} />
                ))}
            </ul>
        </div>
    );
};

export default InfiniteMultiLevelMenu;
