import { memo } from "react";
import { CartProvider, useCart } from "react-use-cart";
import { useForm, isNotEmpty, isEmail, isInRange, hasLength, matches } from '@mantine/form';
import { Button, Group, TextInput, NumberInput, Box, Grid, Card, Table, ActionIcon, NativeSelect } from '@mantine/core';
import './style.scss';
import { Link } from "react-router-dom";
const CheckoutPage = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
        cartTotal,
        emptyCart,
        clearCartMetadata
    } = useCart();
    const form = useForm({
        initialValues: {
            name: '',
            address: '',
            email: '',
            phonenumber: '',
        },

        validate: {
            name: hasLength({ min: 2, max: 10 }, 'Nhập tên !!! (Ít nhất 2 kí tự))'),
            address: isNotEmpty('Nhập địa chỉ giao hàng !!!'),
            email: isEmail('Email không hợp lệ !!!'),
            phonenumber: isNotEmpty('Nhập số điện thoại nhận hàng !!!'),
        },
    });
    return <>
        <div className="container">
            <div className="checkout">
                <Card shadow="sm" padding="lg" radius="md" withBorder>
                    <h1 className="title_checkout">Thanh toán đơn hàng</h1>
                    <Grid>
                        <Grid.Col md={8}>
                            <Box component="form" maw={400} mx="auto" onSubmit={form.onSubmit(() => { })}>
                                <TextInput
                                    label="Họ và tên"
                                    placeholder="Họ và tên"
                                    withAsterisk {...form.getInputProps('name')}

                                />

                                <TextInput
                                    label="Địa chỉ"
                                    placeholder="Địa chỉ"
                                    withAsterisk
                                    mt="md"
                                    {...form.getInputProps('address')}
                                />
                                <TextInput
                                    label="Email"
                                    placeholder="Your email"
                                    withAsterisk
                                    mt="md"
                                    {...form.getInputProps('email')}
                                />
                                <TextInput
                                    label="Số điện thoại"
                                    placeholder="Số điện thoại"
                                    withAsterisk
                                    mt="md"
                                    {...form.getInputProps('phonenumber')}
                                />
                                <NativeSelect
                                    label="Phương thức thanh toán"
                                    description="Chọn phương thức bạn muốn thanh toán"
                                    mt="md"
                                    data={['Thanh toán khi nhận hàng', 'Thanh toán qua VNPAY', 'Khác']}

                                />
                                <Group justify="flex-end" mt="md">
                                    <Button type="submit" >Thanh toán</Button>
                                </Group>
                            </Box>
                        </Grid.Col>
                        <Grid.Col md={4}>
                            <Card>
                                <h3>Thông tin đơn hàng</h3>
                                <Table captionSide="bottom">
                                    <thead>
                                        <tr>
                                            <th>Tên sản phẩm</th>
                                            <th>Giá</th>
                                            <th>Số lượng</th>
                                        </tr>
                                    </thead>
                                    {items.map((item) => (
                                        < tbody >
                                            <tr key={item.id}>
                                                <td className="action_cart_page">
                                                    {item.product_name}
                                                </td>
                                                <td>
                                                    {item.price}
                                                </td>
                                                <td className="action_cart_page">
                                                    {item.quantity}
                                                </td>
                                            </tr>
                                        </tbody>
                                    ))}
                                </Table>
                                <h3>Tổng thanh toán : {cartTotal}</h3>
                            </Card>
                        </Grid.Col>
                    </Grid>
                </Card>

            </div>
        </div>


    </>
};

export default memo(CheckoutPage);