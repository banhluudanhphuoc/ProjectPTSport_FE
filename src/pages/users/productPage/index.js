import { memo, useState, useEffect, useRef } from "react";
import slider1 from '../../../assets/users/slider/slider_1.webp';
import { Image } from "@mantine/core";
import './style.scss';

const ProductPage = () => {
    const [index, setIndex] = useState(0);
    const myRef = useRef(null);

    // const handleTab = (newIndex) => {
    //     setIndex(newIndex);
    //     const images = myRef.current.children;
    //     for (let i = 0; i < images.length; i++) {
    //         images[i].className = images[i].className.replace("active", "");
    //     }
    //     images[newIndex].className = "active";
    // };

    // useEffect(() => {
    //     myRef.current.children[index].className = "active";
    // }, [index]);

    const products = [
        {
            product_id: 1,
            status: 1,
            description: 'ok1',
            inventory: 1,
            product_name: 'giay nike',
            price: 10,
            category_id: 1,
            manufacturer_id: 1,
            img_src: slider1,
        },
    ];

    return (
        <div className="app">
            {products.map((item, itemIndex) => (
                <div className="details" key={item.product_id}>
                    <div className="big-img">
                        <Image src={item.img_src} alt=""></Image>
                    </div>

                    <div className="box">
                        <div className="row">
                            <h2>{item.product_name}</h2>
                            <span>${item.price}</span>
                        </div>
                        <p>{item.description}</p>
                        <button className="cart">Add to cart</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default memo(ProductPage);