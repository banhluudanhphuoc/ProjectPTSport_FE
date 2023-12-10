import {
    PasswordInput,
    TextInput
} from '@mantine/core';
import axios from "axios";
import Cookies from 'js-cookie';
import { memo, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { Link, useNavigate } from 'react-router-dom';
import LoginImg from '../../../style/img/login.jpg';
import Banner from "../../users/theme/banner";
import "./style.scss";
// import { useAuth } from "context/AuthContext";
const LoginUserPage = () => {
    const { t, i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState('VI');
    const handleLanguageChange = (newLanguage, lng) => {
        setCurrentLanguage(newLanguage)
        i18n.changeLanguage(lng);
    };
    const navigate = useNavigate();

    const auth = process.env.REACT_APP_API_URL_AUTH;
    useEffect(() => {
        const userToken = Cookies.get('userToken');
        if (userToken) {
            navigate('/profile-customer');
        }
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get('token');
        if (token) {
            sendTokenToServer(token);
        }
    }, [navigate]);

    const sendTokenToServer = async (token) => {
        if (token) {
            try {
                // Assuming api is defined somewhere in your code
                const response = await axios.get(auth + "/verify-email", {
                    params: { token: token }
                });
                NotificationManager.success(response.data);
            } catch (error) {
                NotificationManager.error(error.response.data);
                console.error('Error:', error.message);
            }
        }
    };


    const handleLogin = async (e) => {
        e.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        try {
            // Sử dụng Axios
            const response = await axios.post(auth + "/login", { email, password });
            if (response.status === 200) {

                const token = response.data.token;
                Cookies.set('userToken', token)
                window.location.reload();
            } else if (response.status === 401) {
                NotificationManager.error(
                    response.data + " Click vào đây để xác thực qua email", "",
                    5000,
                    () => {
                        // Open a new tab or window with the Gmail URL
                        window.open('https://mail.google.com/', '_blank');
                    }
                );
            }
            else {
                NotificationManager.error(response.data);
            }
        } catch (error) {
            NotificationManager.error(error.response.data);
        }
    };


    return <>
        <NotificationContainer />
        <Banner pageTitle={t('pageTitle_login')} />
        <section className="login_box_area section_gap">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="login_box_img">
                            <img className="img-fluid" src={LoginImg} alt="" />
                            <div className="hover">
                                <h4>{t('login_ques')}</h4>
                                <p>{t('login_plese')}</p>
                                <Link className="primary-btn" to='/register'>{t('login_create')}</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="login_form_inner">
                            <h3>{t('login_login_to')}</h3>
                            <form className="row login_form" action="" method="" id="contactForm" onSubmit={handleLogin}>
                                <div className="col-md-12">
                                    <TextInput
                                        label="Email"
                                        placeholder="Email"
                                        type="email"
                                        id="email"
                                    />
                                </div>
                                <div className="col-md-12">
                                    <PasswordInput
                                        label={t('login_password')}
                                        mt="md"
                                        placeholder={t('login_password')}
                                        className="password-user"
                                        // {...form.getInputProps('password')}
                                        id="password"
                                    />
                                </div>
                                {/* <div className="col-md-12 form-group">
                                    <div className="creat_account">
                                        <input type="checkbox" id="f-option2" name="selector" />
                                        <label for="f-option2">{t('login_keep')}</label>
                                    </div>
                                </div> */}
                                <div className="col-md-12 form-group mt-5">
                                    <button type="submit" value="submit" className="primary-btn">{t('login_login')}</button>
                                    <Link to={"/forgot-password"}>{t('login_forgot')}?</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
};

export default memo(LoginUserPage);