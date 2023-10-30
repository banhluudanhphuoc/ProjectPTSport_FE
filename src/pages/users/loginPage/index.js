import { memo, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import "./style.scss";
import {
    PasswordInput,
    TextInput,
} from '@mantine/core';
import Banner from "../../users/theme/banner";
import { Link } from "react-router-dom";
import LoginImg from '../../../style/img/login.jpg';
import { useTranslation } from "react-i18next";
import axios from "axios";
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { useAuth } from "context/AuthContext";
const LoginUserPage = () => {
    const { t, i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState('VI');
    const handleLanguageChange = (newLanguage, lng) => {
        setCurrentLanguage(newLanguage)
        i18n.changeLanguage(lng);
    };
    const navigate = useNavigate();
    const { isLoggedIn } = useAuth();
    const { setIsLoggedIn } = useAuth();

    useEffect(() => {
        if (isLoggedIn === true) {
            navigate('/profile-customer');
        }
    }, [navigate]);

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get('token');
        if (token) {
            sendTokenToServer(token);
        }
    }, []);

    const sendTokenToServer = async (token) => {
        if (token) {
            try {
                // Create a data object with the token
                const data = { token: token };
                // Send a POST request to your server
                await axios.post(api + "/verify-email", data);

            } catch (error) {
                console.error('Error:', error.message);
            }
        }
    };


    const api = process.env.REACT_APP_API_URL;
    const handleLogin = async (e) => {
        e.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        try {
            // Sử dụng Axios
            const response = await axios.post(api + "/login", { username, password });
            if (response.data.status === 200) {
                const token = response.data.token;
                localStorage.setItem("token_login", token);
                setIsLoggedIn(true);
                navigate('/cart');
            } else {
                NotificationManager.error(response.data.message);

            }
        } catch (error) {
            // Xử lý lỗi nếu có lỗi trong quá trình gửi yêu cầu
            console.error("Lỗi khi gửi yêu cầu đăng nhập:", error);
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
                                        label={t('login_username')}
                                        placeholder={t('login_username')}
                                        // withAsterisk {...form.getInputProps('name')}
                                        id="username"
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