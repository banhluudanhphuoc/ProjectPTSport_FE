import {
    PasswordInput
} from '@mantine/core';
import { useForm } from '@mantine/form';
import axios from "axios";
import Cookies from 'js-cookie';
import { memo, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { useNavigate } from 'react-router-dom';
import LoginImg from '../../../style/img/login.jpg';
import Banner from "../../users/theme/banner";
import "./style.scss";
const ChangePassword = () => {
    const { t, i18n } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState('VI');
    const handleLanguageChange = (newLanguage, lng) => {
        setCurrentLanguage(newLanguage)
        i18n.changeLanguage(lng);
    };
    const navigate = useNavigate();
    const auth = process.env.REACT_APP_API_URL_AUTH;
    const [user, setUser] = useState([]);
    const userToken = Cookies.get('userToken');
    useEffect(() => {

        if (!userToken) {
            navigate('/login-user');
        }
        const fetchMe = async () => {
            try {
                const response = await axios.get(auth + '/me', {
                    headers: {
                        'Authorization': `Bearer ${userToken}`,
                        'Content-Type': 'application/json',
                    }
                });

                setUser(response.data);
            } catch (error) {
                // Xử lý lỗi
                console.error('Error fetching Brand:', error);
            }
        };



        fetchMe();
    }, [navigate, auth, userToken]);


    const form = useForm({
        initialValues: {
            oldPassword: '',
            password: '',
            confirmPassword: '',
        },

        validate: {
            oldPassword: (value) => (value.length < 1 ? 'Vui lòng nhập mật khẩu cũ .' : null),
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



    const api = process.env.REACT_APP_API_URL;
    const handleChangePassword = async (e) => {

        e.preventDefault();
        form.validate();
        const oldPassword = document.getElementById("oldPassword").value;
        const password = document.getElementById("password").value;

        const userId = user.userId;
        if (form.isValid()) {
            try {
                // Sử dụng Axios
                const response = await axios.put(api + "/user/password", { userId, oldPassword, password }, {
                    headers: {
                        'Authorization': `Bearer ${userToken}`
                    }

                });
                //console.log(response);
                if (response.status === 200) {
                    NotificationManager.success(response.data.message);
                    if (userToken) {
                        Cookies.remove('userToken');
                    }
                    setTimeout(() => {
                        navigate('/login-user');
                    }, 1000);
                } else {
                    NotificationManager.error(response.data);
                }
            } catch (error) {
                if (error.response) {
                    // Nếu có phản hồi từ máy chủ, bạn có thể trích xuất thông điệp lỗi từ đó
                    const errorMessage = error.response.data.message;
                    //console.log('Lỗi từ máy chủ:', errorMessage);
                    NotificationManager.error(errorMessage);
                } else {
                    // Xử lý lỗi nếu không có phản hồi từ máy chủ
                    console.error("Lỗi khi gửi yêu cầu đăng nhập:", error);
                }
            }
        }

    };


    return <>
        <NotificationContainer />
        <Banner pageTitle={t('pageTitle_change_password')} />
        <section className="login_box_area section_gap">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="login_box_img">
                            <img className="img-fluid" src={LoginImg} alt="" />
                            <div className="hover">

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="login_form_inner">
                            <h3>{t('change_password')}</h3>
                            <form className="row login_form" action="" method="" id="contactForm" onSubmit={handleChangePassword}>
                                <div className="col-md-12">
                                    <PasswordInput
                                        mt="md"
                                        label={t('change_password_ole')}
                                        placeholder={t('change_password_ole')}
                                        className="password-user"
                                        {...form.getInputProps('oldPassword')}
                                        id="oldPassword"
                                    />
                                    <PasswordInput
                                        mt="md"
                                        label={t('change_password_new')}
                                        placeholder={t('change_password_new')}
                                        className="password-user"
                                        {...form.getInputProps('password')}
                                        id="password"
                                    />
                                    <PasswordInput
                                        mt="md"
                                        label={t('change_password_new_confirm')}
                                        placeholder={t('change_password_new_confirm')}
                                        {...form.getInputProps('confirmPassword')}
                                    />
                                </div>


                                <div className="col-md-12 form-group mt-5">
                                    <button type="submit" value="submit" className="primary-btn">{t('change_password')}</button>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
};

export default memo(ChangePassword);