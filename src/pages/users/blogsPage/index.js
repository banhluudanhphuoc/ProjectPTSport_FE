import { memo, useState } from "react";
import { withRouter } from 'react-router-dom';
import "./style.scss";
import { useForm, isNotEmpty, isEmail, isInRange, hasLength, matches } from '@mantine/form';
import {
    PasswordInput,
    Group,
    Button,
    Box,
    Card,
    TextInput,
    PinInput,
    Grid,
    Image,
    Text,
    ThemeIcon,
    List,
    Tabs,
    rem,
    NativeSelect,
    Avatar,
    Select,
} from '@mantine/core';
import LoginImg from '../../../style/img/login.jpg';
import { notifications } from '@mantine/notifications';
import { DateInput } from '@mantine/dates';
import { IconCheck } from '@tabler/icons-react';
import axios from "axios";
import { modals } from '@mantine/modals';
import Banner from "../../users/theme/banner";
import { Container, Col, Row } from "react-bootstrap";
import BlogsCategoryImg3 from '../../../style/img/blog/cat-post/cat-post-3.jpg';
import BlogsCategoryImg2 from '../../../style/img/blog/cat-post/cat-post-2.jpg';
import BlogsCategoryImg1 from '../../../style/img/blog/cat-post/cat-post-1.jpg';
import BlogImg1 from '../../../style/img/blog/main-blog/m-blog-1.jpg';
import BlogImg2 from '../../../style/img/blog/main-blog/m-blog-2.jpg';
import BlogImg3 from '../../../style/img/blog/main-blog/m-blog-3.jpg';
import BlogImg4 from '../../../style/img/blog/main-blog/m-blog-4.jpg';
import BlogImg5 from '../../../style/img/blog/main-blog/m-blog-5.jpg';

const BlogsPage = () => {



    return <>
        <Banner />
        <section class="blog_categorie_area">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="categories_post">
                            <img src={BlogsCategoryImg3} alt="post" />
                            <div class="categories_details">
                                <div class="categories_text">
                                    <a href="blog-details.html" className="custom_the_a">
                                        <h5>Social Life</h5>
                                    </a>
                                    <div class="border_line"></div>
                                    <p>Enjoy your social life together</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="categories_post">
                            <img src={BlogsCategoryImg2} alt="post" />
                            <div class="categories_details">
                                <div class="categories_text">
                                    <a href="blog-details.html" className="custom_the_a">
                                        <h5>Politics</h5>
                                    </a>
                                    <div class="border_line"></div>
                                    <p>Be a part of politics</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="categories_post">
                            <img src={BlogsCategoryImg1} alt="post" />
                            <div class="categories_details">
                                <div class="categories_text">
                                    <a href="blog-details.html" className="custom_the_a">
                                        <h5>Food</h5>
                                    </a>
                                    <div class="border_line"></div>
                                    <p>Let the food be finished</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!--================Blog Categorie Area =================-->

        <!--================Blog Area =================--> */}
        <section class="blog_area">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="blog_left_sidebar">
                            <article class="row blog_item">
                                <div class="col-md-3">
                                    <div class="blog_info text-right">
                                        <div class="post_tag">
                                            <a href="#" className="custom_the_a">Food,</a>
                                            <a class="active" href="#" className="custom_the_a">Technology,</a>
                                            <a href="#" className="custom_the_a">Politics,</a>
                                            <a href="#" className="custom_the_a">Lifestyle</a>
                                        </div>
                                        <ul class="blog_meta list">
                                            <li><a href="#" className="custom_the_a">Mark wiens<i class="lnr lnr-user"></i></a></li>
                                            <li><a href="#" className="custom_the_a">12 Dec, 2018<i class="lnr lnr-calendar-full"></i></a></li>
                                            <li><a href="#" className="custom_the_a">1.2M Views<i class="lnr lnr-eye"></i></a></li>
                                            <li><a href="#" className="custom_the_a">06 Comments<i class="lnr lnr-bubble"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-md-9">
                                    <div class="blog_post">
                                        <img src={BlogImg1} alt="" />
                                        <div class="blog_details ">
                                            <a href="single-blog.html ">
                                                <h2>Astronomy Binoculars A Great Alternative</h2>
                                            </a>
                                            <p>MCSE boot camps have its supporters and its detractors. Some people do not
                                                understand why you should have to spend money on boot camp when you can get
                                                the MCSE study materials yourself at a fraction.</p>
                                            <a href="single-blog.html" class="white_bg_btn">View More</a>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            <article class="row blog_item">
                                <div class="col-md-3">
                                    <div class="blog_info text-right">
                                        <div class="post_tag">
                                            <a href="#" className="custom_the_a">Food,</a>
                                            <a class="active" href="#" className="custom_the_a">Technology,</a>
                                            <a href="#" className="custom_the_a">Politics,</a>
                                            <a href="#" className="custom_the_a">Lifestyle</a>
                                        </div>
                                        <ul class="blog_meta list">
                                            <li><a href="#" className="custom_the_a">Mark wiens<i class="lnr lnr-user"></i></a></li>
                                            <li><a href="#" className="custom_the_a">12 Dec, 2018<i class="lnr lnr-calendar-full"></i></a></li>
                                            <li><a href="#" className="custom_the_a">1.2M Views<i class="lnr lnr-eye"></i></a></li>
                                            <li><a href="#" className="custom_the_a">06 Comments<i class="lnr lnr-bubble"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-md-9">
                                    <div class="blog_post">
                                        <img src={BlogImg2} alt="" />
                                        <div class="blog_details">
                                            <a href="single-blog.html">
                                                <h2>The Basics Of Buying A Telescope</h2>
                                            </a>
                                            <p>MCSE boot camps have its supporters and its detractors. Some people do not
                                                understand why you should have to spend money on boot camp when you can get
                                                the MCSE study materials yourself at a fraction.</p>
                                            <a href="single-blog.html" class="white_bg_btn">View More</a>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            <article class="row blog_item">
                                <div class="col-md-3">
                                    <div class="blog_info text-right">
                                        <div class="post_tag">
                                            <a href="#" className="custom_the_a">Food,</a>
                                            <a class="active" href="#" className="custom_the_a">Technology,</a>
                                            <a href="#" className="custom_the_a">Politics,</a>
                                            <a href="#" className="custom_the_a">Lifestyle</a>
                                        </div>
                                        <ul class="blog_meta list">
                                            <li><a href="#" className="custom_the_a">Mark wiens<i class="lnr lnr-user"></i></a></li>
                                            <li><a href="#" className="custom_the_a">12 Dec, 2018<i class="lnr lnr-calendar-full"></i></a></li>
                                            <li><a href="#" className="custom_the_a">1.2M Views<i class="lnr lnr-eye"></i></a></li>
                                            <li><a href="#" className="custom_the_a">06 Comments<i class="lnr lnr-bubble"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-md-9">
                                    <div class="blog_post">
                                        <img src={BlogImg3} alt="" />
                                        <div class="blog_details">
                                            <a href="single-blog.html">
                                                <h2>The Glossary Of Telescopes</h2>
                                            </a>
                                            <p>MCSE boot camps have its supporters and its detractors. Some people do not
                                                understand why you should have to spend money on boot camp when you can get
                                                the MCSE study materials yourself at a fraction.</p>
                                            <a href="single-blog.html" class="white_bg_btn">View More</a>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            <article class="row blog_item">
                                <div class="col-md-3">
                                    <div class="blog_info text-right">
                                        <div class="post_tag">
                                            <a href="#" className="custom_the_a">Food,</a>
                                            <a class="active" href="#" className="custom_the_a">Technology,</a>
                                            <a href="#" className="custom_the_a">Politics,</a>
                                            <a href="#" className="custom_the_a">Lifestyle</a>
                                        </div>
                                        <ul class="blog_meta list">
                                            <li><a href="#" className="custom_the_a">Mark wiens<i class="lnr lnr-user"></i></a></li>
                                            <li><a href="#" className="custom_the_a">12 Dec, 2018<i class="lnr lnr-calendar-full"></i></a></li>
                                            <li><a href="#" className="custom_the_a">1.2M Views<i class="lnr lnr-eye"></i></a></li>
                                            <li><a href="#" className="custom_the_a">06 Comments<i class="lnr lnr-bubble"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-md-9">
                                    <div class="blog_post">
                                        <img src={BlogImg4} alt="" />
                                        <div class="blog_details">
                                            <a href="single-blog.html">
                                                <h2>The Night Sky</h2>
                                            </a>
                                            <p>MCSE boot camps have its supporters and its detractors. Some people do not
                                                understand why you should have to spend money on boot camp when you can get
                                                the MCSE study materials yourself at a fraction.</p>
                                            <a href="single-blog.html" class="white_bg_btn">View More</a>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            <article class="row blog_item">
                                <div class="col-md-3">
                                    <div class="blog_info text-right">
                                        <div class="post_tag">
                                            <a href="#" className="custom_the_a">Food,</a>
                                            <a class="active" href="#" className="custom_the_a">Technology,</a>
                                            <a href="#" className="custom_the_a">Politics,</a>
                                            <a href="#" className="custom_the_a">Lifestyle</a>
                                        </div>
                                        <ul class="blog_meta list">
                                            <li><a href="#" className="custom_the_a">Mark wiens<i class="lnr lnr-user"></i></a></li>
                                            <li><a href="#" className="custom_the_a">12 Dec, 2018<i class="lnr lnr-calendar-full"></i></a></li>
                                            <li><a href="#" className="custom_the_a">1.2M Views<i class="lnr lnr-eye"></i></a></li>
                                            <li><a href="#" className="custom_the_a">06 Comments<i class="lnr lnr-bubble"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-md-9">
                                    <div class="blog_post">
                                        <img src={BlogImg5} alt="" />
                                        <div class="blog_details">
                                            <a href="single-blog.html">
                                                <h2>Telescopes 101</h2>
                                            </a>
                                            <p>MCSE boot camps have its supporters and its detractors. Some people do not
                                                understand why you should have to spend money on boot camp when you can get
                                                the MCSE study materials yourself at a fraction.</p>
                                            <a href="single-blog.html" class="white_bg_btn">View More</a>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            <nav class="blog-pagination justify-content-center d-flex">
                                <ul class="pagination">
                                    <li class="page-item">
                                        <a href="#" className="custom_the_a" class="page-link" aria-label="Previous">
                                            <span aria-hidden="true">
                                                <span class="lnr lnr-chevron-left"></span>
                                            </span>
                                        </a>
                                    </li>
                                    <li class="page-item"><a href="#" className="custom_the_a" class="page-link">01</a></li>
                                    <li class="page-item active"><a href="#" className="custom_the_a" class="page-link">02</a></li>
                                    <li class="page-item"><a href="#" className="custom_the_a" class="page-link">03</a></li>
                                    <li class="page-item"><a href="#" className="custom_the_a" class="page-link">04</a></li>
                                    <li class="page-item"><a href="#" className="custom_the_a" class="page-link">09</a></li>
                                    <li class="page-item">
                                        <a href="#" className="custom_the_a" class="page-link" aria-label="Next">
                                            <span aria-hidden="true">
                                                <span class="lnr lnr-chevron-right"></span>
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="blog_right_sidebar">
                            <aside class="single_sidebar_widget search_widget">
                                <div class="input-group">
                                    <input type="text" class="form-control" placeholder="Search Posts" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Search Posts'" />
                                    <span class="input-group-btn">
                                        <button class="btn btn-default" type="button"><i class="lnr lnr-magnifier"></i></button>
                                    </span>
                                </div>
                                <div class="br"></div>
                            </aside>
                            <aside class="single_sidebar_widget author_widget">
                                <img class="author_img rounded-circle" src="img/blog/author.png" alt="" />
                                <h4>Charlie Barber</h4>
                                <p>Senior blog writer</p>
                                <div class="social_icon">
                                    <a href="#" className="custom_the_a"><i class="fa fa-facebook"></i></a>
                                    <a href="#" className="custom_the_a"><i class="fa fa-twitter"></i></a>
                                    <a href="#" className="custom_the_a"><i class="fa fa-github"></i></a>
                                    <a href="#" className="custom_the_a"><i class="fa fa-behance"></i></a>
                                </div>
                                <p>Boot camps have its supporters andit sdetractors. Some people do not understand why you
                                    should have to spend money on boot camp when you can get. Boot camps have itssuppor
                                    ters andits detractors.</p>
                                <div class="br"></div>
                            </aside>
                            <aside class="single_sidebar_widget popular_post_widget">
                                <h3 class="widget_title">Popular Posts</h3>
                                <div class="media post_item">
                                    <img src="img/blog/popular-post/post1.jpg" alt="post" />
                                    <div class="media-body">
                                        <a href="blog-details.html">
                                            <h3>Space The Final Frontier</h3>
                                        </a>
                                        <p>02 Hours ago</p>
                                    </div>
                                </div>
                                <div class="media post_item">
                                    <img src="img/blog/popular-post/post2.jpg" alt="post" />
                                    <div class="media-body">
                                        <a href="blog-details.html">
                                            <h3>The Amazing Hubble</h3>
                                        </a>
                                        <p>02 Hours ago</p>
                                    </div>
                                </div>
                                <div class="media post_item">
                                    <img src="img/blog/popular-post/post3.jpg" alt="post" />
                                    <div class="media-body">
                                        <a href="blog-details.html">
                                            <h3>Astronomy Or Astrology</h3>
                                        </a>
                                        <p>03 Hours ago</p>
                                    </div>
                                </div>
                                <div class="media post_item">
                                    <img src="img/blog/popular-post/post4.jpg" alt="post" />
                                    <div class="media-body">
                                        <a href="blog-details.html">
                                            <h3>Asteroids telescope</h3>
                                        </a>
                                        <p>01 Hours ago</p>
                                    </div>
                                </div>
                                <div class="br"></div>
                            </aside>
                            <aside class="single_sidebar_widget ads_widget">
                                <a href="#" className="custom_the_a"><img class="img-fluid" src="img/blog/add.jpg" alt="" /></a>
                                <div class="br"></div>
                            </aside>
                            <aside class="single_sidebar_widget post_category_widget">
                                <h4 class="widget_title">Post Catgories</h4>
                                <ul class="list cat-list">
                                    <li>
                                        <a href="#" className="custom_the_a" class="d-flex justify-content-between">
                                            <p>Technology</p>
                                            <p>37</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="custom_the_a" class="d-flex justify-content-between">
                                            <p>Lifestyle</p>
                                            <p>24</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="custom_the_a" class="d-flex justify-content-between">
                                            <p>Fashion</p>
                                            <p>59</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="custom_the_a" class="d-flex justify-content-between">
                                            <p>Art</p>
                                            <p>29</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="custom_the_a" class="d-flex justify-content-between">
                                            <p>Food</p>
                                            <p>15</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="custom_the_a" class="d-flex justify-content-between">
                                            <p>Architecture</p>
                                            <p>09</p>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="custom_the_a" class="d-flex justify-content-between">
                                            <p>Adventure</p>
                                            <p>44</p>
                                        </a>
                                    </li>
                                </ul>
                                <div class="br"></div>
                            </aside>
                            <aside class="single-sidebar-widget newsletter_widget">
                                <h4 class="widget_title">Newsletter</h4>
                                <p>
                                    Here, I focus on a range of items and features that we use in life without
                                    giving them a second thought.
                                </p>
                                <div class="form-group d-flex flex-row">
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text"><i class="fa fa-envelope" aria-hidden="true"></i></div>
                                        </div>
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="inlineFormInputGroup"
                                            placeholder="Enter email"
                                            onfocus="this.placeholder = ''"
                                            onblur="this.placeholder = 'Enter email'"

                                        />
                                    </div>
                                    <a href="#" className="custom_the_a" class="bbtns">Subcribe</a>
                                </div>
                                <p class="text-bottom">You can unsubscribe at any time</p>
                                <div class="br"></div>
                            </aside>
                            <aside class="single-sidebar-widget tag_cloud_widget">
                                <h4 class="widget_title">Tag Clouds</h4>
                                <ul class="list">
                                    <li><a href="#" className="custom_the_a">Technology</a></li>
                                    <li><a href="#" className="custom_the_a">Fashion</a></li>
                                    <li><a href="#" className="custom_the_a">Architecture</a></li>
                                    <li><a href="#" className="custom_the_a">Fashion</a></li>
                                    <li><a href="#" className="custom_the_a">Food</a></li>
                                    <li><a href="#" className="custom_the_a">Technology</a></li>
                                    <li><a href="#" className="custom_the_a">Lifestyle</a></li>
                                    <li><a href="#" className="custom_the_a">Art</a></li>
                                    <li><a href="#" className="custom_the_a">Adventure</a></li>
                                    <li><a href="#" className="custom_the_a">Food</a></li>
                                    <li><a href="#" className="custom_the_a">Lifestyle</a></li>
                                    <li><a href="#" className="custom_the_a">Adventure</a></li>
                                </ul>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
};

export default memo(BlogsPage);