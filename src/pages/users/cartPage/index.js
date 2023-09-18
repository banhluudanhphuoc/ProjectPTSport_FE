import { memo } from "react";
import { CartProvider, useCart } from "react-use-cart";
import { Table, ActionIcon, Card, Grid, Button } from '@mantine/core';
import './style.scss';
import { Link } from "react-router-dom";
const CartPage = () => {
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




    return <>
        <CartProvider>
            <div className="cart">
                <div className="container">

                    <Grid>
                        <Grid.Col md={9}>
                            <Card radius="md" shadow="sm" p="lg">
                                <h1>Giỏ hàng ({totalUniqueItems})</h1>
                                <Table striped withBorder highlightOnHover horizontalSpacing="lg" verticalSpacing="lg" fontSize="lg" captionSide="bottom">
                                    <thead>
                                        <tr>
                                            <th>Tên sản phẩm</th>
                                            <th>Hình ảnh</th>
                                            <th>Giá</th>
                                            <th>Số lượng</th>
                                        </tr>
                                    </thead>
                                    {items.map((item) => (

                                        < tbody >
                                            <tr key={item.id}>
                                                <td className="action_cart_page">{item.product_name}<ActionIcon variant="subtle" onClick={() => removeItem(item.id)}>&times;</ActionIcon></td>
                                                <td></td>
                                                <td>{item.price}</td>
                                                <td className="action_cart_page">
                                                    <ActionIcon variant="subtle" onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</ActionIcon>
                                                    {item.quantity}
                                                    <ActionIcon variant="subtle" onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</ActionIcon>
                                                </td>
                                            </tr>
                                        </tbody>
                                    ))}
                                </Table>

                            </Card>
                        </Grid.Col>
                        <Grid.Col md={3}>
                            <Card radius="md" shadow="sm" p="lg">
                                <div className="thanhtoan">
                                    <h3>Tổng tiền :{cartTotal}</h3>
                                </div>
                                <Link to={"/checkout"}><Button>Tiến hành thanh toán</Button></Link>

                            </Card>
                        </Grid.Col>
                    </Grid>
                </div>
            </div>
        </CartProvider >
    </>
};

export default memo(CartPage);