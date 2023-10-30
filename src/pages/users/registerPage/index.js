import React, { useState, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import "./style.scss";
import { useForm, isNotEmpty, isEmail, isInRange, hasLength, matches } from '@mantine/form';
import {
    PasswordInput,
    TextInput,
    Text,
    rem,
    NativeSelect,
} from '@mantine/core';
import LoginImg from '../../../style/img/login.jpg';
import { DateInput } from '@mantine/dates';
import axios from "axios";
import { Link } from "react-router-dom";
import Banner from "../../users/theme/banner";
import { Container, Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Modal, Button, Image } from 'react-bootstrap';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import RegistrationModal from 'components/user/modal/RegistrationModal';
import ReactLoading from 'react-loading';

const RegisterPage = () => {
    const { t, i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState('VI');
    const handleLanguageChange = (newLanguage, lng) => {
        setCurrentLanguage(newLanguage)
        i18n.changeLanguage(lng);
    };

    const form = useForm({
        initialValues: {
            username: '',
            password: '',
            confirmPassword: '',
            name: '',
            email: '',
            phone_number: '',
            full_name: '',
            date_of_birth: '',
        },

        validate: {
            password: (value) => (value.length < 8 ? 'Mật khẩu phải trên 8 kí tự' : null),
            confirmPassword: (value, values) => value !== values.password ? 'Nhập lại mật khẩu không giống mật khẩu ở trên' : null,
            username: (value) => {
                // Sử dụng regex để kiểm tra tên
                const regex = /^[a-zA-Z0-9]+$/; // Chấp nhận chữ cái và số
                if (!regex.test(value)) {
                    return "Tên không được chứa khoảng trắng hoặc ký tự đặc biệt";
                }
                return null; // Hợp lệ
            },
            email: isEmail('Email không hợp lệ !'),
            phone_number: (value) => (value.length < 10 || value.length > 10 ? 'Số điện thoại gồm 10 số !' : null),
            full_name: isNotEmpty('Vui lòng nhập Họ và Tên '),
            date_of_birth: isNotEmpty('Vui lòng nhập Ngày sinh'),
        },
    });

    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const api = process.env.REACT_APP_API_URL;
    const handleRegisterClick = async () => {
        form.validate();

        if (form.isValid()) {
            try {
                setIsLoading(true);
                const response = await axios.post(api + '/registration', {
                    username: form.values.username,
                    password: form.values.password,
                    name: form.values.full_name,
                    email: form.values.email,
                    phoneNumber: form.values.phone_number,
                    dateOfBirth: form.values.date_of_birth,
                });
                if (response.data.status === 200) {

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

                } else if (response.data.status === 409) {
                    // Xử lý trường hợp trùng username hoặc email
                    NotificationManager.error(response.data.message);
                    setIsLoading(false);
                }

            } catch (error) {
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
                                        label={t('register_username')}
                                        placeholder={t('register_username')}
                                        withAsterisk {...form.getInputProps('username')}
                                        id="username"
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
                                    <TextInput
                                        label={t('register_email')}
                                        placeholder={t('register_email')}
                                        withAsterisk
                                        mt="md"
                                        {...form.getInputProps('email')}
                                        id="email"
                                    />
                                    <TextInput
                                        label={t('register_phone_number')}
                                        placeholder={t('register_phone_number')}
                                        withAsterisk
                                        mt="md"
                                        {...form.getInputProps('phone_number')}
                                        id="phone_number"
                                    />
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

