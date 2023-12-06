import { memo, useState } from "react";
import "./style.scss";
import { PasswordInput, TextInput } from '@mantine/core';
import Banner from "../theme/banner";
import { Link } from "react-router-dom";
import LoginImg from '../../../style/img/login.jpg';
import { useTranslation } from "react-i18next";
import axios from 'axios';
import ReactLoading from 'react-loading';
import { NotificationContainer, NotificationManager } from 'react-notifications';
const FotgotPassword = () => {
    const { t, i18n } = useTranslation();
    const [email, setEmail] = useState('');
    const [currentLanguage, setCurrentLanguage] = useState('VI');
    const [isLoading, setIsLoading] = useState(false);
    const handleLanguageChange = (newLanguage, lng) => {
        setCurrentLanguage(newLanguage);
        i18n.changeLanguage(lng);
    };
    const auth = process.env.REACT_APP_API_URL_AUTH;
    const handleForgotPassword = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            // Create form data
            const formData = new FormData();
            formData.append('email', email);

            // Make a POST request
            const response = await axios.post(auth + '/forgot-password/request', formData);


            setIsLoading(false);
            NotificationManager.success(
                'Thành công. Vui lòng kiểm tra email để xác thực. Bạn có thể nhấn vào đây để kiểm tra email.',
                'Quên mật khẩu thành công',
                5000,
                () => {
                    // Open a new tab or window with the Gmail URL
                    window.open('https://mail.google.com/', '_blank');
                }
            );
        } catch (error) {
            setIsLoading(false);
            console.error('Error sending forgot password request:', error);
            NotificationManager.error(error.response.data.message);
        }
    };

    return (
        <>
            {isLoading && (
                <div className="loading-overlay">
                    <ReactLoading type="spinningBubbles" color="#FD8400" height={100} width={100} />
                </div>
            )}
            <NotificationContainer />
            <Banner pageTitle={t('pageTitle_forgot_password')} />
            <section className="login_box_area section_gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="login_box_img">
                                <img className="img-fluid" src={LoginImg} alt="" />
                                <div className="hover">
                                    <h4>{t('register_ques')} ?</h4>
                                    <Link className="primary-btn" to="/login-user">{t('register_login')}</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="login_form_inner">
                                <h3>{t('forgot_pass_title')}</h3>
                                <form className="row login_form" onSubmit={handleForgotPassword} id="contactForm">
                                    <div className="col-md-12">
                                        <TextInput
                                            label={t('forgot_pass_email')}
                                            placeholder={t('forgot_pass_email')}
                                            type="email"
                                            id="email-to-forgot-password"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>

                                    <div className="col-md-12 form-group mt-3">
                                        <button type="submit" className="primary-btn">{t('forgot_pass_button')}</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default memo(FotgotPassword);
