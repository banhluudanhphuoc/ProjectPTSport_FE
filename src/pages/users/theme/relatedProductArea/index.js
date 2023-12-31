import { memo, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './style.scss';


import axios from 'axios';
import { useTranslation } from "react-i18next";
import category5 from '../../../../style/img/category/c5.jpg';

const Footer = () => {
    const { t, i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState('VI');
    const handleLanguageChange = (newLanguage, lng) => {

        setCurrentLanguage(newLanguage)
        i18n.changeLanguage(lng);
    };
    function formatCurrency(amount) {

        // Sử dụng NumberFormat để định dạng số
        const formatter = new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
        });

        // Áp dụng định dạng và trả về chuỗi đã định dạng
        return formatter.format(amount);
    }
    const [products, setProducts] = useState([]);
    const api = process.env.REACT_APP_API_URL;

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(api + '/products/discounts', { maxRedirects: 5 });
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchProducts();

    }, [api]);



    return (
        <section className="related-product-area section_gap_bottom mt-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 text-center">
                        <div className="section-title">
                            <h1>{t("deals_of_the_week")}</h1>

                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-9">
                        <div className="row">
                            {products.length > 0 &&
                                products.map((product) => (
                                    <div className="col-lg-4 col-md-4 col-sm-6 mb-20" key={product.id}>
                                        <div className="single-related-product d-flex">
                                            <Link to={'/product-detail/' + product.id}><img src={product.listImage[0].path} alt={product.name} width={"50px"} /></Link>

                                            <div className="desc">
                                                <Link className="title" to={'/product-detail/' + product.id}>{product.name}</Link>
                                                <div className="price">
                                                    <h6>{formatCurrency(product.discountedPrice)}</h6>
                                                    <h6 className="l-through">{formatCurrency(product.price)}</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}



                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="ctg-right">
                            <a href="#" target="_blank">
                                <img className="img-fluid d-block mx-auto" src={category5} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default memo(Footer);