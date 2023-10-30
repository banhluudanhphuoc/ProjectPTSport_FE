import { memo, useState } from "react";
import "./style.scss";
import {
    PasswordInput,
    TextInput,
} from '@mantine/core';
import Banner from "../../users/theme/banner";
import { Link } from "react-router-dom";
import LoginImg from '../../../style/img/login.jpg';
import { useTranslation } from "react-i18next";
const FotgotPassword = () => {
    const { t, i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState('VI');
    const handleLanguageChange = (newLanguage, lng) => {
        setCurrentLanguage(newLanguage)
        i18n.changeLanguage(lng);
    };
    return <>
        <Banner pageTitle={t('pageTitle_forgot_password')} />
        <section class="login_box_area section_gap">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="login_box_img">
                            <img class="img-fluid" src={LoginImg} alt="" />
                            <div class="hover">
                                <h4>{t('register_ques')} ?</h4>
                                <Link class="primary-btn" to="/login-user">{t('register_login')}</Link>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="login_form_inner">
                            <h3>{t('forgot_pass_title')}</h3>
                            <form class="row login_form" action="" method="" id="contactForm" >
                                <div class="col-md-12">
                                    <TextInput
                                        label={t('forgot_pass_email')}
                                        placeholder={t('forgot_pass_email')}
                                        type="email"
                                        id="email-to-forgot-password"
                                    />
                                </div>

                                <div class="col-md-12 form-group mt-3">
                                    <button type="submit" value="submit" class="primary-btn">{t('forgot_pass_button')}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
};

export default memo(FotgotPassword);