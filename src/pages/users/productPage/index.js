import { memo, useState, useEffect } from "react";
import { Image } from "@mantine/core";
import './style.scss';
import { useParams } from "react-router-dom";

const ProductPage = () => {
    const [category, setCategory] = useState(null);
    const { category: categoryId } = useParams();

    useEffect(() => {
        // Simulate fetching product details from an API based on productId
        // Replace this with actual data fetching logic
        const fetchProductPage = async () => {
            try {
                const response = await fetch(`/api/categories/${categoryId}`);
                if (response.ok) {
                    const categoryData = await response.json();
                    setCategory(categoryData);
                } else {
                    // Handle error response
                    console.error("Failed to fetch product details");
                }
            } catch (error) {
                console.error("Error while fetching product details:", error);
            }
        };

        fetchProductPage();
    }, [categoryId]);

    if (!category) {
        // Product details are still being fetched, or an error occurred
        return <h1>ProductPage 1</h1>;
    }
    else {
        return <h1>ProductPage </h1>;
    }
};

export default memo(ProductPage);