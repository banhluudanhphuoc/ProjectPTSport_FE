import { memo, useState, useEffect } from "react";
import "./style.scss";
import axios from "axios";
import { Link, useParams, useNavigate } from 'react-router-dom';
import Banner from "../../users/theme/banner";
import { Container, Row } from "react-bootstrap";
import ProductModal from "components/user/modal/ProductModal";
import ProductItem from "components/user/items/ProductItem3";
import { NotificationContainer, NotificationManager } from 'react-notifications';
import Cookies from 'js-cookie';
import { useTranslation } from "react-i18next";
import { CartProvider, useCart } from "react-use-cart";
const WishList = () => {

    const { addItem } = useCart();
    const { t, i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState('VI');
    const handleLanguageChange = (newLanguage, lng) => {
        setCurrentLanguage(newLanguage)
        i18n.changeLanguage(lng);
    };

    const auth = process.env.REACT_APP_API_URL_AUTH;

    const [cart, setCart] = useState([]);
    const api = process.env.REACT_APP_API_URL;
    const [showModal, setShowModal] = useState(false);
    const [user, setUser] = useState([]);
    const [productsWishList, setProductsWishList] = useState([]);
    const userToken = Cookies.get('userToken');
    useEffect(() => {


        if (!userToken) {
            navigate('/login-user');
        }
        const fetchMe = async () => {
            try {
                const response = await axios.get(auth + '/me', {
                    headers: {
                        'Authorization': `Bearer ${userToken}`,
                        'Content-Type': 'application/json',
                    }
                });

                setUser(response.data);
                fetchProductsWishList(response.data.userId);
            } catch (error) {
                console.error('Error fetching Brand:', error);
            }
        };

        const fetchProductsWishList = async (userId) => {
            try {
                const response = await axios.get(api + '/wish-list/' + userId, {
                    headers: {
                        'Authorization': `Bearer ${userToken}`,
                        'Content-Type': 'application/json',
                    }
                });

                setProductsWishList(response.data.productDtos);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchMe();
    }, [api, auth]);

    const navigate = useNavigate();
    const addToCart = (cartItem, cartItem2) => {
        fetch(api + `/cart/${user.userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(cartItem),
        })
            .then((response) => response.json())
            .then((data) => {
                setCart(data.itemList);
            })
            .catch((error) => {
                console.error('Error adding to cart:', error);
            });
        addItem(cartItem2);
    };


    const handleAddToCart = (item) => {
        if (!userToken) {
            NotificationManager.error(t('message_fail_add_to_cart'), t('message_failed'));
        } else {
            const cartItem2 = {
                id: item.id,
                productName: item.name,
                sizeID: 2,
                colorID: 2,
                image: item.listImage[0].path,
                quantity: 1,
                price: item.price,
                totalPrice: item.price,
            };
            const cartItem = {
                productID: item.id, // ID thực của sản phẩm
                productName: item.name,
                sizeID: 2,
                colorID: 2,
                image: item.listImage[0].path,
                quantity: 1,
                price: item.price,
                totalPrice: item.price,
            };
            addToCart(cartItem, cartItem2);

            // Hiển thị thông báo thành công
            NotificationManager.success(t('notification_add_product_to_cart_success'), t('notification_add_product_to_cart_success_title'), 3000, () => {
                navigate("/cart");
            });
        }
    };

    return <>
        <NotificationContainer />
        <Banner pageTitle={t('pageTitle_wish_list')} />
        <section className="blog_area mt-5">
            <Container>
                <Row>
                    <h1>Wishlist</h1>
                    <div class="wishlist-container">


                        {productsWishList.map((item) => (
                            <ProductItem
                                product={item}
                                handleAddToCart={handleAddToCart}
                                t={t}
                                setShowModal={setShowModal} // Truyền setShowModal xuống
                                key={item.id}
                                userId={user.userId}
                            />
                        ))}



                    </div>
                </Row>
            </Container>
        </section>
        {productsWishList.map((item) => (
            <ProductModal
                product={item}
                showModal={showModal === item.id}
                setShowModal={setShowModal}
                handleAddToCart={handleAddToCart}
                t={t}
                key={item.id}
            />
        ))}
    </>
};

export default memo(WishList);