import { memo } from "react";
import React, { useState, useEffect } from 'react';
import "./style.scss";
import {
    Button,
    Card,
    Grid,
    Image,
    Text,
    ThemeIcon,
    Tabs,
    Mark,
    Avatar,
} from '@mantine/core';
import {
    AiOutlineEdit,
    AiOutlineDelete,
    AiOutlineProfile,
    AiOutlineNotification,
    AiTwotoneEye,
    AiTwotoneStar,
    AiFillCheckCircle,
    AiOutlineUser,
    AiOutlineCheckCircle,
    AiOutlineCloseCircle,
    AiOutlineClockCircle,
    AiOutlineLike,
    AiFillCreditCard,
    AiOutlineRocket,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import Banner from "../../users/theme/banner";
import { useTranslation } from "react-i18next";
const ProfileCustomer = () => {
    const { t, i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState('VI');
    const handleLanguageChange = (newLanguage, lng) => {
        setCurrentLanguage(newLanguage)
        i18n.changeLanguage(lng);
    };


    return <>
        <Banner pageTitle={t('pageTitle_customer_profile')} />
        <div className="container">
            <Card shadow="sm" withBorder>
                <div className="title-profile-customer mt-3 ml-3">
                    <h3 >{t('profile_title')} : Tam</h3>
                </div>
                <Grid>
                    <Grid.Col md="3" className="profile_customer_left" mt="sm">
                        <div className="profile_customer_left_top">
                            <div >
                                <Avatar variant="transparent" radius="xl" size="xl" color="cyan" src="" />
                            </div>
                            <div >
                                <Text mt="sm" ml="sm">{t('profile_phone')}: 0123456789</Text>
                                <Button className="button_edit_profile_customer" mt="sm" ml="sm">
                                    <AiOutlineEdit /> {t('profile_edit')}
                                </Button>
                            </div>

                        </div>
                        <div className="profile_customer_left_down">
                        </div>
                    </Grid.Col>
                    <Grid.Col md="9">
                        <Tabs color="grape" variant="outline" radius="md" defaultValue="gallery">
                            <Tabs.List>
                                <Tabs.Tab

                                    value="orders"
                                    icon={<ThemeIcon color="teal" size={24} radius="xl">
                                        <AiOutlineProfile />
                                    </ThemeIcon>}>
                                    {t('profile_my_order')}
                                </Tabs.Tab>
                                <Tabs.Tab
                                    value="messages"
                                    icon={<ThemeIcon color="blueviolet" size={24} radius="xl">
                                        <AiOutlineNotification />
                                    </ThemeIcon>}>
                                    {t('profile_my_notice')}
                                </Tabs.Tab>
                                <Tabs.Tab
                                    value="product_seen"
                                    icon={<ThemeIcon color="greenyellow" size={24} radius="xl">
                                        <AiTwotoneEye />
                                    </ThemeIcon>}>
                                    {t('profile_my_viewed')}
                                </Tabs.Tab>
                                <Tabs.Tab
                                    value="evaluate"
                                    icon={<ThemeIcon color="yellow" size={24} radius="xl">
                                        <AiTwotoneStar />
                                    </ThemeIcon>}>
                                    {t('profile_my_review')}
                                </Tabs.Tab>
                                <Tabs.Tab
                                    value="history_score"
                                    icon={<ThemeIcon color="blue" size={24} radius="xl">
                                        <AiFillCheckCircle />
                                    </ThemeIcon>}>
                                    {t('profile_my_history')}
                                </Tabs.Tab>
                            </Tabs.List>

                            <Tabs.Panel value="orders">


                                <div className="profile_customer_right_orders">
                                    <div className="profile_customer_right_orders_top">
                                        <div>
                                            <Text>{t('profile_order')}<Mark> #123123123</Mark></Text>
                                        </div>
                                        <div className="profile_customer_right_orders_status">
                                            <ThemeIcon color="yellow" size={24} radius="xl">
                                                <AiOutlineClockCircle />
                                            </ThemeIcon>
                                            {t('profile_order_pending')}
                                        </div>
                                    </div>
                                    <div className="profile_customer_right_orders_mid">
                                        <div>
                                            <Image mt="sm" alt="" src="" className="profile_customer_right_orders_image" />
                                        </div>
                                        <div className="profile_customer_right_orders_mid_info">
                                            <div>
                                                <Link>  {t('profile_product_name')} </Link>
                                            </div>
                                            <div>
                                                <Text> {t('profile_product_price')}</Text>
                                                <Text> {t('profile_product_quantity')} : 1</Text>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="profile_customer_right_orders_bottom" >
                                        <Link >{t('profile_view_order_detail')}</Link>
                                        <Text>{t('profile_order_total')} : 123123</Text>
                                    </div>
                                </div>


                                <div className="profile_customer_right_orders">
                                    <div className="profile_customer_right_orders_top">
                                        <div>
                                            <Text>Đơn hàng<Mark> #123123123</Mark></Text>
                                        </div>
                                        <div className="profile_customer_right_orders_status">
                                            <ThemeIcon color="teal" size={24} radius="xl">
                                                <AiOutlineCheckCircle />
                                            </ThemeIcon>
                                            Đơn hàng hoàn tất
                                        </div>
                                    </div>
                                    <div className="profile_customer_right_orders_mid">
                                        <div>
                                            <Image mt="sm" alt="" src="" className="profile_customer_right_orders_image" />
                                        </div>
                                        <div className="profile_customer_right_orders_mid_info">
                                            <div>
                                                <Link> Tên sản phẩm </Link>
                                            </div>
                                            <div>
                                                <Text>Giá</Text>
                                                <Text>Số lượng : 1</Text>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="profile_customer_right_orders_bottom" >
                                        <Link >Xem chi tiết đơn hàng</Link>
                                        <Text>Tổng tiền : 123123</Text>
                                    </div>
                                </div>


                                <div className="profile_customer_right_orders">
                                    <div className="profile_customer_right_orders_top">
                                        <div>
                                            <Text>Đơn hàng<Mark> #123123123</Mark></Text>
                                        </div>
                                        <div className="profile_customer_right_orders_status">
                                            <ThemeIcon color="red" size={24} radius="xl">
                                                <AiOutlineCloseCircle />
                                            </ThemeIcon>
                                            Đơn hàng bị hủy
                                        </div>
                                    </div>
                                    <div className="profile_customer_right_orders_mid">
                                        <div>
                                            <Image mt="sm" alt="" src="" className="profile_customer_right_orders_image" />
                                        </div>
                                        <div>
                                            <div>
                                                <Link> Tên sản phẩm </Link>
                                            </div>
                                            <div>
                                                <Text>Giá</Text>
                                                <Text>Số lượng : 1</Text>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="profile_customer_right_orders_bottom">
                                        <Link>Xem chi tiết đơn hàng</Link>
                                        <Text>Tổng tiền : 123123</Text>
                                    </div>
                                </div>


                                <div className="profile_customer_right_orders">
                                    <div className="profile_customer_right_orders_top">
                                        <div>
                                            <Text>Đơn hàng<Mark> #123123123</Mark></Text>
                                        </div>
                                        <div className="profile_customer_right_orders_status">
                                            <ThemeIcon color="indigo" size={24} radius="xl">
                                                <AiOutlineLike />
                                            </ThemeIcon>
                                            Đã đặt hàng
                                        </div>
                                    </div>
                                    <div className="profile_customer_right_orders_mid">
                                        <div>
                                            <Image mt="sm" alt="" src="" className="profile_customer_right_orders_image" />
                                        </div>
                                        <div>
                                            <div>
                                                <Link> Tên sản phẩm </Link>
                                            </div>
                                            <div>
                                                <Text>Giá</Text>
                                                <Text>Số lượng : 1</Text>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="profile_customer_right_orders_bottom">
                                        <Link>Xem chi tiết đơn hàng</Link>
                                        <Text>Tổng tiền : 123123</Text>
                                    </div>
                                </div>


                                <div className="profile_customer_right_orders">
                                    <div className="profile_customer_right_orders_top">
                                        <div>
                                            <Text>Đơn hàng<Mark> #123123123</Mark></Text>
                                        </div>
                                        <div className="profile_customer_right_orders_status">
                                            <ThemeIcon color="pink" size={24} radius="xl">
                                                <AiFillCreditCard />
                                            </ThemeIcon>
                                            Chờ thanh toán
                                        </div>
                                    </div>
                                    <div className="profile_customer_right_orders_mid">
                                        <div>
                                            <Image mt="sm" alt="" src="" className="profile_customer_right_orders_image" />
                                        </div>
                                        <div>
                                            <div>
                                                <Link> Tên sản phẩm </Link>
                                            </div>
                                            <div>
                                                <Text>Giá</Text>
                                                <Text>Số lượng : 1</Text>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="profile_customer_right_orders_bottom">
                                        <Link>Xem chi tiết đơn hàng</Link>
                                        <Text>Tổng tiền : 123123</Text>
                                    </div>
                                </div>

                                <div className="profile_customer_right_orders">
                                    <div className="profile_customer_right_orders_top">
                                        <div>
                                            <Text>Đơn hàng<Mark> #123123123</Mark></Text>
                                        </div>
                                        <div className="profile_customer_right_orders_status">
                                            <ThemeIcon color="red" size={24} radius="xl">
                                                <AiOutlineRocket />
                                            </ThemeIcon>
                                            Đang giao hàng
                                        </div>
                                    </div>
                                    <div className="profile_customer_right_orders_mid">
                                        <div>
                                            <Image mt="sm" alt="" src="" className="profile_customer_right_orders_image" />
                                        </div>
                                        <div>
                                            <div>
                                                <Link> Tên sản phẩm </Link>
                                            </div>
                                            <div>
                                                <Text>Giá</Text>
                                                <Text>Số lượng : 1</Text>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="profile_customer_right_orders_bottom">
                                        <Link>Xem chi tiết đơn hàng</Link>
                                        <Text>Tổng tiền : 123123</Text>
                                    </div>
                                </div>

                            </Tabs.Panel>

                            <Tabs.Panel value="messages">
                                Messages tab content
                            </Tabs.Panel>

                            <Tabs.Panel value="product_seen">
                                Messages tab content
                            </Tabs.Panel>
                            <Tabs.Panel value="evaluate">
                                Messages tab content
                            </Tabs.Panel>
                            <Tabs.Panel value="history_score">
                                Settings tab content
                            </Tabs.Panel>
                        </Tabs>
                    </Grid.Col>
                </Grid>
            </Card>

        </div>
    </>
};

export default memo(ProfileCustomer);