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
const LoginUserPage = () => {
    const { t, i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState('VI');
    const handleLanguageChange = (newLanguage, lng) => {
        setCurrentLanguage(newLanguage)
        i18n.changeLanguage(lng);
    };
    // const form = useForm({
    //     initialValues: {
    //         password: '',
    //     }
    // });alt=""/
    return <>
        <Banner />
        <section class="login_box_area section_gap">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="login_box_img">
                            <img class="img-fluid" src={LoginImg} alt="" />
                            <div class="hover">
                                <h4>{t('login_ques')}</h4>
                                <p>{t('login_plese')}</p>
                                <Link class="primary-btn" to='/register'>{t('login_create')}</Link>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="login_form_inner">
                            <h3>{t('login_login_to')}</h3>
                            <form class="row login_form" action="" method="" id="contactForm" >
                                <div class="col-md-12">
                                    <TextInput
                                        label={t('login_username')}
                                        placeholder={t('login_username')}
                                        // withAsterisk {...form.getInputProps('name')}
                                        id="username"
                                    />
                                </div>
                                <div class="col-md-12">
                                    <PasswordInput
                                        label={t('login_password')}
                                        mt="md"
                                        placeholder={t('login_password')}
                                        className="password-user"
                                        // {...form.getInputProps('password')}
                                        id="password"
                                    />
                                </div>
                                <div class="col-md-12 form-group">
                                    <div class="creat_account">
                                        <input type="checkbox" id="f-option2" name="selector" />
                                        <label for="f-option2">{t('login_keep')}</label>
                                    </div>
                                </div>
                                <div class="col-md-12 form-group">
                                    <button type="submit" value="submit" class="primary-btn">{t('login_login')}</button>
                                    <Link href="#">{t('login_forgot')}?</Link>
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