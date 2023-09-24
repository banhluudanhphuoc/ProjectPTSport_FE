import { memo } from "react";
import "./style.scss";
import { useForm } from '@mantine/form';
import {
    PasswordInput,
    Group,
    Button,
    Box,
    Card,
    TextInput,
    PinInput,
    Grid,
    Image,
    Text,
    ThemeIcon,
    List,
    Tabs,
    rem,
    Table,
    ScrollArea,
    Highlight,
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
} from "react-icons/ai";
import { Link } from "react-router-dom";
const ProfileCustomer = () => {
    const items = [
        { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
        { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
        { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
        { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
        { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
    ];


    return <>
        <div className="container">
            <Card shadow="sm" padding="lg" radius="md" withBorder>
                <div className="title-profile-customer">
                    <h3 >Xin chào Anh/Chị : Tam</h3>
                </div>
                <Grid>
                    <Grid.Col md="3" className="profile_customer_left" mt="sm">
                        <div className="profile_customer_left_top">
                            <div >
                                <Avatar variant="transparent" radius="xl" size="xl" color="cyan" src="" />
                            </div>
                            <div >
                                <Text mt="sm" ml="sm">Số điện thoại: 0123456789</Text>
                                <Button className="button_edit_profile_customer" mt="sm" ml="sm">
                                    <AiOutlineEdit /> Chỉnh sửa
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
                                    Đơn hàng của tôi
                                </Tabs.Tab>
                                <Tabs.Tab
                                    value="messages"
                                    icon={<ThemeIcon color="blueviolet" size={24} radius="xl">
                                        <AiOutlineNotification />
                                    </ThemeIcon>}>
                                    Thông báo của tôi
                                </Tabs.Tab>
                                <Tabs.Tab
                                    value="product_seen"
                                    icon={<ThemeIcon color="greenyellow" size={24} radius="xl">
                                        <AiTwotoneEye />
                                    </ThemeIcon>}>
                                    Sản phẩm vừa xem
                                </Tabs.Tab>
                                <Tabs.Tab
                                    value="evaluate"
                                    icon={<ThemeIcon color="yellow" size={24} radius="xl">
                                        <AiTwotoneStar />
                                    </ThemeIcon>}>
                                    Đánh giá của tôi
                                </Tabs.Tab>
                                <Tabs.Tab
                                    value="history_score"
                                    icon={<ThemeIcon color="blue" size={24} radius="xl">
                                        <AiFillCheckCircle />
                                    </ThemeIcon>}>
                                    Lịch sử tích điểm
                                </Tabs.Tab>
                            </Tabs.List>

                            <Tabs.Panel value="orders">

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


                            </Tabs.Panel>

                            <Tabs.Panel value="messages">

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