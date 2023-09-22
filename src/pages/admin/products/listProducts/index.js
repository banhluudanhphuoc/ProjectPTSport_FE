
import { memo } from "react";
import './style.scss';
import { Link } from "react-router-dom";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { Grid, SimpleGrid, Card, Image, Text, Button } from '@mantine/core';

const ListProductsAdmin = () => {

    const products = [
        { id: 1, name: "Product 1", imageUrl: "image1.jpg" },
        { id: 2, name: "Product 2", imageUrl: "image2.jpg" },
        { id: 3, name: "Product 3", imageUrl: "image3.jpg" },
        { id: 1, name: "Product 1", imageUrl: "image1.jpg" },
        { id: 2, name: "Product 2", imageUrl: "image2.jpg" },
        { id: 3, name: "Product 3", imageUrl: "image3.jpg" },
        { id: 1, name: "Product 1", imageUrl: "image1.jpg" },
        { id: 2, name: "Product 2", imageUrl: "image2.jpg" },
        { id: 3, name: "Product 3", imageUrl: "image3.jpg" },
        { id: 1, name: "Product 1", imageUrl: "image1.jpg" },
        { id: 2, name: "Product 2", imageUrl: "image2.jpg" },
        { id: 3, name: "Product 3", imageUrl: "image3.jpg" },
        { id: 1, name: "Product 1", imageUrl: "image1.jpg" },
        { id: 2, name: "Product 2", imageUrl: "image2.jpg" },
        { id: 3, name: "Product 3", imageUrl: "image3.jpg" },
        // Thêm các sản phẩm khác ở đây
    ];

    return (
        <Grid.Col md={10}>
            <Link to={`/admin/product_create`}><Button mt="sm">Thêm sản phẩm mới</Button></Link>
            <div className="products_admin">
                <SimpleGrid cols={5} spacing="xs" verticalSpacing="xs">
                    {products.map((product) => (
                        <div key={product.id} className="product_admin">
                            <Card mt="sm">
                                <Image src={product.imageUrl} alt={product.name} className="img_product_admin" />
                                <Text align="center">
                                    <Link to={`/admin/product_edit/${product.id}`}>{product.name}</Link>
                                    <Link to={`/admin/product_edit/${product.id}`}>
                                        <button className="button_product_admin">
                                            <AiOutlineEdit />
                                        </button>
                                    </Link>
                                    <button className="button_product_admin">
                                        <AiOutlineDelete />
                                    </button>
                                </Text>
                            </Card>
                        </div>
                    ))}
                </SimpleGrid>
            </div >
        </Grid.Col >
    );
};

export default memo(ListProductsAdmin);