import {
    PasswordInput,
    TextInput
} from '@mantine/core';
import { DateInput } from '@mantine/dates';
import { isEmail, isNotEmpty, useForm } from '@mantine/form';
import axios from "axios";
import { format } from 'date-fns';
import Cookies from 'js-cookie';
import { memo, useEffect, useState } from 'react';
import { Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import ReactLoading from 'react-loading';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { Link, useNavigate } from 'react-router-dom';
import LoginImg from '../../../style/img/login.jpg';
import Banner from "../../users/theme/banner";
import "./style.scss";
const RegisterPage = () => {

    const { t, i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState('VI');
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const auth = process.env.REACT_APP_API_URL_AUTH;
    const handleLanguageChange = (newLanguage, lng) => {
        setCurrentLanguage(newLanguage)
        i18n.changeLanguage(lng);
    };

    useEffect(() => {
        const userToken = Cookies.get('userToken');
        if (userToken) {
            navigate('/profile-customer');
        }

    }, [navigate]);

    const form = useForm({
        initialValues: {
            password: '',
            confirmPassword: '',
            name: '',
            email: '',
            full_name: '',
            date_of_birth: '',
        },

        validate: {
            password: (value) => {
                const minLength = 10;
                // Kiểm tra độ dài tối thiểu
                if (value.length < minLength) {
                    return 'Mật khẩu mới phải trên 10 kí tự';
                }
                // Kiểm tra ký tự đặc biệt
                if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
                    return 'Mật khẩu phải chứa ít nhất một ký tự đặc biệt';
                }
                // Kiểm tra chữ hoa và chữ thường
                if (!/[A-Z]/.test(value) || !/[a-z]/.test(value)) {
                    return 'Mật khẩu phải chứa ít nhất một chữ hoa và một chữ thường';
                }
                // Nếu mật khẩu qua tất cả các kiểm tra, trả về null
                return null;
            },
            confirmPassword: (value, values) => value !== values.password ? 'Mật khẩu nhập lại không đúng.' : null,
            email: isEmail('Email không hợp lệ !'),
            full_name: isNotEmpty('Vui lòng nhập Họ và Tên '),
            date_of_birth: isNotEmpty('Vui lòng nhập Ngày sinh'),
        },
    });


    const handleRegisterClick = async () => {
        form.validate();

        if (form.isValid()) {
            try {
                setIsLoading(true);
                const formattedDateOfBirth = format(form.values.date_of_birth, 'dd/MM/yyyy');
                const response = await axios.post(auth + '/register', {
                    password: form.values.password,
                    name: form.values.full_name,
                    email: form.values.email,
                    birthdate: formattedDateOfBirth,
                });
                if (response.status === 200) {

                    NotificationManager.success(
                        'Đăng ký thành công. Vui lòng kiểm tra email để xác thực. Bạn có thể nhấn vào đây để kiểm tra email.',
                        'Đăng ký thành công',
                        5000,
                        () => {
                            // Open a new tab or window with the Gmail URL
                            window.open('https://mail.google.com/', '_blank');
                        }
                    );
                    setTimeout(function () {
                        navigate('/login-user');
                    }, 5000);
                }

            } catch (error) {
                NotificationManager.error(error.response.data.message);
                console.error('Lỗi:', error);
                setIsLoading(false);
            }
        }
    };



    return <>
        {isLoading && (
            <div className="loading-overlay">
                <ReactLoading type="spinningBubbles" color="#FD8400" height={100} width={100} />
            </div>
        )}
        <NotificationContainer />
        <Banner pageTitle={t('pageTitle_register')} />
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
                        <div class="row ml-5">
                            <h3>{t('register_register')}</h3>
                            <form class="row login_form" id="contactForm" novalidate="novalidate">
                                <Col md='6'>
                                    <TextInput
                                        label={t('register_email')}
                                        placeholder={t('register_email')}
                                        withAsterisk
                                        {...form.getInputProps('email')}
                                        id="email"
                                    />
                                    <PasswordInput
                                        mt="md"
                                        label={t('register_password')}
                                        placeholder={t('register_password')}
                                        className="password-user"
                                        {...form.getInputProps('password')}
                                        id="password"
                                    />
                                    <PasswordInput
                                        mt="md"
                                        label={t('register_confirm_password')}
                                        placeholder={t('register_confirm_password')}
                                        {...form.getInputProps('confirmPassword')}
                                    />
                                </Col>
                                <Col md='6'>
                                    <TextInput
                                        label={t('register_fullname')}
                                        placeholder={t('register_fullname')}
                                        withAsterisk
                                        {...form.getInputProps('full_name')}
                                        id="full_name"
                                    />

                                    {/* <TextInput
                                        label={t('register_phone_number')}
                                        placeholder={t('register_phone_number')}
                                        withAsterisk
                                        mt="md"
                                        {...form.getInputProps('phone_number')}
                                        id="phone_number"
                                    /> */}
                                    <DateInput
                                        valueFormat="DD/MM/YYYY"
                                        mt="md"
                                        label={t('register_birthday')}
                                        placeholder={t('register_birthday')}
                                        {...form.getInputProps('date_of_birth')}
                                        id="date_of_birth"
                                    />
                                </Col>
                                <div class="col-md-12 form-group mt-5">
                                    {/* Đổi type từ "submit" thành "button" */}
                                    <button type="button" class="primary-btn" onClick={handleRegisterClick}>
                                        {t('register_register')}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
};

export default memo(RegisterPage);

