
import { memo } from "react";
import './style.scss';
import { Link } from "react-router-dom";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { Grid, SimpleGrid, Card, Image, Text, Button } from '@mantine/core';




const CustomersListAdmin = () => {
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
            <Link to={`/admin/customer_create`}><Button mt="sm">Thêm user</Button></Link>
            <div className="customers_admin">
                <SimpleGrid cols={5} spacing="xs" verticalSpacing="xs">
                    {products.map((product) => (
                        <div key={product.id} className="customer_admin">
                            <Card mt="sm">
                                <Image src={product.imageUrl} alt={product.name} className="img_customer_admin" />
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

export default memo(CustomersListAdmin);