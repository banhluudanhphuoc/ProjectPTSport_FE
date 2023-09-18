import { memo, useState, useEffect } from "react";
import { Image } from "@mantine/core";
import './style.scss';
import { useParams } from "react-router-dom";

const ProductDetail = () => {
    const [product, setProduct] = useState(null);
    const { product: productId } = useParams();

    useEffect(() => {
        // Simulate fetching product details from an API based on productId
        // Replace this with actual data fetching logic
        const fetchProductDetails = async () => {
            try {
                const response = await fetch(`/api/products/${productId}`);
                if (response.ok) {
                    const productData = await response.json();
                    setProduct(productData);
                } else {
                    // Handle error response
                    console.error("Failed to fetch product details");
                }
            } catch (error) {
                console.error("Error while fetching product details:", error);
            }
        };

        fetchProductDetails();
    }, [productId]);

    if (!product) {
        // Product details are still being fetched, or an error occurred
        return <div>Loading...</div>;
    }

    return (
        <div className="app">
            <div className="details">
                <div className="big-img">
                    <Image src={product.img_src} alt=""></Image>
                </div>
                <div className="box">
                    <div className="row">
                        <h2>{product.product_name}</h2>
                        <span>${product.price}</span>
                    </div>
                    <p>{product.description}</p>
                    <button className="cart">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default memo(ProductDetail);
