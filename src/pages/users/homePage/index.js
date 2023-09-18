
import {
    Box,
    Button,
    Card,
    Grid,
    Image,
    Text,
    Avatar,
    CloseButton
} from '@mantine/core';
import Modal from 'react-modal';
import { memo } from "react";
import './style.scss';
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slider1 from '../../../assets/users/slider/slider_1.webp';
import slider2 from '../../../assets/users/slider/slider_2.jpg';
import slider3 from '../../../assets/users/slider/slider_3.webp';
import slider5 from '../../../assets/users/slider/slider_5.webp';
import banner from '../../../assets/users/banner/banner.jpg';
import { Link } from 'react-router-dom';
import { AiFillEye, AiOutlineShopping } from "react-icons/ai";
import { CartProvider, useCart } from "react-use-cart";
const HomePage = () => {
    const { addItem } = useCart();
    const settings = {
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: (
            <div>
                <div className="next-slick-arrow"> ⫸ </div>
            </div>
        ),
        prevArrow: (
            <div>
                <div className="prev-slick-arrow"> ⫷ </div>
            </div>
        ),
    };
    const Images = [
        {
            id: 1,
            src: slider1,
            alt: "Image 1",
        },
        {
            id: 2,
            src: slider2,
            alt: "Image 2",
        },
        {
            id: 3,
            src: slider3,
            alt: "Image 3",
        },
        {
            id: 5,
            src: slider5,
            alt: "Image 5",
        },

    ];
    const product = [
        {
            id: "1",
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
        {
            id: 2,
            product_id: 2,
            status: 2,
            description: 'ok2',
            inventory: 2,
            product_name: 'giay nike 2',
            price: 20,
            category_id: 2,
            manufacturer_id: 2,
            img_src: slider2,
        },
        {
            id: 3,
            product_id: 3,
            status: 3,
            description: 'ok3',
            inventory: 3,
            product_name: 'giay nike 3',
            price: 103,
            category_id: 3,
            manufacturer_id: 3,
            img_src: slider5,
        },

    ];
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    let subtitle;
    const [openModals, setOpenModals] = useState({});
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    useEffect(() => {
        Modal.setAppElement('#yourAppElement');
    }, []);
    function openModal(productId) {
        //setIsOpen(true);
        setOpenModals((prevOpenModals) => ({
            ...prevOpenModals,
            [productId]: true,
        }));
    }
    // function openModal(item) {
    //     setSelectedProduct(item);
    //     setIsOpen(true);
    // }

    function afterOpenModal() {
        subtitle.style.color = '#f00';
    }

    function closeModal(productId) {
        //setIsOpen(false);
        setOpenModals((prevOpenModals) => ({
            ...prevOpenModals,
            [productId]: false,
        }));
    }
    // function closeModal() {
    //     setIsOpen(false);
    // }
    return <>
        <div className="container">
            <div className="row">
                <div className="content">
                    <div className="container">
                        <div className="homePage_slider">
                            <Slider {...settings}>
                                {Images.map((item) => (
                                    <div key={item.id}>
                                        <img src={item.src} alt={item.alt} className="img_slider" />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                        <div id="yourAppElement"></div>

                        {product.map((item) => (
                            <Modal
                                isOpen={openModals[item.product_id]} // Use openModals state for each product
                                onAfterOpen={afterOpenModal}
                                onRequestClose={() => closeModal(item.product_id)} // Close the specific product's modal
                                style={customStyles}
                                contentLabel="Product"
                                key={item.product_id}
                            >
                                <div className='product_modal'>
                                    <Grid grow>
                                        <Grid.Col span={4}>
                                            <Image width={200} height={250} mx="auto" radius="md" src={slider1} alt="Random image" className="product_img_modal" />
                                        </Grid.Col>
                                        <Grid.Col span={4}>
                                            <div className="close_button_modal_product">
                                                <CloseButton title="Close popover" size="xl" iconSize={20} onClick={() => closeModal(item.product_id)} />
                                            </div>
                                            <div>
                                                <Box><Link className='product_name_modal' ref={(_subtitle) => (subtitle = _subtitle)}>{item.product_name}</Link></Box>
                                                <Text className='price_modal'>{item.price}</Text>
                                                <Text className='descripsion_modal'>{item.description}</Text>
                                            </div>
                                            <div>
                                                <Link to={"/product-detail/" + item.product_id}><Button variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }} >Mua</Button></Link>

                                                <Button variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 105 }} onClick={() => addItem(item)} >Thêm vào giỏ hàng</Button>
                                            </div>
                                        </Grid.Col>
                                    </Grid>
                                </div>
                            </Modal>
                        ))}
                        <Card><h1>Sản phẩm bán chạy</h1></Card>
                        <div className="hot_product">
                            {product.map((item) => (
                                <Card radius="md" shadow="sm" p="lg">
                                    <Grid>
                                        <Grid.Col md={3} key={item.product_id}>
                                            <div className="product">
                                                <Image width={200} height={250} mx="auto" radius="md" src={item.img_src} alt="Random image" className="product_img" />
                                                <Box><Link className="product_name">{item.product_name}</Link></Box>
                                                <Text className='price_modal'>{item.price}</Text>
                                                <button onClick={() => openModal(item.product_id)} className="fast_view_product"><Avatar color="cyan" radius="xl"><AiFillEye /></Avatar></button>
                                                <button className="buy_product"><Avatar color="cyan" radius="xl"><AiOutlineShopping /></Avatar></button>
                                            </div>
                                        </Grid.Col>
                                    </Grid>
                                </Card>
                            ))}
                        </div>
                        <div className="banner">
                            <Card radius="md" shadow="sm" p="lg">
                                <img src={banner} alt='banner' />
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>


};

export default memo(HomePage);