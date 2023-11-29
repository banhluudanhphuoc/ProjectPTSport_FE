// import { memo, useState, useEffect } from "react";
// import './style.scss';
// import { Link, useParams, useNavigate } from 'react-router-dom';
// import { Modal, Button, Image } from 'react-bootstrap';
// import axios from 'axios';
// import Banner from "pages/users/theme/banner";
// import { useTranslation } from "react-i18next";
// import product1 from 'style/img/product/p6.jpg';
// import { CartProvider, useCart } from "react-use-cart";
// import RelatedProductArea from "pages/users/theme/relatedProductArea";
// import { NotificationContainer, NotificationManager } from 'react-notifications';
// import 'react-notifications/lib/notifications.css';
// import ProductModal from "components/user/modal/ProductModal";
// import ProductItem from "components/user/items/ProductItem";
// import { GrFormPrevious, GrFormNext } from "react-icons/gr";
// import { FaEllipsis } from "react-icons/fa6";
// const BrandPage = ({ type }) => {
//     const { t, i18n } = useTranslation();

//     const { addItem, updateItemQuantity } = useCart();
//     const [showModal, setShowModal] = useState(false);
//     const [quantity, setQuantity] = useState(1); // Khởi tạo số lượng ban đầu

//     const navigate = useNavigate();
//     const handleAddToCart = (item) => {
//         // Xử lý thêm sản phẩm vào giỏ hàng ở đây
//         addItem(item);
//         NotificationManager.success(t('notification_add_product_to_cart_success'), t('notification_add_product_to_cart_success_title'), 3000, () => {
//             navigate("/cart");
//         });
//     };
    

//     const [categories, setCategories] = useState([]);
//     const [brands, setBrands] = useState([]);
//     const api = process.env.REACT_APP_API_URL;
//     useEffect(() => {

//         const fetchCategories = async () => {
//             try {
//                 const response = await axios.get(api + '/categories');

//                 // Xử lý phản hồi từ server (response.data)
//                 setCategories(response.data);
//             } catch (error) {
//                 // Xử lý lỗi
//                 console.error('Error fetching categories:', error);
//             }
//         };
//         const fetchBrands = async () => {
//             try {
//                 const response = await axios.get(api + '/catalogs');

//                 // Xử lý phản hồi từ server (response.data)
//                 setBrands(response.data);
//             } catch (error) {
//                 // Xử lý lỗi
//                 console.error('Error fetching categories:', error);
//             }
//         };
//         fetchBrands();
//         fetchCategories();
//     }, []);
//     const isHomePage = type === 'category' || type === 'brand' ? false : null;

//     return (
//         <>
//             <NotificationContainer />
//             {type === 'category' ?
//                 <Banner pageTitle={t('pageTitle_category')} />
//                 :
//                 <Banner pageTitle={t('pageTitle_brand')} />}


//             {/* <!-- End Banner Area-- > */}
//             <div className="container">
//                 <div className="row">
//                     <div className="col-xl-3 col-lg-4 col-md-5">
//                         <div className="sidebar-categories">

//                             <div className="head">
//                                 {type === 'category' ? t('menu_categries') : t('menu_brands')}
//                             </div>
//                             {type === 'category' ? (
//                                 <ul className="main-categories">
//                                     {categories.map((category) => (
//                                         <li className="main-nav-list">
//                                             <Link>
//                                                 <span className="lnr lnr-arrow-right"></span>
//                                                 {category.categoryName}
//                                                 {/* <span className="number">()</span> */}
//                                             </Link>
//                                         </li>
//                                     ))}
//                                 </ul>
//                             ) : (
//                                 <ul className="main-categories">


//                                     {brands.map((brand) => (
//                                         <li className="main-nav-list">
//                                             <Link>
//                                                 <span className="lnr lnr-arrow-right"></span>
//                                                 {brand.catalogName}
//                                                 {/* <span className="number">()</span> */}
//                                             </Link>
//                                         </li>
//                                     ))}
//                                 </ul>
//                             )}
//                         </div>
//                     </div>
//                     <div className="col-xl-9 col-lg-8 col-md-7">

//                         <div className="filter-bar d-flex flex-wrap align-items-center">
//                             <div className="pagination">
//                                 <select class="nice-select">
//                                     <option value="1">{t('sorting_default')}</option>
//                                     <option value="2">{t('sorting_price_high')}</option>
//                                     <option value="3">{t('sorting_price_low')}</option>
//                                 </select>
//                             </div>
//                             <div className="sorting mr-auto">

//                             </div>
//                             <div className="pagination">
//                                 <Link href="#" className="prev-arrow"><GrFormPrevious /></Link>
//                                 <Link href="#" className="active">1</Link>
//                                 <Link href="#">2</Link>
//                                 <Link href="#">3</Link>
//                                 <Link href="#" className="dot-dot"><FaEllipsis /></Link>
//                                 <Link href="#">6</Link>
//                                 <Link href="#" className="next-arrow"><GrFormNext /></Link>
//                             </div>
//                         </div>
//                         {/* <!-- End Filter Bar -->
//                         <!-- Start Best Seller --> */}
//                         <section className="lattest-product-area pb-40 category-list">
//                             <div className="row">
//                                 {product.map((item) => (
//                                     <ProductItem
//                                         isHomePage={isHomePage}
//                                         product={item}
//                                         handleAddToCart={handleAddToCart}
//                                         t={t}
//                                         setShowModal={setShowModal} // Truyền setShowModal xuống
//                                         key={item.product_id}
//                                     />
//                                 ))}


//                             </div>
//                         </section>


//                     </div>
//                 </div>
//                 < RelatedProductArea />
//             </div>

//             {product.map((item) => (
//                 <ProductModal
//                     product={item}
//                     showModal={showModal === item.product_id}
//                     setShowModal={setShowModal}
//                     handleAddToCart={handleAddToCart}
//                     t={t}
//                     key={item.product_id}
//                 />
//             ))}

//         </>

//     );
// };

// export default memo(BrandPage);