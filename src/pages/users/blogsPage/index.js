import { memo, useState, useEffect } from "react";
import "./style.scss";
import axios from "axios";
import { Link, useParams, useNavigate } from 'react-router-dom';
import Banner from "../../users/theme/banner";
import { Container, Row } from "react-bootstrap";
import BlogImg1 from '../../../style/img/blog/main-blog/m-blog-4.jpg';
// import BlogsCategoryImg3 from '../../../style/img/blog/cat-post/cat-post-3.jpg';
// import BlogsCategoryImg2 from '../../../style/img/blog/cat-post/cat-post-2.jpg';
// import BlogsCategoryImg1 from '../../../style/img/blog/cat-post/cat-post-1.jpg';
// import BlogImg2 from '../../../style/img/blog/main-blog/m-blog-2.jpg';
// import BlogImg3 from '../../../style/img/blog/main-blog/m-blog-3.jpg';
// import BlogImg4 from '../../../style/img/blog/main-blog/m-blog-4.jpg';
// import BlogImg5 from '../../../style/img/blog/main-blog/m-blog-5.jpg';

import Cookies from 'js-cookie';
import { useTranslation } from "react-i18next";
const BlogsPage = () => {

    const { t, i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState('VI');
    const handleLanguageChange = (newLanguage, lng) => {
        setCurrentLanguage(newLanguage)
        i18n.changeLanguage(lng);
    };
    const [news, setNews] = useState([]);
    const api = process.env.REACT_APP_API_URL;

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get(api + '/blogs');

                setNews(response.data);
            } catch (error) {
                console.error('Error fetching News:', error);
            }
        };

        fetchNews();
    }, []);

    return <>
        <Banner pageTitle={t('pageTitle_news')} />

        <section className="blog_area mt-5">
            <Container>
                <Row>
                    <div className="col-lg-8">
                        <div className="blog_left_sidebar">

                            <article className="row blog_item">
                                <div className="col-md-12">
                                    {news.map((singleNew) => (
                                        <div className="blog_post mt-5">
                                            <img src={BlogImg1} alt="" />
                                            <div className="blog_details ">
                                                <Link to={"/news-detail/" + singleNew.blogId}>
                                                    <h2>{singleNew.title}</h2>
                                                </Link>
                                                <Link to={"/news-detail/" + singleNew.blogId} className="white_bg_btn">View More</Link>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </article>


                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="blog_right_sidebar">
                            {/* <aside className="single_sidebar_widget search_widget">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Search Posts" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Search Posts'" />
                                    <span className="input-group-btn">
                                        <button className="btn btn-default" type="button"><i className="lnr lnr-magnifier"></i></button>
                                    </span>
                                </div>
                                <div className="br"></div>
                            </aside> */}

                            <aside className="single_sidebar_widget popular_post_widget">
                                <h3 className="widget_title">Popular Posts</h3>

                                {news.map((singleNew) => (
                                    <div className="media post_item">
                                        <img src={BlogImg1} alt="post" width={"30px"} />
                                        <div className="media-body">
                                            <Link to={"/news-detail/" + singleNew.blogId}>
                                                <h3>{singleNew.title}</h3>
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                                <div className="br"></div>
                            </aside>


                        </div>
                    </div>
                </Row>
            </Container>
        </section>
    </>
};

export default memo(BlogsPage);