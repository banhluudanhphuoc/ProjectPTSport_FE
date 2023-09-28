import { memo, useState } from "react";
import { withRouter } from 'react-router-dom';
import "./style.scss";
import { Link } from "react-router-dom";
import LoginImg from '../../../style/img/login.jpg';
import axios from "axios";
import Banner from "../../users/theme/banner";
import { Container, Col, Row } from "react-bootstrap";

const ContactPage = () => {


    return <>
        <Banner />
        <section className="contact_area section_gap_bottom">
            <Container className="mt-5">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="contact_info">
                            <div className="info_item">
                                <i className="lnr lnr-home"></i>
                                <h6>California, United States</h6>
                                <p>Santa monica bullevard</p>
                            </div>
                            <div className="info_item">
                                <i className="lnr lnr-phone-handset"></i>
                                <h6><Link href="#">00 (440) 9865 562</Link></h6>
                                <p>Mon to Fri 9am to 6 pm</p>
                            </div>
                            <div className="info_item">
                                <i className="lnr lnr-envelope"></i>
                                <h6><Link href="#">support@colorlib.com</Link></h6>
                                <p>Send us your query anytime!</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <form className="row contact_form" action="contact_process.php" method="post" id="contactForm" novalidate="novalidate">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        name="name"
                                        placeholder="Enter your name"
                                        onfocus="this.placeholder = ''"
                                        onblur="this.placeholder = 'Enter your name'"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        placeholder="Enter email address"
                                        onfocus="this.placeholder = ''"
                                        onblur="this.placeholder = 'Enter email address'"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="subject"
                                        name="subject"
                                        placeholder="Enter Subject"
                                        onfocus="this.placeholder = ''"
                                        onblur="this.placeholder = 'Enter Subject'"

                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <textarea
                                        className="form-control"
                                        name="message"
                                        id="message"
                                        rows="1"
                                        placeholder="Enter Message"
                                        onfocus="this.placeholder = ''"
                                        onblur="this.placeholder = 'Enter Message'">

                                    </textarea>
                                </div>
                            </div>
                            <div className="col-md-12 text-right">
                                <button type="submit" value="submit" className="primary-btn">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </Container>


        </section>
    </>
};

export default memo(ContactPage);