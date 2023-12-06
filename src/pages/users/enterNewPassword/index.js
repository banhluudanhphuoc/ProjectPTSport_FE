import { memo, useState, useEffect } from "react";
import "./style.scss";
import { PasswordInput } from '@mantine/core';
import Banner from "../theme/banner";
import { Link } from "react-router-dom";
import LoginImg from '../../../style/img/login.jpg';
import { useTranslation } from "react-i18next";
import axios from 'axios';
import { useForm } from '@mantine/form';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { useNavigate } from 'react-router-dom';

const EnterNewPassword = () => {
    const { t, i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState('VI');
    const [token, setToken] = useState('');

    const handleLanguageChange = (newLanguage, lng) => {
        setCurrentLanguage(newLanguage);
        i18n.changeLanguage(lng);
    };

    const auth = process.env.REACT_APP_API_URL_AUTH;

    const form = useForm({
        initialValues: {
            password: '',
            confirmPassword: '',
        },

        validate: {
            password: (value) => {
                const minLength = 10;
                if (value.length < minLength) {
                    return 'Mật khẩu mới phải trên 10 kí tự';
                }
                if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
                    return 'Mật khẩu phải chứa ít nhất một ký tự đặc biệt';
                }
                if (!/[A-Z]/.test(value) || !/[a-z]/.test(value)) {
                    return 'Mật khẩu phải chứa ít nhất một chữ hoa và một chữ thường';
                }
                return null;
            },
            confirmPassword: (value, values) => value !== values.password ? 'Mật khẩu nhập lại không đúng.' : null,
        },
    });

    const navigate = useNavigate();

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get('token');
        setToken(token);
    }, []);

    const sendTokenToServer = async (e) => {
        e.preventDefault();


        form.validate();

        if (form.isValid()) {
            try {
                const formData = new FormData();
                formData.append('token', token);
                formData.append('password', form.values.password);

                const response = await axios.post(`${auth}/forgot-password/reset`, formData);

                NotificationManager.success(response.data.message);

                setTimeout(() => {
                    navigate("/login-user");
                }, 1000);

            } catch (error) {
                NotificationManager.error(error.response.data.message);
                console.error('Error:', error.message);
            }
        }
    };


    return (
        <>
            <NotificationContainer />
            <Banner pageTitle={t('pageTitle_enter_new_password')} />
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
                                <h3>{t('enter_new_pass_title')}</h3>
                                <form className="row login_form" onSubmit={(e) => { sendTokenToServer(e) }} id="contactForm">
                                    <div className="col-md-12">
                                        <PasswordInput
                                            mt="md"
                                            label={t('enter_new_pass_title')}
                                            placeholder={t('enter_new_pass_title')}
                                            className="password-user"
                                            {...form.getInputProps('password')}
                                            id="password"
                                        />
                                        <PasswordInput
                                            mt="md"
                                            label={t('enter_new_pass_re_password')}
                                            placeholder={t('enter_new_pass_re_password')}
                                            {...form.getInputProps('confirmPassword')}
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

export default memo(EnterNewPassword);
