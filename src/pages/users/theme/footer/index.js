import { memo, useState } from "react";
import { Link } from "react-router-dom";
import './style.scss';

import { useTranslation } from "react-i18next";
import { FaFacebook, FaHeart, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
const Footer = () => {
    const { t, i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState('VI');
    const handleLanguageChange = (newLanguage, lng) => {
        setCurrentLanguage(newLanguage)
        i18n.changeLanguage(lng);
    };
    return (
        <footer className="footer-area section_gap">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4  col-md-6 col-sm-6">
                        <div className="single-footer-widget">
                            <h6> {t('footer_about_us')}</h6>
                            <p>{t('footer_about_content')}  </p>
                        </div>
                    </div>
                    <div className="col-lg-3  col-md-6 col-sm-6">
                        <div className="single-footer-widget">
                            <h6>{t('footer_newsletter')}</h6>
                            <p>{t('footer_newsletter_des')}</p>
                            <div className="" id="mc_embed_signup">
                                <form target="_blank" className="form-inline">
                                    <div className="d-flex flex-row">
                                        <input className="form-control" name="EMAIL" placeholder="Email"
                                            required="" type="email" />
                                        <button className="click-btn btn btn-default"><i className="fa fa-long-arrow-right"
                                            aria-hidden="true"></i></button>
                                    </div>
                                    <div className="info"></div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3  col-md-6 col-sm-6">
                        <div className="single-footer-widget mail-chimp">
                            <h6 className="mb-20">{t('footer_support')}</h6>
                            <ul className="custom_footer">
                                <li><Link>{t('footer_support_help')}</Link></li>
                                <li><Link to={'/news'}>{t('footer_support_size')}</Link></li>
                                <li><Link>{t('footer_support_payments')}</Link></li>
                                <li><Link>{t('footer_support_return')}</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6 col-sm-6">
                        <div className="single-footer-widget">
                            <h6>{t('footer_follow_us')}</h6>
                            <div className="footer-social d-flex align-items-center">
                                <Link to="https://www.facebook.com/ptsports.online/"><FaFacebook className="icon_social" /></Link>
                                <Link to="#"><FaTwitter className="icon_social" /></Link>
                                <Link to="#"><FaYoutube className="icon_social" /></Link>
                                <Link to="#"><FaInstagram className="icon_social" /></Link>
                            </div>
                        </div>
                    </div >
                </div >
                <div className="footer-bottom d-flex justify-content-center align-items-center flex-wrap">
                    <p className="footer-text m-0">

                        "{t('footer_silogant1')} <FaHeart className="icon_social" /> <Link to=""
                            target="_blank">PT SPORTS</Link>, {t('footer_silogant2')}"
                    </p>
                </div>
            </div >
        </footer >
    );
};

export default memo(Footer);