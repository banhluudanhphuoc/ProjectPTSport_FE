
import { memo } from "react";
import './style.scss';
import { Link } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";
import { Grid, Card, Table } from '@mantine/core';




const CategoriesListAdmin = () => {
    const items = [
        { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon', id: 1 },
        { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen', id: 2 },
        { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium', id: 3 },
        { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium', id: 4 },
        { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium', id: 5 },
    ];

    return <>
        <Grid.Col md={10}>
            <div className="posts_admin">
                <Card radius="md" shadow="sm" p="lg">
                    <h1>Posters</h1>
                    <Table striped withBorder highlightOnHover horizontalSpacing="lg" verticalSpacing="lg" fontSize="lg" captionSide="bottom">
                        <thead>
                            <tr>
                                <th>Tên sản phẩm</th>
                                <th>Hình ảnh</th>
                                <th>Giá</th>
                                <th>Số lượng</th>
                                <th>Số lượng</th>
                            </tr>
                        </thead>
                        {items.map((item) => (

                            < tbody >
                                <tr key={item.id}>
                                    <td >{item.name}</td>
                                    <td></td>
                                    <td>{item.price}</td>
                                    <td >{item.quantity}</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        ))}
                    </Table>

                </Card>
            </div>
        </Grid.Col>
    </>
};

export default memo(CategoriesListAdmin);