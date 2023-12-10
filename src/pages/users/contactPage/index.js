import GoogleMap from "components/ggMap/googleMap";
import { memo, useState } from "react";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Banner from "../../users/theme/banner";
import "./style.scss";
const ContactPage = () => {
    const { t, i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState('VI');
    const handleLanguageChange = (newLanguage, lng) => {
        setCurrentLanguage(newLanguage)
        i18n.changeLanguage(lng);
    };

    return <>
        <Banner pageTitle={t('pageTitle_contact')} />
        <section className="contact_area section_gap_bottom">
            <Container className="mt-5">
                <div className="row mb-5">
                    <GoogleMap />
                </div>
                <div className="row">
                    <div className="col-lg-3">
                        <div className="contact_info">
                            <div className="info_item">
                                <i className="lnr lnr-home"></i>
                                <h6>{t('contact_address1')}</h6>
                                <p>{t('contact_address2')}</p>
                            </div>
                            <div className="info_item">
                                <i className="lnr lnr-phone-handset"></i>
                                <h6><Link href="#">00 (440) 9865 562</Link></h6>
                                <p>{t('contact_work_time')}</p>
                            </div>
                            <div className="info_item">
                                <i className="lnr lnr-envelope"></i>
                                <h6><Link href="#">support@ptsports.com</Link></h6>
                                <p>{t('contact_email')}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <form className="row contact_form" id="contactForm" novalidate="novalidate">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        name="name"
                                        placeholder={t('contact_your_name')}
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
                                        placeholder={t('contact_your_email')}
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
                                        placeholder={t('contact_subject')}
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
                                        placeholder={t('contact_message')}
                                        onfocus="this.placeholder = ''"
                                        onblur="this.placeholder = 'Enter Message'">

                                    </textarea>
                                </div>
                            </div>
                            <div className="col-md-12 text-right">
                                <button value="submit" className="primary-btn">{t('contact_send_message')}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </Container>


        </section>
    </>
};

export default memo(ContactPage);